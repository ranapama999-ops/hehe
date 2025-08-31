"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, Shield, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
            Betrouwbare Schiphol Taxi Service
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-2">
            Vaste prijzen, 24/7 beschikbaar, professionele chauffeurs
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 px-2">
            <div className="flex items-center text-sm md:text-base text-muted-foreground">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">Vaste Prijzen</span>
            </div>
            <div className="flex items-center text-sm md:text-base text-muted-foreground">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">24/7 Beschikbaar</span>
            </div>
            <div className="flex items-center text-sm md:text-base text-muted-foreground">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary flex-shrink-0" />
              <span className="whitespace-nowrap">Vlucht Monitoring</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto">
              Boek Nu
            </Button>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <a href="tel:+31852129427" className="flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base">085-212 9427</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <a href="https://wa.me/31852129427" className="flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Opening Paragraph */}
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Welkom bij Schiphol Taxi Centrale, uw betrouwbare partner voor comfortabel en betaalbaar vervoer van en
              naar Schiphol Airport. Met meer dan 10 jaar ervaring bieden wij professionele taxidiensten met vaste
              prijzen, zodat u altijd weet waar u aan toe bent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
