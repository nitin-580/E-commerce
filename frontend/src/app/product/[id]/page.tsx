// src/app/product/[id]/page.tsx
"use client"; // ← Add this if using client-side components

import React from 'react';
import { products, Product } from '@/components/product/products';
import ProductDetailCard from '@/components/product/ProductDetailCard';

interface Params {
  params: { id: string };
}

const ProductPage = ({ params }: Params) => {
  const product: Product | undefined = products.find(
    (p) => p.id === parseInt(params.id)
  );

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ProductDetailCard product={product} />
    </div>
  );
};

export default ProductPage;
