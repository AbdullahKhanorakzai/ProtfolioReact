import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-20"
      id="about"
    >
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />
      <div className="pointer-events-none absolute left-6 top-1/2 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl sm:left-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />

      <motion.div
        className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-10 rounded-[36px] border border-black/10 bg-white/85 p-8 shadow-[0_40px_100px_rgba(15,15,15,0.08)] backdrop-blur-2xl lg:grid-cols-[1.3fr_0.9fr] lg:p-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="space-y-8">
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden"
          >
            <span className="absolute left-0 top-0 h-24 w-1 rounded-full bg-gradient-to-b from-pink-400 to-purple-400 opacity-90" />
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50 mb-4"
              variants={itemVariants}
            >
              About Me
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl font-light leading-tight text-black"
            >
              Building modern web experiences with clean code.
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-base leading-8 text-black/75"
          >
            I am a dedicated Full-Stack Developer focused on creating premium,
            polished digital experiences. My workflow combines elegant UI,
            scalable backend structure, and refined frontend motion.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-base leading-8 text-black/75"
          >
            Starting from HTML, CSS, and JavaScript, I moved into React, PHP,
            Laravel, and SQL to deliver complete apps with strong performance
            and a premium user experience.
          </motion.p>

          <motion.blockquote
            variants={itemVariants}
            className="relative overflow-hidden rounded-[32px] border border-purple-200/30 bg-purple-50/40 p-6 text-base italic text-black/70 shadow-sm"
          >
            “I believe in thoughtful design, consistent progress, and interfaces
            that feel elegant from the first scroll.”
          </motion.blockquote>
        </div>

        <div className="space-y-5">
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50"
          >
            What I bring
          </motion.p>

          {[
            {
              label: "Frontend",
              description:
                "Premium interfaces with React, animation, and crisp responsive design.",
              accent: "from-pink-400 to-pink-300",
            },
            {
              label: "Backend",
              description:
                "Secure server logic and APIs built with PHP, Laravel, and modern patterns.",
              accent: "from-blue-400 to-cyan-400",
            },
            {
              label: "Full-Stack",
              description:
                "End-to-end delivery with databases, deployment, and polished UX.",
              accent: "from-orange-400 to-yellow-300",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,15,15,0.06)] backdrop-blur-xl transition-all"
            >
              <div
                className={`absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r ${item.accent} opacity-90`}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50 mb-3">
                {item.label}
              </p>
              <p className="text-sm leading-7 text-black/75">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
