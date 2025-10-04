import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-md border border-gray-300 shadow-sm">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Sign in or create account
        </h1>

        {/* Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Enter mobile number or email
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-black hover:bg-black text-white font-medium py-2 rounded-full transition">
          Continue
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-600 mt-4">
          By continuing, you agree to ShopMate’s{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Notice
          </a>
          .
        </p>

        {/* Divider */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Business Account */}
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-1">
            Buying for work?
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm hover:underline"
          >
            Create a free business account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
