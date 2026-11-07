"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function generateSiliconTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // 1. Silicon Substrate Background
    const bgGrad = ctx.createRadialGradient(512, 512, 50, 512, 512, 512);
    bgGrad.addColorStop(0, "#16283b");
    bgGrad.addColorStop(0.7, "#0c1724");
    bgGrad.addColorStop(1, "#070e17");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Fine Micro-Grid (Sub-micron Metallization Layers)
    ctx.strokeStyle = "rgba(183, 137, 50, 0.18)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 1024; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 1024);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(1024, i);
      ctx.stroke();
    }

    // 3. Dense Digital Logic Core Array
    ctx.fillStyle = "rgba(23, 100, 70, 0.25)";
    for (let x = 120; x < 900; x += 128) {
      for (let y = 120; y < 900; y += 128) {
        ctx.fillRect(x + 10, y + 10, 108, 108);
        ctx.strokeStyle = "rgba(212, 177, 107, 0.4)";
        ctx.strokeRect(x + 16, y + 16, 96, 96);
      }
    }

    // 4. Signal Bus Traces with Chamfered 45-degree routing
    ctx.strokeStyle = "#e5b869";
    ctx.lineWidth = 4;
    const busLines = [
      [64, 200, 220, 200, 320, 300, 700, 300, 800, 200, 960, 200],
      [64, 240, 240, 240, 340, 340, 680, 340, 780, 240, 960, 240],
      [64, 780, 220, 780, 320, 680, 700, 680, 800, 780, 960, 780],
      [64, 820, 240, 820, 340, 720, 680, 720, 780, 820, 960, 820],
      [200, 64, 200, 220, 300, 320, 300, 700, 200, 800, 200, 960],
      [820, 64, 820, 220, 720, 320, 720, 700, 820, 800, 820, 960],
    ];

    busLines.forEach((pts) => {
      ctx.beginPath();
      ctx.moveTo(pts[0], pts[1]);
      for (let p = 2; p < pts.length; p += 2) {
        ctx.lineTo(pts[p], pts[p + 1]);
      }
      ctx.stroke();
    });

    // 5. Gold Wire-Bond Pads around perimeter
    const padSize = 22;
    ctx.fillStyle = "#f5cb74";
    ctx.strokeStyle = "#8e6722";
    ctx.lineWidth = 2;
    for (let pos = 90; pos < 930; pos += 46) {
      // Top & Bottom
      [70, 932].forEach((y) => {
        ctx.fillRect(pos, y, padSize, padSize);
        ctx.strokeRect(pos, y, padSize, padSize);
      });
      // Left & Right
      [70, 932].forEach((x) => {
        ctx.fillRect(x, pos, padSize, padSize);
        ctx.strokeRect(x, pos, padSize, padSize);
      });
    }

    // 6. Corner Alignment Fiducials
    const corners = [
      [110, 110],
      [914, 110],
      [110, 914],
      [914, 914],
    ];
    corners.forEach(([cx, cy]) => {
      ctx.strokeStyle = "#f3ca76";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, 26, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 36, cy);
      ctx.lineTo(cx + 36, cy);
      ctx.moveTo(cx, cy - 36);
      ctx.lineTo(cx, cy + 36);
      ctx.stroke();
    });

    // 7. Central Die Badge & Silkscreen Typography
    ctx.fillStyle = "rgba(10, 24, 34, 0.85)";
    ctx.fillRect(312, 420, 400, 184);
    ctx.strokeStyle = "#d4b16b";
    ctx.lineWidth = 3;
    ctx.strokeRect(312, 420, 400, 184);

    // Inner glow border
    ctx.strokeStyle = "rgba(23, 100, 70, 0.7)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(322, 430, 380, 164);

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#f8d58c";
    ctx.font = "bold 34px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace";
    ctx.fillText("DeKUT · CDED", 512, 475);

    ctx.fillStyle = "#8dc5ab";
    ctx.font = "600 20px monospace";
    ctx.fillText("DICEL ASIC SKY130", 512, 520);

    ctx.fillStyle = "#a8997a";
    ctx.font = "500 15px monospace";
    ctx.fillText("REV 2026.1 · TAPE-OUT", 512, 558);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  return texture;
}

