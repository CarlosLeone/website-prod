import React from 'react';
import Navigation from './components/Navigation.jsx';
import HeroSection from './components/HeroSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import DifferentialsSection from './components/DifferentialsSection.jsx';
import DemosSection from './components/DemosSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-soluti-dark">
      <Navigation />
      
      <section id="inicio">
        <HeroSection />
      </section>
      
      <section id="servicos">
        <ServicesSection />
      </section>
      
      <section id="diferenciais">
        <DifferentialsSection />
      </section>
      
      <section id="projetos">
        <DemosSection />
      </section>
      
      <section id="sobre">
        <AboutSection />
      </section>
      
      <section id="contato">
        <ContactSection />
      </section>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
