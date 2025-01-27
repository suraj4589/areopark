import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaExchangeAlt } from "react-icons/fa";
import axios from "axios";



const FlightSearchForm = ({ onSubmit }) => {
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);

  const [formData, setFormData] = useState({
    tripType: "one-way",
    fromCity: "",
    toCity: "",
    departureDate: date,
    returnDate: "",
    travellers: {
      adult: 1,
      child: 0,
      infant: 0,
    },
    travelClass: "Economy",
    discountType: "Regular",
  });

  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let newErrors = {};
    // flight input validation
    if (!formData.fromCity.trim()) {
      newErrors.fromCity = "Please enter a valid origin.";
    }
    if (!formData.toCity.trim()) {
      newErrors.toCity = "Please enter a valid destination.";
    } else if (formData.fromCity === formData.toCity) {
      newErrors.toCity = "Origin and destination cannot be the same.";
    }
    if (formData.tripType === "round-trip" && !formData.returnDate.trim()) {
      newErrors.returnDate = "Please select a return date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleTravellerChange = (type, action) => {
    setFormData((prevState) => {
      const updatedTravellers = { ...prevState.travellers };

      if (action === "increase") {
        updatedTravellers[type]++;
      } else if (action === "decrease") {
        if (type === "adult" && updatedTravellers[type] > 1) {
          updatedTravellers[type]--;
        }
        else if (type !== "adult" && updatedTravellers[type] > 0) {
          updatedTravellers[type]--;
        }
      }

      return { ...prevState, travellers: updatedTravellers };
    });
  };


  const handleDiscountChange = (type) => {
    setFormData({ ...formData, discountType: type });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleCitySwap = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      fromCity: prevState.toCity,
      toCity: prevState.fromCity,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      onSubmit(formData)
      setErrors("");
      try {
        const response = await axios.get(
          "http://localhost:5000/api/search-flights", // Replace with your backend API URL

          { params: formData }
        );
        setSearchResults(response.data);
      } catch (error) {
        setErrors("Error fetching flight data:", error);
        alert("Error fetching flight data. Please try again.");
      } finally {
        setLoading(false)
      }
    }
  };




  return (
    <>
      <div className="min-w-screen h-full bg-plan-img bg-cover bg-center m-0  p-1 sm:text-sm">
        <div className="max-w-2xl mx-auto bg-white text-black  rounded-lg shadow-lg p-6 row-span-3">
          <h3 className="bg-gradient-to-r from-indigo-700 from-30% via-purple-500 to-teal-600
         font-bold bg-gradient-text bg-clip-text text-transparent text-2xl  rounded-lg text-center mb-6 ">
            Book International and Domestic Flights at Lowest Airfare
          </h3>

          <form onSubmit={handleSubmit} >
            {/* Trip Type Selection */}
            <div className="flex flex-wrap justify-center my-6 gap-1.5 ">
              {["one-way", "round-trip", "multi-city"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, tripType: type })}
                  className={`px-2 py-2 rounded-lg font-semibol ${formData.tripType === type
                    ? "bg-lime-700 text-white"
                    : "bg-gray-200 text-gray-600"
                    }`}
                >
                  {type.split("-").join(" ").toUpperCase()}
                </button>
              ))}
            </div>

            {/* From & To Inputs */}
            <div className="grid grid-cols-11 md:grid-cols-11 gap-1 mb-4">
              <div className=" col-span-5  md:col-span-5 ">
                <label htmlFor="fromCity" className="block text-start font-medium mb-2">From</label>
                <div className="relative">
                  <FaPlaneDeparture className="absolute top-3 left-3" />

                  <input
                    type="text"
                    id="fromCity"
                    name="fromCity"
                    value={formData.fromCity}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown} // Prevent Enter key submission
                    placeholder="Where from ?"
                    className={`w-full px-10 py-2 border rounded-lg focus:ring focus:ring-blue-300 ${errors.fromCity ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.fromCity && (
                    <p className="text-red-500 text-start text-sm mt-1">{errors.fromCity}</p>
                  )}
                </div>
              </div>

              <button
                className="relative self-center text-gray-500"
                onClick={handleCitySwap}
                title="Swap Cities">
                <FaExchangeAlt className="absolute top-2  md:top-2 md:left-5 " /></button>

              <div className="col-span-5 md:col-span-5 ">
                <label htmlFor="toCity" className="block text-start font-medium mb-2">To</label>
                <div className="relative">
                  <FaPlaneArrival className="absolute top-3 left-3" />
                  <input
                    type="text"
                    name="toCity"
                    id="toCity"
                    value={formData.toCity}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Where to ?"
                    className={`w-full px-10 py-2 border rounded-lg focus:ring focus:ring-blue-300 ${errors.toCity ? "border-red-500 text-xs" : "border-gray-300"
                      }`}
                  />
                  {errors.toCity && (
                    <p className="text-red-500 text-start text-sm mt-1">{errors.toCity}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="departureDate" className="block font-medium mb-2">Departure Date</label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  min={date}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>
              {formData.tripType === "round-trip" && (
                <div>
                  <label htmlFor="returnDate" className="block font-medium mb-2">Return Date</label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    min={formData.departureDate}
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
              )}
            </div>

            {/* Travellers & Class */}
            <div className="mb-6">
              <p className="block font-medium mb-2">Travellers & Class</p>
              <div className="flex flex-wrap justify-evenly gap-4 items-center">
                {["adult", "child", "infant"].map((type) => (
                  <div key={type} className="flex items-center">
                    <h1 className="mr-2">{type}</h1>
                    <button
                      type="button"
                      onClick={() => handleTravellerChange(type, "decrease")}
                      className="px-2 bg-gray-200 text-gray-600 rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 bg-gray-100 border">{formData.travellers[type]}</span>
                    <button
                      type="button"
                      onClick={() => handleTravellerChange(type, "increase")}
                      className="px-2 bg-gray-200 text-gray-600 rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                ))}
                <select
                  name="travelClass"
                  title="travelClass in Flight"
                  value={formData.travelClass}
                  onChange={handleChange}
                  className=" border rounded-lg px-4 py-2 bg-white text-gray-600"
                >
                  {["Economy", "Premium Economy", "Business", "First Class"].map(
                    (option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>

            {/* Special Discounts */}
            <div className="mb-6">
              <p className="block font-medium mb-2">Special Discounts</p>
              <div className="grid grid-cols-3 py sm:grid-cols-5 gap-2">
                {[
                  "Regular",
                  "Student",
                  "Senior Citizen",
                  "Armed Forces",
                  "Doctor",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleDiscountChange(type)}
                    className={`px-0 py-0 rounded-lg font-semibold sm:py-2 ${formData.discountType === type
                      ? "bg-lime-700 text-white"
                      : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-36 bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition ${loading ? "cursor-not-allowed opacity-50" : ""
                }`}
              disabled={loading}
            >
              {loading ? "Searching..." : "Search Flights"}
            </button>
          </form>

          {/* Search Results */}
          {searchResults && (
            <div className="mt-6">
              <h2 className="text-xl font-bold">Search Results</h2>
              <pre className="bg-gray-100 p-4 rounded-lg mt-4">
                {JSON.stringify(searchResults, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FlightSearchForm;   