import { installations } from '../data/installations';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';

const Installations = () => {
  return (
    <div className="pt-24 pb-20 bg-nature-sand/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display text-nature-forest mb-4">Nos Installations</h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Un complexe équestre complet et moderne pour le confort des chevaux et le plaisir des cavaliers.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {installations.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.1}>
              <div className="group overflow-hidden rounded-3xl bg-white shadow-soft border border-nature-sand/30 h-full flex flex-col">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-forest/60 to-transparent"></div>
                  <h2 className="absolute bottom-6 left-6 text-3xl font-display text-white">{item.name}</h2>
                </div>
                <div className="p-8 flex-grow">
                  <p className="text-lg text-neutral-dark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installations;
