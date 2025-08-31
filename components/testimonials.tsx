import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Altijd op tijd, vriendelijke chauffeur — geweldige start van mijn reis!",
    author: "Sarah M.",
    rating: 5,
  },
  {
    quote: "Vaste prijs, geen verrassingen, soepele rit met Schipholtaxi Centrale.",
    author: "John D.",
    rating: 5,
  },
  {
    quote: "Snelle WhatsApp boeking wanneer nodig — uitstekende service.",
    author: "Maria L.",
    rating: 5,
  },
  {
    quote: "Professionele chauffeurs en schone voertuigen. Zeer aanbevolen!",
    author: "Robert K.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Wat Onze Klanten Zeggen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Geloof ons niet zomaar op ons woord — hoor van tevreden klanten van Schipholtaxi Centrale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-card-foreground mb-4 italic">"{testimonial.quote}"</blockquote>
                <cite className="text-muted-foreground font-medium not-italic">— {testimonial.author}</cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
