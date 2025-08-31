import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Hoeveel betaal ik?",
    answer:
      "Altijd een vaste prijs, bekend voor het boeken bij Schipholtaxi Centrale. Geen verborgen kosten, geen verrassingen. De prijs is inclusief BTW, tol, parkeren, tot 30 minuten wachttijd en bagageassistentie.",
  },
  {
    question: "Hoe monitoren jullie mijn vlucht?",
    answer:
      "Voer gewoon uw vluchtnummer in bij het boeken. Wij volgen automatisch uw vluchtstatus en passen de aankomsttijd van onze chauffeur dienovereenkomstig aan, zodat u zich nooit zorgen hoeft te maken over vertragingen.",
  },
  {
    question: "Kan ik boeken via WhatsApp?",
    answer:
      "Ja! Stuur uw ophaalgegevens, bestemming, datum en tijd via WhatsApp naar +31 85 212 9427. U krijgt een snelle bevestiging met uw vaste prijs van Schipholtaxi Centrale.",
  },
  {
    question: "Wat als mijn vlucht vertraagd is?",
    answer:
      "Geen probleem! Wij monitoren uw vlucht in real-time en passen automatisch de aankomsttijd van onze chauffeur aan. Er zijn geen extra kosten voor vluchtvertragingen bij Schipholtaxi Centrale.",
  },
  {
    question: "Wat met extra bagage of grotere groepen?",
    answer:
      "Laat ons gewoon uw wensen weten bij het boeken. Wij wijzen een stationwagen toe voor extra bagage of een busje voor grotere groepen. Prijzen kunnen variëren op basis van voertuigtype.",
  },
  {
    question: "Zijn jullie 24/7 beschikbaar?",
    answer:
      "Ja, Schipholtaxi Centrale is 24 uur per dag, 7 dagen per week, 365 dagen per jaar operationeel. Of het nu een vroege ochtendvlucht of een late aankomst is, wij zijn er voor u.",
  },
  {
    question: "Hoe ver van tevoren moet ik boeken?",
    answer:
      "Hoewel we last-minute boekingen accepteren, raden we aan om minstens 2-3 uur van tevoren te boeken om beschikbaarheid te garanderen, vooral tijdens drukke reisperiodes.",
  },
  {
    question: "Leveren jullie kinderzitjes?",
    answer:
      "Ja, we kunnen kinderzitjes leveren op verzoek. Geef de leeftijd en het gewicht van uw kind op bij het boeken, zodat we het juiste veiligheidszitje kunnen regelen.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Veelgestelde Vragen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alles wat u moet weten over onze taxiservice van Schipholtaxi Centrale.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
