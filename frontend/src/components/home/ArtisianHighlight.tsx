"use client";

import React from "react";
import Image from "next/image";

const ArtisanHighlight = () => {
  return (
    <section className="relative bg-[#fdfbf7] py-16 px-6 overflow-hidden">
      {/* Background Texture */}
      <Image
        src="/background/paper-texture.jpg"
        alt="Paper texture background"
        fill
        className="object-cover opacity-10"
        priority
      />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Crafted by Hands. Guided by Values.
        </h2>
        <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Every product on <span className="font-semibold">Samved</span> carries
          the story of the artisan who made it—infused with skill, heritage, and care for the planet.
        </p>

        {/* Portrait Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portrait 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/products/artisan1.jpg"
              alt="Artisan 1"
              width={300}
              height={300}
              className="rounded-2xl shadow-md object-cover"
            />
            <blockquote className="mt-4 text-xl text-gray-700 italic">
              “Crafting is not just my work, it’s my identity.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500">– Artisan A</p>
          </div>

          {/* Portrait 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/products/artisan2.jpg"
              alt="Artisan 2"
              width={300}
              height={300}
              className="rounded-2xl shadow-md object-cover"
            />
            <blockquote className="mt-4 text-xl text-gray-700 italic">
              “Each piece tells a story of heritage and sustainability.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500">– Artisan B</p>
          </div>

          {/* Portrait 3 */}
          <div className="flex flex-col text-xl items-center text-center">
            <Image
              src="/products/artisan3.jpg"
              alt="Artisan 3"
              width={300}
              height={300}
              className="rounded-2xl shadow-md object-cover"
            />
            <blockquote className="mt-4 text-xl text-gray-700 italic">
              “What I make with my hands is guided by values of care.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500">– Artisan C</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanHighlight;
