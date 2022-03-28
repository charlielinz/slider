import { useState, useEffect } from "react";

const Slider = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [positionBefore, setPositionBefore] = useState(0);
  const [positionAfter, setPositionAfter] = useState(0);
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsMouseDown(true);
    setPositionBefore(e.clientX);
  };
  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isMouseDown) {
      setPositionAfter(e.clientX - positionBefore);
      if (positionAfter >= 0) {
        setThumbLeft(positionAfter);
      } else {
        setThumbLeft(0);
      }
      console.log(positionAfter);
    }
  };
  const handleMouseUp = (e) => {
    e.preventDefault();
    setIsMouseDown(false);
  };

  return (
    <div className="relative">
      <div className="absolute h-4 w-full rounded-full bg-gray-300"></div>
      <div className="absolute h-4 rounded-full bg-cyan-500"></div>
      <div
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseLeave={() => setIsMouseDown(false)}
        className="absolute h-8 w-8 -translate-y-2 -translate-x-2 rounded-full bg-teal-700"
        style={{ left: thumbLeft + "px" }}
      ></div>
    </div>
  );
};

export default Slider;
