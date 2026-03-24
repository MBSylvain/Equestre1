import { courses } from '../data/courses';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Clock, Users, Target, BookOpen } from 'lucide-react';

const Courses = () => {
  return (
    <div className="pt-24 pb-20 bg-nature-sand/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display text-nature-forest mb-4">Nos Cours & Disciplines</h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            De l'initiation à la compétition, trouvez le cours qui correspond à vos envies et à votre niveau.
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {courses.map((course, index) => (
            <AnimatedSection key={course.id} delay={index * 0.1} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-equestrian border-4 border-white">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-primary-500 text-nature-forest font-bold px-6 py-2 rounded-full shadow-lg">
                    {course.level}
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6 text-left">
                <h2 className="text-3xl md:text-4xl font-display text-nature-forest">{course.title}</h2>
                <p className="text-lg text-neutral-dark leading-relaxed">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-nature-sand rounded-lg text-nature-forest">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-medium uppercase">Âge</p>
                      <p className="font-semibold text-nature-forest">{course.age}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-nature-sand rounded-lg text-nature-forest">
                      <Target size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-medium uppercase">Objectif</p>
                      <p className="font-semibold text-nature-forest">Progression</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-2xl border border-nature-sand/50 shadow-soft flex justify-between items-center">
                  <div>
                    <p className="text-sm text-neutral-medium">Tarif à la séance</p>
                    <p className="text-2xl font-bold text-nature-green">{course.price}</p>
                  </div>
                  <Button variant="outline">S'inscrire au cours</Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Galop Levels Section */}
        <AnimatedSection className="mt-32 p-12 bg-nature-forest text-white rounded-3xl text-center">
          <BookOpen className="mx-auto mb-6 text-primary-500" size={48} />
          <h2 className="text-3xl font-display mb-6">Passage des Galops</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-nature-sand">
            Nous organisons régulièrement des sessions d'examen pour valider vos acquis techniques et théoriques, 
            du Galop 1 au Galop 7. Préparez vos examens fédéraux avec nos moniteurs diplômés d'État.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5, 6, 7].map(level => (
              <div key={level} className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 font-bold">
                {level}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Courses;
