import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Montserrat, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "System Tech | Software Personalizado a tu Medida",
  description:
    "Creamos software personalizado para tu negocio. Pago único, sin suscripciones. Soluciones a la medida que realmente sirven.",
  keywords: ["software personalizado", "desarrollo web", "sistema a medida", "pago único", "sin suscripción"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#062546",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${montserrat.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
