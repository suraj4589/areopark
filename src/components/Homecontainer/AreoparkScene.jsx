import React from "react";
import { Plan_img } from "../../assets/homeImg";

const AreoparkScene = () => {
  
  return (
    <div className="relative w-full">
      {/* Image */}
      <img
        src={Plan_img}
        alt="Flight_img"
        loading="lazy"
        className="w-full h-96 object-cover"
      />
      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
        Flight With Areopark & Learn with Areopark
      </div>
    </div>
  );
};

export default AreoparkScene;
