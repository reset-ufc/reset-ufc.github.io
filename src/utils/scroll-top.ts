import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Move para o topo da página
  }, [pathname]); // Executa sempre que a rota mudar

  return null;
}
