import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';
import { testimonials } from '../../data/testimonials';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-nature-sand/20">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-primary-600 font-heading text-lg font-bold uppercase tracking-widest mb-2">Témoignages</h2>
          <h3 className="text-4xl md:text-5xl font-display text-nature-forest">Ce qu'en disent nos cavaliers</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i * 0.1}>
              <Card className="p-8 h-full flex flex-col relative overflow-visible">
                <div className="absolute -top-4 -left-4 bg-primary-500 text-nature-forest p-3 rounded-xl shadow-lg">
                  <Quote size={20} fill="currentColor" />
                </div>
                <p className="text-lg text-neutral-dark italic mb-8 flex-grow">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4 border-t border-nature-sand pt-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary-500" />
                  <div>
                    <h4 className="font-bold text-nature-forest">{t.name}</h4>
                    <p className="text-sm text-neutral-medium">{t.role}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
