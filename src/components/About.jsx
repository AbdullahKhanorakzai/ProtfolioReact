import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 px-12 sm:px-6 lg:px-20"
      id="about"
    >
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-200/25 blur-3xl sm:-right-16 sm:top-8" />
      <div className="absolute left-6 top-1/2 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl sm:left-4 sm:h-64 sm:w-64" />

      <motion.div
        className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 rounded-[32px] bg-white/90 p-8 sm:p-12 shadow-[0_40px_120px_rgba(15,15,15,0.08)] backdrop-blur-2xl border border-black/5 lg:grid-cols-[1.3fr_0.95fr]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="relative overflow-hidden">
            <span className="absolute left-0 top-0 h-24 w-1 rounded-full bg-gradient-to-b from-pink-400 to-purple-400 opacity-80" />
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50 mb-4"
              variants={itemVariants}
            >
              About Me
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-serif text-5xl font-light leading-[1.02] text-black"
            >
              Building modern web experiences with clean code.
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base leading-8 text-black/75"
          >
            I am a dedicated Full-Stack Developer focused on creating premium,
            polished digital experiences. My workflow combines elegant UI,
            scalable backend structure, and polished frontend motion.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base leading-8 text-black/70"
          >
            Starting from HTML, CSS, and JavaScript, I moved into React,
            PHP, Laravel, and SQL to build complete applications with strong
            performance and high-end design.
          </motion.p>

          <motion.blockquote
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-purple-200/30 bg-purple-50/40 p-6 text-base italic text-black/70 shadow-sm"
          >
            “I believe in thoughtful design, consistent progress, and projects
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
          ].map((item, index) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,15,15,0.06)] backdrop-blur-xl transition-all"
            >
              <div className={`absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r ${item.accent} opacity-90`} />
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
