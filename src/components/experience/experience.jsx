"use client";
import { motion } from "framer-motion";
import { experienceData } from "@/utils/helpers";
import { FaCode } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 scroll-mt-20 bg-gradient-to-b from-white/10 to-transparent dark:from-gray-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group perspective-1000"
            >
              <div className="relative h-full transition-all duration-500 preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="backface-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/50">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-emerald-500 dark:text-emerald-400">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex flex-col gap-2 w-full justify-between items-center">
                    <span className="inline-block w-full text-center px-3 py-1 text-sm font-medium rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200">
                      {item.period}
                    </span>
                    <a className="text-right w-full" href="#testimonials">
                      <button className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        View Testimonials →
                      </button>
                    </a>
                  </div>
                </div>

                {/* Back of card - skills */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
                  <div className="h-full flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <FaCode className="text-blue-500 text-xl" />
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                        Key Skills
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
