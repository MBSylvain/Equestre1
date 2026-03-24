import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-center flex-col items-center justify-center p-6 text-center">
      <h1 className="text-9xl font-display font-bold text-primary-500 mb-4">404</h1>
      <h2 className="text-3xl font-heading text-nature-forest mb-6">Oups ! Ce sentier ne mène nulle part.</h2>
      <p className="text-lg text-neutral-dark mb-8">
        La page que vous recherchez semble s'être égarée dans la prairie.
      </p>
      <Link 
        to="/" 
        className="bg-nature-forest text-white py-3 px-8 rounded-full hover:bg-nature-green transition-all"
      >
        Retourner à l'écurie
      </Link>
    </div>
  );
};

export default NotFound;
