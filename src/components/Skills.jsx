import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "HTML & CSS",
      "Responsive Design",
      "Figma",
      "Tailwind CSS",
    ],
    color: "from-pink-400 to-rose-400",
  },
  {
    title: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "Server-side Logic",
      "Authentication",
      "RESTful APIs",
    ],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Database",
    skills: ["MySQL", "SQL Queries", "Database Relationships"],
    color: "from-purple-400 to-indigo-400",
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "Figma"],
    color: "from-orange-400 to-amber-400",
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-24 px-12 sm:px-6 lg:px-20 bg-[radial-gradient(circle_at_top_left,rgba(232,143,160,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(184,159,248,0.1),transparent_24%)]"
    >
      <div className="absolute right-0 top-16 h-60 w-60 rounded-full bg-purple-200/25 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl" />

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
          Expertise
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="font-serif text-5xl font-light mb-12 text-black"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div className="grid gap-6 lg:grid-cols-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white/85 p-8 shadow-[0_25px_80px_rgba(15,15,15,0.06)] transition-all hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(184,159,248,0.16)]"
              whileHover={{ scale: 1.01 }}
            >
              <div
                className={`absolute inset-x-6 top-6 h-1 rounded-full bg-gradient-to-r ${category.color} opacity-90`}
              />
              <motion.p
                className={`relative text-xs font-semibold uppercase tracking-[0.35em] mb-5 bg-gradient-to-r ${category.color} bg-clip-text`}
              >
                {category.title}
              </motion.p>
              <ul className="space-y-3 pt-2">
                {category.skills.map((skill, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-sm font-medium leading-7 text-black/75"
                    whileHover={{ x: 4, color: "#b89ff8" }}
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 flex flex-wrap items-center gap-3">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "PHP",
            "Laravel",
            "MySQL",
            "Git",
            "Figma",
            "Bootstrap",
          ].map((tech, idx) => (
            <motion.span
              key={idx}
              variants={itemVariants}
              className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-black/75 shadow-sm transition-all hover:-translate-y-1 hover:border-black/20"
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
