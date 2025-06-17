import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import ScrollToTop from "./utils/scroll-top";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import GTranslate from "./components/GTranslate";
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './components/admin/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    "/public/logo.png",
    "/public/vetor branco.png",
    "/public/Vetor Laranja.png",
  ];

  useEffect(() => {
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setTimeout(() => setIsLoading(false), 1000); // Timeout para suavidade
      }
    };

    // Pré-carregamento das imagens
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = imageLoaded;
      img.onerror = imageLoaded; // Conta mesmo que uma imagem falhe
    });
  }, [images]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#270B79]">
        <div className="text-center">
          <Loader2 className="animate-spin text-indigo-500 w-16 h-16 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Adicione outras rotas protegidas aqui */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
