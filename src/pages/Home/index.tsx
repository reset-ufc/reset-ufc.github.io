import Collection from "../../components/Collection"
export default function Home() {

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="pt-28">
      <Collection />
      <div className="scroll-icon" onClick={handleScroll}>
        <span></span>
      </div>
      <div id="next-section" className="next-section">
        {/* Conteúdo da próxima seção */}
      </div>
    </div>
  )
}