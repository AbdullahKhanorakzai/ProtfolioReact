import React from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 mx-auto flex max-w-[1600px] flex-wrap items-center justify-between px-4 py-4 sm:px-12 transition-all duration-300 backdrop-blur-2xl ${
        scrolled
          ? "bg-white/70 border-b border-black/10 shadow-[0_20px_60px_rgba(15,15,15,0.06)]"
          : "bg-white/30 border-b border-transparent"
      }`}
    >
      <motion.span
        className="text-sm font-semibold tracking-[0.3em] uppercase"
        whileHover={{ scale: 1.02 }}
      >
        Abdullah
      </motion.span>

      <div className="hidden gap-8 text-[0.75rem] uppercase tracking-[0.35em] text-black/70 lg:flex">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            data-cursor="magnetic"
            whileHover={{ color: "#0f0f0f" }}
            className="transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <motion.a
        href="#contact"
        data-cursor="magnetic"
        className="mt-3 sm:mt-0 rounded-full border border-black/10 bg-black/95 px-5 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-white shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-all"
        whileHover={{ scale: 1.03, backgroundColor: "#0e0e0e" }}
        whileTap={{ scale: 0.96 }}
      >
        Hire Me
      </motion.a>
    </motion.nav>
  );
}
