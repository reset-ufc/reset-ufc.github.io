import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/index.tsx";
import App from "./App.tsx";
import "./index.css";
import Footer from "./components/Footer/index.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Helmet titleTemplate="Reset | %s" />
        <div className="pageContainer">
          <Header />
          <main className="content">
            <App />
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
