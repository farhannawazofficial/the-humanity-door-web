"use client";

import { FaHandHoldingHeart, FaStethoscope, FaMobileAlt, FaFaucet, FaGraduationCap, FaUtensils } from "react-icons/fa";

export default function ProductSection() {
  const products = [
    { title: "Welfare", icon: <FaHandHoldingHeart className="text-green-600 w-12 h-12" /> },
    { title: "Medical", icon: <FaStethoscope className="text-green-600 w-12 h-12" /> },
    { title: "Online Sadaqah", icon: <FaMobileAlt className="text-green-600 w-12 h-12" /> },
    { title: "Clean Water", icon: <FaFaucet className="text-green-600 w-12 h-12" /> },
    { title: "Education", icon: <FaGraduationCap className="text-green-600 w-12 h-12" /> },
    { title: "Food", icon: <FaUtensils className="text-green-600 w-12 h-12" /> },
  ];

  return (
    <section className="py-10 bg-green-50">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">What We Are Doing</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 lg:px-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {product.icon}
            <h3 className="text-lg font-medium text-gray-700 mt-4">{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
