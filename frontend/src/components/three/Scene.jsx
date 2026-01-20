import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const FloatingSphere = () => {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x += 0.002;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.6, 64, 64]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <FloatingSphere />
    </Canvas>
  );
};

export default Scene;
