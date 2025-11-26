import Image from "next/image"
import { Target, Rocket } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-[#f4f4f4] relative overflow-hidden">
      {/* Patrón decorativo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,37,70,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,37,70,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#38b6ff]/20 text-[#062546] rounded-full text-sm font-medium mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062546] mb-4 text-balance">
            Conoce <span className="text-[#38b6ff]">System Tech</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
          {/* Misión */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#b4c2d2]/30 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#38b6ff] rounded-xl flex items-center justify-center">
                <Target className="h-7 w-7 text-[#062546]" />
              </div>
              <h3 className="text-2xl font-bold text-[#062546]">Nuestra Misión</h3>
            </div>
            <p className="text-[#062546]/80 text-lg leading-relaxed">
              Ser la empresa de referencia en creación de sistemas personalizados para negocios, ofreciendo software
              adaptado, eficiente y con un solo pago, que realmente sirva al cliente y no lo limite con funciones
              inútiles ni suscripciones.
            </p>
          </div>

          {/* Imagen central del equipo */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
            <Image src="/tech-team-working-together-modern-office-collabora.jpg" alt="Equipo System Tech" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062546]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[#f4f4f4] font-semibold text-lg">Un equipo comprometido con tu éxito</p>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-[#062546] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#38b6ff] rounded-xl flex items-center justify-center">
                <Rocket className="h-7 w-7 text-[#062546]" />
              </div>
              <h3 className="text-2xl font-bold text-[#f4f4f4]">Nuestra Visión</h3>
            </div>
            <p className="text-[#b4c2d2] text-lg leading-relaxed">
              Convertirnos en una firma tecnológica pequeña pero poderosa que crezca por su reputación de calidad,
              cercanía y soluciones hechas a la medida, expandiéndonos a múltiples industrias y siendo reconocidos como
              el socio de software más flexible y humano.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#38b6ff]/10 via-transparent to-[#38b6ff]/10 rounded-2xl" />
          <div className="inline-flex flex-wrap justify-center gap-8 bg-white rounded-2xl p-10 shadow-lg border border-[#b4c2d2]/30 w-full">
            <div className="text-center px-8 group">
              <div className="w-16 h-16 bg-[#38b6ff]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#38b6ff]/20 transition-colors">
                <span className="text-3xl font-bold text-[#38b6ff]">100%</span>
              </div>
              <span className="text-[#062546]/70 font-medium">Personalizado</span>
            </div>
            <div className="hidden sm:block w-px bg-[#b4c2d2]/30 self-stretch" />
            <div className="text-center px-8 group">
              <div className="w-16 h-16 bg-[#38b6ff]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#38b6ff]/20 transition-colors">
                <span className="text-3xl font-bold text-[#38b6ff]">1</span>
              </div>
              <span className="text-[#062546]/70 font-medium">Solo Pago</span>
            </div>
            <div className="hidden sm:block w-px bg-[#b4c2d2]/30 self-stretch" />
            <div className="text-center px-8 group">
              <div className="w-16 h-16 bg-[#38b6ff]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#38b6ff]/20 transition-colors">
                <span className="text-3xl font-bold text-[#38b6ff]">0</span>
              </div>
              <span className="text-[#062546]/70 font-medium">Suscripciones</span>
            </div>
            <div className="hidden sm:block w-px bg-[#b4c2d2]/30 self-stretch" />
            <div className="text-center px-8 group">
              <div className="w-16 h-16 bg-[#38b6ff]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#38b6ff]/20 transition-colors">
                <span className="text-3xl font-bold text-[#38b6ff]">∞</span>
              </div>
              <span className="text-[#062546]/70 font-medium">Compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
