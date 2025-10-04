// src/data/products.ts
export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discout: string;
  image: string;
}

export const products: Product[] = [
  { id: 1, name: "Modern Lamp", price: "$49.99", image: "https://picsum.photos/400/400?random=1", discout: "23% Off", originalPrice: "$78.99" },
  { id: 2, name: "Wooden Chair", price: "$89.99", image: "https://picsum.photos/400/400?random=2", discout: "23% Off", originalPrice: "$78.99" },
  { id: 3, name: "Wall Clock", price: "$29.99", image: "https://picsum.photos/400/400?random=3", discout: "23% Off", originalPrice: "$78.99" },
  { id: 4, name: "Table Vase", price: "$39.99", image: "https://picsum.photos/400/400?random=4", discout: "23% Off", originalPrice: "$78.99" },
  { id: 5, name: "Decorative Mirror", price: "$99.99", image: "https://picsum.photos/400/400?random=5", discout: "23% Off", originalPrice: "$78.99" },
  { id: 6, name: "Cozy Sofa", price: "$399.99", image: "https://picsum.photos/400/400?random=6", discout: "23% Off", originalPrice: "$499.99" },
  { id: 7, name: "Cozy Sofa 2", price: "$399.99", image: "https://picsum.photos/400/400?random=7", discout: "23% Off", originalPrice: "$499.99" },
  { id: 8, name: "Cozy Sofa 3", price: "$399.99", image: "https://picsum.photos/400/400?random=8", discout: "23% Off", originalPrice: "$499.99" },
  
];
