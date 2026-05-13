import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const backgroundParticles = Array.from({ length: 16 }).map((_, index) => ({
  id: `particle-${index}`,
  size: `${Math.random() * 6 + 2}px`,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 4}s`,
  duration: 12 + Math.random() * 16,
}));

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const nebulaY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fogY = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-[-12%] top-10 w-96 h-96 rounded-full blur-3xl opacity-25"
        animate={{ x: [0, 70, 0], y: [0, -28, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(232,143,160,0.32), transparent 68%)",
          y: nebulaY,
        }}
      />

      <motion.div
        className="absolute right-[-10%] top-1/4 w-96 h-96 rounded-full blur-3xl opacity-18"
        animate={{ x: [0, -68, 0], y: [0, 36, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(184,159,248,0.26), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute left-1/2 bottom-20 w-72 h-72 rounded-full blur-3xl opacity-16"
        animate={{ x: [0, 40, 0], y: [0, -42, 0], scale: [1, 0.96, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(240,165,106,0.22), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute left-0 top-10 h-80 w-80 rounded-full blur-3xl opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(232,143,160,0.16), transparent 65%)",
          y: fogY,
        }}
      />

      <motion.div
        className="absolute right-0 bottom-8 h-72 w-72 rounded-full blur-3xl opacity-14"
        style={{
          background:
            "radial-gradient(circle, rgba(184,159,248,0.18), transparent 65%)",
          y: nebulaY,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,143,160,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(184,159,248,0.06),transparent_20%)] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_20px)] opacity-8" />

      <div className="absolute inset-0 pointer-events-none opacity-5">
        {backgroundParticles.map((particle) => (
          <span
            key={particle.id}
            className="absolute rounded-full bg-white/80 blur-lg"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              animation: `drift ${particle.duration}s ease-in-out ${particle.delay} infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
