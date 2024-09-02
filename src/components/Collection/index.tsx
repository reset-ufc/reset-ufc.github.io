import CustomButton from "../CustomButton";
import "./index.css";

export default function Collection() {

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center animate-fade animate-once animate-alternate">
      <div className="flex justify-evenly w-full h-[880px] items-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-8xl font-bold">RESETLAB</h1>
          <p className="text-4xl w-[350px] font-semibold my-7">Inovando na Conexão entre Software e Dados.</p>
          <CustomButton children="Venha nos Conhecer" onClick={handleScroll} />
        </div>
        <div className="background text-white">
          <img src="public/LOGO HORIZONTAL FT 2.png" width={700} alt="" />
        </div>
      </div>
    </div>
  );
}
