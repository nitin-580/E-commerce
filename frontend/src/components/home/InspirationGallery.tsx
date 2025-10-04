"use client";
import React from "react";

const InfoSection = () => {
  return (
    <div className="w-full bg-[#f7e9d1] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="text-left">
          <h2 className="text-6xl md:text-4xl font-bold text-[#4b1f27] mb-4">
            Why Samved?
          </h2>
          <p className="text-2xl text-gray-700 mb-6">
          Samved is a one-of-a-kind sustainable e-commerce platform dedicated to promoting conscious living, creativity, and ethical shopping. At Samved, we believe that every purchase has a story, which is why we partner with skilled artisans and craftspeople from across the country to bring you unique, handcrafted products—from stylish bags and accessories to home décor and lifestyle essentials. Each item is thoughtfully designed and carefully made, reflecting a deep respect for tradition, culture, and the environment.
          </p>
          <button className="px-6 py-3 bg-[#e47225] text-white font-semibold shadow-md hover:bg-[#c85f1e] transition rounded">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/products/image.png"
            alt="Sample"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
