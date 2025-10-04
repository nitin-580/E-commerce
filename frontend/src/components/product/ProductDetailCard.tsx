import React, { useRef, useState } from "react";
import { Product } from "@/components/product/products";
import { DM_Serif_Text } from "next/font/google";
import PaymentFeatures from "./PaymentFeatures";
import ProductAccordion from "./ProductAccordtion";
import ColorSwatchRow from "./ProductCategories";

const dM_Serif_Text = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"], // choose weights you need
});

interface Props {
  product: Product;
}

const ProductDetailCard: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const rightScrollRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const thumbnails = [
    product.image,
    "https://picsum.photos/400/400?random=10",
    "https://picsum.photos/400/400?random=11",
  ];

  // 🔹 Scroll sync: when right side hits bottom, reset both columns to top
  const handleRightScroll = () => {
    if (!rightScrollRef.current || !containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = rightScrollRef.current;

    if (scrollTop + clientHeight >= scrollHeight) {
      // Reset both columns
      rightScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 h-[90vh] overflow-hidden"
    >
      {/* Left: Product Image (static scroll) */}
      <div className="overflow-hidden">
        <div className="sticky top-0">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg border"
            />
            <span className="absolute top-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
              {product.discout}
            </span>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {thumbnails.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className="w-24 h-24 object-cover border rounded cursor-pointer hover:ring-2 hover:ring-orange-500"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: Scrollable Product Info */}
      <div
        ref={rightScrollRef}
        onScroll={handleRightScroll}
        className="flex flex-col gap-4 overflow-y-auto pr-2 h-[90vh]"
      >
        <h1
          className={`${dM_Serif_Text.className} text-3xl text-black`}
        >
          {product.name} | BrandName
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gray-300">
                &#9733;
              </span>
            ))}
          </div>
          <span className="text-blue-500 text-sm cursor-pointer">
            Write Review
          </span>
        </div>

        <div className="flex items-center gap-3">
          <p
            className={`${dM_Serif_Text.className} text-xl text-gray-700 line-through`}
          >
            {product.originalPrice}
          </p>
          <p className="text-3xl text-black font-bold">{product.price}</p>
          <p className="text-red-600 text-2xl font-bold">{product.discout}</p>
        </div>
        <hr className="border-t border-gray-600 my-4" />

        <h3 className="text-black font-semibold text-lg">Description</h3>
        <p className="text-sm text-gray-700">
          Experience premium sound quality with the LuxeWave Bluetooth Speaker.
          Designed for both style and performance, it delivers crisp highs, deep
          bass, and 360° immersive audio. Compact yet powerful, this speaker is
          perfect for home, office, or outdoor adventures. With a sleek aluminum
          finish, long-lasting battery life of up to 12 hours, and seamless
          Bluetooth connectivity, LuxeWave ensures your favorite tunes are
          always within reach. Available in multiple vibrant colors to match
          your style.
        </p>

        <PaymentFeatures />
        <ColorSwatchRow />

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mt-4 text-gray-700">
          <button
            onClick={decrement}
            className="w-10 h-10 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={increment}
            className="w-10 h-10 bg-gray-200 rounded-full text-lg font-bold hover:bg-gray-300"
          >
            +
          </button>
        </div>

        <p className="text-sm text-yellow-700 mt-2">
          Want to buy this in bulk?{" "}
          <span className="underline cursor-pointer">Click here</span>
        </p>
        <p className="text-sm text-gray-500">
          We have more than 10 in stock
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="w-70 px-6 py-3 bg-black text-white font-semibold rounded-sm border border-black hover:bg-gray-800 transition">
            Buy It Now
          </button>
          <button className="w-70 px-6 py-3 bg-white text-black font-semibold rounded-sm border border-black hover:bg-gray-100 transition">
            Add to Cart
          </button>
        </div>

        <ProductAccordion />
      </div>
    </div>
  );
};

export default ProductDetailCard;
