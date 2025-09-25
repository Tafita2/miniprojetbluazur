// src/components/LocationSection.tsx
import bgImage from '../assets/map.png';
export default function LocationSection() {
  return (
    <section 
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Image de fond
    >
     <div className="min-h-screen flex flex-row p-8 gap-8">
      {/* Colonne de texte à gauche */}
      <div className="w-1/2 bg-gray-100 p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Où se trouve Blu Azur à  Saint-Raphaël ?</h2>
        <p>
            Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l’une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d’arrêt d’autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
        </p>
        <div className="cta-container mt-8">
          <button className="bg-transparent text-[#4097FF] border-2 border-[#4097FF] px-4 py-2 rounded-[30px] text-[0.85em] font-bold cursor-pointer mt-[15px] inline-flex items-center gap-2 transition-all duration-300 ease-in-out">
            Comment s’y rendre ?
            <span
              style={{
                display: 'inline-flex',
                margin: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: '2px solid #4682B4',
                color: '#4682B4',
                fontWeight: 'bold',
                fontSize: '0.85em',
              }}
            >
              &gt;
            </span>
          </button>
        </div>
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