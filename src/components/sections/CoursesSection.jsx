import { courses } from '../../data/courses';
import Card from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';

const CoursesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-primary-600 font-heading text-lg font-bold uppercase tracking-widest mb-2">Apprendre & Progresser</h2>
          <h3 className="text-4xl md:text-5xl font-display text-nature-forest">Nos Formations Équestres</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <AnimatedSection key={course.id} delay={index * 0.15}>
              <Card className="flex flex-col h-full border border-nature-sand/50">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary-500 text-nature-forest font-bold px-4 py-1 text-sm">
                    {course.level}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-display text-nature-forest">{course.title}</h4>
                    <span className="text-nature-green font-bold">{course.price}</span>
                  </div>
                  <p className="text-neutral-dark mb-6 flex-grow">
                    {course.description}
                  </p>
                  <p className="text-sm font-semibold text-secondary-bridle mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Âge : {course.age}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    En savoir plus
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
