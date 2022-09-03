import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stage,
  useGLTF,
} from "@react-three/drei";

export default () => {
  const { scene } = useGLTF("http://localhost:3000/monkey.glb");

  return (
    <Suspense fallback={null}>
      <Canvas>
        <PerspectiveCamera makeDefault /> 
        <OrbitControls enablePan enableZoom enableRotate />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 1]}
          inclination={0}
          azimuth={0.25}
        />
        <Stage>
          <group dispose={null}>
            <primitive scale={[1, 1, 1]} object={scene} />
          </group>
        </Stage>
      </Canvas>
    </Suspense>
  );
};
