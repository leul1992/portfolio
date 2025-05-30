"use client";

import React, { useRef, useEffect } from "react";

// Utility function to get a random number between min and max
const inRange = (min, max) => Math.random() * (max - min) + min;

const SparklesCore = ({
  id = null,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 50,
  particleColor = "#FFFFFF",
  className = "",
}) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    // Generate particles
    particles.current = Array.from(
      { length: Math.floor(width * height * (particleDensity / 10000)) }, 
      () => ({
        x: inRange(0, width),
        y: inRange(0, height),
        size: inRange(minSize, maxSize),
        speed: inRange(0.5, 1.5),
        opacity: inRange(0.1, 0.3),
      })
    );

    const animate = () => {
      if (!canvasRef.current || !particles.current.length) return;

      const ctx = canvas.getContext("2d");
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      particles.current.forEach((particle) => {
        particle.y += particle.speed;
        if (particle.y > height) {
          particle.y = 0;
          particle.x = inRange(0, width);
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [minSize, maxSize, particleDensity, background, particleColor]);

  return (
    <canvas
      id={id}
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export const Sparkles = SparklesCore;
