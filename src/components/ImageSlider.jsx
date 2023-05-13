import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://wallpaperaccess.com/full/24325.jpg",
      title: "Lobster",
    },
    {
      url: "https://wallpaperaccess.com/full/24324.jpg",
      title: "Sushi",
    },
    {
      url: "https://wallpaperaccess.com/full/24323.jpg",
      title: "Pasta",
    },
    {
      url: "https://wallpaperaccess.com/full/24322.jpg",
      title: "Salmon",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full max-w-[1400px] h-[580px] m-auto">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 flex items-center">
        <button
          className="rounded-full bg-black bg-opacity-30 hover:bg-opacity-60 p-2 md:p-3"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft className="text-white" size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 flex items-center">
        <button
          className="rounded-full bg-black bg-opacity-30 hover:bg-opacity-60 p-2 md:p-3"
          onClick={nextSlide}
        >
          <BsChevronCompactRight className="text-white" size={24} />
        </button>
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`rounded-full w-3 h-3 md:w-4 md:h-4 mx-1 ${
              slideIndex === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
