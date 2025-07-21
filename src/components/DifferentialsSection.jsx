import React from 'react';
import { Lightbulb, Wrench, Settings, TrendingUp } from 'lucide-react';

const DifferentialItem = ({ icon: Icon, title, description, isReversed = false, delay = 0 }) => {
  return (
    <div 
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-20 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Ícone */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-br from-soluti-blue to-soluti-orange rounded-full flex items-center justify-center animate-float">
            <Icon className="h-16 w-16 text-white" />
          </div>
          <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-soluti-blue to-soluti-orange rounded-full animate-ping opacity-20" />
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className={`flex-1 text-center ${isReversed ? 'lg:text-right' : 'lg:text-left'}`}>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h3>
        <p className="font-body text-xl text-white/80 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
};

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Lightbulb,
      title: "Design moderno sob medida",
      description: "Criamos interfaces únicas e intuitivas que refletem a identidade da sua marca, sempre priorizando a experiência do usuário e as melhores práticas de design.",
      isReversed: false,
      delay: 0
    },
    {
      icon: Wrench,
      title: "Suporte humano e próximo",
      description: "Nossa equipe está sempre disponível para oferecer suporte personalizado, entendendo suas necessidades e fornecendo soluções rápidas e eficazes.",
      isReversed: true,
      delay: 200
    },
    {
      icon: Settings,
      title: "Tecnologia própria e personalizável",
      description: "Desenvolvemos soluções com tecnologias modernas e flexíveis, permitindo customizações e evoluções conforme seu negócio cresce.",
      isReversed: false,
      delay: 400
    },
    {
      icon: TrendingUp,
      title: "Foco em resultados reais",
      description: "Cada projeto é desenvolvido com métricas claras e objetivos definidos, garantindo que a tecnologia realmente impacte positivamente seus resultados.",
      isReversed: true,
      delay: 600
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-soluti-dark/95 to-soluti-dark relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-soluti-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-soluti-orange rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-soluti-blue">Diferenciais</span>
          </h2>
          <p className="font-body text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            O que nos torna únicos no mercado de soluções digitais
          </p>
        </div>
        
        {/* Lista de diferenciais */}
        <div className="space-y-8">
          {differentials.map((differential, index) => (
            <DifferentialItem
              key={index}
              icon={differential.icon}
              title={differential.title}
              description={differential.description}
              isReversed={differential.isReversed}
              delay={differential.delay}
            />
          ))}
        </div>
        
        {/* Seção de destaque final */}
        <div className="text-center mt-20 p-12 bg-soluti-black-translucent backdrop-blur-sm rounded-3xl animate-fade-in-up animation-delay-800">
          <h3 className="font-heading text-3xl font-bold text-white mb-6">
            Pronto para transformar sua <span className="text-soluti-orange">ideia em realidade</span>?
          </h3>
          <p className="font-body text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar seu projeto a alcançar o próximo nível
          </p>
          <button className="bg-gradient-to-r from-soluti-blue to-soluti-orange hover:from-soluti-orange hover:to-soluti-blue text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 animate-glow">
            Iniciar Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

