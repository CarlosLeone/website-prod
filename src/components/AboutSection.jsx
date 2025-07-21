import React from 'react';
import { Code, Heart, Target, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-soluti-dark/90 to-soluti-dark relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-soluti-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-soluti-orange rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Quem <span className="text-soluti-blue">Somos</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Card do fundador */}
          <div className="animate-fade-in-up">
            <div className="bg-soluti-black-translucent backdrop-blur-sm rounded-3xl p-8 hover:scale-105 transition-all duration-500">
              {/* Foto do fundador */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-soluti-blue to-soluti-orange p-1">
                    <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      {/* Placeholder para a foto - será substituída */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                        <span className="text-white text-6xl font-bold">CE</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-br from-soluti-blue to-soluti-orange animate-ping opacity-20" />
                </div>
              </div>
              
              {/* Informações do fundador */}
              <div className="text-center">
                <h3 className="font-heading text-3xl font-bold text-white mb-4">
                  Carlos Eduardo
                </h3>
                <p className="text-soluti-orange font-semibold text-lg mb-6">
                  Fundador & Desenvolvedor
                </p>
                
                {/* Texto pessoal */}
                <div className="bg-white/5 rounded-2xl p-6 mb-6">
                  <p className="font-body text-white/90 leading-relaxed text-lg">
                    "Sou Carlos Eduardo, desenvolvedor e criador da SoluTI. 
                    Acredito que a tecnologia deve ser uma ferramenta que simplifica processos e gera 
                    resultados concretos."
                  </p>
                </div>
                
                {/* Estatísticas */}
                
              </div>
            </div>
          </div>
          
          {/* Valores e missão */}
          <div className="space-y-8 animate-fade-in-up animation-delay-300">
            <div className="bg-soluti-black-translucent backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-soluti-blue/20 rounded-full mr-4">
                  <Target className="h-8 w-8 text-soluti-blue" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Nossa Missão</h3>
              </div>
              <p className="font-body text-white/80 leading-relaxed">
                Democratizar o acesso à tecnologia de qualidade, oferecendo soluções digitais 
                que realmente fazem a diferença no dia a dia de empresas e organizações.
              </p>
            </div>
            
            <div className="bg-soluti-black-translucent backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-soluti-orange/20 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-soluti-orange" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Nossos Valores</h3>
              </div>
              <ul className="space-y-3 font-body text-white/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soluti-blue rounded-full mr-3" />
                  Transparência em todos os processos
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soluti-orange rounded-full mr-3" />
                  Qualidade acima de tudo
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  Relacionamento próximo e humano
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-soluti-blue rounded-full mr-3" />
                  Inovação constante
                </li>
              </ul>
            </div>
            
            <div className="bg-soluti-black-translucent backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/20 rounded-full mr-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">Nossa Abordagem</h3>
              </div>
              <p className="font-body text-white/80 leading-relaxed">
                Cada projeto é único. Trabalhamos lado a lado com nossos clientes para entender 
                suas necessidades específicas e criar soluções que realmente agreguem valor ao negócio.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-soluti-blue/20 to-soluti-orange/20 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              Vamos trabalhar juntos?
            </h3>
            <p className="font-body text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Estamos prontos para transformar sua ideia em uma solução digital de sucesso. 
              Entre em contato e vamos conversar sobre seu projeto.
            </p>
            <button 
              className="bg-gradient-to-r from-soluti-blue to-soluti-orange hover:from-soluti-orange hover:to-soluti-blue text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 animate-glow cursor-pointer"
              onClick={() => {
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Entrar em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

