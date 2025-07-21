import React, { useState } from 'react';
import { X, ExternalLink, Monitor, Tablet, Smartphone } from 'lucide-react';

const Modal = ({ isOpen, onClose, demo }) => {
  if (!isOpen || !demo) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-soluti-dark border border-white/20 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header do modal */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h3 className="font-heading text-2xl font-bold text-white">{demo.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        
        {/* Conteúdo do modal */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Desktop */}
            <div className="text-center">
              <div className="mb-4">
                <Monitor className="h-8 w-8 text-soluti-blue mx-auto mb-2" />
                <h4 className="font-semibold text-white">Desktop</h4>
              </div>
              <div className="relative bg-gray-800 rounded-lg p-2 aspect-video overflow-hidden">
                <img 
                  src={demo.images.desktop} 
                  alt={`${demo.title} desktop preview`}
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-soluti-blue/20 to-soluti-orange/20 rounded flex items-center justify-center"><span class="text-white/60">Desktop Preview</span></div>';
                  }}
                />
              </div>
            </div>
            
            {/* Tablet */}
            {demo.images.tablet && (
              <div className="text-center">
                <div className="mb-4">
                  <Tablet className="h-8 w-8 text-soluti-orange mx-auto mb-2" />
                  <h4 className="font-semibold text-white">Tablet</h4>
                </div>
                <div className="relative bg-gray-800 rounded-lg p-2 aspect-video overflow-hidden">
                  <img 
                    src={demo.images.tablet} 
                    alt={`${demo.title} tablet preview`}
                    className="w-full h-full object-cover rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-soluti-orange/20 to-soluti-blue/20 rounded flex items-center justify-center"><span class="text-white/60">Tablet Preview</span></div>';
                    }}
                  />
                </div>
              </div>
            )}
            
            {/* Mobile */}
            <div className="text-center">
              <div className="mb-4">
                <Smartphone className="h-8 w-8 text-white mx-auto mb-2" />
                <h4 className="font-semibold text-white">Mobile</h4>
              </div>
              <div className="relative bg-gray-800 rounded-lg p-2 aspect-video overflow-hidden">
                <img 
                  src={demo.images.mobile} 
                  alt={`${demo.title} mobile preview`}
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-white/20 to-soluti-blue/20 rounded flex items-center justify-center"><span class="text-white/60">Mobile Preview</span></div>';
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Descrição */}
          <div className="mt-8 p-6 bg-soluti-black-translucent rounded-xl">
            <p className="text-white/80 leading-relaxed mb-4">{demo.description}</p>
            <div className="flex flex-wrap gap-2">
              {demo.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-soluti-blue/20 text-soluti-blue rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DemoCard = ({ demo, onClick, delay = 0 }) => {
  return (
    <div 
      className={`bg-soluti-black-translucent backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => onClick(demo)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={demo.images.desktop} 
          alt={`${demo.title} preview`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-soluti-blue/30 to-soluti-orange/30 flex items-center justify-center"><span class="text-white/60">Imagem não disponível</span></div>';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="bg-soluti-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
            {demo.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="h-12 w-12 text-white drop-shadow-lg" />
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-soluti-orange transition-colors">
          {demo.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-4">
          {demo.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {demo.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {demo.technologies.length > 3 && (
            <span className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
              +{demo.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const DemosSection = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const demos = [
    {
      id: 1,
      title: "SisRec - Sistema de Atendimento",
      shortDescription: "Plataforma completa para gestão de atendimento ao cliente com recursos avançados.",
      description: "Sistema completo de atendimento ao cliente com gestão de tickets, chat em tempo real, relatórios detalhados e integração com múltiplos canais de comunicação. Desenvolvido com foco na experiência do usuário e eficiência operacional.",
      category: "Sistema",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "TailwindCSS"],
      images: {
        desktop: "/fotos/sisrec desktop.PNG",
        
      }
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      shortDescription: "Painel de controle com métricas e relatórios em tempo real.",
      description: "Dashboard interativo para visualização de dados e métricas em tempo real. Inclui gráficos dinâmicos, filtros avançados, exportação de relatórios e integração com múltiplas fontes de dados.",
      category: "Dashboard",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      images: {
        desktop: "/fotos/analistics desktop.PNG",
        
      }
    },
    {
      id: 3,
      title: "Controle de Estoque",
      shortDescription: "Sistema completo para gestão de estoque e vendas em tempo real.",
      description: "Sistema completo para controle de estoque, vendas e relatórios em tempo real. Inclui leitor de código de barras, sincronização offline e dashboard analítico completo. Interface responsiva para desktop, tablet e mobile.",
      category: "Sistema",
      technologies: ["React", "Firebase", "Redux", "Chart.js", "Material-UI"],
      images: {
        desktop: "/fotos/Controle de estoque desktop.PNG",
        
      }
    },
    {
      id: 4,
      title: "Sistema de Gestão Escolar",
      shortDescription: "Plataforma completa para gestão de instituições de ensino.",
      description: "Sistema completo para gestão escolar incluindo matrícula de alunos, controle de notas, frequência, comunicação com pais, biblioteca digital e relatórios acadêmicos. Interface intuitiva para todos os perfis de usuário.",
      category: "Sistema",
      technologies: ["Angular", "Spring Boot", "MySQL", "JWT", "Material UI"],
      images: {
        desktop: "/fotos/gestão escolar desktoop.PNG",
        
      }
    },
    {
      id: 5,
      title: "IntegraPro Hub",
      shortDescription: "Sistema PDV/ERP completo para gestão empresarial integrada.",
      description: "Sistema completo de PDV/ERP desenvolvido com React e PostgreSQL, oferecendo gestão integrada de vendas, estoque, financeiro, clientes e fornecedores. Interface moderna e responsiva com dashboards analíticos, emissão de notas fiscais, controle de caixa e relatórios gerenciais em tempo real. Ideal para varejo, restaurantes e e-commerce.",
      category: "PDV/ERP",
      technologies: ["React", "PostgreSQL", "Node.js", "Prisma", "TailwindCSS", "Chart.js"],
      images: {
        desktop: "/fotos/integra desktop.PNG",
        tablet: "/fotos/integra pro dashboard.PNG",
        mobile: "/fotos/integra pro financeiro.PNG"
      }
    }
  ];

  const handleDemoClick = (demo) => {
    setSelectedDemo(demo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDemo(null);
  };

  return (
    <section id="projetos" className="py-20 px-4 bg-gradient-to-b from-soluti-dark to-soluti-dark/90 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-soluti-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-soluti-orange rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título da seção */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Demos e <span className="text-soluti-orange">Projetos</span>
          </h2>
          <p className="font-body text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos e veja como transformamos ideias em soluções digitais
          </p>
        </div>
        
        {/* Grid de demos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <DemoCard
              key={demo.id}
              demo={demo}
              onClick={handleDemoClick}
              delay={index * 100}
            />
          ))}
        </div>
        
          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
            <p className="font-body text-lg text-white/70 mb-6">
              Gostou do que viu? Vamos criar algo incrível juntos!
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contato');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-gradient-to-r from-soluti-blue to-soluti-orange hover:from-soluti-orange hover:to-soluti-blue text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 hover:scale-105 animate-glow cursor-pointer"
            >
              Solicitar Orçamento
            </button>
          </div>
      </div>
      
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        demo={selectedDemo}
      />
    </section>
  );
};

export default DemosSection;

