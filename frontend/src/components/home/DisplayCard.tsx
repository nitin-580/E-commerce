"use client";
import React from "react";

const HandicraftSection = () => {
  return (
    <div className="bg-[#f7e9d1] py-12 px-6">
      {/* Title & Description */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-6xl font-bold text-[#4b1f27] mb-4">Handicraft Bags</h2>
        <p className="text-2xl text-gray-700">
          Discover the timeless beauty of handmade craftsmanship. 
          Each bag tells a story of tradition, culture, and creativity, 
          blending modern design with authentic artistry.
        </p>
      </div>

      {/* Two Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div>
          <img
            src="/products/image.png"
            alt="Handicraft Bag 1"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
        <div>
          <img
            src="/products/image1.png"
            alt="Handicraft Bag 2"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-7">
      <button className="px-10 py-6 bg-transparent text-black border-2 border-black text-3xl font-semibold shadow-md flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
  VIEW ALL PRODUCTS
</button>
      </div>

    </div>
  );
};

export default HandicraftSection;
