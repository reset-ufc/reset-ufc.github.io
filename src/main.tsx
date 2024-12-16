import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/index.tsx";
import App from "./App.tsx";
import "./index.css";
import Footer from "./components/Footer/index.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Loader2 } from "lucide-react";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);
    const promises = images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve(true);
          } else {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true);
          }
        })
    );

    Promise.all(promises).then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <Loader2 className="animate-spin text-indigo-500 w-16 h-16 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="Reset | %s" />
        <Header />
        <App />
        <Footer />
      </HelmetProvider>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
