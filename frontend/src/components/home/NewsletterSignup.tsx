"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-[#fef4e4] py-12 px-4 flex justify-center">
      <div className="max-w-xl w-full text-center bg-[#fef4e4] p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get the latest updates, opportunities, and news straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#e47225] text-white font-semibold hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
