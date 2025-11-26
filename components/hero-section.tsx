import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  const benefits = ["Pago único, sin suscripciones", "Software 100% personalizado", "Soporte dedicado"]

  return (
    <section className="relative min-h-screen flex items-center bg-[#062546] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/modern-dark-blue-tech-office-with-computer-screens.jpg" alt="" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062546] via-[#062546]/95 to-[#062546]/80" />
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38b6ff] rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#38b6ff] rounded-full blur-3xl opacity-10" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,182,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,182,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-[#38b6ff]/20 text-[#38b6ff] rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-[#38b6ff]/20">
              Software a tu medida
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f4f4f4] mb-6 leading-tight text-balance">
              Soluciones <span className="text-[#38b6ff]">Personalizadas</span> para tu Negocio
            </h1>
            <p className="text-lg md:text-xl text-[#b4c2d2] mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Creamos sistemas únicos que se adaptan a tus necesidades reales. Sin funciones inútiles, sin
              mensualidades. Un solo pago, tu software para siempre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                asChild
                size="lg"
                className="bg-[#38b6ff] hover:bg-[#38b6ff]/90 text-[#062546] font-semibold text-lg px-8"
              >
                <Link href="#contacto">
                  Cotiza tu Proyecto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#b4c2d2] text-[#f4f4f4] hover:bg-[#b4c2d2]/20 font-semibold text-lg px-8 bg-transparent"
              >
                <Link href="#servicios">Conoce Más</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-[#f4f4f4]">
                  <CheckCircle className="h-5 w-5 text-[#38b6ff]" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="relative w-[500px] h-[350px] rounded-xl overflow-hidden shadow-2xl border border-[#38b6ff]/20">
                <Image src="/modern-dashboard-interface-with-charts-analytics-d.jpg" alt="Dashboard System Tech" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062546]/60 to-transparent" />
              </div>

              {/* Floating card - stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-[#b4c2d2]/30 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#38b6ff] rounded-lg flex items-center justify-center">
                    <span className="text-[#062546] font-bold text-lg">+</span>
                  </div>
                  <div>
                    <p className="text-[#062546] font-bold text-xl">100%</p>
                    <p className="text-[#062546]/60 text-xs">Personalizado</p>
                  </div>
                </div>
              </div>

              {/* Floating card - mobile preview */}
              <div className="absolute -bottom-8 -left-8 w-32 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-[#f4f4f4]">
                <Image src="/mobile-app-interface-clean-design-blue-accent.jpg" alt="App móvil System Tech" fill className="object-cover" />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-16 -right-4 bg-[#062546] text-[#f4f4f4] rounded-full px-4 py-2 shadow-lg border border-[#38b6ff]/30">
                <span className="text-sm font-semibold">Pago Único</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
