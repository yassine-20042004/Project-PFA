"use client"

import { useEffect, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"

const HowItWorks = () => {
  const howItWorksRef = useRef(null)

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

    if (howItWorksRef.current) {
      observer.observe(howItWorksRef.current)
    }

    return () => {
      if (howItWorksRef.current) {
        observer.unobserve(howItWorksRef.current)
      }
    }
  }, [])

  const timelineStyles = {
    line: {
      position: "absolute",
      top: 0,
      left: "50%",
      width: "2px",
      height: "100%",
      backgroundColor: "var(--primary)",
      transform: "translateX(-50%)",
    },
    point: {
      width: "50px",
      height: "50px",
      backgroundColor: "var(--primary)",
      color: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "1.25rem",
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  }

  return (
    <section id="how-it-works" className="py-5 py-md-7 bg-light fade-in" ref={howItWorksRef}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Comment ça marche</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Un processus simple en quatre étapes pour transformer votre apprentissage
          </p>
        </div>

        <div className="position-relative">
          {/* Timeline line (visible on desktop) */}
          <div className="d-none d-md-block" style={timelineStyles.line}></div>

          {/* Step 1 */}
          <Row className="mb-5 position-relative">
            <Col md={6} className="text-md-end pe-md-5">
              <h3 className="h4 fw-bold mb-3">Étape 1: Inscription et test de positionnement</h3>
              <p className="text-muted">
                Créez votre compte et passez un test initial qui permet à notre IA d'évaluer votre niveau et vos
                préférences d'apprentissage.
              </p>
            </Col>
            <Col md={6} className="position-relative">
              <div style={timelineStyles.point}>1</div>
            </Col>
          </Row>

          {/* Step 2 */}
          <Row className="mb-5 position-relative">
            <Col md={6} className="position-relative order-md-1">
              <div style={timelineStyles.point}>2</div>
            </Col>
            <Col md={6} className="ps-md-5 order-md-2">
              <h3 className="h4 fw-bold mb-3">Étape 2: Recommandations personnalisées</h3>
              <p className="text-muted">
                Recevez un parcours d'apprentissage sur mesure avec des cours et des ressources adaptés à vos objectifs
                et à votre style d'apprentissage.
              </p>
            </Col>
          </Row>

          {/* Step 3 */}
          <Row className="mb-5 position-relative">
            <Col md={6} className="text-md-end pe-md-5">
              <h3 className="h4 fw-bold mb-3">Étape 3: Apprentissage à votre rythme</h3>
              <p className="text-muted">
                Suivez les cours quand vous voulez, où vous voulez. Notre plateforme s'adapte à votre emploi du temps et
                à votre progression.
              </p>
            </Col>
            <Col md={6} className="position-relative">
              <div style={timelineStyles.point}>3</div>
            </Col>
          </Row>

          {/* Step 4 */}
          <Row className="position-relative">
            <Col md={6} className="position-relative order-md-1">
              <div style={timelineStyles.point}>4</div>
            </Col>
            <Col md={6} className="ps-md-5 order-md-2">
              <h3 className="h4 fw-bold mb-3">Étape 4: Certification finale</h3>
              <p className="text-muted">
                Validez vos acquis avec des évaluations finales et obtenez une certification reconnue que vous pourrez
                partager avec votre réseau professionnel.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
