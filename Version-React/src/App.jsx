"use client"

import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Statistics from "./components/Statistics"
import Testimonials from "./components/Testimonials"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import LoginModal from "./components/LoginModal"
import SignupModal from "./components/SignupModal"

function App() {
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [showSignupModal, setShowSignupModal] = React.useState(false)

  const handleLoginClick = () => {
    setShowLoginModal(true)
    setShowSignupModal(false)
  }

  const handleSignupClick = () => {
    setShowSignupModal(true)
    setShowLoginModal(false)
  }

  const handleCloseModals = () => {
    setShowLoginModal(false)
    setShowSignupModal(false)
  }

  return (
    <div className="App">
      <Navigation onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <Faq />
      <Footer />

      <LoginModal show={showLoginModal} onHide={handleCloseModals} onSignupClick={handleSignupClick} />

      <SignupModal show={showSignupModal} onHide={handleCloseModals} onLoginClick={handleLoginClick} />
    </div>
  )
}

export default App
