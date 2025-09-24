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
    <section className="relative min-h-screen bg-white flex">
  {/* Colonne gauche : Texte */}
  <div className="w-1/2 flex flex-col justify-center pl-20 pr-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Le confort et la sérénité d’un{" "}
      <span className="font-bold text-blue-600">appartement privé</span>
    </h2>

    <p className="text-gray-600 mb-4">
      Blu Azur vous propose des appartements élégants et spacieux, conçus
      pour accueillir de 2 à 6 personnes. Offrant une allure confortable
      et moderne, ils sont parfaits pour une escapade relaxante ou un
      voyage prolongé.
    </p>

    <h3 className="text-lg font-semibold mb-3">Les inclusions :</h3>
    <ul className="space-y-2 text-gray-700 list-disc list-inside mb-6">
      <li>Stationnement privé</li>
      <li>Plage équipée avec chaises longues</li>
      <li>Connexion Internet Wi-Fi</li>
      <li>Réfrigérateur, cuisinière, lave-vaisselle</li>
      <li>Kit bébé : lit parapluie + chaise haute</li>
      <li>Draps, serviettes et tapis de bain inclus</li>
      <li>Kit pratique : fer à repasser, aspirateur, adaptateur prises</li>
    </ul>

    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-fit">
      Réserver maintenant
    </button>
  </div>

  {/* Colonne droite : Images */}
  <div className="w-1/2 flex items-center justify-center gap-6">
    {/* Image principale (grande) */}
    {/* Image principale */}
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
