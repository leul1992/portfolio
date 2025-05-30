import { notFound } from 'next/navigation'
import { projectsData } from '@/utils/helpers'
import ProjectDetailClient from './projectDetailClient'

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug)
  if (!project) return {}
  
  return {
    title: `${project.title} | My Projects`,
    description: project.description,
  }
}

export default function ProjectDetail({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug)
  
  if (!project) {
    return notFound()
  }

  return <ProjectDetailClient project={project} />
}