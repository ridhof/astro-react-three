import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default () => {
  const { scene } = useLoader(GLTFLoader, "http://localhost:3000/monkey.glb");

  return (
    <Suspense fallback={null}>
      <Canvas>
        <primitive object={scene} />
      </Canvas>
    </Suspense>
  );
};
