import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-5">
      <Container>
        <Row className="g-4">
          {/* About */}
          <Col lg={3} md={6}>
            <h5 className="mb-4 fw-bold">EduFlex</h5>
            <p className="text-muted">
              Plateforme d'apprentissage en ligne personnalisée par l'IA pour une expérience éducative optimale.
            </p>
            <div className="social-icons mt-4">
              <a href="#" className="text-muted me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="text-muted me-3">
                <FaTwitter />
              </a>
              <a href="#" className="text-muted me-3">
                <FaInstagram />
              </a>
              <a href="#" className="text-muted">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6}>
            <h5 className="mb-4 fw-bold">Liens rapides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Accueil
                </a>
              </li>
              <li className="mb-2">
                <a href="#features" className="text-muted text-decoration-none">
                  Fonctionnalités
                </a>
              </li>
              <li className="mb-2">
                <a href="#how-it-works" className="text-muted text-decoration-none">
                  Comment ça marche
                </a>
              </li>
              <li className="mb-2">
                <a href="#testimonials" className="text-muted text-decoration-none">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </Col>

          {/* Legal */}
          <Col lg={3} md={6}>
            <h5 className="mb-4 fw-bold">Informations légales</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Conditions d'utilisation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Politique de confidentialité
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Cookies
                </a>
              </li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={6}>
            <h5 className="mb-4 fw-bold">Newsletter</h5>
            <p className="text-muted">Inscrivez-vous pour recevoir nos actualités et offres spéciales.</p>
            <Form className="mt-4">
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Votre email" />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                S'inscrire
              </Button>
            </Form>
          </Col>
        </Row>

        <div className="border-top border-secondary pt-4 mt-5 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} EduFlex. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
