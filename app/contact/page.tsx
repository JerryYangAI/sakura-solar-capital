import ContactHero from '../../components/ContactHero'
import ContactInfo from '../../components/ContactInfo'
import ContactForm from '../../components/ContactForm'
import ContactMap from '../../components/ContactMap'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </div>
  )
}
