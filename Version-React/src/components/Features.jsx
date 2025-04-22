"use client"

import { useEffect, useRef } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { FaBookOpen, FaFilm, FaAward } from "react-icons/fa"

const Features = () => {
  const featuresRef = useRef(null)

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

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current)
      }
    }
  }, [])

  return (
    <section id="features" className="py-5 py-md-7 bg-white fade-in" ref={featuresRef}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Fonctionnalités clés</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Découvrez comment EduFlex révolutionne l'apprentissage en ligne avec des outils innovants
          </p>
        </div>

        <Row className="g-4">
          {/* Feature 1 */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm hover-shadow">
              <Card.Body className="text-center p-5">
                <div
                  className="feature-icon mb-4 mx-auto"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "var(--primary-light)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaBookOpen size={32} color="var(--primary)" />
                </div>
                <h3 className="h4 fw-bold mb-3">Parcours personnalisés</h3>
                <p className="text-muted">
                  Notre IA analyse votre style d'apprentissage et adapte le contenu pour maximiser votre progression et
                  votre compréhension.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 2 */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm hover-shadow">
              <Card.Body className="text-center p-5">
                <div
                  className="feature-icon mb-4 mx-auto"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "var(--primary-light)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaFilm size={32} color="var(--primary)" />
                </div>
                <h3 className="h4 fw-bold mb-3">Contenu multimédia interactif</h3>
                <p className="text-muted">
                  Vidéos, quiz, exercices pratiques et simulations pour un apprentissage immersif et engageant qui
                  stimule votre motivation.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 3 */}
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm hover-shadow">
              <Card.Body className="text-center p-5">
                <div
                  className="feature-icon mb-4 mx-auto"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "var(--primary-light)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaAward size={32} color="var(--primary)" />
                </div>
                <h3 className="h4 fw-bold mb-3">Certification reconnue</h3>
                <p className="text-muted">
                  Obtenez des certifications valorisées par les employeurs et développez vos compétences
                  professionnelles avec nos programmes accrédités.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
