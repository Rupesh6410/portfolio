// components/AnimatedSphere.tsx

"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";


export default function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(({ mouse, clock }) => {
    if (!meshRef.current) return;

    const t = clock.getElapsedTime();

    meshRef.current.position.y = Math.sin(t) * 0.3;
    meshRef.current.rotation.x = mouse.y * 0.8;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.position.x = mouse.x * 0.5;

    const scale = hovered ? 2.3 : 2;
    meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={clicked ? "#22c55e" : "#7c3aed"}
        distort={clicked ? 0.7 : 0.4}
        speed={4}
      />
    </mesh>
  );
}