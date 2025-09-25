// src/App.tsx
import './index.css'; 
import Header from './components/Header';
import MainSection from './components/MainSection';
// import HeroSection from './components/HeroSection';

import AboutSection from './page/AboutPage';
import ActivitiesSection from './page/ActivitiesSection';
import LocationSection from './page/LocationSection';
import DiscoverSection from './page/DiscoverSection';
// import ExperienceGridSection from './page/ExperienceGridSection';
import ReservationSection from './page/ReservationSection';
import Footer from './components/Footer';
import CardsPage from './page/CardsPage';

function App() {
  return (
    <div className="relative ">
      <Header />
      <MainSection/>
      <AboutSection/>
      <ActivitiesSection/>
      <LocationSection/>
      <DiscoverSection/>
      {/* <ExperienceGridSection/> */}
      <CardsPage/>
      <ReservationSection/>
      <Footer/>
    </div>
  );
}

export default App;