import React from "react";
import CustomButton from "../CustomButton";
import "./index.css";

export default function Collection() {

  return (
    <div className="flex justify-center items-center animate-fade animate-once animate-alternate">
      <div className="flex justify-evenly w-full h-[400px] items-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-6xl font-bold">RESETLAB</h1>
          <p className="text-2xl w-[250px] font-semibold my-5">Inovando na Conexão entre Software e Dados.</p>
          <CustomButton children="Sobre Nós"  />
        </div>
        <div className="background text-white">
          Arranja uma foto
        </div>
      </div>
    </div>
  );
}
