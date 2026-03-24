import Card from '../ui/Card';
import { motion } from 'framer-motion';

const HorseCard = ({ horse }) => {
  return (
    <Card className="h-full group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={horse.image} 
          alt={horse.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 animate-fadeIn">
          <span className="bg-nature-forest text-white text-xs px-3 py-1 rounded-full border border-primary-500/30">
            {horse.breed}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-display text-nature-forest mb-2">{horse.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-nature-sand text-secondary-bridle px-2 py-1 rounded">{horse.level}</span>
          <span className="text-xs bg-nature-sand text-secondary-bridle px-2 py-1 rounded">{horse.discipline}</span>
        </div>
        <p className="text-sm text-neutral-dark mb-4 line-clamp-2">
          {horse.character}
        </p>
        <div className="flex justify-between items-center text-sm font-semibold">
          <span className={horse.disponibility.includes("Disponible") ? "text-accent-success" : "text-secondary-bridle"}>
            {horse.disponibility}
          </span>
          <button className="text-primary-600 hover:text-primary-700 underline flex items-center gap-1 group/btn">
            Détails 
            <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default HorseCard;
