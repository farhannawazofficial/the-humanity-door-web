"use client";

import { useState } from "react";

export default function ZakatSection() {
  const [amount, setAmount] = useState(0);

  return (
    <section className="py-10 bg-green-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="rounded-lg p-6 bg-green-100 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* General Input */}
            <div className="flex items-center bg-gray-800 text-white rounded-md overflow-hidden shadow-lg">
              <span className="px-4 py-3 bg-gray-700 text-sm font-medium">General</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-20 px-2 py-3 text-gray-900 text-center outline-none border-l border-gray-700"
                placeholder="0"
                min="0"
              />
              <span className="px-4 py-3 text-sm font-medium">Rs.</span>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                "Blood Bank / Thalassemia Treatment",
                "Family Kifalat",
                "Medical",
                "Food",
              ].map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 rounded-md shadow-md hover:bg-gray-900 hover:text-white transition-all"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Quick Donate */}
            <button
              className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 text-sm font-semibold rounded-md shadow-md transition-transform transform hover:scale-105"
            >
              Quick Donate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
