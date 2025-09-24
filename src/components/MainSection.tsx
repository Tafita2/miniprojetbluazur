import { useState } from "react"
import { ChevronRight } from "lucide-react"

// Import des images
import img1 from "../assets/vacance.png"
import img2 from "../assets/Piscine2.png"

const images = [img1, img2]

export default function MainSection() {
  const [current, setCurrent] = useState(0)

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const nextIndex = (current + 1) % images.length

  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center p-10" style={{ backgroundImage: "url('fond.jpg')" }}>
      <div className="grid grid-cols-3 gap-8 items-center">
        {/* Colonne gauche : texte (1/3) */}
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Votre évasion </h2>
          <p className="text-gray-600 mb-4">
            Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d’exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d’un séjour alliant confort, sérénité et élégance au cœur de la Riviera française !
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-fit">
            En savoir plus
          </button>
        </div>

        {/* Colonne droite : images (2/3) */}
        <div className="col-span-2 flex justify-between items-center max-w-full overflow-hidden">
    {/* Image principale */}
    <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="rounded-lg shadow-lg object-contain max-h-[467px] flex-shrink-0 transition-transform duration-700 ease-in-out hover:scale-105"
    />

    {/* Image sombre */}
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

      </div>
    </section>
  )
}
