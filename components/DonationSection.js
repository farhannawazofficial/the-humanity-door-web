"use client";

import React from "react";
import CountUp from "react-countup";
import { FaUtensils, FaHandsHelping, FaGraduationCap, FaStethoscope } from "react-icons/fa";

export default function DonationSection() {
  const stats = [
    {
      icon: <FaUtensils className="text-green-500 w-12 h-12" />,
      number: 300000,
      title: "Food",
      frequency: "Daily",
    },
    {
      icon: <FaHandsHelping className="text-green-500 w-12 h-12" />,
      number: 20000,
      title: "Family Adoption",
      frequency: "Monthly",
    },
    {
      icon: <FaGraduationCap className="text-green-500 w-12 h-12" />,
      number: 25000,
      title: "Education",
      frequency: "Monthly",
    },
    {
      icon: <FaStethoscope className="text-green-500 w-12 h-12" />,
      number: 125000,
      title: "Medical",
      frequency: "Monthly",
    },
  ];

  return (
    <section className="py-10 bg-blue-600 text-white">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-blue-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold">
                <CountUp end={stat.number} duration={2} separator="," />
              </h3>
              <p className="mt-2 text-lg">{stat.title}</p>
              <p className="text-sm text-blue-200">{stat.frequency}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
