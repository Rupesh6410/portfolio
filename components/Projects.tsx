"use client";
import { Backlight } from "@/components/ui/backlight";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";


const projects = [
  {
    title: "AI Resume Builder",
    desc: "Generates ATS-optimized resumes based on job descriptions using AI.",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Startup CRM Tool",
    desc: "Track outreach, leads, and follow-ups for startups.",
    tech: ["React", "Node.js", "PostgreSQL"],
    live: "#",
    github: "#",
  },
  {
    title: "DevOps Dashboard",
    desc: "Monitor deployments, logs, and infra in real-time.",
    tech: ["Docker", "AWS", "Next.js"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* HEADING */}
      
      <Backlight>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold mb-12"
      >
        Projects
      </motion.h2>
     </Backlight>
      {/* GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition"
          >
            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm mb-4">
              {project.desc}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-purple-500/20 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4 text-sm">
              <a href={project.live} className="text-purple-400 hover:underline">
                Live →
              </a>
              <a href={project.github} className="text-gray-400 hover:underline">
                Code →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}