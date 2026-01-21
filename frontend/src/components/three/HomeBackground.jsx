import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function AmbientParticles() {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0005;
    ref.current.rotation.x += 0.0003;
  });

  return (
    <points ref={ref}>
      <sphereGeometry args={[3.2, 64, 64]} />
      <pointsMaterial
        color="#8b5cf6"   // purple-500
        size={0.02}
        transparent
        opacity={0.25}
      />
    </points>
  );
}

export default function HomeBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
