// src/App.tsx
import './index.css'; 
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;