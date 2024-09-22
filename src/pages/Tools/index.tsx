import React, { useState } from "react";
import tools from "./data";
import { ToolProps } from "../../types";

const ToolsSection = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTool, setSelectedTool] = useState<ToolProps>({
    id: 1,
    name: 'JNose Test',
    description: 'JNose Test is a tool developed to automatically detect test smells in test code, and to collect coverage metrics.',
    image: 'https://via.placeholder.com/150', 
    highlight: true
  });

  const handleCardClick = (tool: ToolProps) => {
    console.log(tool)
    setSelectedTool(tool);
  };

  return (
    <section className="">
      <div className="flex flex-col  justify-center pt-28">
        <h2 className="text-4xl animate-fade-down animate-once animate-alternate font-Lufga-ExtraBold flex justify-center text-[#270B79]">
          Our &nbsp; <span className="text-[#ec642a]">Tools</span>
        </h2>
        <p className="text-gray-600 animate-fade-down animate-once animate-alternate text-lg font-Lufga-Regular flex justify-center">
          Tools developed by researchers at ResetLab.
        </p>
      </div>
      <div className="flex justify-center px-12 bg-white">
        <div className="flex flex-col pt-8 pr-10">
          <div className="space-y-4 animate-fade-right animate-once animate-alternate flex flex-col items-center">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`p-4 shadow-md w-2/3 rounded-md border cursor-pointer transition-transform duration-300 ease-in-out transform ${
                  selectedTool.id === tool.id
                    ? "border-[#270B79] bg-purple-50 scale-105"
                    : "hover:scale-105"
                }`}
                onClick={() => handleCardClick(tool)}
              >
                <h3 className="text-xl font-Lufga-ExtraBold text-[#270B79]">
                  {tool.name}
                </h3>
                <p className="text-gray-600 font-Lufga-Regular">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem ao lado do card */}
        <div className="w-1/3 flex">
          {selectedTool.image && (
            <img
              src={selectedTool.image}
              alt="Selected Tool"
              className="w-full animate-fade-left animate-once animate-alternate opacity-100"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
