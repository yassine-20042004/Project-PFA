"use client"

import { useEffect, useRef, useState } from "react"
import { Users, BookOpen, ThumbsUp } from "lucide-react"

export default function Statistics() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [students, setStudents] = useState(0)
  const [courses, setCourses] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const studentsInterval = setInterval(() => {
        setStudents((prev) => {
          const next = prev + 100
          if (next >= 10000) {
            clearInterval(studentsInterval)
            return 10000
          }
          return next
        })
      }, 20)

      const coursesInterval = setInterval(() => {
        setCourses((prev) => {
          const next = prev + 5
          if (next >= 500) {
            clearInterval(coursesInterval)
            return 500
          }
          return next
        })
      }, 20)

      const satisfactionInterval = setInterval(() => {
        setSatisfaction((prev) => {
          const next = prev + 1
          if (next >= 95) {
            clearInterval(satisfactionInterval)
            return 95
          }
          return next
        })
      }, 20)

      return () => {
        clearInterval(studentsInterval)
        clearInterval(coursesInterval)
        clearInterval(satisfactionInterval)
      }
    }
  }, [isVisible])

  return (
    <section
      ref={statsRef}
      className="py-16 md:py-24 bg-[#1E88E5] text-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Students */}
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/20 rounded-full">
              <Users size={32} className="text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">+{students.toLocaleString()}</div>
            <p className="text-xl text-white/80">étudiants</p>
          </div>

          {/* Courses */}
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/20 rounded-full">
              <BookOpen size={32} className="text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">+{courses}</div>
            <p className="text-xl text-white/80">cours disponibles</p>
          </div>

          {/* Satisfaction */}
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/20 rounded-full">
              <ThumbsUp size={32} className="text-white" />
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-2">{satisfaction}%</div>
            <p className="text-xl text-white/80">taux de satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
