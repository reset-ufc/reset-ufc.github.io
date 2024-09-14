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
    <div className="relative flex justify-center items-center animate-fade animate-once animate-alternate bg-[#270B79]">
      {/* Background Animation */}
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

        <div className="bg-transparent flex justify-evenly w-full h-[890px] items-center z-10">
          <div className="bg-inherit flex flex-col justify-center text-white">
            <h1 className="bg-inherit flex text-8xl font-Lufga-ExtraBold">
              Reset
              <h1 className="bg-inherit font-Lufga-Regular">Lab</h1>
            </h1>
            <p className="bg-inherit text-4xl w-[350px] font-semibold my-7">
              Inovando na Conexão entre Software e Dados.
            </p>
            <CustomButton
              children="Venha nos Conhecer"
              onClick={handleScroll}
            />
          </div>
          <div className="bg-inherit">
            <img src={foto} width={700} className="bg-inherit" alt="Logo ResetLab" />
          </div>
        </div>
      </div>
  );
}
