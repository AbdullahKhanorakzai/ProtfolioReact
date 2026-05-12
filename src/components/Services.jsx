import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const services = [
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Creating responsive and dynamic websites with clean code and modern technologies tailored to your needs.",
    accent: "from-pink-400 to-purple-400",
  },
  {
    icon: "◈",
    title: "Frontend Development",
    desc: "Building attractive and interactive user interfaces using React.js and JavaScript — smooth, fast, and beautiful.",
    accent: "from-blue-400 to-cyan-400",
  },
  {
    icon: "◉",
    title: "Backend Development",
    desc: "Developing secure backend systems, authentication, and database-driven applications using PHP and Laravel.",
    accent: "from-orange-400 to-amber-400",
  },
  {
    icon: "◌",
    title: "UI/UX Design",
    desc: "Designing clean, user-friendly layouts focused on usability, responsiveness, and visual clarity.",
    accent: "from-purple-400 to-pink-300",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative py-24 px-12 sm:px-6 lg:px-20 bg-white"
      id="services"
    >
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="absolute right-10 bottom-24 h-64 w-64 rounded-full bg-purple-200/20 blur-3xl" />

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
          Services
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="font-serif text-5xl font-light mb-12 text-black"
        >
          What I can build for you.
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[32px] border border-black/5 bg-white/95 p-10 shadow-[0_25px_90px_rgba(15,15,15,0.06)] transition-transform duration-300"
            >
              <div
                className={`absolute -left-6 top-6 h-24 w-24 rounded-full bg-gradient-to-br ${service.accent} opacity-10 blur-3xl`}
              />
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-black/5 text-3xl text-black/80 transition-all group-hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="font-serif text-3xl font-light mb-4 text-black">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-black/70">
                  {service.desc}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-x-8 bottom-6 h-1 rounded-full bg-gradient-to-r from-black/10 via-transparent to-black/10 opacity-40" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
