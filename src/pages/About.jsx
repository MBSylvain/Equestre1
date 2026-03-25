import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/ui/AnimatedSection';
import { team } from '../data/team';
import Card from '../components/ui/Card';
import { Heart, Shield, Award, Users } from 'lucide-react';
import entreclub from "../assets/entreclub.jpg";

const About = () => {
  const values = [
    { icon: <Heart />, title: "Bien-être animal", desc: "Le respect et le confort de nos chevaux sont notre priorité absolue." },
    { icon: <Shield />, title: "Sécurité", desc: "Un encadrement professionnel et des installations aux normes pour pratiquer sereinement." },
    { icon: <Award />, title: "Excellence", desc: "Une pédagogie adaptée pour vous amener au meilleur de vos capacités." },
    { icon: <Users />, title: "Convivialité", desc: "Un esprit club familial où chacun trouve sa place." }
  ];

  return (
    <div className="pt-24 pb-20 bg-nature-sand/5">
      <Helmet>
        <title>Notre Club - Le Petit Far West</title>
        <meta name="description" content="L'histoire, les valeurs et l'équipe passionnée du Petit Far West. Un établissement dédié à l'équitation Western et classique depuis 1996." />
      </Helmet>
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <AnimatedSection className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-display text-nature-forest mb-6">Notre Histoire</h1>
            <p className="text-xl text-neutral-dark mb-6 leading-relaxed">
              Fondé en 1996, Le Petit Far West est né d'une volonté simple : partager la passion de l'équitation dans un cadre respectueux et authentique.
            </p>
            <p className="text-lg text-neutral-dark leading-relaxed">
              D'abord une petite écurie familiale, nous avons grandi au fil des années pour devenir un établissement de référence dans la région, tout en préservant l'esprit de proximité et d'écoute qui nous caractérise.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-equestrian border-8 border-white group">
              <img 
                src={entreclub}
                alt="Notre centre" 
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Values Section */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-display text-nature-forest mb-4">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-soft border border-nature-sand/30 hover:border-primary-500 transition-colors">
                <div className="text-primary-500 mb-4 flex justify-center">{v.icon}</div>
                <h3 className="font-display text-xl text-nature-forest mb-2">{v.title}</h3>
                <p className="text-neutral-dark">{v.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Team Section */}
        <div className="mt-32">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-display text-nature-forest mb-4">L'Équipe</h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Des professionnels passionnés à votre service pour vous accompagner dans votre progression.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <AnimatedSection key={member.id} delay={i * 0.1}>
                <Card className="flex flex-col h-full text-center overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-display text-nature-forest mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-bold mb-4 uppercase text-sm tracking-widest">{member.role}</p>
                    <p className="text-neutral-dark text-sm mb-4 italic">{member.specialty}</p>
                    <p className="text-neutral-dark">{member.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
