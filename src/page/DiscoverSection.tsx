import bgImage from '../assets/PicDeLours5.png';
import smallImg1 from '../assets/ensembleImg.png'; 

export default function DiscoverSection() {
  return (
    <section 
      className="relative h-[700px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Image de fond
    >
      {/* Superposition bleue */}
      <div className="absolute inset-0 bg-blue-700 opacity-80"></div>
      
      {/* Conteneur centré en 2 colonnes */}
      <div className="relative z-10 flex w-full max-w-6xl gap-10 px-6">

        {/* Colonne gauche : collage d'images */}
        <div className="w-1/2 flex justify-center relative mt-10 md:mt-20 h-[550px]">
          <div className="relative w-[450px] h-[550px]">
            <img
              src={smallImg1} 
              alt="Image de ville"
              className="absolute w-[300px] h-[300px] object-cover rounded-lg shadow-2xl top-10 left-1/2 transform -translate-x-1/2"
            />
          </div>
        </div>

        {/* Colonne droite : texte */}
        <div className="w-1/2 p-10 text-white flex flex-col justify-center md:pl-16">
          {/* md:pl-16 ajoute un espace à gauche du texte sur desktop */}
          <h2 className="text-5xl font-bold mb-6 leading-snug">
            Un point de départ idéal pour découvrir la Côte d’Azur !
          </h2>
          <p className="text-lg font-light max-w-lg text-blue-100">
            Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l’Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d’aventures. Entre marchés provençaux, villages perchés et animations locales, l’art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
          </p>
        </div>

      </div>
    </section>
  );
}
