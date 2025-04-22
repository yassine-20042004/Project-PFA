"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      {/* Bootstrap data attributes for compatibility */}
      <div
        className="hidden"
        id="loginModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      ></div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900" id="loginModalLabel">
                Connexion
              </h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      Se souvenir de moi
                    </Label>
                  </div>
                  <a href="#" className="text-sm text-[#1E88E5] hover:underline">
                    Mot de passe oublié ?
                  </a>
                </div>
                <Button className="w-full bg-[#1E88E5] hover:bg-blue-700">Se connecter</Button>
                <div className="text-center text-sm text-gray-500">
                  Pas encore de compte ?{" "}
                  <a
                    href="#"
                    className="text-[#1E88E5] hover:underline"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                    onClick={() => {
                      closeModal()
                      document.getElementById("signupModalTrigger")?.click()
                    }}
                  >
                    S&apos;inscrire
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hidden button to trigger modal */}
      <button id="loginModalTrigger" className="hidden" onClick={openModal} />

      {/* Script to handle Bootstrap modal triggers */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const loginModal = document.getElementById('loginModal');
              if (loginModal) {
                loginModal.addEventListener('click', function(event) {
                  if (event.target === loginModal) {
                    document.getElementById('loginModalTrigger').click();
                  }
                });
              }
              
              // Handle data-bs-toggle="modal" for login modal
              document.querySelectorAll('[data-bs-toggle="modal"][data-bs-target="#loginModal"]').forEach(function(element) {
                element.addEventListener('click', function(event) {
                  event.preventDefault();
                  document.getElementById('loginModalTrigger').click();
                });
              });
            });
          `,
        }}
      />
    </>
  )
}
