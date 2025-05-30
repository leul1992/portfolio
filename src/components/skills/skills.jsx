"use client";
import React, { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { SkillData } from "@/utils/helpers";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const skillLevels = ["Familiar", "Good", "Advanced"];

const Skill = () => {
  const [activeLevel, setActiveLevel] = useState("Advanced");
  const { resolvedTheme } = useTheme();

  const activeSkills = SkillData.find(item => item[activeLevel])?.[activeLevel] || [];

  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaLaptopCode className="text-blue-500 text-xl" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              My Skills
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've worked with, categorized by proficiency level.
          </p>
        </motion.div>

        {/* Skill Level Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            {skillLevels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeLevel === level
                    ? 'bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-3">
                {skill.icon}
              </div>
              <h3 className="font-medium text-center text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
