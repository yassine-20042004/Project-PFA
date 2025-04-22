import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Statistics from "@/components/statistics"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import LoginModal from "@/components/login-modal"
import SignupModal from "@/components/signup-modal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <Faq />
      <Footer />
      <LoginModal />
      <SignupModal />
    </main>
  )
}
