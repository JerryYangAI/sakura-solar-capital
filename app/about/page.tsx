import AboutHero from '../../components/AboutHero'
import CompanyStory from '../../components/CompanyStory'
import Team from '../../components/Team'
import Values from '../../components/Values'

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyStory />
      <Values />
      <Team />
    </div>
  )
}
