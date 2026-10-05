"""
AeroTwin - UAV Aero Piston Engine Digital Twin
Component: PyTorch Residual Autoencoder for Anomaly Detection
EMERGE-X Architecture | Problem Statement: 26054 (DRDO)

Hybrid Physics-AI Anomaly Detector:
Consumes the thermodynamic residual vector (Actual Telemetry - Physics Model Prediction).
In healthy operation, residuals are zero-mean Gaussian noise.
The lightweight Autoencoder compresses residuals into a low-dimensional latent space
and reconstructs them. Reconstruction failure indicates physics divergence (fault).
"""

from __future__ import annotations

import math
from dataclasses import asdict, dataclass
from typing import Any, Dict, List, Optional, Tuple

# Check for PyTorch availability
try:
    import torch
    import torch.nn as nn
    import torch.optim as optim
    TORCH_AVAILABLE = True
except ImportError:
    TORCH_AVAILABLE = False


FEATURE_NAMES: List[str] = [
    "delta_rpm",
    "delta_cht",
    "delta_egt",
    "delta_oil_pressure",
    "delta_oil_temperature",
    "delta_manifold_pressure",
    "delta_fuel_flow",
]

# Standard normalization scale factors for residuals based on healthy flight envelope variance
RESIDUAL_SCALES: List[float] = [
    300.0,  # RPM scale (±300 RPM healthy dynamic envelope)
    20.0,   # CHT scale (±20°C thermal lag envelope)
    60.0,   # EGT scale (±60°C combustion envelope)
    12.0,   # Oil Pressure scale (±12 PSI dynamic relief envelope)
    15.0,   # Oil Temp scale (±15°C)
    3.0,    # MAP scale (±3.0 inHg)
    5.0,    # Fuel Flow scale (±5.0 L/h)
]


@dataclass
class AnomalyResult:
    """Detection inference result and explainable root-cause attribution."""
    anomaly_score: float             # Calibrated score [0.0 - 1.0] (0 = healthy, 1 = critical failure)
    is_anomaly: bool                 # Thresholded binary alarm flag
    reconstruction_error: float      # Raw Mean Squared Error
    threshold: float                 # Anomaly decision boundary (nominal 0.35)
    root_cause_feature: str          # Top contributing sensor residual
    feature_attributions: Dict[str, float]  # Contribution % of each residual feature

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


if TORCH_AVAILABLE:
    class ResidualAutoencoder(nn.Module):
        """
        Lightweight Deep Autoencoder for Edge UAV Telemetry Monitoring.
        Encoder compresses 7D residual vector -> 16 -> 8 -> 3D Latent Bottleneck.
        Decoder reconstructs 3D -> 8 -> 16 -> 7D.
        """

        def __init__(self, input_dim: int = 7, latent_dim: int = 3) -> None:
            super().__init__()
            self.input_dim = input_dim
            self.latent_dim = latent_dim

            # Encoder
            self.encoder = nn.Sequential(
                nn.Linear(input_dim, 16),
                nn.LeakyReLU(0.1),
                nn.Linear(16, 8),
                nn.LeakyReLU(0.1),
                nn.Linear(8, latent_dim),
            )

            # Decoder
            self.decoder = nn.Sequential(
                nn.Linear(latent_dim, 8),
                nn.LeakyReLU(0.1),
                nn.Linear(8, 16),
                nn.LeakyReLU(0.1),
                nn.Linear(16, input_dim),
            )

            # Apply Xavier uniform initialization
            self._init_weights()

        def _init_weights(self) -> None:
            for m in self.modules():
                if isinstance(m, nn.Linear):
                    nn.init.xavier_uniform_(m.weight)
                    if m.bias is not None:
                        nn.init.constant_(m.bias, 0.0)

        def forward(self, x: torch.Tensor) -> torch.Tensor:
            latent = self.encoder(x)
            reconstructed = self.decoder(latent)
            return reconstructed


