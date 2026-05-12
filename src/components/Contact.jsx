import React, { useState } from "react";
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

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 px-12 sm:px-6 lg:px-20 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,143,160,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(184,159,248,0.16),transparent_24%)] pointer-events-none" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />

      <motion.div
        className="relative mx-auto max-w-[1200px] rounded-[36px] border border-white/10 bg-white/5 p-6 sm:p-10 shadow-[0_40px_130px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
              Get in Touch
            </p>
            <h2 className="font-serif text-5xl font-light text-white leading-tight">
              Let’s work together.
            </h2>
            <p className="max-w-xl text-sm leading-8 text-white/70">
              I’m open to new opportunities, collaborations, and high-impact
              projects. Reach out for thoughtful, international-quality digital
              work.
            </p>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="rounded-3xl border border-white/15 bg-white/10 px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-purple-400/20"
                whileFocus={{ scale: 1.01 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="rounded-3xl border border-white/15 bg-white/10 px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-purple-400/20"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <motion.textarea
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-3xl border border-white/15 bg-white/10 px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-purple-400/20"
              whileFocus={{ scale: 1.01 }}
            />

            <motion.button
              type="submit"
              className={`w-full rounded-3xl border px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] transition-all ${
                submitted
                  ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/20"
              }`}
              whileHover={!submitted ? { scale: 1.02 } : {}}
              whileTap={!submitted ? { scale: 0.98 } : {}}
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-white/60"
        >
          <a
            href="mailto:your@email.com"
            className="transition-all hover:text-white"
          >
            Email
          </a>
          <a href="https://github.com" className="transition-all hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com" className="transition-all hover:text-white">
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
