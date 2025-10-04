import React from "react";
import Link from "next/link";
import {products} from "@/components/product/products";

const ProductGrid: React.FC = () => {
  return (
    <div className="bg-[#f7e9d1] py-10">
      <h2 className="text-4xl text-black text-center mb-5">Our Products</h2>
      <h2 className="text-m text-gray-500 text-center mb-8">
        Discover Our Diverse Categories for Every Corner of Your Home
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white transition duration-300 overflow-hidden hover:shadow-lg">
            <Link href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-68 object-cover border-4 border-gray-300 cursor-pointer"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-m text-black">{product.name} | BRAND</h3>
              <div className="flex gap-x-3">
                <p className="text-gray-500 line-through">{product.originalPrice}</p>
                <p className="text-xl text-black">{product.price}</p>
              </div>
              <p className="text-green-600 text-sm">{product.discout}</p>

              <div className="flex gap-x-4 mt-3">
                <button className="w-full px-4 py-2 text-xs border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition">
                  Buy Now
                </button>
                <button className="w-full px-4 py-2 text-xs bg-black text-white hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
