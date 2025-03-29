import { useState } from "react";

const useClickMatrix = () => {
  const [boxColors, setBoxColors] = useState(Array(9).fill("#f0f0f0"));
  const [clickOrder, setClickOrder] = useState([]);
  const [gameStage, setGameStage] = useState("playing");

  const handleBoxClick = (index) => {
    if (gameStage !== "playing" || boxColors[index] !== "#f0f0f0") return;

    const newColors = [...boxColors];
    const newClickOrder = [...clickOrder];

    newColors[index] = "green";

    newClickOrder.push(index);

    setBoxColors(newColors);
    setClickOrder(newClickOrder);

    if (newClickOrder.length === 9) {
      setGameStage("transitioning");

      const changeColorsSequentially = () => {
        newClickOrder.forEach((clickedIndex, i) => {
          setTimeout(() => {
            setBoxColors((prevColors) => {
              const updatedColors = [...prevColors];
              updatedColors[clickedIndex] = "orange";
              return updatedColors;
            });

            if (i === newClickOrder.length - 1) {
              setGameStage("completed");
            }
          }, 500 * i);
        });
      };

      changeColorsSequentially();
    }
  };

  const handleReset = () => {
    setBoxColors(Array(9).fill("#f0f0f0"));
    setClickOrder([]);
    setGameStage("playing");
  };

  return {
    boxColors,
    gameStage,
    handleBoxClick,
    handleReset,
  };
};

export default useClickMatrix;
