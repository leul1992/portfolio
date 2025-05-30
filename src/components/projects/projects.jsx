import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa'
import { projectsData } from '@/utils/helpers'
import ProjectCard from './projectCard'

const Projects = () => {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaProjectDiagram className="text-blue-500 text-xl" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects