// src/components/ActivitiesSection.tsx
import { Ship, Mountain, Bike, Utensils, ShoppingBag, MapPin } from 'lucide-react'; 

export default function ActivitiesSection() {
  const activities = [
    { icon: Ship, title: "Sports nautiques,  plongée, voile" },
    { icon: Bike, title: "Randonnées et vélo  dans l’Estérel" },
    { icon: Utensils, title: "Casino et vie  nocturne animée" }, 
    { icon: ShoppingBag, title: "Villages perchés et  marchés provençaux" }, 
    { icon: Mountain, title: "Un paradis pour les golfeurs" },
    { icon: MapPin, title: "Montagne et vélo de route" },
  ];

  return (
    // Utilisation du dégradé et texte BLANC
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center p-10" style={{ backgroundImage: "url('Piscine 4.png')" }}> 
      <div className="container mx-auto text-center text-white ">
        
        {/* Titre principal */}
        <h2 
          // J'ai mis max-w-6xl pour donner une très grande largeur au titre.
          // Le "mx-auto" assure le centrage horizontal.
          className="font-normal max-w-6xl mx-auto mb-6" 
          style={{ 
            fontSize: '32.09px', // Taille exacte demandée
            lineHeight: '1.2',    // Interligne pour un aspect aéré
          }}
        >
         Saint Raphaël, l’endroit parfait pour  vivre la Côte d’Azur
        </h2>

        {/* Sous-paragraphe */}
        <p 
          // J'ai mis max-w-6xl ici aussi pour qu'il s'aligne bien sous le titre
          className="text-blue-200 font-normal max-w-6xl mx-auto mb-16"
          style={{
            fontSize: '25.67px', // Taille ajustée pour le paragraphe
            lineHeight: '1.3', 
            textAlign: 'center' // Le texte est déjà centré par défaut avec text-center
          }}
        >
          Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers rouges de l’Estérel, elle offre un cadre idyllique pour la détente et l’aventure.
        </p>

        {/* Grille des activités */}
        <div className="grid grid-cols-6 gap-6"> 
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center justify-start h-full">
              
              {/* Cercle d'icône */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-xl">
                <activity.icon className="w-10 h-10 text-blue-700" /> 
              </div>
              
              {/* Titre de l'activité */}
              <p className="font-semibold text-xs leading-snug max-w-[120px]">
                {activity.title}
              </p>
            </div>
          ))}
        </div>

        {/* Paragraphe de pied de section */}
        <p className="text-blue-200 text-sm mt-16 max-w-3xl mx-auto">
         Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. Saint-Raphaël, c’est la Côte d’Azur dans toute sa splendeur !
        </p>
      </div>
    </section>
  );
}