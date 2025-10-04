"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Hand, Recycle, Flag } from "lucide-react";

const ConsciousPackaging = () => {
  return (
    <section className="bg-[#fdfbf7] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <Image
            src="/packaging/cloth-wrap.jpg" // 👈 place your cloth wrap + wax seal + stamp image here
            alt="Conscious Packaging"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right - Writeup */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Conscious Packaging
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At <span className="font-semibold">Samved</span>, packaging is more than just protection—
            it’s an extension of our values. We use cloth wraps, natural wax seals,
            and biodegradable materials to ensure every delivery is as kind to the
            Earth as it is to you. Each step is guided by minimal waste, maximum care.
          </p>

          {/* Icons Row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Leaf className="w-7 h-7 text-green-600" />
              <span className="text-gray-700 font-medium">Compostable</span>
            </div>
            <div className="flex items-center space-x-3">
              <Hand className="w-7 h-7 text-yellow-600" />
              <span className="text-gray-700 font-medium">Handmade</span>
            </div>
            <div className="flex items-center space-x-3">
              <Recycle className="w-7 h-7 text-blue-600" />
              <span className="text-gray-700 font-medium">Minimal Waste</span>
            </div>
            <div className="flex items-center space-x-3">
              <Flag className="w-7 h-7 text-red-600" />
              <span className="text-gray-700 font-medium">Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsciousPackaging;
