import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Schipholtaxi Centrale – Vaste prijzen, 24/7 beschikbaar, professionele chauffeurs",
  description:
    "Schipholtaxi Centrale biedt betrouwbare taxi service naar/van Schiphol Airport met vaste prijzen. 24/7 beschikbaar, vlucht monitoring, professionele chauffeurs. Boek online, telefonisch of via WhatsApp. 10+ jaar ervaring.",
  keywords:
    "Schipholtaxi Centrale, Schiphol taxi, luchthaven vervoer Schiphol, vaste prijs taxi, Amsterdam luchthaven taxi, airport transfer, taxi Schiphol, Schiphol vervoer",
  alternates: {
    canonical: "https://www.schipholtaxi-centrale.com",
  },
  openGraph: {
    title: "Schipholtaxi Centrale – Betrouwbare Luchthaven Taxi Service",
    description:
      "Schipholtaxi Centrale: vaste prijzen, 24/7 beschikbaar, professionele chauffeurs. Boek uw taxi naar Schiphol Airport.",
    type: "website",
    locale: "nl_NL",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
