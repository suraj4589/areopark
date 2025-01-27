import React from "react";
import { airlines } from '../../constants'
const AirlinePartners = () => {

  return (
    <div className="flex flex-col items-center w-full p-6 ">
      <h2 className="font-bold text-gray-800 text-xl md:text-2xl m-6 text-center">
        Areopark Airlinel Partners
      </h2>
      <div
        className="flex flex-wrap gap-8 md:gap-8 w-full  mb-8 justify-center"
      >
        {airlines.map((airline) => (
          <a
            key={airline.code}

            className="flex-shrink-0"
          >
            <img
              src={airline.imgSrc}
              alt={`${airline.name} Logo`}
              width="35"
              height="35"
              loading="lazy"
              className={`max-w-none  cursor-pointer top-5`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AirlinePartners;
