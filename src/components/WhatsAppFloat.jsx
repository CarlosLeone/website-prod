import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar o botão após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mostrar tooltip após 5 segundos se o usuário não clicou
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Esconder tooltip após 5 segundos
        setTimeout(() => setShowTooltip(false), 5000);
      }, 5000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim do site da SoluTI e gostaria de saber mais sobre os serviços.";
    const whatsappUrl = `https://wa.me/5575982040799?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowTooltip(false);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-4 bg-white rounded-lg shadow-2xl p-4 max-w-xs z-[1001] animate-fade-in-up">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-gray-800 text-sm">SoluTI</span>
            </div>
            <button
              onClick={handleCloseTooltip}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-gray-700 text-sm mb-3">
            Olá! 👋 Precisa de ajuda com seu projeto? Estamos online!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-3 rounded-lg transition-colors"
          >
            Iniciar conversa
          </button>
          {/* Seta apontando para o botão */}
          <div className="absolute bottom-[-8px] right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white group-hover:animate-bounce" />
        
        {/* Indicador de mensagem */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </button>
    </>
  );
};

export default WhatsAppFloat;

