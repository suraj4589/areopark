import React, { useState } from "react";
import { slides } from '../../constants'


const PopulerDestination = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className=" p-2 bg-gray-200 ">
        <h2 className=" p-4 font-medium lg:my-3 text-xl "><span className="bg-white p-2 text-2xl rounded-lg ">Beautiful Places</span></h2>
        {/* Full-width images */}
        <div className=" relative overflow-hidden rounded-lg">

          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="w-full object-cover h-48 sm:h-96 xl:h-96"
            loading={currentSlide === 0 ? "eager" : "lazy"}
          />

          <div className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            {currentSlide + 1} / {slides.length}
          </div>
          {/* Caption */}
          <div className="absolute bottom-2 left-0 right-0 text-center text-white bg-black bg-opacity-50 px-4 py-2">
            {slides[currentSlide].caption}
          </div>
          {/* Next/Prev Buttons */}
          <button
            onClick={handlePrevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-75"
          >
            &#10094;
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black bg-opacity-50 px-3 py-2 rounded-full hover:bg-opacity-75"
          >
            &#10095;
          </button>
        </div>

        {/* Thumbnail images */}
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`cursor-pointer border-2 rounded ${currentSlide === index
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300"
                }`}
              onClick={() => goToSlide(index)}
            >
              <img
                src={slide.src}
                alt={slide.alt}

                loading="lazy"
                className="w-24 h-12 object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopulerDestination;
