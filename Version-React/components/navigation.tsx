"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#1E88E5]">
            <span className="bg-gradient-to-r from-[#1E88E5] to-[#00C853] bg-clip-text text-transparent">EduFlex</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
              Accueil
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
              Comment ça marche
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
              Témoignages
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-[#1E88E5] transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Se connecter
            </Button>
            <Button
              className="bg-[#1E88E5] hover:bg-[#1565C0] text-white"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              S&apos;inscrire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="#features"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href="#how-it-works"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link
              href="#testimonials"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Témoignages
            </Link>
            <Link
              href="#contact"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-3 px-4">
              <Button
                variant="outline"
                className="w-full border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                onClick={() => setIsOpen(false)}
              >
                Se connecter
              </Button>
              <Button
                className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                onClick={() => setIsOpen(false)}
              >
                S&apos;inscrire
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
