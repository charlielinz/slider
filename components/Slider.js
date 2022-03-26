import React from "react";

const Slider = () => {
  return (
    <div className="relative">
      <div className="absolute h-4 w-full rounded-full bg-gray-300"></div>
      <div className="absolute h-4 w-1/2 rounded-full bg-cyan-500"></div>
      <div className="absolute h-8 w-8 -translate-y-2 -translate-x-2 left-1/2 rounded-full bg-teal-700"></div>
    </div>
  );
};

export default Slider;
