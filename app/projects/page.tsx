import ProjectsHero from '@/components/ProjectsHero'
import ProjectFilters from '@/components/ProjectFilters'
import ProjectGrid from '@/components/ProjectGrid'

export default function Projects() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectFilters />
      <ProjectGrid />
    </div>
  )
}