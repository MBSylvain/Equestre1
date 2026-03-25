import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-nature-forest text-white py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-bold text-primary-500 flex items-center gap-2">
            <span className="hidden sm:inline">Le Petit Far West</span>
            <span className="sm:hidden">LPFW</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary-400 transition-colors">Accueil</Link>
            <Link to="/a-propos" className="hover:text-primary-400 transition-colors">Le Club</Link>
            <Link to="/chevaux" className="hover:text-primary-400 transition-colors">Nos Chevaux</Link>
            <Link to="/cours" className="hover:text-primary-400 transition-colors">Cours</Link>
            <Link to="/installations" className="hover:text-primary-400 transition-colors">Installations</Link>
            <Link to="/tarifs" className="hover:text-primary-400 transition-colors">Tarifs</Link>
            <Link to="/planning" className="hover:text-primary-400 transition-colors">Planning</Link>
            <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-primary-500 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
