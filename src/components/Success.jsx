import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <section className="min-h-screen bg-[#09090c] text-white">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(235,111,174,0.16),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_25%)]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)]" />
        <motion.div
          className="relative z-10 flex w-full max-w-4xl flex-col items-center rounded-[36px] border border-white/10 bg-black/70 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-white shadow-[0_12px_35px_rgba(232,143,160,0.24)]">
            Message Received
          </span>
          <h1 className="text-center font-serif text-5xl font-light leading-tight text-white sm:text-6xl">
            Thank you for reaching out.
          </h1>
          <p className="mt-6 max-w-2xl text-center text-sm leading-8 text-slate-300 sm:text-base">
            Your message has been sent successfully. I’ll review your request
            and respond with the same premium care and speed that powers this
            portfolio.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="inline-flex rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all hover:border-white/20 hover:bg-white/15"
            >
              Back to Portfolio
            </Link>
            <a
              href="mailto:your@email.com"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all hover:border-white/20 hover:bg-white/15"
            >
              Send Another Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
