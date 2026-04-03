"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
  let mouseX = 0;
  let mouseY = 0;

  let currentX = 0;
  let currentY = 0;

  const speed = 0.1;

  const updateMouse = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const animate = () => {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;

    setPosition({ x: currentX, y: currentY });

    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", updateMouse);
  animate();

  return () => {
    window.removeEventListener("mousemove", updateMouse);
  };
}, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(
          200px at ${position.x}px ${position.y}px,
          rgba(168, 85, 247, 0.25),
          transparent 80%
        )`,
      }}
    />
  );
}