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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 px-6 sm:px-12 lg:px-20 bg-black text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,143,160,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(184,159,248,0.16),transparent_24%)]" />
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)]" />

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
              I’m open to meaningful collaborations, ambitious products, and
              high-quality digital work. Reach out for polished,
              international-grade frontend and full-stack support.
            </p>
          </motion.div>

          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            variants={itemVariants}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <label className="sr-only" htmlFor="contact-name">
                Your Name
              </label>
              <motion.input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="rounded-3xl border border-white/15 bg-white/10 px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-purple-400/20"
                whileFocus={{ scale: 1.01 }}
              />
              <label className="sr-only" htmlFor="contact-email">
                Your Email
              </label>
              <motion.input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="rounded-3xl border border-white/15 bg-white/10 px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-purple-400/20"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <label className="sr-only" htmlFor="contact-message">
              Your Message
            </label>
            <motion.textarea
              id="contact-message"
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-3xl border border-white/15 bg-white/10 px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-purple-400/20"
              whileFocus={{ scale: 1.01 }}
            />

            <motion.button
              type="submit"
              className="w-full rounded-3xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.35em] text-white transition-all hover:bg-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor="magnetic"
            >
              Send Message
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
          <a
            href="https://github.com"
            className="transition-all hover:text-white"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="transition-all hover:text-white"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
