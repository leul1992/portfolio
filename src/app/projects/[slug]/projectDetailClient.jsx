'use client'
import { FaGithub, FaEye, FaArrowLeft } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectDetailClient({ project }) {
   return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {project.description}
          </p>
          {project.disclaimer && (
            <p className="text-sm text-red-500 dark:text-red-400 mt-2">
              {project.disclaimer}
            </p>
          )}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - media */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project image */}
            {project.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}
          </div>

          {/* Right column - details */}
          <div className="space-y-8">
            {/* Project links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Project Links
              </h2>
              <div className="space-y-3">
                {project.links?.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Source Code</span>
                  </a>
                ) : (
                  <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400">
                    Source code not available
                  </div>
                )}
                {project.links?.preview ? (
                  <a
                    href={project.links.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <FaEye className="text-xl" />
                    <span>View Live Demo</span>
                  </a>
                ) : (
                  <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-500 dark:text-gray-400">
                    Live demo not available
                  </div>
                )}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}