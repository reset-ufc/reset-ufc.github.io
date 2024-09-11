import CustomButton from "../CustomButton";
import "./index.css";
import foto from "../../assets/logo.png";

export default function Collection() {

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center animate-fade animate-once animate-alternate bg-[#270B79]">
      <div className="flex justify-evenly w-full h-[890px] items-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="flex text-8xl font-Lufga-ExtraBold">Reset<h1 className="font-Lufga-Regular">Lab</h1></h1>
          <p className="text-4xl w-[350px] font-semibold my-7">Inovando na Conexão entre Software e Dados.</p>
          <CustomButton children="Venha nos Conhecer" onClick={handleScroll} />
        </div>
        <div className="background">
          <img src={foto} width={700} alt="" />
        </div>
      </div>
    </div>
  );
}
