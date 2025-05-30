"use client";

import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/header/button";

function Introduction() {
  const [isClient, setIsClient] = useState(false);
  // const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Leulseged
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-2xl md:text-4xl"
              />
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
              I craft exceptional digital experiences with modern technologies.
              Let's build something amazing together!
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Button
              asChild
              variant="default"
              size="lg"
              className="group relative overflow-hidden"
            >
              <a href="/cv/Cv_Leulseged.pdf" download>
                <div className="flex items-center">
                  <span className="relative z-10">Download CV</span>
                  <FaDownload className="ml-2 transition-all duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
                  {/* Optional animated background effect */}
                  <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                </div>
              </a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Introduction;
