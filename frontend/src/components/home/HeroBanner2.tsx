"use client";
import React, { useState, useEffect } from "react";

const posters = [
  "https://picsum.photos/id/1018/2000/1500",
  "https://picsum.photos/id/1015/2000/1500",
  "https://picsum.photos/id/1019/2000/1500",
  "https://picsum.photos/id/1020/2000/1500",
  "https://picsum.photos/id/1021/2000/1500",
];

const HeroBanner2 = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === posters.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? posters.length - 1 : prev - 1));
  };

  // Auto change image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Images */}
      {posters.map((poster, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={poster}
            alt={`Poster ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {posters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner2;
