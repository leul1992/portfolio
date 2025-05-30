'use client';
import { motion } from 'framer-motion';
import { educationData } from '@/utils/helpers';

export default function Education() {
  return (
    <section id="education" className="py-20 scroll-mt-20 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-blue-500 filter blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-emerald-500 filter blur-3xl animate-float-delay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and certifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-emerald-500 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 h-5 w-5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transform -translate-x-1/2 -translate-y-3 z-10" />

                <div className={`md:w-5/12 p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
                      <p className="text-blue-500 dark:text-blue-400">{item.institution}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{item.description}</p>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
