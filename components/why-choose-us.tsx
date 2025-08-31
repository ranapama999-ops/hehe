import { Shield, Clock, Plane, Users, Smartphone, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Vaste Prijzen, Geen Verrassingen",
    description: "Transparante tarieven zonder verborgen kosten.",
  },
  {
    icon: Clock,
    title: "24/7 Beschikbaar",
    description: "Elke dag, dag en nacht, het hele jaar door.",
  },
  {
    icon: Plane,
    title: "Vlucht Monitoring",
    description: "Wij volgen uw vlucht en passen aan bij vertragingen.",
  },
  {
    icon: Users,
    title: "Professionele Chauffeurs",
    description: "Ervaren, vriendelijke en deskundige bestuurders.",
  },
  {
    icon: Smartphone,
    title: "Gemakkelijk Boeken",
    description: "Boek online, via app, telefonisch of WhatsApp.",
  },
  {
    icon: CheckCircle,
    title: "Betrouwbare Service",
    description: "10+ jaar ervaring in de Schiphol regio.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Waarom Kiezen voor Schipholtaxi Centrale?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ervaar het verschil met onze professionele, betrouwbare en klantgerichte taxi service naar Schiphol Airport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
