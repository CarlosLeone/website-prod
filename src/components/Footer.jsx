import React from 'react';
import { MessageCircle, Mail, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-soluti-dark border-t border-white/10 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-soluti-blue rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-soluti-orange rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/logo_transparent.png" alt="SoluTI Logo" className="h-12 mb-4" />
              <p className="text-white/80 leading-relaxed max-w-md">
                Transformamos ideias em soluções digitais que geram resultados reais. 
                Tecnologia de verdade, com gente de verdade.
              </p>
            </div>
            
            {/* Redes sociais */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-soluti-blue/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-soluti-blue/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/solutiag"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-soluti-orange/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/5575982040799"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500/20 hover:bg-green-500/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="h-5 w-5 text-green-400" />
              </a>
            </div>
          </div>
          
          {/* Links rápidos */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-white/70 hover:text-soluti-blue transition-colors duration-300"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/70 hover:text-soluti-blue transition-colors duration-300"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-white/70 hover:text-soluti-blue transition-colors duration-300"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-white/70 hover:text-soluti-blue transition-colors duration-300"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white/70 hover:text-soluti-blue transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-soluti-blue mr-3" />
                <a
                  href="mailto:contato@soluti.com.br"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  soluti49@Gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 text-green-400 mr-3" />
                <a
                  href="https://wa.me/5575982040799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  (75) 98204-0799
                </a>
              </div>
            </div>
            
            {/* Horário de atendimento */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <h5 className="font-semibold text-white mb-2 text-sm">Atendimento</h5>
              <p className="text-white/60 text-sm">Seg-Sex: 8h às 18h</p>
              <p className="text-white/60 text-sm">Sáb: 8h às 12h</p>
            </div>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SoluTI. Todos os direitos reservados.
            </div>
            
            {/* Frase final */}
            <div className="text-center md:text-right">
              <p className="text-white/80 font-medium italic">
                "Tecnologia de verdade, com gente de verdade."
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botão voltar ao topo */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-soluti-blue hover:bg-soluti-orange rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 animate-bounce"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;

