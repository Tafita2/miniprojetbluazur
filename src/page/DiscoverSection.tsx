
import bgImage from '../assets/PicDeLours5.png';
import smallImg1 from '../assets/Group.png'; 
export default function DiscoverSection() {
  return (
    <section 
      className="relative h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Image de fond
    >
      {/* Superposition de couleur bleue pour le titre (comme dans la maquette) */}
      <div className="absolute inset-0 bg-blue-700 opacity-80"></div>
      
      {/* NOUVEAU CONTENEUR POUR L'ALIGNEMENT EN 2 COLONNES */}
      <div className="relative z-10 container mx-auto h-full flex items-center justify-between px-20">

        {/* Colonne Gauche : Le collage d'images (Maintenant dans le flux) */}
        <div className="w-1/2 flex justify-start relative h-full items-center">
            {/* Simulation du collage d'images */}
            <div className="w-[450px] h-[550px] relative">
                 {/* Image supérieure gauche (l'ensemble de la maquette montre un collage ici) */}
                <img
                    src={smallImg1} 
                    alt="Image de ville"
                    className="absolute w-[300px] h-[300px] object-cover rounded-lg shadow-2xl top-10 left-0"
                />
            </div>
        </div>

        {/* Colonne Droite : Contenu (le titre et le texte) */}
        <div className="w-1/2 p-10 text-white flex flex-col items-start">
          <h2 className="text-5xl font-bold mb-6 leading-snug">
            Un point de départ idéal pour découvrir la Côte d’Azur !
          </h2>
          <p className="text-lg font-light max-w-lg mb-8 text-blue-100">
            Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable. 
          </p>
        </div>
        
      </div>
      
    </section>
  );
}