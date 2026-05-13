import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import profile from "../asset/images/profile.png";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const heroParticles = Array.from({ length: 8 }).map((_, index) => ({
  id: `hero-particle-${index}`,
  size: `${Math.random() * 6 + 2}px`,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: 12 + index * 2,
}));

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const subtitleText =
  "I build premium digital experiences with React, JavaScript, PHP, Laravel, and SQL — focused on polished UI, fast performance, and meaningful UX.";

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
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
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

      <div className="absolute inset-0 pointer-events-none">
        {heroParticles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-white/60"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-black/65 mb-5"
        >
          Full-Stack Developer & UI Designer
        </motion.p>

        <motion.div variants={itemVariants} className="overflow-hidden">
          <h1 className="font-serif text-[clamp(4.2rem,8vw,6.5rem)] font-light uppercase leading-[0.92] tracking-[-0.04em] text-black">
            Creative
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="overflow-hidden">
          <h2 className="font-serif text-[clamp(4.2rem,8vw,6.5rem)] font-light uppercase leading-[0.92] tracking-[-0.04em] text-black">
            Developer
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative my-10 flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative rounded-full border border-black/10 bg-white/90 p-2 shadow-[0_35px_80px_rgba(15,15,15,0.12)]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/20 via-purple-300/10 to-transparent blur-2xl" />
            <motion.div
              className="relative h-64 w-64 overflow-hidden rounded-full bg-black/5"
              style={{ x: springX, y: springY }}
            >
              <img
                src={profile}
                alt="Abdullah"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale-[10%]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-base font-medium leading-8 text-black/75 sm:text-lg"
        >
          {typedText || ""}
          <span
            className="ml-1 inline-block h-6 w-px bg-black/80 animate-blink align-middle"
            aria-hidden="true"
          />
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <motion.a
            href="#projects"
            data-cursor="magnetic"
            className="relative overflow-hidden rounded-full bg-black px-9 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-all hover:shadow-[0_25px_80px_rgba(0,0,0,0.24)]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View Projects"
          >
            View Projects
          </motion.a>

          <motion.a
            href="#contact"
            data-cursor="magnetic"
            className="relative rounded-full border border-black/10 bg-white px-9 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-black transition-all hover:bg-black hover:text-white"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Contact Me"
          >
            Contact Me
          </motion.a>

          <motion.a
            href="#"
            className="text-sm font-semibold uppercase tracking-[0.35em] text-black/70 transition-colors hover:text-black"
            whileHover={{ scale: 1.02 }}
            aria-label="Download CV"
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
