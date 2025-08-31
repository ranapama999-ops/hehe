import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Klaar om te Rijden? Boek Nu of Neem Contact Op!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meerdere manieren om uw luchthaven transfer te boeken bij Schipholtaxi Centrale. Kies wat het beste voor u
            werkt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Snelle Boekingsopties</h3>

            <div className="space-y-4">
              <Button size="lg" className="w-full text-lg py-6">
                <Phone className="w-6 h-6 mr-3" />
                Bel Nu: +31 85 212 9427
              </Button>

              <Button size="lg" variant="outline" className="w-full text-lg py-6 bg-transparent" asChild>
                <a href="https://wa.me/31852129427">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp Ons
                </a>
              </Button>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefoon</p>
                      <p className="text-sm text-muted-foreground">+31 85 212 9427</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-sm text-muted-foreground">info@schipholtaxicentrale.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Servicegebied</p>
                      <p className="text-sm text-muted-foreground">Amsterdam & Schiphol</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Beschikbaarheid</p>
                      <p className="text-sm text-muted-foreground">24/7, 365 dagen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle>Boek Uw Rit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Naam</Label>
                  <Input id="name" placeholder="Uw naam" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefoon</Label>
                  <Input id="phone" placeholder="Uw telefoonnummer" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="uw@email.com" />
              </div>

              <div>
                <Label htmlFor="pickup">Ophaaladres</Label>
                <Input id="pickup" placeholder="Waar moeten we u ophalen?" />
              </div>

              <div>
                <Label htmlFor="dropoff">Bestemmingsadres</Label>
                <Input id="dropoff" placeholder="Waar gaat u naartoe?" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Datum</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="time">Tijd / Vluchtnummer</Label>
                  <Input id="time" placeholder="Tijd of vluchtnummer" />
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Aanvullende Opmerkingen</Label>
                <Textarea id="notes" placeholder="Speciale wensen?" rows={3} />
              </div>

              <Button className="w-full" size="lg">
                Krijg Offerte & Boek
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
