import { useEffect } from "react";

// Define a interface para a configuração do GTranslate
interface GTranslateSettings {
  default_language: string;
  languages: string[];
  wrapper_selector: string;
  switcher_horizontal_position: string;
  alt_flags: Record<string, string>;
}

// Declaração global para garantir que o TypeScript reconheça `window.gtranslateSettings`
declare global {
  interface Window {
    gtranslateSettings?: GTranslateSettings;
  }
}

const GTranslate = () => {
  useEffect(() => {
    // Configuração do GTranslate
    window.gtranslateSettings = {
      default_language: "pt",
      languages: ["pt", "en"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: "right",
      alt_flags: { en: "usa", pt: "brazil" },
    };

    // Criar o script dinamicamente
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dwf.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslate;
