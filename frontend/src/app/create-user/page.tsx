"use client"
import React, { useState } from "react";

// This is the main component for the registration page.
// In a Next.js project, you would save this file as 'page.tsx' or 'index.tsx'
// inside your app or pages directory.
const Page = () => {
  // Use state hooks to manage the input values for name, email, and password.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * This function handles the form submission.
   */
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior which would refresh the page.
    e.preventDefault();

    // In a real application, you would send this data to a backend API
    // to create the new user account.
    console.log("Registering with:", {
      name: name,
      email: email,
      password: password,
    });

    // You can add validation logic here before sending the data.
    // For example, checking if the email is a valid format or if the password is long enough.
  };

  return (
    // The main container for the page, centered both horizontally and vertically.
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Card container for the registration form. */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300 shadow-md">
        {/* Page title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Create your account
        </h1>

        {/* The form element to handle submission */}
        <form onSubmit={handleRegister}>
          {/* Full Name input field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 text-black rounded-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Email address input field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 text-black rounded-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Password input field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-400 text-black  rounded-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Continue/Register button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 rounded-full transition"
          >
            Create account
          </button>
        </form>

        {/* Terms of Service and Privacy Notice text */}
        <p className="text-xs text-gray-600 mt-4 text-center">
          By continuing, you agree to ShopMate’s{" "}
          <a href="#" className="text-blue-600 hover:underline" rel="noopener noreferrer">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline" rel="noopener noreferrer">
            Privacy Notice
          </a>
          .
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Business account section */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-800 mb-1">
            Buying for work?
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm hover:underline"
            rel="noopener noreferrer"
          >
            Create a free business account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
