"use client"

import { useEffect, useRef, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaUsers, FaBookOpen, FaThumbsUp } from "react-icons/fa"

const Statistics = () => {
  const statsRef = useRef(null)
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
            entry.target.classList.add("active")
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

  const iconStyle = {
    width: "70px",
    height: "70px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    marginBottom: "1rem",
  }

  return (
    <section id="statistics" className="py-5 py-md-7 bg-primary text-white fade-in" ref={statsRef}>
      <Container>
        <Row className="text-center">
          {/* Students */}
          <Col md={4} className="mb-5 mb-md-0">
            <div style={iconStyle}>
              <FaUsers size={32} />
            </div>
            <div className="h1 fw-bold mb-2">+{students.toLocaleString()}</div>
            <p className="h5 fw-normal">étudiants</p>
          </Col>

          {/* Courses */}
          <Col md={4} className="mb-5 mb-md-0">
            <div style={iconStyle}>
              <FaBookOpen size={32} />
            </div>
            <div className="h1 fw-bold mb-2">+{courses}</div>
            <p className="h5 fw-normal">cours disponibles</p>
          </Col>

          {/* Satisfaction */}
          <Col md={4}>
            <div style={iconStyle}>
              <FaThumbsUp size={32} />
            </div>
            <div className="h1 fw-bold mb-2">{satisfaction}%</div>
            <p className="h5 fw-normal">taux de satisfaction</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Statistics
