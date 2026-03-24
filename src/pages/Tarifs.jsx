import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';

const Tarifs = () => {
  const packs = [
    {
      name: "Découverte",
      price: "150€",
      period: "/ 5 séances",
      description: "Idéal pour faire ses premiers pas en toute sérénité.",
      features: ["Cours collectifs", "Équipement fourni", "Assurance comprise", "Valable 3 mois"]
    },
    {
      name: "Passionné",
      price: "240€",
      period: "/ 10 séances",
      description: "Le meilleur rapport qualité/prix pour progresser.",
      features: ["Cours collectifs", "Priorité réservation", "Suivi personnalisé", "Valable 6 mois"],
      featured: true
    },
    {
      name: "Annuel Club",
      price: "690€",
      period: "/ an",
      description: "Pour les cavaliers qui font partie de la famille.",
      features: ["1 cours / semaine", "Accès concours club", "Réduction stages", "Sorties plage offertes"]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-nature-sand/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display text-nature-forest mb-4">Tarifs & Abonnements</h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Chez nous, la passion est accessible. Choisissez la formule qui correspond à votre rythme.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packs.map((pack, index) => (
            <AnimatedSection key={pack.name} delay={index * 0.1} className="h-full">
              <div className={`h-full flex flex-col p-8 rounded-3xl border-2 ${pack.featured ? 'border-primary-500 bg-white shadow-equestrian scale-105' : 'border-nature-sand bg-white/50 shadow-soft'} transition-all`}>
                {pack.featured && (
                  <span className="bg-primary-500 text-nature-forest text-xs font-bold uppercase px-3 py-1 rounded-full w-fit mb-4">
                    Le plus populaire
                  </span>
                )}
                <h2 className="text-2xl font-display text-nature-forest mb-2">{pack.name}</h2>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-nature-forest">{pack.price}</span>
                  <span className="text-neutral-medium">{pack.period}</span>
                </div>
                <p className="text-neutral-dark mb-8">{pack.description}</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {pack.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-neutral-dark">
                      <Check className="text-primary-500" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant={pack.featured ? 'primary' : 'outline'} className="w-full">
                  Choisir cette offre
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Boarding prices */}
        <AnimatedSection className="mt-24 p-12 bg-white rounded-3xl shadow-soft border border-nature-sand/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-display text-nature-forest mb-4">Pension pour Chevaux</h2>
              <p className="text-lg text-neutral-dark mb-6">
                Nous accueillons vos chevaux en pension pré ou box/paddock. Des soins attentifs et une surveillance 24h/24 par nos professionnels.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-nature-sand/30 rounded-xl">
                  <p className="font-bold text-nature-forest">Pension Pré</p>
                  <p className="text-2xl font-bold text-nature-green">350€ <span className="text-sm font-normal text-neutral-medium">/ mois</span></p>
                </div>
                <div className="p-4 bg-nature-sand/30 rounded-xl">
                  <p className="font-bold text-nature-forest">Pension Box/Paddock</p>
                  <p className="text-2xl font-bold text-nature-green">550€ <span className="text-sm font-normal text-neutral-medium">/ mois</span></p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 text-center">
              <Button variant="secondary" size="lg">Demander un devis</Button>
              <p className="mt-4 text-sm text-neutral-medium italic">Visitez nos installations sur RDV</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Tarifs;
