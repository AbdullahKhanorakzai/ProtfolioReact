import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: "easeOut" } },
};

const projects = [
  {
    id: 1,
    name: "Full Authentication System",
    stack: "PHP · MySQL · Bootstrap · Sessions",
    icon: "◈",
    bgGradient: "from-purple-300 to-purple-200",
    summary: "A premium authentication experience with secure login, profile uploads, and session-driven access control.",
    features: ["User Registration", "Secure Login", "Profile Upload", "Session Auth"],
  },
  {
    id: 2,
    name: "React Pizza App",
    stack: "React.js · JavaScript · CSS",
    icon: "⬡",
    bgGradient: "from-blue-300 to-cyan-200",
    summary: "A polished React interface for fast ordering, animated menus, and responsive mobile-first design.",
    features: ["Dynamic State", "Component Architecture", "Responsive UI"],
  },
  {
    id: 3,
    name: "Student Management System",
    stack: "PHP · MySQL · Bootstrap · CRUD",
    icon: "◉",
    bgGradient: "from-orange-300 to-orange-200",
    summary: "A modern dashboard built for student administration, search, and intuitive record management.",
    features: ["Add/Edit/Delete", "Search Functionality", "Responsive Dashboard"],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-24 px-12 sm:px-6 lg:px-20 bg-[radial-gradient(circle_at_top_right,rgba(232,143,160,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(184,159,248,0.08),transparent_28%)]"
    >
      <motion.div
        className="relative mx-auto max-w-[1400px]"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50 mb-4"
        >
          Selected Projects
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="font-serif text-5xl font-light mb-12 text-black"
        >
          Things I've built.
        </motion.h2>

        <motion.div className="grid gap-6 grid-cols-1 xl:grid-cols-[1.45fr_1fr]">
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setHoveredId(projects[0].id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ y: -6 }}
            className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white/95 p-10 shadow-[0_35px_120px_rgba(15,15,15,0.08)] transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-transparent to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,143,160,0.12),transparent_55%)] pointer-events-none" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full bg-black/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-black/60">
                  Featured
                </span>
                <div className="mt-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-2xl text-white shadow-[0_20px_50px_rgba(184,159,248,0.2)]">
                  {projects[0].icon}
                </div>
                <h3 className="mt-10 text-4xl font-serif font-light text-black">
                  {projects[0].name}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.35em] text-black/50">
                  {projects[0].stack}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-black/75">
                  {projects[0].summary}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {projects[0].features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-black/10 bg-black/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.25em] text-black/60"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {projects.slice(1).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white/95 p-8 shadow-[0_20px_80px_rgba(15,15,15,0.06)] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-transparent opacity-40" />
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-black/5 text-3xl text-black/80 mb-6">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-light text-black mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.35em] text-black/50">
                    {project.stack}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-black/75">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-black/5 px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-black/65"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
