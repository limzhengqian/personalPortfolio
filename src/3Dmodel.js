import React from "react";
import { Suspense } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import Model from "./Amogus";
import { useGLTF, OrbitControls } from "@react-three/drei";

export default function Module() {


  return (
    <div className="model">
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
