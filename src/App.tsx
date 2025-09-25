// src/App.tsx

import React from 'react';
import MainSection from './components/MainSection'; // Assurez-vous du bon chemin
import AboutSection from './page/AboutPage';
import ActivitiesSection from './page/ActivitiesSection';
import LocationSection from './page/LocationSection';
import DiscoverSection from './page/DiscoverSection';
import CardsPage from './page/CardsPage';
import ReservationSection from './page/ReservationSection';
import Footer from './components/Footer';

// Le fichier index.css est généralement importé dans index.tsx, 
// mais nous nous assurons qu'il est chargé globalement.

const App: React.FC = () => {
  return (
    <div className="relative">
      <MainSection />
      <AboutSection/>
      <ActivitiesSection/>
      <LocationSection/>
      <DiscoverSection/>
      <CardsPage/>
      <ReservationSection/>
      <Footer/>
    </div>
  );
};

export default App;