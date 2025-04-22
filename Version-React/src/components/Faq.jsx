"use client"

import { useEffect, useRef } from "react"
import { Container, Accordion } from "react-bootstrap"

const faqItems = [
  {
    id: "1",
    question: "Comment fonctionne la personnalisation des parcours ?",
    answer:
      "Notre algorithme d'IA analyse votre style d'apprentissage, vos objectifs et votre niveau initial pour créer un parcours sur mesure. Il s'adapte en continu à votre progression et à vos résultats pour optimiser votre apprentissage.",
  },
  {
    id: "2",
    question: "Les certifications sont-elles reconnues par les entreprises ?",
    answer:
      "Oui, nos certifications sont reconnues par de nombreuses entreprises et organisations professionnelles. Nous travaillons en partenariat avec des experts de l'industrie pour garantir que nos programmes répondent aux exigences du marché du travail.",
  },
  {
    id: "3",
    question: "Puis-je accéder aux cours sur mobile ?",
    answer:
      "Absolument ! Notre plateforme est entièrement responsive et disponible sur tous les appareils. Nous proposons également une application mobile dédiée pour iOS et Android, vous permettant d'apprendre même hors connexion.",
  },
  {
    id: "4",
    question: "Combien de temps faut-il pour compléter un parcours ?",
    answer:
      "La durée varie selon le parcours choisi et votre rythme d'apprentissage. En moyenne, nos parcours professionnels peuvent être complétés en 3 à 6 mois avec un investissement de 5 à 10 heures par semaine. Notre système vous indique une estimation personnalisée en fonction de votre progression.",
  },
  {
    id: "5",
    question: "Y a-t-il un support disponible si je rencontre des difficultés ?",
    answer:
      "Oui, nous offrons un support complet : assistance technique 24/7, forum communautaire, et accès à des tuteurs experts dans chaque domaine. Pour les formules premium, vous bénéficiez également de sessions individuelles de coaching.",
  },
]

const Faq = () => {
  const faqRef = useRef(null)

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

    if (faqRef.current) {
      observer.observe(faqRef.current)
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current)
      }
    }
  }, [])

  return (
    <section id="faq" className="py-5 py-md-7 bg-light fade-in" ref={faqRef}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Questions fréquentes</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Tout ce que vous devez savoir sur EduFlex et notre approche d'apprentissage
          </p>
        </div>

        <Accordion defaultActiveKey="1" className="mx-auto" style={{ maxWidth: "800px" }}>
          {faqItems.map((item) => (
            <Accordion.Item key={item.id} eventKey={item.id} className="mb-3 border rounded-3 shadow-sm">
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}

export default Faq
