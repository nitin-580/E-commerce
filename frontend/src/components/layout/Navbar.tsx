import React from 'react'
import { Search, User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md sticky z-50 top-0">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Left side - Search */}
        <div className="flex items-center gap-x-4">
          <Search className="h-6 w-6 text-black cursor-pointer" />
        </div>

        {/* Middle - Logo + Brand Name */}
        <div className="flex items-center gap-x-2">
          <img 
            src="https://picsum.photos/20/10" // replace with your logo path
            alt="Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-xl text-black">BRANDNAME</span>
        </div>

        {/* Right side - User + ShoppingBag */}
        <div className="flex items-center gap-x-4">
          <User className="h-6 w-6 text-black cursor-pointer" />
          <ShoppingBag className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <div>
  <nav className="bg-white p-4">
    <ul className="flex justify-center space-x-6 text-sm text-gray-700 font-medium">
      <li className="relative cursor-pointer group">
        Home
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative cursor-pointer group">
        Products
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative cursor-pointer group">
        About Us
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative cursor-pointer group">
        Contact
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </li>
    </ul>
  </nav>
</div>

      <div>
  <nav className="bg-gray-100 p-4 shadow-sm">
    <ul className="flex justify-center font-medium space-x-8 text-sm text-gray-700">
      <li className="relative cursor-pointer hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
        Wall Art
      </li>
      <li className="relative cursor-pointer hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
        Lighting
      </li>
      <li className="relative cursor-pointer hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
        Furniture
      </li>
      <li className="relative cursor-pointer hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
        Rugs
      </li>
      <li className="relative cursor-pointer hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
        Decor Accents
      </li>
      <li className="relative cursor-pointer hover:text-black after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
        Plants
      </li>
    </ul>
  </nav>
</div>


    </div>
    
  )
}

export default Navbar
