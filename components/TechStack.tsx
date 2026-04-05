"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const tech = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" },
];

function MagneticIcon({ Icon, name, index }: any) {
  // 🧲 motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 🔥 smooth spring
  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // control strength here 👇
    x.set(deltaX * 0.2);
    y.set(deltaY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="group cursor-pointer"
      
      // 🧲 APPLY MAGNETIC
      style={{ x: springX, y: springY }}

      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      // 🌊 FLOATING
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      // ✨ HOVER
      whileHover={{
        scale: 1.15,
        rotate: 3,
      }}
    >
      <motion.div
        className="
          p-6 rounded-2xl 
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-lg
        "
        whileHover={{
          boxShadow: "0px 20px 40px rgba(168, 85, 247, 0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        <Icon
          size={42}
          className="text-white group-hover:text-purple-400 transition"
        />
      </motion.div>

      <p className="text-center mt-3 text-sm opacity-60 group-hover:opacity-100">
        {name}
      </p>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="py-24">
      <h2 className="text-3xl font-bold text-center mb-16">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 place-items-center">
        {tech.map((item, i) => {
          const Icon = item.icon;

          return (
            <MagneticIcon
              key={i}
              Icon={Icon}
              name={item.name}
              index={i}
            />
          );
        })}
      </div>
    </section>
  );
}