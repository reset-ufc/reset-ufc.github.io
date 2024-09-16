import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.tsx'
import App from './App.tsx'
import "./index.css";
import Footer from './components/Footer/index.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="pageContainer">
        <Header />
        <main className="content">
          <App />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
