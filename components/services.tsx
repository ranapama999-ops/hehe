import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, CreditCard, Smartphone, Mail, Car } from "lucide-react"

const steps = [
  {
    icon: MapPin,
    title: "Voer reisgegevens in",
    description: "Ophaal- en bestemmingsadres, datum & tijd of vluchtnummer.",
  },
  {
    icon: CreditCard,
    title: "Ontvang direct vaste prijs",
    description: "Duidelijke prijzen voordat u betaalt.",
  },
  {
    icon: Smartphone,
    title: "Kies boekmethode",
    description: "Online formulier, app, bellen of WhatsApp.",
  },
  {
    icon: Mail,
    title: "Bevestiging & tracking",
    description: "Ontvang e-mail & SMS, chauffeur volgt vlucht.",
  },
  {
    icon: Car,
    title: "Reis & ontspan",
    description: "Ontmoet chauffeur, geniet van soepele reis, bagagehulp inbegrepen.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hoe Het Werkt</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Eenvoudig, transparant boekingsproces ontworpen voor uw gemak bij Schipholtaxi Centrale.
          </p>
          <Button size="lg" className="text-lg px-8">
            Boek in 3 Minuten
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 p-6 bg-card rounded-lg border border-border">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-card-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
