import { useState } from "react";

const Tabs = () => {
  const [activeButton, setActiveButton] = useState(" ");

  const handleButtonChange = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      {/* Buttons */}
      <div className="left-0 right-0 p-6  bg-blue-100 text-white py-3 uppercase text-xs flex justify-center items-center gap-4">
        <button
          className={`font-bold cursor-pointer text-lg py-4 lg:py-4 px-4 lg:px-6 rounded-xl w-40 ${
            activeButton === "GSL"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleButtonChange("GSL")}
        >
          GSL
        </button>
        <button
          className={`font-bold cursor-pointer text-lg py-4 lg:py-4 px-4 lg:px-6 rounded-xl w-40 ${
            activeButton === "MD"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleButtonChange("MD")}
        >
          MD
        </button>
        <button
          className={`font-bold cursor-pointer text-lg py-4 lg:py-4 px-4 lg:px-6 rounded-xl w-40 ${
            activeButton === "UNMD"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleButtonChange("UNMD")}
        >
          UNMD
        </button>
        <button
          className={`font-bold cursor-pointer text-lg py-4 lg:py-4 px-4 lg:px-6 rounded-xl w-40 ${
            activeButton === "RLCL"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handleButtonChange("RLCL")}
        >
          RLCL
        </button>
      </div>

      {/* Content */}

    </>
  );
};

export default Tabs;