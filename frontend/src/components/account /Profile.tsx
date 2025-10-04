// components/account/AccountDrawer.tsx
import React from "react";
import { X } from "lucide-react";

interface AccountDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountDrawer: React.FC<AccountDrawerProps> = ({ isOpen, onClose }) => {
  const dummyUser = {
    name: "Ritik Sharma",
    email: "ritik.sharma@example.com",
    avatar: "https://i.pravatar.cc/100?img=5",
    joined: "Jan 2024",
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg text-gray-900 font-semibold">My Account</h2>
        <X className="h-6 w-6 cursor-pointer text-black" onClick={onClose} />
      </div>

      {/* Account Info */}
      <div className="p-6 text-gray-900 flex flex-col items-center gap-3">
        <img
          src={dummyUser.avatar}
          alt={dummyUser.name}
          className="h-20 w-20 rounded-full border object-cover"
        />
        <h3 className="text-lg font-semibold">{dummyUser.name}</h3>
        <p className="text-sm text-gray-600">{dummyUser.email}</p>
        <p className="text-xs text-gray-500">Joined {dummyUser.joined}</p>
      </div>

      {/* Links */}
      <div className="px-6 space-y-4 text-gray-900">
        <button className="w-full text-left py-2 border-b hover:text-black/80">
          Orders
        </button>
        <button className="w-full text-left py-2 border-b hover:text-black/80">
          Wishlist
        </button>
        <button className="w-full text-left py-2 border-b hover:text-black/80">
          Settings
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-4 border-t bg-white">
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountDrawer;
