import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Star, FolderOpen, User, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const navItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'servicos', label: 'Serviços', icon: Briefcase },
    { id: 'diferenciais', label: 'Diferenciais', icon: Star },
    { id: 'projetos', label: 'Projetos', icon: FolderOpen },
    { id: 'sobre', label: 'Sobre', icon: User },
    { id: 'contato', label: 'Contato', icon: Phone },
  ];

  return (
    <>
      {/* Navegação desktop/mobile */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-soluti-dark/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("inicio")}
              className="flex items-center"
            >
              <img src="/logo_transparent.png" alt="SoluTI Logo" className="h-10" />
            </button>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-soluti-orange transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Botão menu mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-white hover:text-soluti-orange transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden mobile-menu ${isOpen ? 'open' : ''} fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-soluti-dark/95 backdrop-blur-md border-l border-white/10`}>
          <div className="p-6">
            <div className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-3 p-3 text-white/80 hover:text-soluti-orange hover:bg-white/5 rounded-lg transition-all duration-300 group"
                  >
                    <Icon className="h-5 w-5 group-hover:text-soluti-orange transition-colors" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Call to action no menu mobile */}
            <div className="mt-8 p-4 bg-gradient-to-r from-soluti-blue/20 to-soluti-orange/20 rounded-xl">
              <h4 className="font-heading text-lg font-bold text-white mb-2">
                Pronto para começar?
              </h4>
              <p className="text-white/80 text-sm mb-4">
                Entre em contato e vamos transformar sua ideia em realidade.
              </p>
              <button
                onClick={() => scrollToSection('contato')}
                className="w-full bg-soluti-orange hover:bg-soluti-orange/90 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
              >
                Falar Conosco
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay para fechar menu mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navigation;

