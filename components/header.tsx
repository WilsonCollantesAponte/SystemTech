"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#valores", label: "Valores" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#062546] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#f4f4f4] hover:text-[#38b6ff] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-[#38b6ff] hover:bg-[#38b6ff]/90 text-[#062546] font-semibold">
              <Link href="#contacto">Cotizar Proyecto</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f4f4f4]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#b4c2d2]/30">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#f4f4f4] hover:text-[#38b6ff] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-[#38b6ff] hover:bg-[#38b6ff]/90 text-[#062546] font-semibold w-full">
                <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  Cotizar Proyecto
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
