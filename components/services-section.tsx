import Image from "next/image"
import { Code, Smartphone, Database, Bot, Settings, Headphones } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas, rápidas y seguras. Desde landing pages hasta sistemas complejos.",
    image: "/web-development-code-editor-modern-interface.jpg",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas y multiplataforma que conectan tu negocio con tus clientes.",
    image: "/mobile-app-development-smartphone-mockup.jpg",
  },
  {
    icon: Database,
    title: "Sistemas de Gestión",
    description: "ERP, CRM y sistemas administrativos diseñados específicamente para tu operación.",
    image: "/business-management-dashboard-analytics.jpg",
  },
  {
    icon: Bot,
    title: "Integración IA",
    description: "Automatización inteligente y asistentes virtuales para optimizar tus procesos.",
    image: "/artificial-intelligence-robot-technology-futuristi.jpg",
  },
  {
    icon: Settings,
    title: "APIs y Integraciones",
    description: "Conectamos tus sistemas existentes para que trabajen juntos de forma eficiente.",
    image: "/api-integration-connected-systems-network.jpg",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description: "Acompañamiento post-implementación para asegurar que tu sistema funcione siempre.",
    image: "/customer-support-team-professional-office.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-[#f4f4f4] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,37,70,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,37,70,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#38b6ff]/20 text-[#062546] rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#062546] mb-4 text-balance">
            Soluciones Tecnológicas <span className="text-[#38b6ff]">Completas</span>
          </h2>
          <p className="text-lg text-[#062546]/70 max-w-2xl mx-auto text-pretty">
            Desarrollamos software que realmente resuelve tus problemas, sin funciones innecesarias que solo complican
            tu día a día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-white border-[#b4c2d2]/30 hover:shadow-xl hover:border-[#38b6ff]/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Imagen del servicio */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>

              <CardHeader className="relative -mt-8">
                <div className="w-14 h-14 bg-[#38b6ff]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#38b6ff] transition-colors border-4 border-white shadow-lg">
                  <service.icon className="h-7 w-7 text-[#38b6ff] group-hover:text-[#062546] transition-colors" />
                </div>
                <CardTitle className="text-xl text-[#062546]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#062546]/70 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
