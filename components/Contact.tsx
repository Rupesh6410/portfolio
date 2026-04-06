"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import  ContactIcons  from "./ContactIcons";
import toast from "react-hot-toast";

export default function Contact() {

  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: any) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    toast.success("Message sent");
    form.reset();
  } else {
    toast.error("Error");
  }

  setLoading(false);
};
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Great 
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            I’m always open to discussing new opportunities, 
            interesting projects, or just having a chat about tech.
          </p>

          <div className="mt-6 space-y-3 text-sm text-neutral-400">
            <a href="mailto:rupeshkumar6410g@gmail.com" className="text-purple-400 hover:text-purple-300 transition text-lg">Rupeshkumar6410g@gmail.com</a>
            
              <ContactIcons />
            
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            p-8 rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-xl
            space-y-6
          "
        >
          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="
              w-full p-4 rounded-lg
              bg-white/5 border border-white/10
              focus:outline-none focus:border-purple-500
              transition
            "
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="
              w-full p-4 rounded-lg
              bg-white/5 border border-white/10
              focus:outline-none focus:border-purple-500
              transition
            "
          />

          {/* MESSAGE */}
          <textarea
            rows={4}
            name="message"
            placeholder="Your Message"
            className="
              w-full p-4 rounded-lg
              bg-white/5 border border-white/10
              focus:outline-none focus:border-purple-500
              transition
            "
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}

            className="
              w-full py-4 rounded-lg
              bg-gradient-to-r from-purple-500 to-pink-500
              font-semibold
              shadow-lg
              hover:shadow-purple-500/40
              transition
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}