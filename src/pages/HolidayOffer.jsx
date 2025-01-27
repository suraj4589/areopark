import React, { useState } from "react";
import { Goa, Fiji, Laksh, Thailand, Manali, Switzerland } from '../assets/homeImg/index.js'

const HolidayOffer = () => {
  const [offers] = useState([
    {
      id: 1,
      destination: "Manali",
      description: "Manali is a most beautiful destination in India up to 30% off.",
      image: Manali,
      discountCode: "MANALI30",
    },
    {
      id: 2,
      destination: "Switzerland",
      description: "Book a snowy adventure in Switzerland and save 25%.",
      image: Switzerland,
      discountCode: "SWISS25",
    },
    {
      id: 3,
      destination: "Thailand",
      description: "Discover the beaches of Thailand with a 20% discount.",
      image: Thailand,
      discountCode: "THAI20",
    },
    {
      id: 4,
      destination: "LakshDeevp",
      description: "Discover the beaches of Lakshdeevp with a 20% discount.",
      image: Laksh,
      discountCode: "Laksh20",
    },
    {
      id: 5,
      destination: "Goa",
      description: "Discover the beaches of Goa with a 20% discount.",
      image: Goa,
      discountCode: "Goa20",
    },
    {
      id: 6,
      destination: "Fiji",
      description: "Discover the waterfall of Fiji with a 20% discount.",
      image: Fiji,
      discountCode: "Fiji20",
    },
  ]);

  const applyOffer = (code) => {
    alert(`Offer applied successfully! Use code: ${code}`);
  };

  return (
    <div className="mt-14 bg-black p-6 text-white">
      <h1 className="text-2xl font-bold text-center mb-6">Holiday Offers</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={offer.image}
              alt={offer.destination}
              loading="lazy"
              className="w-full h-60 object-cover"
            />
            <div className=" p-4">
              <h2 className="text-lg font-normal mb-2">{offer.destination}</h2>
              <p className="mb-4">{offer.description}</p>
              <button
                onClick={() => applyOffer(offer.discountCode)}
                className="bg-indigo-500 hover:bg-black text-white font-bold py-2 px-4 rounded w-36"
              >
                Apply Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HolidayOffer;
