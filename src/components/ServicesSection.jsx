import React from 'react';
import { CheckCircle, Package, Globe, Smartphone } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div 
      className={`bg-soluti-black-translucent backdrop-blur-sm rounded-2xl p-8 hover:bg-soluti-blue/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-4 bg-soluti-blue/20 rounded-full group-hover:bg-soluti-orange/30 transition-all duration-300">
          <Icon className="h-12 w-12 text-soluti-blue group-hover:text-soluti-orange transition-colors duration-300" />
        </div>
        
        <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-soluti-orange transition-colors duration-300">
          {title}
        </h3>
        
        <p className="font-body text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Sistemas de Atendimento",
      description: "Plataformas completas para gestão de atendimento ao cliente, com recursos avançados de tickets, chat e acompanhamento.",
      delay: 0
    },
    {
      icon: Package,
      title: "Controle de Estoque e PDV",
      description: "Soluções integradas para controle de estoque, vendas e ponto de venda com relatórios em tempo real.",
      delay: 200
    },
    {
      icon: Globe,
      title: "Portais Web e Landings",
      description: "Sites modernos e responsivos, portais corporativos e landing pages otimizadas para conversão.",
      delay: 400
    },
    {
      icon: Smartphone,
      title: "Apps sob medida",
      description: "Aplicativos móveis e web personalizados para atender às necessidades específicas do seu negócio.",
      delay: 600
    }
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-gradient-to-b from-soluti-dark to-soluti-dark/95 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-soluti-blue rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soluti-orange rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            O Que <span className="text-soluti-orange">Fazemos</span>
          </h2>
          <p className="font-body text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções tecnológicas completas e personalizadas para impulsionar seu negócio
          </p>
        </div>
        
        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-800">
          <p className="font-body text-lg text-white/70 mb-6">
            Precisa de uma solução específica?
          </p>
          <button 
            className="bg-soluti-orange hover:bg-soluti-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 animate-glow cursor-pointer"
            onClick={() => {
              const contactSection = document.getElementById('contato');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

