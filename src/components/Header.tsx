import React from 'react';
import MediaIcon from './MediaIcon';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center bg-transparent z-20">
      
      {/* Gauche : icônes + logo */}
      <div className="flex items-center space-x-4">
        <MediaIcon /> {/* Icônes verticales */}
        <p className="text-white font-bold text-lg">BLU AZUR</p>
      </div>

      {/* Droite : navigation */}
      <nav className="flex items-center space-x-6">
        <a href="#about" className="text-white font-semibold">À propos</a>
        <a href="#main" className="text-white font-semibold">Localisation</a>
        <a href="#activities" className="text-white font-semibold">Activités</a>
        <a href="#reservation" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
          Réservé
        </a>
      </nav>

    </header>
  );
};

export default Header;
