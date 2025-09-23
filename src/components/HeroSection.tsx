// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center p-10"
      style={{ backgroundImage: "url('fond.jpg')" }}
    >
      {/* Calque sombre semi-transparent pour la lisibilité */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Contenu textuel */}
      <div className="relative z-10 text-white max-w-3xl text-center">
        <h1 className="text-6xl font-bold mb-4">Votre évasion sur la Côte d'Azur !</h1>
        <p className="text-lg leading-relaxed mb-8">
          Blu Azur vous invite à découvrir... [Copiez le reste du texte de la maquette ici]
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Réservez dès maintenant votre séjour !
        </button>
      </div>
    </section>
  );
};

export default HeroSection;