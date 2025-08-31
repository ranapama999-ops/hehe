import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Users, Luggage } from "lucide-react"

const vehicles = [
  {
    icon: Car,
    type: "Sedans",
    description: "Perfect voor individuele reizigers of koppels",
    features: ["4 passagiers", "Comfortabele zitplaatsen", "Standaard bagageruimte"],
  },
  {
    icon: Car,
    type: "Stationwagens",
    description: "Ideaal voor extra bagage of kleine groepen",
    features: ["5 passagiers", "Extra bagageruimte", "Gezinsvriendelijk"],
  },
  {
    icon: Users,
    type: "Busjes",
    description: "Beschikbaar op aanvraag voor grotere groepen",
    features: ["8+ passagiers", "Groepsvervoer", "Ruime opslag"],
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ons Wagenpark</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Moderne, goed onderhouden voertuigen van Schipholtaxi Centrale voor elke reisbehoefte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <vehicle.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{vehicle.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{vehicle.description}</p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                      <Luggage className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Bekijk Volledig Wagenpark
          </Button>
        </div>
      </div>
    </section>
  )
}
