"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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
      ref={heroRef}
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-blue-50 opacity-0 transition-opacity duration-1000"
      style={{ minHeight: "90vh" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Apprenez à votre rythme avec l&apos;IA qui comprend vos besoins
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              EduFlex personnalise votre parcours d&apos;apprentissage en ligne grâce à l&apos;intelligence artificielle
            </p>
            <Button
              size="lg"
              className="bg-[#00C853] hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Commencer gratuitement
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Apprenant utilisant la plateforme EduFlex"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
