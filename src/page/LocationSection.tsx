// src/components/LocationSection.tsx

import React from 'react';

export default function LocationSection() {
  return (
    <section className="relative h-[800px] bg-cover bg-center flex items-center justify-end p-20">
     <div className="min-h-screen flex flex-row p-8 gap-8">
      {/* Colonne de texte à gauche */}
      <div className="w-1/2 bg-gray-100 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Où se trouve Blu Azur à  Saint-Raphaël ?</h2>
        <p>
            Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l’une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d’arrêt d’autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
        </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-fit">
        Comment s’y rendre ?
        </button>
      </div>

      {/* Colonne de carte à droite */}
      <div className="w-1/2 rounded overflow-hidden shadow">
        <iframe
          title="Carte des lieux"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086510314451!2d-122.4194154846813!3d37.77492977975973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e6b7e3b57%3A0x8cfc3d029ea3f84!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1695560000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </section>
  );
}