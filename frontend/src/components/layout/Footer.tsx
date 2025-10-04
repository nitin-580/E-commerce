import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6A0D0D] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Samved Living</h2>
          <p className="text-xl">
            Bringing you the best home decor items to make your space warm,
            stylish, and inspiring.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-xl">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-xl">
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-xl mb-3">Subscribe to get the latest offers & updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Samved Living. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
