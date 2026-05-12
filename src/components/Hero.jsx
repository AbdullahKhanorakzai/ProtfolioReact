import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import profile from "../asset/images/profile.png";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const subtitleText =
  "I build responsive, modern, and user-friendly web applications using React, JavaScript, PHP, Laravel, and SQL — focused on clean UI/UX and real-world functionality.";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(subtitleText.slice(0, index + 1));
      index += 1;
      if (index >= subtitleText.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, []);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden px-6 sm:px-12 pt-24 sm:pt-28 pb-20 sm:pb-24"
      id="hero"
      onMouseMove={handlePointerMove}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,143,160,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(184,159,248,0.12),transparent_24%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_22%)] pointer-events-none" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl opacity-70"
        animate={{ scale: hovered ? 1.05 : 1, rotate: hovered ? 2 : 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.div
        className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-pink-400/25 via-purple-400/10 to-transparent blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute right-0 top-2/3 h-72 w-72 rounded-full bg-gradient-to-br from-orange-300/20 to-transparent blur-3xl"
        animate={{ x: [0, -36, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ left: springX, top: springY }}
        className="pointer-events-none absolute h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 ring-1 ring-white/20 blur-3xl mix-blend-screen"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-black/60 mb-5"
        >
          Full-Stack Developer & UI Designer
        </motion.p>

        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="font-serif text-[clamp(4.5rem,8vw,7rem)] font-light uppercase leading-[0.88] tracking-[-0.04em] text-black">
            Creative
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="overflow-hidden">
          <h2 className="font-serif text-[clamp(4.5rem,8vw,7rem)] font-light uppercase leading-[0.88] tracking-[-0.04em] text-black">
            Developer
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative my-10 flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative rounded-full border border-black/10 bg-white/90 p-1 shadow-[0_35px_80px_rgba(15,15,15,0.12)]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/20 via-purple-300/10 to-transparent blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full">
              <img
                src={profile}
                alt="Abdullah"
                className="h-full w-full object-cover grayscale-[10%]"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-base font-medium leading-8 text-black/75 sm:text-lg"
        >
          {typedText || ""}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <motion.a
            href="#projects"
            className="relative overflow-hidden rounded-full bg-black px-9 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="relative rounded-full border border-black/10 bg-white px-9 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black transition-all hover:bg-black hover:text-white"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>

          <motion.a
            href="#"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-black/70 transition-colors hover:text-black"
            whileHover={{ scale: 1.02 }}
          >
            Download CV ↓
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.32em] text-black/50"
        >
          <span className="inline-block h-0.5 w-10 rounded-full bg-black/20" />
          <span className="font-medium">Scroll to explore</span>
          <span className="inline-block h-0.5 w-10 rounded-full bg-black/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
