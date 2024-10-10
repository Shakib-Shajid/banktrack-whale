"use client";

import React, { useState } from "react";
import Empieza from "./Empieza";
import Personal from "./Personal";

const ToggleOptions = () => {
  const [isEmpresa, setIsEmpresa] = useState(true); // Default to left (Empresa)

  const handleToggleChange = (event) => {
    setIsEmpresa(!event.target.checked); // Set isEmpresa to false for right and true for left
  };

  return (
    <div className="text-center my-10">
      <div className="flex justify-center items-center gap-4 mb-10">
        {/* Option labels */}
        <span className={`${isEmpresa ? "text-[#4021C8] font-bold" : ""}`}>
          Empresa
        </span>
        <input
          type="checkbox"
          className="toggle toggle-lg"
          checked={!isEmpresa} // Checked when "Personal" is active
          onChange={handleToggleChange}
        />
        <span className={`${!isEmpresa ? "text-[#4021C8] font-bold" : ""}`}>
          Personal
        </span>
      </div>

      {/* Conditional content based on toggle */}
      <div>
        {isEmpresa ? (
          <Empieza /> // Empresa details when toggle is left
        ) : (
          <Personal /> // Personal details when toggle is right
        )}
      </div>
    </div>
  );
};

export default ToggleOptions;

