import React from "react";

const GameControls = ({ gameStage, onReset }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={onReset}
          disabled={gameStage === "transitioning"}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ${
            gameStage === "transitioning" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Reset Game
        </button>
      </div>

      <p className="mt-4 text-gray-600">
        {gameStage === "playing"
          ? "Click all boxes to complete the game"
          : gameStage === "transitioning"
          ? "Changing colors..."
          : "Game Completed! Click Reset"}
      </p>
    </div>
  );
};

export default GameControls;
