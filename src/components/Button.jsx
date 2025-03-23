import React from "react";

const Button = ({ text, onClick, variant = "primary", disabled = false }) => {
  const getButtonStyle = () => {
    if (variant === "primary") {
      return "bg-[#6C25FF] text-white text-bold hover:bg-purple-700";
    } else if (variant === "secondary") {
      return "bg-[#6C25FF4B] text-black text-bold hover:bg-purple-300";
    } else if (variant === "disabled") {
      return "bg-gray-300 text-white cursor-not-allowed";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-md font-medium transition duration-200 ${getButtonStyle()}`}
    >
      {text}
    </button>
  );
};

export default Button;
