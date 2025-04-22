"use client"
import { Modal, Form, Button, Row, Col } from "react-bootstrap"

const SignupModal = ({ show, onHide, onLoginClick }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Créer un compte</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Prénom" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Nom" required />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="signupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="votre@email.com" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signupPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="••••••••" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control type="password" placeholder="••••••••" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="termsCheck"
              label={
                <span>
                  J'accepte les{" "}
                  <a href="#" className="text-primary">
                    conditions d'utilisation
                  </a>{" "}
                  et la{" "}
                  <a href="#" className="text-primary">
                    politique de confidentialité
                  </a>
                </span>
              }
              required
            />
          </Form.Group>
          <Button variant="success" type="submit" className="w-100">
            S'inscrire
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p className="mb-0">
            Déjà inscrit ?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onLoginClick()
              }}
            >
              Se connecter
            </a>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default SignupModal
