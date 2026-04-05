"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const links = [
    { name: "home", id: "home" },
    { name: "projects", id: "projects" },
    { name: "stack", id: "stack" },
    { name: "contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false); // 👈 close menu on click
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        <div className="flex items-center justify-between
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-2xl px-6 py-3
        ">
          
          {/* LOGO */}
          <h1 className="font-semibold text-lg">Rupesh.dev</h1>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`capitalize text-sm transition ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <button
            onClick={() => handleScroll("contact")}
            className="hidden md:block px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700"
          >
            Hire Me
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className="text-left capitalize text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </button>
                ))}

                <button
                  onClick={() => handleScroll("contact")}
                  className="mt-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700"
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}