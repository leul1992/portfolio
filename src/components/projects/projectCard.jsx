// ./components/ProjectCard.jsx
'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaEye } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ProjectCard = ({ project, index }) => {
  const [isMounted, setIsMounted] = useState(false)
  const hasLinks = project.links && (project.links.github || project.links.preview)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg shadow-lg border border-white/20 dark:border-gray-800/50">
        {/* Static fallback content */}
        <Link href={`/projects/${project.slug}`} className="block">
          {/* ... rest of your static content ... */}
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.1,
            duration: 0.5
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-2xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20 dark:border-gray-800/50"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-500/10 to-emerald-500/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-400 dark:text-gray-600">
              {project.title.charAt(0)}
            </div>
          </div>
          
          {hasLinks && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
            >
              {project.links.github && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white rounded-lg hover:bg-white transition-all"
                >
                  <FaGithub className="text-lg" /> Code
                </motion.a>
              )}
              {project.links.preview && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  href={project.links.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/90 backdrop-blur-sm text-white rounded-lg hover:bg-blue-600 transition-all"
                >
                  <FaEye className="text-lg" /> Live Demo
                </motion.a>
              )}
            </motion.div>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <motion.h3 
              whileHover={{ x: 2 }}
              className="text-xl font-bold text-gray-800 dark:text-white"
            >
              {project.title}
            </motion.h3>
            
            <div className="flex gap-2">
              {project.links?.github && (
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href={project.links.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors"
                  aria-label="GitHub repository"
                >
                  <FaGithub className="text-lg" />
                </motion.a>
              )}
              {project.links?.preview && (
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href={project.links.preview} 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Live preview"
                >
                  <FaEye className="text-lg" />
                </motion.a>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-800/50">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <motion.span 
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100/80 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 backdrop-blur-sm shadow-inner"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Link>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full filter blur-3xl"
        />
      </div>
    </motion.div>
  )
}

export default ProjectCard