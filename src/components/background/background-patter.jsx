"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundPattern = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let dots = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize dots
    const initDots = () => {
      const dotCount = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
      );
      dots = [];

      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: Math.random() * 0.2 - 0.1,
          color: `rgba(200, 200, 200, ${Math.random() * 0.3 + 0.1})`,
        });
      }
    };
    let lastTime = 0;
    const fps = 30;
    const fpsInterval = 1000 / fps;
    // Draw dots
    const drawDots = (timestamp) => {
      if (!canvasRef.current) return;

      const now = timestamp;
      const elapsed = now - lastTime;

      if (elapsed > fpsInterval) {
        lastTime = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connecting lines
        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(200, 200, 200, ${1 - distance / 150})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(dots[i].x, dots[i].y);
              ctx.lineTo(dots[j].x, dots[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw dots
        dots.forEach((dot) => {
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fillStyle = dot.color;
          ctx.fill();

          // Update position
          dot.x += dot.speedX;
          dot.y += dot.speedY;

          // Boundary check
          if (dot.x < 0 || dot.x > canvas.width) dot.speedX *= -1;
          if (dot.y < 0 || dot.y > canvas.height) dot.speedY *= -1;
        });
      }

      animationFrameId = requestAnimationFrame(drawDots);
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      dots.forEach((dot) => {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (100 - distance) / 100;

          dot.x -= forceDirectionX * force * 2;
          dot.y -= forceDirectionY * force * 2;
        }
      });
    };

    // Initial setup
    resizeCanvas();
    initDots();
    drawDots();

    // Event listeners
    window.addEventListener("resize", () => {
      resizeCanvas();
      initDots();
    });
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-20 dark:opacity-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 1.5 }}
    />
  );
};
