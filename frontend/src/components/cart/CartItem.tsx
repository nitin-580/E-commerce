// components/cart/CartItem.tsx
import React from "react";
import { X } from "lucide-react";

interface CartItemProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ isOpen, onClose }) => {
  const dummyCart = [
    {
      id: 1,
      name: "Sunshine Daydream Boucle Lounge Armchair",
      price: 18999,
      oldPrice: 39499,
      image: "https://picsum.photos/80/80",
      qty: 1,
    },
    {
      id: 2,
      name: "Mandala Fabric Wooden Ottoman",
      price: 2199,
      oldPrice: 3499,
      image: "https://picsum.photos/81/81",
      qty: 1,
    },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg text-gray-900 font-semibold">Your Cart</h2>
        <X className="h-6 w-6 cursor-pointer text-black" onClick={onClose} />
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4 text-gray-900 overflow-y-auto h-[70%]">
        {dummyCart.map((item) => (
          <div key={item.id} className="flex items-center gap-3 border-b pb-2">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 rounded object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium">{item.name}</h3>
              <div className="text-gray-600 text-sm">
                <span className="line-through mr-2">₹{item.oldPrice}</span>
                <span className="font-semibold">₹{item.price}</span>
              </div>
              <p className="text-xs text-gray-500">Qty: {item.qty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 text-gray-900 w-full p-4 border-t bg-white">
        <div className="flex justify-between font-medium mb-3">
          <span>Total</span>
          <span>
            ₹
            {dummyCart.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
