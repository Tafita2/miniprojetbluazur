// src/components/AboutSection.tsx
import { useState } from "react"
import { ChevronRight } from "lucide-react"

// Import des images
import img1 from "../assets/chambre.png"
import img2 from "../assets/Cuisine.png"

const images = [img1, img2]

export default function AboutSection() {
  const [current, setCurrent] = useState(0)

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const nextIndex = (current + 1) % images.length

  return (
    <section className="relative min-h-screen bg-white flex py-20">
      {/* Colonne gauche : Texte */}
      <div className="w-1/2 flex flex-col justify-center pl-20 pr-12">
        <h2 className="text-5xl font-light mb-8 max-w-lg">
          Le confort et la sérénité d’un appartement privé
        </h2>

        <p className="text-gray-600 mb-6 max-w-md">
          Blu Azur vous propose des appartements élégants et spacieux, conçus
          pour accueillir de 2 à 6 personnes. Offrant un cadre confortable
          et moderne, ils sont parfaits pour une escapade détente ou un
          séjour prolongé.
        </p>

        <h3 className="text-xl font-semibold mb-4">Les inclusions :</h3>
        {/* Liste sans icônes (list-disc standard) */}
        <ul className="space-y-3 text-gray-700 list-disc list-inside mb-8 pl-5">
          <li>Stationnement privé</li>
          <li>Piscine extérieure avec chaises longues</li>
          <li>Linge de lit et serviettes</li>
          <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
          <li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
          <li>Kit bébé : comprend un lit parapluie avec un vrai matelas et une chaise haute</li>
          <li>Autres commodités en prêt à la réception : jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.</li>
        </ul>

      </div>

      {/* Colonne droite : Images (pas de changement ici pour le moment) */}
      <div className="w-1/2 flex items-center justify-center gap-6">
        {/* Image principale (grande) */}
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="rounded-lg shadow-lg object-cover w-[700px] h-[500px] transition-transform duration-700 ease-in-out hover:scale-105"
        />


        {/* Image secondaire (plus petite et sombre) */}
      <div className="relative w-[350px] h-[250px]">
          <img
            src={images[nextIndex]}
            alt="Next Slide"
            className="w-full h-full object-cover opacity-50 rounded-lg"
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
    </section>
  )
}