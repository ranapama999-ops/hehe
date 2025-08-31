import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight, Info } from "lucide-react"

const routes = [
  {
    route: "Amsterdam Centre ↔ Schiphol",
    price: "€35",
  },
  {
    route: "Amsterdam Centraal Station ↔ Schiphol",
    price: "€35",
  },
  {
    route: "Amsterdam Nieuw-West ↔ Schiphol",
    price: "€30",
  },
  {
    route: "Amsterdam West ↔ Schiphol",
    price: "€32",
  },
]

export function Rates() {
  return (
    <section id="rates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vaste Prijzen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparante, vaste tarieven voor populaire routes. Geen verrassingen, geen verborgen kosten bij
            Schipholtaxi Centrale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span className="flex items-center">
                      <ArrowLeftRight className="w-5 h-5 mr-2 text-primary" />
                      {route.route}
                    </span>
                    <span className="text-2xl font-bold text-primary">{route.price}</span>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-card-foreground font-medium mb-2">Wat is inbegrepen bij elke rit:</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• BTW, tol en parkeerkosten</li>
                    <li>• Tot 30 minuten wachttijd</li>
                    <li>• Professionele bagagehulp</li>
                    <li>• Vlucht monitoring en vertraging aanpassingen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg">Krijg Uw Offerte</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
