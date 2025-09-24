// src/App.tsx
import './index.css'; 
import Header from './components/Header';
import MainSection from './components/MainSection';
// import HeroSection from './components/HeroSection';

import AboutSection from './page/AboutPage';

function App() {
  return (
    <div className="relative">
      <Header />
      <MainSection/>
      <AboutSection/>
    </div>
  );
}

export default App;