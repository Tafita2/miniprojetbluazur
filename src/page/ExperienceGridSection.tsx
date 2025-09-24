// src/components/ExperienceGridSection.tsx

import bgImage from '../assets/montagne.png';
import imgCulturel from '../assets/StPaul.png';
import imgSport from '../assets/StPaul.png';
import imgGourmand from '../assets/StPaul.png';
import imgNuit from '../assets/StPaul.png';

// Définition du type Experience
type Experience = {
  title: string;
  description: string;
  image: string;
};

// Données pour les cartes d'expériences
const experiences: Experience[] = [
  {
    title: "Un patrimoine culturel",
    description: "Flânez dans les ruelles pavées de l'ancienne ville, visitez le Musée Archéologique et découvrez l'histoire riche et fascinante de la région, des Romains à aujourd'hui.",
    image: imgCulturel,
  },
  {
    title: "Le sport et le rythme de la Méditerranée",
    description: "Plongez dans les eaux turquoise pour la plongée, naviguez le long de la côte, ou faites une randonnée jusqu'au Pic de l'Ours. L'aventure vous attend partout.",
    image: imgSport,
  },
  {
    title: "Une destination gourmande",
    description: "Des marchés provençaux aux restaurants étoilés, dégustez les saveurs de la Côte d'Azur. Poissons frais, huile d'olive locale et vins régionaux sont au menu.",
    image: imgGourmand,
  },
  {
    title: "L'évasion en pleine nature",
    description: "Laissez-vous charmer par la beauté naturelle des roches rouges de l'Estérel. Les sentiers de randonnée et de vélo offrent des vues imprenables sur la Méditerranée.",
    image: imgNuit,
  },
];

// Définition des props du composant ExperienceCard
type ExperienceCardProps = {
  experience: Experience;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div className="flex bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform transition duration-300 hover:shadow-2xl">
    {/* Conteneur pour l'image */}
    <div className="w-2/5 h-48 sm:h-auto overflow-hidden">
      <img
        src={experience.image}
        alt={experience.title}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Contenu textuel */}
    <div className="w-3/5 p-6 flex flex-col justify-center">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
      <p className="text-sm text-gray-600">{experience.description}</p>
    </div>
  </div>
);

export default function ExperienceGridSection() {
  return (
    <section 
      className="relative h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
