'use client'
import React from 'react';
import { Box } from '@mui/material'; // Retained MUI for Box only
import { FaGithub, FaEye, FaProjectDiagram } from 'react-icons/fa'; // GitHub and Eye icons from react-icons
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projectsData } from '@/utils/helpers';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stopColor="#333" offset="20%" />
      <stop stopColor="#222" offset="50%" />
      <stop stopColor="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlinkHref="#r" attributeName="x" from={\`-${w}\`} to={\`${w}\`} dur="1s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const getDataUrlWithShimmerEffect = (w, h) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1 * index,
          },
        }),
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      id="project"
      className="bg-secondary rounded p-5 relative group"
    >
      {/* Image Container */}
      <div className="relative">
      <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '61.66%', // This is the aspect ratio (370/600) for 16:9
        overflow: 'hidden',
        borderRadius: '8px', // Optional: Add some rounding if you want a uniform style
      }}
    >
      <Image
        src={project.image}
        alt={`${project.title} image`}
        layout="fill" // Fills the container while maintaining the aspect ratio
        objectFit="cover" // Ensures the image covers the area without distortion
        placeholder="blur"
        blurDataURL={getDataUrlWithShimmerEffect(600, 370)} // Placeholder for loading shimmer effect
      />
    </div>
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 10,
            '&:hover': {
              opacity: 1,
            },
          }}
          className="group-hover:opacity-100" // Ensures the overlay appears on hover
        >
          <div className="flex space-x-2">
            { project.links.github != "" && <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to project GitHub repository"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <FaGithub className="mr-2" /> Repository
            </a>}
          { project.links.preview != "" && <a
              href={project.links.preview}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to project live preview"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <FaEye className="mr-2" /> Live
            </a>}
          </div>
        </Box>
      </div>

      {/* Project Info */}
      <h3 className="my-2 text-lg font-medium">{project.title}</h3>
      <p className="text-muted-foreground">{project.description}</p>
      {project.disclaimer &&
        <p className="text-muted-foreground text-red-600 text-sm mt-2">
          {project.disclaimer}
        </p>
      }
      <div className="my-3 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span className="bg-muted border-2 rounded-full px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="my-10 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-4">
            <FaProjectDiagram />
            <h2 className="text-3xl font-bold text-center">Projects</h2>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
