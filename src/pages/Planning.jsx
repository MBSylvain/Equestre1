import { planning } from '../data/planning';
import AnimatedSection from '../components/ui/AnimatedSection';

const Planning = () => {
  const days = [
    { key: 'mon', label: 'Lundi' },
    { key: 'tue', label: 'Mardi' },
    { key: 'wed', label: 'Mercredi' },
    { key: 'thu', label: 'Jeudi' },
    { key: 'fri', label: 'Vendredi' },
    { key: 'sat', label: 'Samedi' },
    { key: 'sun', label: 'Dimanche' }
  ];

  return (
    <div className="pt-24 pb-20 bg-nature-sand/5">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display text-nature-forest mb-4">Planning des Cours</h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Retrouvez tous nos créneaux hebdomadaires. Les réservations se font par téléphone ou sur place.
          </p>
        </AnimatedSection>

        <div className="overflow-x-auto bg-white rounded-3xl shadow-soft border border-nature-sand/30">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-nature-forest text-white">
                <th className="p-6 font-display text-lg">Horaires</th>
                {days.map(day => (
                  <th key={day.key} className="p-6 font-display text-lg">{day.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planning.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-nature-sand/10'}>
                  <td className="p-6 font-bold text-nature-forest border-b border-nature-sand/20">{row.time}</td>
                  {days.map(day => (
                    <td key={day.key} className="p-6 border-b border-nature-sand/20">
                      {row[day.key] !== '-' ? (
                        <div className={`p-3 rounded-xl text-sm font-semibold text-center h-full flex items-center justify-center ${
                          row[day.key].includes('Baby') ? 'bg-primary-100 text-primary-700 border border-primary-200' :
                          row[day.key].includes('Galop') ? 'bg-nature-grass/10 text-nature-green border border-nature-grass/20' :
                          row[day.key].includes('Compétition') ? 'bg-secondary-100 text-secondary-600 border border-secondary-200' :
                          'bg-white text-neutral-medium border border-nature-sand/30'
                        }`}>
                          {row[day.key]}
                        </div>
                      ) : (
                        <span className="text-neutral-light flex justify-center">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatedSection className="mt-12 text-center text-neutral-medium italic">
          * Ce planning est indicatif et peut varier selon les événements et concours du week-end.
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Planning;
