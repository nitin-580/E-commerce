"use client";
import React from "react";

const categories = ["For Home", "For Gifting", "For You"];

const CategoryBar = () => {
  return (
    <div className="w-full bg-yellow-600/60 py-4 shadow-md">
      <div className="flex justify-center items-center space-x-6 text-2xl text-white">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <button className="hover:text-black transition">
              {category}
            </button>
            {/* Add divider except after last item */}
            {index < categories.length - 1 && (
              <span className="text-gray-300">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
