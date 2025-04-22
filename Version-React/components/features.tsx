"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Film, Award } from "lucide-react"

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null)

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
    <section
      id="features"
      ref={featuresRef}
      className="py-16 md:py-24 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Fonctionnalités clés</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment EduFlex révolutionne l&apos;apprentissage en ligne avec des outils innovants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-50 rounded-full">
              <BookOpen size={32} className="text-[#1E88E5]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Parcours personnalisés</h3>
            <p className="text-gray-600">
              Notre IA analyse votre style d&apos;apprentissage et adapte le contenu pour maximiser votre progression et
              votre compréhension.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-50 rounded-full">
              <Film size={32} className="text-[#1E88E5]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Contenu multimédia interactif</h3>
            <p className="text-gray-600">
              Vidéos, quiz, exercices pratiques et simulations pour un apprentissage immersif et engageant qui stimule
              votre motivation.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-50 rounded-full">
              <Award size={32} className="text-[#1E88E5]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Certification reconnue</h3>
            <p className="text-gray-600">
              Obtenez des certifications valorisées par les employeurs et développez vos compétences professionnelles
              avec nos programmes accrédités.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
