"use client"

import { useState } from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"

const Navigation = ({ onLoginClick, onSignupClick }) => {
  const [expanded, setExpanded] = useState(false)

  const handleNavClick = () => {
    if (expanded) {
      setExpanded(false)
    }
  }

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          <span className="text-gradient">EduFlex</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={handleNavClick}>
              Accueil
            </Nav.Link>
            <Nav.Link href="#features" onClick={handleNavClick}>
              Fonctionnalités
            </Nav.Link>
            <Nav.Link href="#how-it-works" onClick={handleNavClick}>
              Comment ça marche
            </Nav.Link>
            <Nav.Link href="#testimonials" onClick={handleNavClick}>
              Témoignages
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button
              variant="outline-primary"
              className="me-2"
              onClick={() => {
                onLoginClick()
                handleNavClick()
              }}
            >
              Se connecter
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onSignupClick()
                handleNavClick()
              }}
            >
              S'inscrire
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
