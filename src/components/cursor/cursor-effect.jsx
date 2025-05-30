"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { isMobile } from 'react-device-detect';

export const CursorEffect = () => {
  if (isMobile) return null; // Disable cursor effect on mobile devices
  const [isHovering, setIsHovering] = useState(false);
  const cursorSize = isHovering ? 60 : 20;
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    const handleLinkHover = () => {
      const links = document.querySelectorAll("a, button, .interactive");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => setIsHovering(true));
        link.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    handleLinkHover();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY, cursorSize]);

  return (
    <motion.div
      className="fixed hidden md:block pointer-events-none z-50 mix-blend-difference"
      style={{
        width: cursorSize,
        height: cursorSize,
        borderRadius: "50%",
        backgroundColor: "white",
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 0.5 : 1,
        opacity: isHovering ? 0.8 : 0.6,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {isHovering && (
        <motion.span
          className="absolute inset-0 flex items-center justify-center text-black text-xs font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        >
          
        </motion.span>
      )}
    </motion.div>
  );
};
