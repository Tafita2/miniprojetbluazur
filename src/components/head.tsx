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
    <section 
      className="relative h-screen bg-cover bg-center flex items-center p-10" 
      style={{ backgroundImage: "url('fond.jpg')" }}
    >
      {/* Conteneur pour le texte, occupant la majorité de la page */}
      <div className="w-2/3 p-4 flex flex-col justify-end text-white h-full">
        <h2 className="text-5xl font-bold mb-4">Votre évasion <br/> sur la Côte d’Azur !</h2>
        <p className="text-gray-300 mb-4 w-2/3">
          Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d’exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d’un séjour alliant confort, sérénité et élégance au cœur de la Riviera française !
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 w-fit">
          Réservez dès maintenant votre séjour !
        </button>
      </div>

      {/* Carrousel d'images en position absolue en bas à droite */}
      <div className="absolute bottom-10 right-10 flex items-end -ml-10">
        {/* Image principale */}
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="rounded-xl shadow-2xl object-cover w-[400px] h-[300px] transition-transform duration-700 ease-in-out hover:scale-105"
        />
        {/* Image suivante */}
        <div className="relative rounded-xl shadow-2xl overflow-hidden ml-4">
          <img
            src={images[nextIndex]}
            alt="Next Slide"
            className="w-[120px] h-[100px] object-cover opacity-50 rounded-xl"
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