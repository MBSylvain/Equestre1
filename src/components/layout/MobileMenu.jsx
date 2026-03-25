import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuLinks = [
    { to: "/", label: "Accueil" },
    { to: "/chevaux", label: "Nos Chevaux" },
    { to: "/cours", label: "Cours" },
    { to: "/installations", label: "Installations" },
    { to: "/tarifs", label: "Tarifs" },
    { to: "/planning", label: "Planning" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-nature-forest/80 backdrop-blur-sm z-[60]"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl p-8 flex flex-col"
          >
            <button 
              onClick={onClose}
              className="self-end p-2 text-nature-forest hover:bg-nature-sand rounded-full transition-colors mb-8"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-6">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.to} 
                    onClick={onClose}
                    className="text-2xl font-display text-nature-forest hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-nature-sand">
              <p className="text-nature-forest font-bold mb-2 font-display">Le Petit Far West</p>
              <p className="text-neutral-medium text-sm">CD 34 La Culotte, 77181 Le Pin</p>
              <p className="text-neutral-medium text-sm">06 07 09 65 63</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
