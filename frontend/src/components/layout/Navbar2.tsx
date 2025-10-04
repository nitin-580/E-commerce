"use client";
import React, { useState, useEffect } from "react";
import { Search, User, ShoppingBag, X } from "lucide-react";
import CartItem from "../cart/CartItem";
import AccountDrawer from "../account /Profile"; // ✅ import account drawer

const Navbar2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false); // ✅ new state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-transparent shadow-md sticky z-40 top-0">
        <div className="flex items-center justify-between px-6 py-2">
          {/* Left side - Search */}
          <div className="flex items-center gap-x-4">
            <Search
              className="h-6 w-6 text-white cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
          </div>

          {/* Middle - Logo + Brand Name */}
          <div className="flex items-center gap-x-2">
            <img
              src="/images/logo3.png"
              alt="Logo"
              className="h-20 w-20 object-contain"
            />
            <span className="text-3xl text-white font-dancing ">Samved Living</span>
          </div>

          {/* Right side - User + ShoppingBag */}
          <div className="flex items-center gap-x-4">
            <User
              className="h-6 w-6 text-white cursor-pointer"
              onClick={() => setAccountOpen(true)} // ✅ open profile drawer
            />
            <ShoppingBag
              className="h-6 w-6 text-white cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
          </div>
        </div>

        {/* Nav Links */}
        <nav className="bg-transparent p-4">
          <ul className="flex justify-center space-x-6 text-xl text-white font-medium">
            <li className="relative cursor-pointer group">
              Home
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative cursor-pointer group">
              Products
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative cursor-pointer group">
              About Us
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative cursor-pointer group">
              Contact
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>

        {/* Secondary Nav */}
      </div>

      {/* ✅ Slide Down Search Bar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transform transition-transform duration-300 ${
          searchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-center px-6 py-6 max-w-3xl mx-auto">
          <div className="flex items-center w-full border border-gray-400 rounded px-3 py-2">
            <Search className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-black outline-none text-sm"
              autoFocus={searchOpen}
            />
            <X
              className="h-5 w-5 text-black cursor-pointer ml-2"
              onClick={() => {
                setSearchQuery("");
                setSearchOpen(false);
              }}
            />
          </div>
        </div>
      </div>

      {/* ✅ Cart Drawer */}
      <CartItem isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* ✅ Account Drawer */}
      <AccountDrawer isOpen={accountOpen} onClose={() => setAccountOpen(false)} />
    </>
  );
};

export default Navbar2;
