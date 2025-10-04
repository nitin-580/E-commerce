"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Navbar2 from "../layout/Navbar2"
import CategoryGrid from "./CategoryBar";
import CategoryBar from "./CategoryBar";

const posters = ["/images/background.jpg"];

const HeroBanner2 = () => {
  const [current, setCurrent] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

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
    return () => clearInterval(timer);
  }, []);

  // Show navbar only when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
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

      {/* Overlay Content (Logo + Button) */}
      <div className="absolute inset-0 text-center text-white bg-black/40">
      <Navbar2 />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
        <img
          src="/images/logo3.png"
          alt="Logo"
          className="h-150 w-150 mb-8 object-contain"
        />
        <button className="px-10 py-6 bg-transparent text-white border text-3xl shadow-md hover:bg-white hover:text-black transition">
          Explore Collections
        </button>
      </div>
      <div>
        <CategoryBar />
      </div>

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
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
      {/* Navbar (hidden until scroll) */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transform transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default HeroBanner2;