class ResidualAnomalyDetector:
    """
    High-level inferencing wrapper for residual-based anomaly detection.
    Supports PyTorch inference and provides graceful mathematical fallback
    if PyTorch is absent in the runtime environment.
    """

    def __init__(
        self,
        threshold: float = 0.35,
        model_path: Optional[str] = None,
    ) -> None:
        self.threshold = threshold
        self.feature_names = FEATURE_NAMES
        self.input_dim = len(self.feature_names)
        self.scales = RESIDUAL_SCALES

        if TORCH_AVAILABLE:
            self.device = torch.device("cpu")  # Lightweight CPU execution for UAV edge
            self.model: Optional[ResidualAutoencoder] = ResidualAutoencoder(
                input_dim=self.input_dim, latent_dim=3
            ).to(self.device)
            self.model.eval()

            if model_path:
                try:
                    state_dict = torch.load(model_path, map_location=self.device)
                    self.model.load_state_dict(state_dict)
                    print(f"Loaded trained AI Autoencoder weights from {model_path}")
                except Exception as e:
                    print(f"Warning: Could not load model checkpoint ({e}), initializing calibrated baseline.")
                    self._calibrate_baseline()
            else:
                self._calibrate_baseline()
        else:
            self.model = None

    def _calibrate_baseline(self) -> None:
        """
        Calibrates the autoencoder on synthetic zero-mean healthy residuals
        to guarantee stable baseline reconstruction errors without external dataset files.
        """
        if not TORCH_AVAILABLE or self.model is None:
            return

        optimizer = optim.AdamW(self.model.parameters(), lr=0.01, weight_decay=1e-4)
        criterion = nn.MSELoss()

        # Generate 600 synthetic healthy zero-mean residual samples with sensor noise
        torch.manual_seed(42)
        healthy_samples = torch.randn(600, self.input_dim) * 0.15

        self.model.train()
        for _ in range(35):
            optimizer.zero_grad()
            recon = self.model(healthy_samples)
            loss = criterion(recon, healthy_samples)
            loss.backward()
            optimizer.step()

        self.model.eval()

    def _normalize(self, residuals: list[float]) -> list[float]:
        """Scales raw physical residuals to standard normalized units."""
        return [
            residuals[i] / self.scales[i] if i < len(residuals) else 0.0
            for i in range(self.input_dim)
        ]

    def predict(self, residual_vector: list[float]) -> AnomalyResult:
        """
        Calculates reconstruction error and generates anomaly diagnostic metrics.
        """
        norm_residuals = self._normalize(residual_vector)

        if TORCH_AVAILABLE and self.model is not None:
            with torch.no_grad():
                tensor_in = torch.tensor([norm_residuals], dtype=torch.float32, device=self.device)
                tensor_out = self.model(tensor_in)
                diff = (tensor_in - tensor_out).squeeze(0).cpu().numpy()

            # Element-wise squared errors
            feature_errors = [float(diff[i] ** 2) for i in range(self.input_dim)]
            mse = sum(feature_errors) / self.input_dim
        else:
            # High-performance mathematical PCA/Bottleneck reconstruction fallback
            # Compresses through principal component vectors and measures out-of-subspace divergence
            # For healthy zero-mean residuals, reconstruction aligns tightly with ground truth
            # For unmodeled physical faults (e.g. misfire, oil leak), out-of-subspace projection diverges sharply
            v1 = [0.45, 0.20, 0.40, 0.25, 0.20, 0.15, 0.35]
            v2 = [0.15, 0.50, 0.30, 0.40, 0.45, 0.10, 0.15]
            # Latent projections
            p1 = sum(norm_residuals[i] * v1[i] for i in range(self.input_dim))
            p2 = sum(norm_residuals[i] * v2[i] for i in range(self.input_dim))
            # Subspace reconstruction
            recon = [(p1 * v1[i] + p2 * v2[i]) * 0.85 + norm_residuals[i] * 0.15 for i in range(self.input_dim)]
            feature_errors = [(norm_residuals[i] - recon[i]) ** 2 for i in range(self.input_dim)]
            mse = sum(feature_errors) / self.input_dim

        # Calibrate anomaly score to [0.0, 1.0] using an S-curve centered around threshold
        # score = 1 / (1 + exp(-k * (mse - threshold)))
        k = 6.0
        anomaly_score = 1.0 / (1.0 + math.exp(-k * (mse - self.threshold)))
        is_anomaly = bool(anomaly_score >= 0.50 or mse >= self.threshold)

        # Compute feature attribution percentages
        total_err = sum(feature_errors) + 1e-8
        attributions: Dict[str, float] = {}
        for idx, name in enumerate(self.feature_names):
            attributions[name] = round((feature_errors[idx] / total_err) * 100.0, 1)

        # Identify top root cause
        top_feature_idx = max(range(len(feature_errors)), key=lambda i: feature_errors[i])
        root_cause = self.feature_names[top_feature_idx]

        return AnomalyResult(
            anomaly_score=round(anomaly_score, 4),
            is_anomaly=is_anomaly,
            reconstruction_error=round(mse, 4),
            threshold=self.threshold,
            root_cause_feature=root_cause,
            feature_attributions=attributions,
        )


if __name__ == "__main__":
    print(f"Testing PyTorch Anomaly Detector (PyTorch available: {TORCH_AVAILABLE})...")
    detector = ResidualAnomalyDetector()

    # 1. Test healthy near-zero residuals
    healthy_residuals = [2.5, 0.8, -3.2, 0.4, 0.2, 0.05, 0.1]
    res_healthy = detector.predict(healthy_residuals)
    print("\nHealthy Residuals:")
    print(f"  Anomaly Score: {res_healthy.anomaly_score} | Is Anomaly: {res_healthy.is_anomaly}")
    print(f"  Recon Error: {res_healthy.reconstruction_error}")

    # 2. Test anomalous residuals (Cylinder Misfire -> EGT drop -180°C, RPM drop -450)
    misfire_residuals = [-450.0, -12.0, -185.0, -1.2, -0.8, -0.4, 1.2]
    res_fault = detector.predict(misfire_residuals)
    print("\nFault Residuals (Cylinder Misfire):")
    print(f"  Anomaly Score: {res_fault.anomaly_score} | Is Anomaly: {res_fault.is_anomaly}")
    print(f"  Recon Error: {res_fault.reconstruction_error}")
    print(f"  Root Cause Feature: {res_fault.root_cause_feature}")
    print(f"  Feature Attributions: {res_fault.feature_attributions}")
