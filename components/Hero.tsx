"use client";

import { motion } from "framer-motion";
import Hero3D from "./Hero3D";
import { Backlight } from "./ui/backlight";

export default function Hero() {

  const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth" as ScrollBehavior,
    block: "start",
  });
};
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Rupesh
            </span>
          </motion.h1>

          {/* ROLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mt-4 text-gray-300"
          >
            Full Stack Developer • Next.js • Cloud
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-400 max-w-lg"
          >
            I build scalable, production-ready web applications with modern tech
            like React, Node.js, and AWS.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-6"
          >
            <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition" onClick={() => scrollTo("projects")}>
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white transition" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
       <div className="hidden md:flex justify-center items-center w-full h-[400px]">
       <Backlight>
       <Hero3D />
       </Backlight>
</div>

      </div>
    </section>
  );
}