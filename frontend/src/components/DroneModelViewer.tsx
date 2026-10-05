import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RotateCcw, Eye, Compass, Flame, ShieldAlert, Layers, Loader2 } from 'lucide-react';
import { DigitalTwinFrame } from '../types/telemetry';

interface DroneModelViewerProps {
  frame: DigitalTwinFrame;
}

export const DroneModelViewer: React.FC<DroneModelViewerProps> = ({ frame }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const engineMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const gridHelperRef = useRef<THREE.GridHelper | null>(null);
  const materialsRef = useRef<THREE.Material[]>([]);

  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const { telemetry } = frame;
  const cht = telemetry?.cht ?? 142.0;
  const egt = telemetry?.egt ?? 765.0;
  const rpm = telemetry?.rpm ?? 5200;
  const activeFault = frame.fault_status?.active_fault ?? 'none';

  // Compute thermal stress state of the engine
  const isCriticalHeat = cht >= 175 || egt >= 820 || activeFault === 'cooling_blockage' || activeFault === 'oil_leak';
  const isCautionHeat = !isCriticalHeat && (cht >= 155 || egt >= 790 || activeFault === 'lean_mixture' || activeFault === 'cylinder_misfire');

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene, Camera, Renderer
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Pure white background
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(6.5, 4.2, 7.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    mount.replaceChildren(renderer.domElement);

    // 2. OrbitControls for zoom and 360-degree panning
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enablePan = true;
    controls.minDistance = 1.5;
    controls.maxDistance = 50;
    controls.target.set(0, 0.5, 0);

    // 3. GridHelper (size 10, divisions 10, color #E2E8F0) for engineering CAD look
    const gridHelper = new THREE.GridHelper(10, 10, 0xe2e8f0, 0xe2e8f0);
    gridHelper.position.y = 0;
    scene.add(gridHelper);
    gridHelperRef.current = gridHelper;

    // 4. Ambient and directional lighting to keep the model well-lit
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(10, 15, 10);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.2);
    fillLight.position.set(-10, 10, -10);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 12, -15);
    scene.add(rimLight);

    const underLight = new THREE.DirectionalLight(0xffffff, 0.6);
    underLight.position.set(0, -10, 0);
    scene.add(underLight);

    // 5. Load model from /rustom.glb using GLTFLoader
    const loader = new GLTFLoader();
    materialsRef.current = [];
    engineMaterialsRef.current = [];

    loader.load(
      '/rustom.glb',
      (gltf) => {
        const loadedModel = gltf.scene;

        // Compute original bounding box
        const box = new THREE.Box3().setFromObject(loadedModel);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);

        // Center model geometry at local origin
        loadedModel.position.x -= center.x;
        loadedModel.position.y -= center.y;
        loadedModel.position.z -= center.z;

        const modelWrapper = new THREE.Group();
        modelWrapper.add(loadedModel);

        // Automatically scale to fit viewport (target ~5.5 units max dimension)
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const targetScale = 5.5 / maxDim;
          modelWrapper.scale.setScalar(targetScale);
        }

        // Recompute bounding box after scaling
        const scaledBox = new THREE.Box3().setFromObject(modelWrapper);
        const scaledCenter = new THREE.Vector3();
        scaledBox.getCenter(scaledCenter);

        // Align horizontally to center
        modelWrapper.position.x -= scaledCenter.x;
        modelWrapper.position.z -= scaledCenter.z;
        // Rest landing gear / bottom precisely on grid plane at y = 0
        modelWrapper.position.y -= scaledBox.min.y;

        // Traverse mesh nodes for shadows, materials, and wireframe tracking
        modelWrapper.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              if (Array.isArray(mesh.material)) {
                materialsRef.current.push(...mesh.material);
                mesh.material.forEach((mat) => {
                  if (/engine|missile/i.test(mat.name) && mat instanceof THREE.MeshStandardMaterial) {
                    engineMaterialsRef.current.push(mat);
                  }
                });
              } else {
                materialsRef.current.push(mesh.material);
                if (/engine|missile/i.test(mesh.material.name) && mesh.material instanceof THREE.MeshStandardMaterial) {
                  engineMaterialsRef.current.push(mesh.material);
                }
              }
            }
          }
        });

        scene.add(modelWrapper);
        modelRef.current = modelWrapper;

        // Re-focus controls to model center
        const finalBox = new THREE.Box3().setFromObject(modelWrapper);
        const finalCenter = new THREE.Vector3();
        finalBox.getCenter(finalCenter);

        controls.target.copy(finalCenter);
        controls.update();

        setIsLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const percent = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
          setLoadingProgress(percent);
        } else {
          const mb = xhr.loaded / (1024 * 1024);
          const percent = Math.min(99, Math.round((mb / 140) * 100));
          setLoadingProgress(percent);
        }
      },
      (error) => {
        console.error('Failed to load /rustom.glb model:', error);
        setLoadError('Failed to load 3D CAD model (/rustom.glb). Please verify file availability.');
        setIsLoading(false);
      }
    );

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      mount.replaceChildren();
    };
  }, []);

  // Update Wireframe Mode
  useEffect(() => {
    materialsRef.current.forEach((mat) => {
      if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshBasicMaterial) {
        mat.wireframe = wireframeMode;
      }
    });
  }, [wireframeMode]);

  // Wire Engine Mesh Material Dynamically to CHT / EGT / Fault State
  useEffect(() => {
    engineMaterialsRef.current.forEach((mat) => {
      if (isCriticalHeat) {
        mat.color.setHex(0xef4444);
        mat.emissive.setHex(0xef4444);
        mat.emissiveIntensity = 0.85;
      } else if (isCautionHeat) {
        mat.color.setHex(0xf59e0b);
        mat.emissive.setHex(0xf59e0b);
        mat.emissiveIntensity = 0.5;
      } else {
        mat.color.setHex(0xffffff);
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0.0;
      }
    });
  }, [isCriticalHeat, isCautionHeat, cht, egt, activeFault]);

  // Camera Presets
  const setCameraView = (type: 'ISOMETRIC' | 'TOP' | 'SIDE' | 'FRONT') => {
    if (!cameraRef.current || !controlsRef.current) return;
    const cam = cameraRef.current;
    const ctrl = controlsRef.current;

    let targetY = 0.8;
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      targetY = (box.min.y + box.max.y) / 2;
    }

    switch (type) {
      case 'ISOMETRIC':
        cam.position.set(6.5, 4.2, 7.5);
        ctrl.target.set(0, targetY, 0);
        break;
      case 'TOP':
        cam.position.set(0, 11, 0.01);
        ctrl.target.set(0, targetY, 0);
        break;
      case 'SIDE':
        cam.position.set(9, targetY, 0);
        ctrl.target.set(0, targetY, 0);
        break;
      case 'FRONT':
        cam.position.set(0, targetY, 9);
        ctrl.target.set(0, targetY, 0);
        break;
    }
    ctrl.update();
  };

  const resetView = () => setCameraView('ISOMETRIC');

  return (
    <div className="relative w-full h-full min-h-[500px] bg-white border border-slate-300 shadow-sm overflow-hidden select-none flex flex-col font-sans">
      {/* 3D Viewport Controls & HUD Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex flex-wrap items-center justify-between p-3 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-slate-800">
            <Compass className="w-4 h-4 text-blue-600 animate-spin-slow" />
            3D DIGITAL TWIN // DRDO RUSTOM-II (TAPAS) CAD
          </div>
          <span className="text-slate-300">|</span>
          <span className="text-[11px] text-slate-600">
            ENGINE BAY: {isCriticalHeat ? (
              <span className="text-red-600 font-bold animate-pulse">ALARM OVERHEAT</span>
            ) : isCautionHeat ? (
              <span className="text-amber-600 font-bold">CAUTION THERMAL ELEVATION</span>
            ) : (
              <span className="text-emerald-600 font-semibold">NOMINAL CRUISE</span>
            )}
          </span>
        </div>

        {/* Tactical View Switchers */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setCameraView('ISOMETRIC')}
            className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition"
            title="Isometric Perspective"
          >
            ISO
          </button>
          <button
            onClick={() => setCameraView('TOP')}
            className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition"
            title="Planform View"
          >
            TOP
          </button>
          <button
            onClick={() => setCameraView('SIDE')}
            className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition"
            title="Lateral Profile"
          >
            SIDE
          </button>
          <button
            onClick={() => setCameraView('FRONT')}
            className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition"
            title="Frontal Profile"
          >
            FRONT
          </button>
          <button
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded border transition flex items-center gap-1 ${
              wireframeMode
                ? 'bg-blue-50 border-blue-500 text-blue-700'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:border-blue-500'
            }`}
            title="Toggle CAD Structural Wireframe"
          >
            <Layers className="w-3 h-3" />
            WIRE
          </button>
          <button
            onClick={resetView}
            className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 hover:border-blue-500 rounded transition"
            title="Reset Camera Center"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Loading Progress Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/85 backdrop-blur-sm select-none">
          <div className="w-72 p-5 bg-white border border-slate-200 shadow-xl rounded-lg space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800">
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                LOADING /rustom.glb
              </span>
              <span className="text-blue-600">{loadingProgress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-blue-600 transition-all duration-200 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-500 text-center">
              Centering & Scaling CAD Model to Viewport...
            </div>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {loadError && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 p-6 text-center font-mono">
          <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded-lg text-xs space-y-2 max-w-md shadow-sm">
            <div className="font-bold flex items-center justify-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-red-600" />
              CAD MODEL LOAD ERROR
            </div>
            <div>{loadError}</div>
          </div>
        </div>
      )}

      {/* Main Three.js Container */}
      <div ref={mountRef} className="w-full h-full flex-1 cursor-grab active:cursor-grabbing" />

      {/* In-Viewport Flight HUD Overlays */}
      <div className="absolute bottom-3 left-3 z-10 p-2.5 bg-white/90 backdrop-blur border border-slate-200 rounded shadow-sm text-xs space-y-1 font-mono text-slate-700 pointer-events-none">
        <div className="text-[10px] text-blue-700 font-bold tracking-wider border-b border-slate-200 pb-1">
          TACTICAL FLIGHT ENVELOPE
        </div>
        <div className="flex justify-between gap-6">
          <span className="text-slate-500">ALTITUDE:</span>
          <span className="text-slate-900 font-bold">{telemetry?.altitude?.toFixed(0) ?? 1850} m ASL</span>
        </div>
        <div className="flex justify-between gap-6">
          <span className="text-slate-500">THROTTLE:</span>
          <span className="text-blue-600 font-bold">{((telemetry?.throttle ?? 0.75) * 100).toFixed(0)}%</span>
        </div>
        <div className="flex justify-between gap-6">
          <span className="text-slate-500">SHAFT SPEED:</span>
          <span className="text-slate-900 font-bold">{telemetry?.rpm ?? 5200} RPM</span>
        </div>
        <div className="flex justify-between gap-6">
          <span className="text-slate-500">PROP THRUST:</span>
          <span className="text-emerald-600 font-bold">1.82 kN</span>
        </div>
      </div>

      {/* Thermal Sentinel In-Viewport Badge */}
      <div className="absolute bottom-3 right-3 z-10 p-2.5 bg-white/90 backdrop-blur border border-slate-200 rounded shadow-sm text-xs space-y-1 font-mono text-slate-700">
        <div className="text-[10px] text-amber-700 font-bold tracking-wider border-b border-slate-200 pb-1 flex items-center justify-between">
          <span>ENGINE COMPARTMENT THERMAL</span>
          {isCriticalHeat && <ShieldAlert className="w-3.5 h-3.5 text-red-600 animate-pulse" />}
        </div>
        <div className="flex justify-between gap-6">
          <span className="text-slate-500">AVG CHT:</span>
          <span className={`font-bold ${cht > 170 ? 'text-red-600 animate-pulse' : cht > 150 ? 'text-amber-600' : 'text-emerald-600'}`}>
            {cht.toFixed(1)} °C
          </span>
        </div>
        <div className="flex justify-between gap-6">
          <span className="text-slate-500">AVG EGT:</span>
          <span className={`font-bold ${egt > 815 ? 'text-red-600 animate-pulse' : egt > 780 ? 'text-amber-600' : 'text-emerald-600'}`}>
            {egt.toFixed(1)} °C
          </span>
        </div>
        <div className="flex justify-between gap-6">
          <span className="text-slate-500">VIBRATION:</span>
          <span className={`font-bold ${(telemetry?.vibration ?? 1.1) > 2.0 ? 'text-red-600' : 'text-slate-900'}`}>
            {(telemetry?.vibration ?? 1.15).toFixed(2)} g RMS
          </span>
        </div>
      </div>

      {/* OrbitControls Mouse Drag Hint */}
      <div className="absolute top-14 right-3 z-10 px-2 py-1 bg-white/80 backdrop-blur border border-slate-200 rounded text-[10px] text-slate-500 pointer-events-none flex items-center gap-1.5 shadow-sm">
        <Eye className="w-3 h-3 text-blue-600" />
        <span>360° DRAG TO ROTATE • SCROLL TO ZOOM • RIGHT-DRAG TO PAN</span>
      </div>
    </div>
  );
};
