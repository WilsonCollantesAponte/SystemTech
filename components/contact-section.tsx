"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-20 bg-[#062546] relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/modern-tech-office-workspace-night-city-view.jpg" alt="" fill className="object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#062546] via-[#062546]/95 to-[#062546]" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#38b6ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#38b6ff]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#38b6ff]/20 text-[#38b6ff] rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-[#38b6ff]/20">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f4f4f4] mb-4 text-balance">
            Escuchamos tus <span className="text-[#38b6ff]">Necesidades</span>
          </h2>
          <p className="text-lg text-[#b4c2d2] max-w-2xl mx-auto text-pretty">
            Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución para tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#f4f4f4] mb-6">¿Listo para transformar tu negocio?</h3>
            <p className="text-[#b4c2d2] mb-8">
              Agenda una consulta gratuita y descubre cómo un software personalizado puede hacer crecer tu empresa.
            </p>

            <div className="relative h-48 rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image src="/business-meeting-discussion-planning-strategy.jpg" alt="Consultoría System Tech" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#062546]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[#f4f4f4] font-semibold">Consulta gratuita</p>
                <p className="text-[#38b6ff] text-sm">Sin compromisos</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a3460]/50 border border-[#38b6ff]/10 hover:border-[#38b6ff]/30 transition-colors">
                <div className="w-12 h-12 bg-[#38b6ff]/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#38b6ff]" />
                </div>
                <div>
                  <p className="text-[#b4c2d2] text-sm">Email</p>
                  <p className="text-[#f4f4f4] font-medium">contacto@systemtech.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a3460]/50 border border-[#38b6ff]/10 hover:border-[#38b6ff]/30 transition-colors">
                <div className="w-12 h-12 bg-[#38b6ff]/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#38b6ff]" />
                </div>
                <div>
                  <p className="text-[#b4c2d2] text-sm">Teléfono</p>
                  <p className="text-[#f4f4f4] font-medium">+52 (55) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a3460]/50 border border-[#38b6ff]/10 hover:border-[#38b6ff]/30 transition-colors">
                <div className="w-12 h-12 bg-[#38b6ff]/20 rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#38b6ff]" />
                </div>
                <div>
                  <p className="text-[#b4c2d2] text-sm">Ubicación</p>
                  <p className="text-[#f4f4f4] font-medium">Ciudad de México, MX</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Decoración del formulario */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#38b6ff]/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            {submitted ? (
              <div className="text-center py-12 relative">
                <div className="w-20 h-20 bg-[#38b6ff] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#38b6ff]/30">
                  <Send className="h-10 w-10 text-[#062546]" />
                </div>
                <h3 className="text-2xl font-bold text-[#062546] mb-2">¡Mensaje Enviado!</h3>
                <p className="text-[#062546]/70">Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#062546] mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      required
                      className="border-[#b4c2d2] focus:border-[#38b6ff] focus:ring-[#38b6ff]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#062546] mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      className="border-[#b4c2d2] focus:border-[#38b6ff] focus:ring-[#38b6ff]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#062546] mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    placeholder="Nombre de tu empresa"
                    className="border-[#b4c2d2] focus:border-[#38b6ff] focus:ring-[#38b6ff]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#062546] mb-2">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe brevemente lo que necesitas..."
                    rows={4}
                    required
                    className="border-[#b4c2d2] focus:border-[#38b6ff] focus:ring-[#38b6ff]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#38b6ff] hover:bg-[#38b6ff]/90 text-[#062546] font-semibold text-lg py-6 shadow-lg shadow-[#38b6ff]/20 hover:shadow-xl hover:shadow-[#38b6ff]/30 transition-all"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
