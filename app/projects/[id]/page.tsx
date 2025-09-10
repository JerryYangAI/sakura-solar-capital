import { notFound } from 'next/navigation'
import { getProjectById } from '@/data/projects'
import ProjectDetails from '@/components/ProjectDetails'
import StructuredData from '@/components/StructuredData'
import Breadcrumb from '@/components/Breadcrumb'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <StructuredData type="Product" data={project} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { name: '电站投资', href: '/projects' },
            { name: project.name }
          ]} 
        />
      </div>
      <ProjectDetails project={project} />
    </div>
  )
}

export async function generateStaticParams() {
  const { projects } = await import('@/data/projects')
  
  return projects.map((project) => ({
    id: project.id,
  }))
}


