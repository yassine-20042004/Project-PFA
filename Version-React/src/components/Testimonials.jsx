"use client"

import { useEffect, useRef } from "react"
import { Container, Carousel } from "react-bootstrap"

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Étudiante en reconversion",
    image: "https://via.placeholder.com/100",
    text: "Grâce à EduFlex, j'ai pu me reconvertir dans le développement web en seulement 6 mois. La personnalisation du parcours a fait toute la différence !",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Entrepreneur",
    image: "https://via.placeholder.com/100",
    text: "J'avais besoin de compétences en marketing digital rapidement. EduFlex m'a proposé exactement ce qu'il me fallait, avec un rythme adapté à mon emploi du temps chargé.",
  },
  {
    id: 3,
    name: "Léa Moreau",
    role: "Professionnelle RH",
    image: "https://via.placeholder.com/100",
    text: "La certification obtenue sur EduFlex a été immédiatement reconnue par mon employeur. J'ai pu évoluer dans mon poste grâce aux compétences acquises.",
  },
]

const Testimonials = () => {
  const testimonialsRef = useRef(null)

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current)
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current)
      }
    }
  }, [])

  return (
    <section id="testimonials" className="py-5 py-md-7 bg-white fade-in" ref={testimonialsRef}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Témoignages</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Découvrez ce que nos étudiants disent de leur expérience avec EduFlex
          </p>
        </div>

        <Carousel indicators={true} controls={true} interval={5000} className="testimonial-carousel">
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div
                className="testimonial-card bg-light p-4 p-md-5 rounded-3 shadow-sm mx-auto"
                style={{ maxWidth: "800px" }}
              >
                <div className="text-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="rounded-circle border border-4 border-primary"
                    width="100"
                    height="100"
                    style={{ objectFit: "cover" }}
                  />
                  <h4 className="mt-3 mb-1">{testimonial.name}</h4>
                  <p className="text-primary mb-4">{testimonial.role}</p>
                  <div className="testimonial-text">
                    <p className="lead fst-italic">"{testimonial.text}"</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}

export default Testimonials
