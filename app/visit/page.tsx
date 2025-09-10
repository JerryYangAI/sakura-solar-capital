import VisitHero from '../../components/VisitHero'
import VisitServices from '../../components/VisitServices'
import VisitItinerary from '../../components/VisitItinerary'
import VisitBooking from '../../components/VisitBooking'

export default function Visit() {
  return (
    <div className="min-h-screen">
      <VisitHero />
      <VisitServices />
      <VisitItinerary />
      <VisitBooking />
    </div>
  )
}
