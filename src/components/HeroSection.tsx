import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center p-10"
      style={{ backgroundImage: "url('fond.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

     
      <div className="relative z-10 text-white max-w-3xl text-center">
        <h1 className="text-6xl font-bold mb-4">Votre évasion sur la Côte d'Azur !</h1>
        <h2 className="text-2xl font-bold mb-4">sur la Côte d’Azur !</h2>
        <p className="text-lg leading-relaxed mb-8">
          Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d’exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d’un séjour alliant confort, sérénité et élégance au cœur de la Riviera française !
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Réservez dès maintenant votre séjour !
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

<div className="col-span-2 flex justify-between items-center">
  {/* Image principale à gauche */}
  <img
    src={images[current]}
    alt={`Slide ${current + 1}`}
    className="rounded-lg shadow-lg object-contain max-h-[467px] transition-transform duration-700 ease-in-out hover:scale-105"
  />

  {/* Image sombre à droite avec icône */}
  <div className="relative">
    <img
      src={images[nextIndex]}
      alt="Next Slide"
      className="w-[349px] h-[467.9px] object-cover opacity-50 rounded-lg"
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button
        onClick={nextImage}
        className="text-white text-4xl hover:text-blue-500"
      >
        <ChevronRight className="w-12 h-12" />
      </button>
    </div>
  </div>
</div>