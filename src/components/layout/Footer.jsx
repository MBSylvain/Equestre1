import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nature-forest text-white pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-primary-500">Centre Équestre</h2>
            <p className="text-nature-sand/80 leading-relaxed">
              Depuis 1995, nous partageons notre passion du cheval dans un cadre naturel exceptionnel. Éthique, respect et progression.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-500 hover:text-nature-forest transition-all">
                <Mail size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-500 hover:text-nature-forest transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 border-b border-white/10 pb-2">Navigation</h3>
            <ul className="space-y-4 text-nature-sand/80">
              <li><Link to="/" className="hover:text-primary-500 transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:text-primary-500 transition-colors">Le Club</Link></li>
              <li><Link to="/chevaux" className="hover:text-primary-500 transition-colors">Nos Chevaux</Link></li>
              <li><Link to="/cours" className="hover:text-primary-500 transition-colors">Cours & Tarifs</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 border-b border-white/10 pb-2">Informations</h3>
            <ul className="space-y-4 text-nature-sand/80">
              <li><Link to="/planning" className="hover:text-primary-500 transition-colors">Planning</Link></li>
              <li><Link to="/installations" className="hover:text-primary-500 transition-colors">Installations</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Mentions Légales</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 border-b border-white/10 pb-2">Coordonnées</h3>
            <ul className="space-y-4 text-nature-sand/80">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 shrink-0" size={20} />
                <span>123 Chemin des Écuries, 75000 Val-de-Marne</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={20} />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 shrink-0" size={20} />
                <span>contact@centre-equestre.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center text-sm text-nature-sand/50">
          <p>&copy; {currentYear} Centre Équestre. Design Premium pour passionnés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
