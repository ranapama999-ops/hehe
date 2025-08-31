import { Phone, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Schipholtaxi Centrale</h3>
            <p className="text-muted-foreground mb-4">
              10 jaar ervaring in het Schiphol gebied, 50+ chauffeurs, 20+ voertuigen. Uw vertrouwde partner voor
              betrouwbare luchthaven transfers.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+31852129427" className="flex items-center text-muted-foreground hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                +31 85 212 9427
              </a>
              <a
                href="https://wa.me/31852129427"
                className="flex items-center text-muted-foreground hover:text-primary"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <a
                href="mailto:info@schipholtaxicentrale.com"
                className="flex items-center text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@schipholtaxicentrale.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#rates" className="text-muted-foreground hover:text-primary">
                  Tarieven
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-muted-foreground hover:text-primary">
                  Wagenpark
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary">
                  Veelgestelde Vragen
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Juridisch</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacybeleid
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary">
                  Algemene Voorwaarden
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary">
                  Over Ons
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© {currentYear} Schipholtaxi Centrale. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
