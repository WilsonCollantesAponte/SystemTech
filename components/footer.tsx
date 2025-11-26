import Link from "next/link"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-[#062546] border-t border-[#b4c2d2]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#servicios" className="text-[#b4c2d2] hover:text-[#38b6ff] transition-colors">
              Servicios
            </Link>
            <Link href="#valores" className="text-[#b4c2d2] hover:text-[#38b6ff] transition-colors">
              Valores
            </Link>
            <Link href="#nosotros" className="text-[#b4c2d2] hover:text-[#38b6ff] transition-colors">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-[#b4c2d2] hover:text-[#38b6ff] transition-colors">
              Contacto
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-[#b4c2d2]/20 text-center">
          <p className="text-[#b4c2d2] text-sm">© 2025 System Tech. Todos los derechos reservados.</p>
          <p className="text-[#38b6ff] text-sm mt-2 font-medium">Pago Único, Personalización Única</p>
        </div>
      </div>
    </footer>
  )
}
