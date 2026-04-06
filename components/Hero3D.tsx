// components/Hero3D.tsx

"use client";

import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./AnimationSphere";

export default function Hero3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}