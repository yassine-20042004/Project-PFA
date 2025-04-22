"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqItems = [
  {
    id: 1,
    question: "Comment fonctionne la personnalisation des parcours ?",
    answer:
      "Notre algorithme d'IA analyse votre style d'apprentissage, vos objectifs et votre niveau initial pour créer un parcours sur mesure. Il s'adapte en continu à votre progression et à vos résultats pour optimiser votre apprentissage.",
  },
  {
    id: 2,
    question: "Les certifications sont-elles reconnues par les entreprises ?",
    answer:
      "Oui, nos certifications sont reconnues par de nombreuses entreprises et organisations professionnelles. Nous travaillons en partenariat avec des experts de l'industrie pour garantir que nos programmes répondent aux exigences du marché du travail.",
  },
  {
    id: 3,
    question: "Puis-je accéder aux cours sur mobile ?",
    answer:
      "Absolument ! Notre plateforme est entièrement responsive et disponible sur tous les appareils. Nous proposons également une application mobile dédiée pour iOS et Android, vous permettant d'apprendre même hors connexion.",
  },
  {
    id: 4,
    question: "Combien de temps faut-il pour compléter un parcours ?",
    answer:
      "La durée varie selon le parcours choisi et votre rythme d'apprentissage. En moyenne, nos parcours professionnels peuvent être complétés en 3 à 6 mois avec un investissement de 5 à 10 heures par semaine. Notre système vous indique une estimation personnalisée en fonction de votre progression.",
  },
  {
    id: 5,
    question: "Y a-t-il un support disponible si je rencontre des difficultés ?",
    answer:
      "Oui, nous offrons un support complet : assistance technique 24/7, forum communautaire, et accès à des tuteurs experts dans chaque domaine. Pour les formules premium, vous bénéficiez également de sessions individuelles de coaching.",
  },
]

export default function Faq() {
  const faqRef = useRef<HTMLDivElement>(null)
  const [openItem, setOpenItem] = useState<number | null>(null)

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

    if (faqRef.current) {
      observer.observe(faqRef.current)
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current)
      }
    }
  }, [])

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section ref={faqRef} className="py-16 md:py-24 bg-gray-50 opacity-0 transition-opacity duration-1000">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Questions fréquentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur EduFlex et notre approche d&apos;apprentissage
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="font-semibold text-lg text-gray-900">{item.question}</span>
                {openItem === item.id ? (
                  <ChevronUp className="text-[#1E88E5] flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 bg-white border-t border-gray-100">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
