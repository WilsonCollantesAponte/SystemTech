import Image from "next/image"
import { Palette, Sparkles, Eye, Users, Shield, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Palette,
    title: "Personalización",
    description: "Cada cliente es distinto y su sistema debe reflejar eso.",
  },
  {
    icon: Sparkles,
    title: "Simplicidad",
    description: "Interfaces limpias, lógicas, fáciles de usar.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Precios claros (pago único), sin costos ocultos.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo cercano con el cliente para entender sus verdaderas necesidades.",
  },
  {
    icon: Shield,
    title: "Calidad Técnica",
    description: "Desarrollo robusto, seguro y confiable.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Uso de herramientas modernas, IA cuando conviene, optimización constante.",
  },
]

export function ValuesSection() {
  return (
    <section id="valores" className="py-20 bg-[#062546] relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/abstract-technology-network-connections-blue-dark.jpg" alt="" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#062546] via-[#062546]/95 to-[#062546]" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#38b6ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#38b6ff]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#38b6ff]/20 text-[#38b6ff] rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-[#38b6ff]/20">
            Nuestros Valores
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f4f4f4] mb-4 text-balance">
            Lo que nos <span className="text-[#38b6ff]">Define</span>
          </h2>
          <p className="text-lg text-[#b4c2d2] max-w-2xl mx-auto text-pretty">
            Creemos en construir relaciones duraderas basadas en la confianza, la calidad y el compromiso con el éxito
            de tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-[#062546] to-[#0a3460] border border-[#b4c2d2]/20 hover:border-[#38b6ff]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#38b6ff]/10"
            >
              <div className="relative">
                {/* Número decorativo de fondo */}
                <span className="absolute -top-4 -left-2 text-7xl font-bold text-[#38b6ff]/5 select-none">
                  0{index + 1}
                </span>
                <div className="w-20 h-20 bg-gradient-to-br from-[#38b6ff]/30 to-[#38b6ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#38b6ff] group-hover:to-[#38b6ff]/80 transition-all duration-300 relative">
                  <value.icon className="h-10 w-10 text-[#38b6ff] group-hover:text-[#062546] transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#f4f4f4] mb-3">{value.title}</h3>
              <p className="text-[#b4c2d2] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
