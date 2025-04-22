"use client"
import { Modal, Form, Button } from "react-bootstrap"

const LoginModal = ({ show, onHide, onSignupClick }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Connexion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="votre@email.com" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="••••••••" required />
          </Form.Group>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <Form.Check type="checkbox" id="rememberMe" label="Se souvenir de moi" />
            <a href="#" className="text-primary">
              Mot de passe oublié ?
            </a>
          </div>
          <Button variant="primary" type="submit" className="w-100">
            Se connecter
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p className="mb-0">
            Pas encore de compte ?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSignupClick()
              }}
            >
              S'inscrire
            </a>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal
