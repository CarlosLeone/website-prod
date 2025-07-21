import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { MessageCircle, ArrowDown } from 'lucide-react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 8,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div className="particles-bg">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-soluti-dark">
      <ParticleBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-soluti-dark via-soluti-dark/90 to-soluti-blue/20 z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Logo SoluTI */}
        <div className="mb-8 animate-fade-in">
          <img src="/logo_transparent.png" alt="SoluTI Logo" className="h-24 md:h-32 mx-auto mb-4 animate-float" />
        </div>
        
        {/* Headline principal */}
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Soluções Digitais,{' '}
          <span className="text-soluti-orange">Resultados Reais</span>.
        </h2>
        
        {/* Subheadline */}
        <p className="font-body text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
          Desenvolvemos sistemas modernos sob medida para o seu negócio.
        </p>
        
        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
          <Button 
            size="lg" 
            className="bg-soluti-blue hover:bg-soluti-blue/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 animate-glow cursor-pointer"
            onClick={() => {
              const demosSection = document.getElementById('projetos');
              if (demosSection) {
                demosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Ver Nossos Sistemas
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-soluti-orange text-soluti-orange hover:bg-soluti-orange hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
            onClick={() => {
              const contactSection = document.getElementById('contato');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Fale com a Gente no WhatsApp
          </Button>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
      
      {/* Efeitos visuais adicionais */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-soluti-blue/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soluti-orange/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
    </section>
  );
};

export default HeroSection;

