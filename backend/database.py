"""
AeroTwin - UAV Aero Piston Engine Digital Twin
Component: Firebase Realtime Database Connector
EMERGE-X Architecture | Problem Statement: 26054 (DRDO)

Parses FIREBASE_URL from .env file, handles URL sanitization (stripping brackets,
quotes, trailing slashes), and provides both async and sync dispatching of live
telemetry frames, historical logs, and AI anomaly alerts to Firebase Realtime Database.
Includes pure-Python fallback using urllib to ensure zero-dependency reliability.
"""

from __future__ import annotations

import json
import logging
import os
import re
import threading
import time
import urllib.error
import urllib.request
from collections import deque
from pathlib import Path
from typing import Any, Deque, Dict, Optional, Tuple

logger = logging.getLogger("AeroTwin.Database")
if not logger.handlers:
    handler = logging.StreamHandler()
    handler.setFormatter(logging.Formatter("[%(asctime)s] [%(name)s] [%(levelname)s] %(message)s"))
    logger.addHandler(handler)
    logger.setLevel(logging.INFO)

# Optional HTTPX support for high-performance async connection pooling
try:
    import httpx
    HTTPX_AVAILABLE = True
except ImportError:
    HTTPX_AVAILABLE = False


def load_env_file(dotenv_path: Optional[str | Path] = None) -> Dict[str, str]:
    """
    Parses key-value pairs from .env without strictly requiring external libraries.
    If python-dotenv is installed, it uses it; otherwise uses robust file parsing.
    """
    env_vars: Dict[str, str] = {}

    # Try standard dotenv first
    try:
        from dotenv import load_dotenv  # type: ignore
        load_dotenv(dotenv_path)
    except ImportError:
        pass

    # Search for .env in current directory, parent directory, and workspace root
    candidate_paths = []
    if dotenv_path:
        candidate_paths.append(Path(dotenv_path))
    candidate_paths.extend([
        Path(".env"),
        Path("../.env"),
        Path(__file__).resolve().parent.parent / ".env",
    ])

    for p in candidate_paths:
        if p.exists() and p.is_file():
            try:
                with open(p, "r", encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if not line or line.startswith("#") or "=" not in line:
                            continue
                        key, val = line.split("=", 1)
                        key = key.strip()
                        val = val.strip()
                        env_vars[key] = val
                        if key not in os.environ:
                            os.environ[key] = val
                break
            except Exception as e:
                logger.warning(f"Failed parsing .env file at {p}: {e}")

    return env_vars


def sanitize_firebase_url(raw_url: Optional[str]) -> str:
    """
    Cleans up Firebase URL format from .env, resolving brackets like:
    '[https://aerotwin-drdo-default-rtdb.firebaseio.com/]' -> 'https://aerotwin-drdo-default-rtdb.firebaseio.com'
    """
    if not raw_url:
        return ""

    url = raw_url.strip()
    # Strip brackets, quotes, whitespace
    url = re.sub(r"^[\[\"\'\s]+|[\]\"\'\s]+$", "", url)
    # Strip trailing slash
    url = url.rstrip("/")

    # Ensure http/https scheme
    if url and not url.startswith("http://") and not url.startswith("https://"):
        url = "https://" + url

    return url


class FirebaseTelemetryDatabase:
    """
    Asynchronous and synchronous telemetry transport to Firebase Realtime Database.
    Guarantees non-blocking execution so simulator and WebSocket loops never stall.
    """

    def __init__(
        self,
        firebase_url: Optional[str] = None,
        env_path: Optional[str | Path] = None,
        max_buffer_size: int = 200,
    ) -> None:
        load_env_file(env_path)
        raw_url = firebase_url or os.getenv("FIREBASE_URL", "")
        self.firebase_url = sanitize_firebase_url(raw_url)

        if not self.firebase_url:
            logger.warning("FIREBASE_URL is not configured in .env. Operating in local memory-only buffer mode.")
        else:
            logger.info(f"Initialized Firebase RTDB Target: {self.firebase_url}")

        # In-memory circular buffer for telemetry history
        self._buffer: Deque[Dict[str, Any]] = deque(maxlen=max_buffer_size)
        self._last_error_time: float = 0.0
        self._error_suppress_interval: float = 30.0  # Throttle log spam on network drop
        self._async_client: Optional[Any] = None

    def _sync_http_request(self, endpoint: str, data: Dict[str, Any], method: str = "PUT") -> bool:
        """
        Dispatches HTTP request using urllib (built-in, no external dependencies required).
        """
        if not self.firebase_url:
            return False

        full_url = f"{self.firebase_url}/{endpoint.lstrip('/')}"
        payload_bytes = json.dumps(data).encode("utf-8")

        try:
            req = urllib.request.Request(
                full_url,
                data=payload_bytes,
                headers={"Content-Type": "application/json"},
                method=method,
            )
            with urllib.request.urlopen(req, timeout=3.0) as resp:
                return resp.status in (200, 204)
        except Exception as e:
            now = time.time()
            if now - self._last_error_time > self._error_suppress_interval:
                logger.warning(f"Firebase REST call failed to {full_url}: {e} (throttling logs for 30s)")
                self._last_error_time = now
            return False

    async def update_live_telemetry_async(self, telemetry_frame: Dict[str, Any]) -> bool:
        """
        Asynchronously updates the single latest live telemetry state at `/live_telemetry.json`.
        Overwrites previous state for low-latency live gauge dashboards.
        """
        # Always store in local buffer first
        self._buffer.append(telemetry_frame)

        if not self.firebase_url:
            return False

        if HTTPX_AVAILABLE:
            try:
                if self._async_client is None or self._async_client.is_closed:
                    self._async_client = httpx.AsyncClient(timeout=3.0)
                url = f"{self.firebase_url}/live_telemetry.json"
                resp = await self._async_client.put(url, json=telemetry_frame)
                return resp.status_code in (200, 204)
            except Exception as e:
                now = time.time()
                if now - self._last_error_time > self._error_suppress_interval:
                    logger.warning(f"Async Firebase live update failed: {e}")
                    self._last_error_time = now
                return False
        else:
            # Dispatch to worker thread using urllib
            return await self._dispatch_in_thread("live_telemetry.json", telemetry_frame, method="PUT")

    async def log_telemetry_history_async(self, telemetry_frame: Dict[str, Any]) -> bool:
        """
        Appends time-series entry to `/telemetry_history.json`.
        """
        if not self.firebase_url:
            return False

        timestamp_ms = int(telemetry_frame.get("timestamp", time.time()) * 1000)
        endpoint = f"telemetry_history/{timestamp_ms}.json"

        if HTTPX_AVAILABLE:
            try:
                if self._async_client is None or self._async_client.is_closed:
                    self._async_client = httpx.AsyncClient(timeout=3.0)
                url = f"{self.firebase_url}/{endpoint}"
                resp = await self._async_client.put(url, json=telemetry_frame)
                return resp.status_code in (200, 204)
            except Exception as e:
                return False
        else:
            return await self._dispatch_in_thread(endpoint, telemetry_frame, method="PUT")

    async def log_anomaly_alert_async(self, anomaly_data: Dict[str, Any]) -> bool:
        """
        Appends an anomaly event record to `/anomaly_events.json`.
        """
        if not self.firebase_url:
            return False

        endpoint = "anomaly_events.json"
        if HTTPX_AVAILABLE:
            try:
                if self._async_client is None or self._async_client.is_closed:
                    self._async_client = httpx.AsyncClient(timeout=3.0)
                url = f"{self.firebase_url}/{endpoint}"
                resp = await self._async_client.post(url, json=anomaly_data)
                return resp.status_code in (200, 204)
            except Exception:
                return False
        else:
            return await self._dispatch_in_thread(endpoint, anomaly_data, method="POST")

    async def _dispatch_in_thread(self, endpoint: str, data: Dict[str, Any], method: str) -> bool:
        """Helper to run synchronous urllib in an asyncio executor thread."""
        import asyncio
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, self._sync_http_request, endpoint, data, method)

    def push_telemetry_sync(self, telemetry_frame: Dict[str, Any]) -> bool:
        """Synchronous wrapper for quick scripting or standalone testing."""
        self._buffer.append(telemetry_frame)
        return self._sync_http_request("live_telemetry.json", telemetry_frame, method="PUT")

    def test_connection(self) -> Dict[str, Any]:
        """
        Validates connectivity to the configured Firebase Realtime Database.
        """
        if not self.firebase_url:
            return {"status": "unconfigured", "message": "FIREBASE_URL is not set in .env"}

        test_payload = {"ping": "pong", "timestamp": time.time(), "client": "AeroTwin-DRDO"}
        success = self._sync_http_request("system_health/connection_test.json", test_payload, method="PUT")
        return {
            "status": "connected" if success else "failed",
            "firebase_url": self.firebase_url,
            "success": success,
        }

    def get_latest_buffered_records(self, count: int = 10) -> list[Dict[str, Any]]:
        """Returns the most recent records from the local in-memory fallback buffer."""
        return list(self._buffer)[-count:]

    async def close(self) -> None:
        """Closes any persistent async connection pools."""
        if HTTPX_AVAILABLE and self._async_client and not self._async_client.is_closed:
            await self._async_client.aclose()


if __name__ == "__main__":
    print("Testing Firebase Database Connector...")
    db = FirebaseTelemetryDatabase()
    print(f"Sanitized Firebase URL: {db.firebase_url}")
    print("Testing Firebase Connectivity...")
    result = db.test_connection()
    print(f"Connection Result: {result}")
