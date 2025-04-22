"use client"

import { useEffect, useRef } from "react"

export default function HowItWorks() {
  const howItWorksRef = useRef<HTMLDivElement>(null)

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

    if (howItWorksRef.current) {
      observer.observe(howItWorksRef.current)
    }

    return () => {
      if (howItWorksRef.current) {
        observer.unobserve(howItWorksRef.current)
      }
    }
  }, [])

  return (
    <section
      id="how-it-works"
      ref={howItWorksRef}
      className="py-16 md:py-24 bg-gray-50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comment ça marche</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple en quatre étapes pour transformer votre apprentissage
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1E88E5]"></div>

          {/* Step 1 */}
          <div className="relative mb-16 md:mb-0">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Étape 1: Inscription et test de positionnement
                </h3>
                <p className="text-gray-600">
                  Créez votre compte et passez un test initial qui permet à notre IA d&apos;évaluer votre niveau et vos
                  préférences d&apos;apprentissage.
                </p>
              </div>
              <div className="md:w-16 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[#1E88E5] text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                  1
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16 md:text-left hidden md:block"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-16 md:mb-0 md:mt-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right order-1 md:order-1 hidden md:block"></div>
              <div className="md:w-16 flex justify-center order-2 md:order-2">
                <div className="w-12 h-12 rounded-full bg-[#1E88E5] text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                  2
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16 md:text-left order-3 md:order-3">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Étape 2: Recommandations personnalisées</h3>
                <p className="text-gray-600">
                  Recevez un parcours d&apos;apprentissage sur mesure avec des cours et des ressources adaptés à vos
                  objectifs et à votre style d&apos;apprentissage.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-16 md:mb-0 md:mt-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Étape 3: Apprentissage à votre rythme</h3>
                <p className="text-gray-600">
                  Suivez les cours quand vous voulez, où vous voulez. Notre plateforme s&apos;adapte à votre emploi du
                  temps et à votre progression.
                </p>
              </div>
              <div className="md:w-16 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-[#1E88E5] text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                  3
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16 md:text-left hidden md:block"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative md:mt-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right order-1 md:order-1 hidden md:block"></div>
              <div className="md:w-16 flex justify-center order-2 md:order-2">
                <div className="w-12 h-12 rounded-full bg-[#1E88E5] text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                  4
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16 md:text-left order-3 md:order-3">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Étape 4: Certification finale</h3>
                <p className="text-gray-600">
                  Validez vos acquis avec des évaluations finales et obtenez une certification reconnue que vous pourrez
                  partager avec votre réseau professionnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
