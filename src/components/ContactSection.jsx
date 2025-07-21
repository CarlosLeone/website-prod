import React, { useState } from 'react';
import { MessageCircle, Mail, Send, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    
    // Exemplo de redirecionamento para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5575982040799?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppDirect = () => {
    const whatsappUrl = 'https://wa.me/5575982040799?text=Olá! Gostaria de saber mais sobre os serviços da SoluTI.';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-b from-soluti-dark to-soluti-dark/95 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-soluti-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soluti-orange rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Contato <span className="text-soluti-orange">Rápido</span>
          </h2>
          <p className="font-body text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Pronto para começar seu projeto? Entre em contato conosco e vamos transformar sua ideia em realidade
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário de contato */}
          <div className="animate-fade-in-up">
            <div className="bg-soluti-black-translucent backdrop-blur-sm rounded-3xl p-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="h-6 w-6 text-soluti-blue mr-3" />
                Envie uma mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-white/80 font-medium mb-2">
                    Nome completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-soluti-blue focus:border-transparent transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/80 font-medium mb-2">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-soluti-blue focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-white/80 font-medium mb-2">
                    WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-soluti-blue focus:border-transparent transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                
                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-white/80 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-soluti-blue focus:border-transparent transition-all resize-none"
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  />
                </div>
                
                {/* Botão de envio */}
                <Button
                  type="submit"
                  className="w-full bg-soluti-blue hover:bg-soluti-blue/90 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
          
          {/* Informações de contato e WhatsApp direto */}
          <div className="space-y-8 animate-fade-in-up animation-delay-300">
            {/* WhatsApp direto */}
            <div className="bg-gradient-to-br from-green-600/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 border border-green-500/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  WhatsApp
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Prefere conversar diretamente? Clique no botão abaixo e fale conosco agora mesmo pelo WhatsApp!
                </p>
                <Button
                  onClick={handleWhatsAppDirect}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 animate-glow"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
            
            {/* Informações de contato */}
            <div className="bg-soluti-black-translucent backdrop-blur-sm rounded-3xl p-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-6">
                Outras formas de contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-soluti-blue/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-soluti-blue" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">E-mail comercial</p>
                    <p className="text-white font-semibold">soluti49@Gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-soluti-orange/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-soluti-orange" />
                  </div>
                <div>
                  <p className="text-white/60 text-sm">Telefone/WhatsApp</p>
                  <p className="text-white font-semibold">(75) 98204-0799</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/5 rounded-2xl">
                <h4 className="font-semibold text-white mb-3">Horário de atendimento</h4>
                <div className="space-y-2 text-white/80">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p className="text-soluti-orange">WhatsApp: 24h (resposta em até 2h)</p>
                </div>
              </div>
            </div>
            
            {/* Garantia de resposta */}
            <div className="bg-gradient-to-br from-soluti-blue/20 to-soluti-orange/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <h4 className="font-heading text-lg font-bold text-white mb-2">
                Garantia de Resposta
              </h4>
              <p className="text-white/80 text-sm">
                Respondemos todas as mensagens em até 2 horas durante o horário comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