function PackageModel() {
  const group = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: -0.22, y: 0.35 });

  // Generate 40 outer quad pins (10 per side)
  const pins = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i < 10; i++) {
      const v = -1.35 + i * 0.3;
      points.push(
        [v, -0.12, -1.72],
        [v, -0.12, 1.72],
        [-1.72, -0.12, v],
        [1.72, -0.12, v]
      );
    }
    return points;
  }, []);

  const texture = useMemo(() => generateSiliconTexture(), []);

  // Cleanup texture on unmount
  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Smooth subtle pointer tilt response
    const pointerX = state.pointer.x * 0.45;
    const pointerY = state.pointer.y * 0.35;

    // Continuous gentle floating oscillation
    const floatY = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    const idleRotY = state.clock.elapsedTime * 0.16;

    targetRotation.current.x = -0.22 - pointerY * 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.03;
    targetRotation.current.y = idleRotY + pointerX * 0.5;

    // Damped interpolation
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetRotation.current.x,
      4,
      delta
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetRotation.current.y,
      3,
      delta
    );
    group.current.position.y = THREE.MathUtils.damp(
      group.current.position.y,
      floatY,
      4,
      delta
    );
  });

  return (
    <group ref={group} rotation={[-0.22, 0.35, -0.04]}>
      {/* 1. Main Epoxy Resin Packaging Body (QFP Style) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.44, 3.2]} />
        <meshStandardMaterial
          color="#18222d"
          roughness={0.46}
          metalness={0.25}
        />
      </mesh>

      {/* 2. Recessed Silicon Die Bed */}
      <mesh position={[0, 0.225, 0]}>
        <boxGeometry args={[2.08, 0.04, 2.08]} />
        <meshStandardMaterial
          map={texture}
          emissive="#0d4d3f"
          emissiveMap={texture}
          emissiveIntensity={0.35}
          roughness={0.28}
          metalness={0.55}
        />
      </mesh>

      {/* 3. Gold Wirebond Perimeter Ring */}
      <mesh position={[0, 0.23, 0]}>
        <ringGeometry args={[1.06, 1.12, 4]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* 4. Pin-1 Orientation Indentation (Gold Inlay) */}
      <mesh position={[-1.3, 0.23, -1.3]}>
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshStandardMaterial
          color="#eab355"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* 5. Precision Quad Package Leads / Pins */}
      {pins.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]} castShadow>
          <boxGeometry
            args={
              Math.abs(x) > Math.abs(z)
                ? [0.14, 0.16, 0.1]
                : [0.1, 0.16, 0.14]
            }
          />
          <meshStandardMaterial
            color="#cca554"
            metalness={0.88}
            roughness={0.24}
          />
        </mesh>
      ))}

      {/* 6. Heat Spreader / Substrate Ground Plane */}
      <mesh position={[0, -0.26, 0]}>
        <boxGeometry args={[3.24, 0.08, 3.24]} />
        <meshStandardMaterial
          color="#0d141d"
          roughness={0.65}
          metalness={0.4}
        />
      </mesh>
    </group>
  );
}

export function ChipScene() {
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const node = document.getElementById("chip-scene");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const lowPower = connection?.saveData === true || (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4);

    if (reduced || lowPower || !node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEnabled(entry.isIntersecting);
        if (entry.isIntersecting) setReady(true);
      },
      { rootMargin: "120px" }
    );
    observer.observe(node);

    const handleVisibility = () => {
      const rect = node.getBoundingClientRect();
      setEnabled(!document.hidden && rect.top < window.innerHeight && rect.bottom > 0);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      id="chip-scene"
      className="chip-art"
      role="img"
      aria-label="Interactive 3D model of an integrated circuit package designed by DeKUT CDED"
      style={{ touchAction: "pan-y" }}
    >
      {!ready && (
        <div className="chip">
          <span className="chip-dot" />
          <div className="chip-die">
            <b>DEKUT · CDED</b>
            <small>ASIC SKY130</small>
          </div>
        </div>
      )}

      {ready && (
        <Canvas
          frameloop={enabled ? "always" : "never"}
          dpr={[1, 2]}
          camera={{ position: [4.2, 3.2, 4.6], fov: 33 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight
            position={[5, 7, 5]}
            intensity={2.4}
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <pointLight
            position={[-4, 2, -3]}
            color="#e3b652"
            intensity={18}
            distance={14}
          />
          <pointLight
            position={[3, -2, 4]}
            color="#176446"
            intensity={10}
            distance={10}
          />
          <Suspense fallback={null}>
            <PackageModel />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
