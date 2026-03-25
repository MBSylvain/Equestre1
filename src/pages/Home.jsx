import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/ui/AnimatedSection';
import HorseCard from '../components/specific/HorseCard';
import CoursesSection from '../components/sections/CoursesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import { horses } from '../data/horses';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Le Petit Far West - Poney Club & Centre Équestre</title>
        <meta name="description" content="Découvrez Le Petit Far West : équitation Western (Reining, Bétail), cours classiques, mini-ferme et événements dans un cadre authentique au Pin." />
      </Helmet>
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20 px-6 container mx-auto">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary-600 font-heading text-lg uppercase tracking-widest mb-2 font-bold">Depuis 1996</h2>
          <h1 className="text-4xl md:text-5xl font-display text-nature-forest mb-6">Un Havre de Paix entre Terre et Forêt</h1>
          <p className="text-xl text-neutral-dark leading-relaxed">
            Situé au Pin, Le Petit Far West propose une expérience équestre unique aux accents Western.
            Du premier contact à la compétition, partagez notre passion pour le cheval.
          </p>
        </AnimatedSection>
      </section>

      {/* Featured Horses Section */}
      <section className="py-20 bg-nature-sand/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <AnimatedSection>
              <h2 className="text-primary-600 font-heading text-lg font-bold uppercase tracking-widest mb-2">Rencontrez nos partenaires</h2>
              <h3 className="text-4xl font-display text-nature-forest">L'Âme de l'Écurie</h3>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="hidden md:block">
              <button className="bg-nature-forest text-white px-8 py-3 rounded-full hover:bg-nature-green transition-all shadow-md">
                Voir tous nos chevaux
              </button>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {horses.slice(0, 3).map((horse, index) => (
              <AnimatedSection key={horse.id} delay={index * 0.1}>
                <HorseCard horse={horse} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <CoursesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;
