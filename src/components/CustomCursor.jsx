import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const magneticSelector = "a[href], button, [data-cursor='magnetic']";

function isCursorTarget(target) {
  return target.closest && target.closest(magneticSelector);
}

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 220, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 220, damping: 28 });
  const [isActive, setIsActive] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const frameRef = useRef(null);
  const coords = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const media = window.matchMedia("(pointer:fine) and (min-width: 1024px)");
    if (!media.matches || prefersReducedMotion.matches) return undefined;

    const updatePosition = () => {
      cursorX.set(coords.current.x);
      cursorY.set(coords.current.y);
      frameRef.current = null;
    };

    const handleMouseMove = (event) => {
      coords.current = { x: event.clientX, y: event.clientY };
      setIsActive(true);
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(updatePosition);
    };

    const handleMouseOver = (event) => {
      if (isCursorTarget(event.target)) {
        setIsMagnetic(true);
      }
    };

    const handleMouseOut = (event) => {
      if (isCursorTarget(event.target)) {
        setIsMagnetic(false);
      }
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      setIsMagnetic(false);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [cursorX, cursorY]);

  if (typeof window === "undefined") return null;

  return (
    <div className="pointer-events-none fixed inset-0 hidden lg:block z-[9999]">
      <motion.div
        className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
        style={{ x: springX, y: springY }}
        animate={{
          scale: isMagnetic ? 2.2 : isActive ? 1.1 : 0.75,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_20px_rgba(255,255,255,0.45)]"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isMagnetic ? 1.35 : 1, opacity: isActive ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
      />
    </div>
  );
}
