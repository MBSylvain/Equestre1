import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { horses } from '../data/horses';
import HorseCard from '../components/specific/HorseCard';
import AnimatedSection from '../components/ui/AnimatedSection';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';

const Horses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [disciplineFilter, setDisciplineFilter] = useState('All');

  const filteredHorses = useMemo(() => {
    return horses.filter(horse => {
      const matchesSearch = horse.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            horse.breed.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDiscipline = disciplineFilter === 'All' || horse.discipline.includes(disciplineFilter);
      return matchesSearch && matchesDiscipline;
    });
  }, [searchTerm, disciplineFilter]);

  const disciplines = ['All', 'CSO', 'Dressage', 'Endurance', 'Loisir', 'Initiation'];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-nature-sand/10">
      <Helmet>
        <title>Nos Chevaux - Centre Équestre</title>
        <meta name="description" content="Faites connaissance avec nos chevaux et poneys. De la noble Étoile au malicieux Titouan, trouvez votre partenaire idéal." />
      </Helmet>
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-display text-nature-forest mb-4">Nos Partenaires</h1>
          <p className="text-lg text-neutral-dark max-w-2xl">
            Découvrez les chevaux et poneys qui font la vie de notre club. 
            Chacun a sa personnalité, ses talents et attend de partager un moment avec vous.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1} className="bg-white p-6 rounded-2xl shadow-soft mb-12 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <Input 
              label="Rechercher par nom ou race"
              placeholder="Ex: Étoile, Selle Français..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/4">
            <Select 
              label="Discipline"
              options={disciplines}
              value={disciplineFilter}
              onChange={(e) => setDisciplineFilter(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/4 pt-6 text-sm text-neutral-medium text-center md:text-right">
            {filteredHorses.length} résultat(s) trouvé(s)
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHorses.map((horse, index) => (
            <AnimatedSection key={horse.id} delay={0.1 + index * 0.05}>
              <HorseCard horse={horse} />
            </AnimatedSection>
          ))}
        </div>

        {filteredHorses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-neutral-medium italic">Aucun cheval ne correspond à votre recherche...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Horses;
