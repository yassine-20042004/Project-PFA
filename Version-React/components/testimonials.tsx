"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Étudiante en reconversion",
    image: "/placeholder.svg?height=100&width=100",
    text: "Grâce à EduFlex, j'ai pu me reconvertir dans le développement web en seulement 6 mois. La personnalisation du parcours a fait toute la différence !",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    role: "Entrepreneur",
    image: "/placeholder.svg?height=100&width=100",
    text: "J'avais besoin de compétences en marketing digital rapidement. EduFlex m'a proposé exactement ce qu'il me fallait, avec un rythme adapté à mon emploi du temps chargé.",
  },
  {
    id: 3,
    name: "Léa Moreau",
    role: "Professionnelle RH",
    image: "/placeholder.svg?height=100&width=100",
    text: "La certification obtenue sur EduFlex a été immédiatement reconnue par mon employeur. J'ai pu évoluer dans mon poste grâce aux compétences acquises.",
  },
]

export default function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className="py-16 md:py-24 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Témoignages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos étudiants disent de leur expérience avec EduFlex
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 md:p-10 rounded-xl shadow-lg text-center">
                    <div className="w-20 h-20 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-[#1E88E5]">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-gray-600 text-lg mb-6 italic">"{testimonial.text}"</p>
                    <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-[#1E88E5]">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 md:translate-x-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-[#1E88E5]" : "bg-gray-300"}`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
