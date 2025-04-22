"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      {/* Bootstrap data attributes for compatibility */}
      <div
        className="hidden"
        id="signupModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      ></div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900" id="signupModalLabel">
                Créer un compte
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" type="text" placeholder="Prénom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" type="text" placeholder="Nom" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupEmail">Email</Label>
                  <Input id="signupEmail" type="email" placeholder="votre@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupPassword">Mot de passe</Label>
                  <Input id="signupPassword" type="password" placeholder="••••••••" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    J&apos;accepte les{" "}
                    <a href="#" className="text-[#1E88E5] hover:underline">
                      conditions d&apos;utilisation
                    </a>{" "}
                    et la{" "}
                    <a href="#" className="text-[#1E88E5] hover:underline">
                      politique de confidentialité
                    </a>
                  </Label>
                </div>
                <Button className="w-full bg-[#00C853] hover:bg-green-600">S&apos;inscrire</Button>
                <div className="text-center text-sm text-gray-500">
                  Déjà inscrit ?{" "}
                  <a
                    href="#"
                    className="text-[#1E88E5] hover:underline"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    onClick={() => {
                      closeModal()
                      document.getElementById("loginModalTrigger")?.click()
                    }}
                  >
                    Se connecter
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hidden button to trigger modal */}
      <button id="signupModalTrigger" className="hidden" onClick={openModal} />

      {/* Script to handle Bootstrap modal triggers */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const signupModal = document.getElementById('signupModal');
              if (signupModal) {
                signupModal.addEventListener('click', function(event) {
                  if (event.target === signupModal) {
                    document.getElementById('signupModalTrigger').click();
                  }
                });
              }
              
              // Handle data-bs-toggle="modal" for signup modal
              document.querySelectorAll('[data-bs-toggle="modal"][data-bs-target="#signupModal"]').forEach(function(element) {
                element.addEventListener('click', function(event) {
                  event.preventDefault();
                  document.getElementById('signupModalTrigger').click();
                });
              });
            });
          `,
        }}
      />
    </>
  )
}
