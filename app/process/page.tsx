import ProcessHero from '../../components/ProcessHero'
import ProcessSteps from '../../components/ProcessSteps'
import ProcessTimeline from '../../components/ProcessTimeline'
import ProcessFAQ from '../../components/ProcessFAQ'

export default function Process() {
  return (
    <div className="min-h-screen">
      <ProcessHero />
      <ProcessSteps />
      <ProcessTimeline />
      <ProcessFAQ />
    </div>
  )
}
