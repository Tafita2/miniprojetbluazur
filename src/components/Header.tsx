// src/components/HeroPage.tsx
import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

// Import des images
import img1 from "../assets/vacance.png";
import img2 from "../assets/Piscine2.png";

const images = [img1, img2];

// --- Composant Navbar ---
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-blu">BLU</span>
        <span className="logo-azur">AZUR</span>
      </div>
      <div className="navbar-links">
        <a href="#apropos" className="active-link">À propos</a>
        <a href="#localisation">Localisation</a>
        <a href="#activites">Activités</a>
        <button className="btn-reserve">Réservé</button>
      </div>
      <div className="navbar-menu-icon">
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>
    </nav>
  );
};

// --- Composant SocialIcons ---
const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={20} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={20} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={20} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} />
      </a>
      <div className="line"></div>
    </div>
  );
};


// --- Composant Header ---
const Header: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[current];

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center p-10"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
          url('fond.jpg'),
          url('Rectangle 9.png')
        `,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Icônes sociales intégrées seulement dans cette section */}
      <SocialIcons />

      <div className="hero-content">
        <div className="hero-text-container">
          <h1>
            <span className="block">Votre évasion</span>
            <span className="block text-blue-300">sur la Côte d’Azur !</span>
          </h1>
          <p>
            Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d’exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé... Profitez d’un séjour alliant confort, sérénité et élégance au cœur de la Riviera française.
          </p>
          <div className="cta-container mt-8">
            <button className="bg-transparent text-[#ffffff] border-2 border-[#ffffff] px-4 py-2 rounded-[30px] text-[0.85em] font-bold cursor-pointer mt-[15px] inline-flex items-center gap-2 transition-all duration-300 ease-in-out">
              Réservez dès maintenant votre séjour
              <span
                style={{
                  display: 'inline-flex',
                  margin: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '0.85em',
                }}
              >
                &gt;
              </span>
            </button>
          </div>
        </div>

        <div
          className="hero-image-overlay"
          style={{ backgroundImage: `url(${currentImage})` }}
          onClick={nextImage}
        >
          <button
            className="overlay-chevron-right"
            aria-label="Prochaine image"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- HeroPage ---
const HeroPage: React.FC = () => {
  return (
    <div className="hero-header relative">
      <Navbar />
      <Header />
    </div>
  );
};

export default HeroPage;
