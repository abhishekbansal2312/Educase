import React from "react";
import useClickMatrix from "./useClickMatrix";
import GameBoard from "./GameBoard";
import GameControls from "./GameControls";

const ClickMatrix = () => {
  const { boxColors, gameStage, handleBoxClick, handleReset } =
    useClickMatrix();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <GameBoard
        boxColors={boxColors}
        gameStage={gameStage}
        onBoxClick={handleBoxClick}
      />
      <GameControls gameStage={gameStage} onReset={handleReset} />
    </div>
  );
};

export default ClickMatrix;
