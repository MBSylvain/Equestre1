import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-nature-forest overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-display font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          L'Élégance en <span className="text-primary-500">Mouvement</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cours, Stages et Pensions dans un cadre privilégié
        </motion.p>
        <motion.button 
          className="bg-primary-500 hover:bg-primary-600 text-nature-forest font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Découvrir nos cours
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
