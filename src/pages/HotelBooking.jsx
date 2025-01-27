import React, { useState } from "react";
import { hotels } from "../constants";

function HotelBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    hotel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details: ", formData);
    alert("Booking Successful!");
    setFormData({ name: "", email: "", checkIn: "", checkOut: "", hotel: "" });
  };

  return (
    <>
      <div className="mt-14 min-h-full bg-orange-100 flex items-center justify-center p-2">
        <div className="bg-white  rounded-lg shadow-xl p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book Your Hotel</h1>
          <form onSubmit={handleSubmit} >
            <div className="mb-4 ">
              <label htmlFor="name" className=" block  text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="Enter your full name"
                className="w-full border  border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                  Check-In Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                  Check-Out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="hotel" className="block text-sm font-medium text-gray-700 mb-2">
                Select Hotel
              </label>
              <select
                id="hotel"
                name="hotel"
                value={formData.hotel}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              >
                <option value="">Choose a hotel</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.name}>
                    {hotel.name} - {hotel.brand}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-36 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Book Now
            </button>
          </form>
        </div>

      </div>
      <div>
        <div className="grid grid-cols-1 justify-center md:flex items-center  gap-4 m-2 ">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="border rounded-lg p-4 text-center shadow-md bg-white"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                loading="lazy"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                {hotel.name}
              </h3>
              <p className="text-gray-600">{hotel.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HotelBooking;
