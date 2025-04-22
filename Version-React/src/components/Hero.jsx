"use client"

import { useEffect, useRef } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section
      className="hero-section fade-in"
      ref={heroRef}
      style={{
        paddingTop: "120px",
        paddingBottom: "80px",
        background: "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">Apprenez à votre rythme avec l'IA qui comprend vos besoins</h1>
            <p className="lead mb-5">
              EduFlex personnalise votre parcours d'apprentissage en ligne grâce à l'intelligence artificielle
            </p>
            <Button variant="success" size="lg" className="px-5 py-3 rounded-pill">
              Commencer gratuitement
            </Button>
          </Col>
          <Col lg={6}>
            <div className="hero-image shadow rounded" style={{ transition: "transform 0.3s ease" }}>
              <img
                src="https://via.placeholder.com/800x600"
                alt="Apprenant utilisant la plateforme EduFlex"
                className="img-fluid rounded"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
