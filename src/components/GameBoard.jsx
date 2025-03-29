import React from "react";

const GameBoard = ({ boxColors, gameStage, onBoxClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
      {boxColors.map((color, index) => (
        <div
          key={index}
          onClick={() => onBoxClick(index)}
          className="w-24 h-24 border-2 border-gray-300 cursor-pointer transition-colors duration-300"
          style={{
            backgroundColor: color,
            cursor: gameStage !== "playing" ? "not-allowed" : "pointer",
          }}
        />
      ))}
    </div>
  );
};

export default GameBoard;
