// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center bg-transparent z-20">
      <div  className="h-2">
        <p>BLU AZUR</p>
      </div>
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-white font-semibold">À propos</a>
        <a href="#" className="text-white font-semibold">Localisation</a>
        <a href="#" className="text-white font-semibold">Activités</a>
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
          Réservé
        </a>
      </nav>
    </header>
  );
};

export default Header;