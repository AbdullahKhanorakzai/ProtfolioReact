import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Success from "./components/Success";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HomePage = (
    <div className="relative overflow-hidden text-black bg-[radial-gradient(circle_at_top_left,rgba(232,143,160,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(184,159,248,0.08),transparent_22%),#faf9f6]">
      <motion.div className="fixed inset-x-0 top-0 h-1.5 z-50 pointer-events-none">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 shadow-[0_0_25px_rgba(232,143,160,0.3)]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.18 }}
        />
      </motion.div>

      <AnimatedBackground />
      <CustomCursor />
      <Navigation />

      <main className="relative">
        <Hero />
        <div className="h-px bg-black/5" />
        <About />
        <div className="h-px bg-black/5" />
        <Skills />
        <div className="h-px bg-black/5" />
        <Services />
        <div className="h-px bg-black/5" />
        <Projects />
        <div className="h-px bg-black/5" />
        <Contact />
      </main>

      <footer className="relative z-10 bg-transparent text-center py-10 text-xs font-medium tracking-[0.35em] uppercase text-black/50">
        <p>© 2026 Abdullah • Full-Stack Developer</p>
      </footer>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={HomePage} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={HomePage} />
    </Routes>
  );
}
