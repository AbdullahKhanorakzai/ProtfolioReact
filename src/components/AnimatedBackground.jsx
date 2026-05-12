import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-[-12%] top-10 w-96 h-96 rounded-full blur-3xl opacity-25"
        animate={{ x: [0, 70, 0], y: [0, -30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(232,143,160,0.35), transparent 68%)" }}
      />

      <motion.div
        className="absolute right-[-10%] top-1/4 w-96 h-96 rounded-full blur-3xl opacity-18"
        animate={{ x: [0, -80, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(184,159,248,0.28), transparent 70%)" }}
      />

      <motion.div
        className="absolute left-1/2 bottom-20 w-72 h-72 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 0.96, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(240,165,106,0.22), transparent 70%)" }}
      />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(232,143,160,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(184,159,248,0.06),transparent_20%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_18px)] opacity-10" />
    </div>
  );
}
