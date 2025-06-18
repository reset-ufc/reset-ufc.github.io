import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const messages = [
    "Página não encontrada no laboratório",
    "Esta seção ainda está em desenvolvimento",
    "O conteúdo solicitado não foi localizado",
    "Navegação interrompida - página indisponível",
    "Recurso não disponível no momento",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#270B79] via-[#3711a6] to-[#1E0A5C] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos de tecnologia sutil */}
      <div className="absolute inset-0 opacity-10">
        {/* Linhas de código */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#ec642a] font-mono text-xs animate-code-fade"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            {i % 2 === 0 ? 'const error = "404";' : 'function handleError() {'}
          </div>
        ))}
        
        {/* Pontos de conexão */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ec642a] rounded-full animate-pulse-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Número 404 elegante */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ec642a] via-orange-400 to-[#ec642a]">
            404
          </h1>
        </div>

        {/* Mensagem profissional */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-gray-200 font-medium transition-all duration-500">
            {messages[currentMessage]}
          </p>
        </div>

        {/* Ícone de tecnologia */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="text-5xl text-[#ec642a]">💻</div>
            <div className="absolute -top-1 -right-1 text-2xl text-white animate-pulse">⚡</div>
          </div>
        </div>

        {/* Texto explicativo profissional */}
        <div className="mb-8 text-gray-300 max-w-2xl mx-auto">
          <p className="text-lg mb-4">
            A página que você está procurando não foi encontrada em nossos servidores.
            Verifique o endereço ou navegue pelas seções disponíveis abaixo.
          </p>
          <p className="text-sm opacity-75">
            Se você acredita que isso é um erro, entre em contato conosco.
          </p>
        </div>

        {/* Botões de navegação profissionais */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/"
            className="group relative px-8 py-3 bg-gradient-to-r from-[#270B79] to-[#3711a6] text-white font-semibold rounded-lg hover:from-[#3711a6] hover:to-[#270B79] transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-[#ec642a]/20"
          >
            <span className="relative z-10">🏠 Página Inicial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec642a]/20 to-orange-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group relative px-8 py-3 bg-gradient-to-r from-[#ec642a] to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-[#ec642a] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="relative z-10">⬅️ Página Anterior</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Links úteis organizados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <Link
            to="/members"
            className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 group border border-[#ec642a]/20"
          >
            <div className="text-2xl mb-2 text-[#ec642a]">👥</div>
            <h3 className="font-semibold text-white mb-1">Nossa Equipe</h3>
            <p className="text-sm text-gray-300">Pesquisadores e colaboradores</p>
          </Link>

          <Link
            to="/projects"
            className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 group border border-[#ec642a]/20"
          >
            <div className="text-2xl mb-2 text-[#ec642a]">🔬</div>
            <h3 className="font-semibold text-white mb-1">Projetos</h3>
            <p className="text-sm text-gray-300">Pesquisas em andamento</p>
          </Link>

          <Link
            to="/publications"
            className="p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 group border border-[#ec642a]/20"
          >
            <div className="text-2xl mb-2 text-[#ec642a]">📚</div>
            <h3 className="font-semibold text-white mb-1">Publicações</h3>
            <p className="text-sm text-gray-300">Artigos e trabalhos</p>
          </Link>
        </div>

        {/* Informação de contato */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 opacity-75">
            Precisa de ajuda? Entre em contato através da seção de contato.
          </p>
        </div>
      </div>
    </div>
  );
} 