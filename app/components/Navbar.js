"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3 px-5">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/saylani-logo.png"
            alt="Saylani Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-green-600">Saylani</h1>
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop + Mobile) */}
        <nav
          className={`lg:flex items-center space-x-6 ${
            isMenuOpen ? 'block' : 'hidden'
          } absolute lg:static top-16 left-0 w-full bg-white lg:w-auto lg:space-y-0 space-y-4 lg:px-0 px-5 shadow-lg lg:shadow-none`}
        >
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </Link>
          <Link href="/media" className="text-gray-700 hover:text-blue-600 font-medium">
            Media
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact Us
          </Link>
          <Link href="/bank-details" className="text-gray-700 hover:text-blue-600 font-medium">
            Bank Details
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/donate"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Donate Now
          </Link>
          <Link
            href="/sponsor"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Be a Sponsor
          </Link>
        </div>

        {/* Action Buttons for Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden px-5 space-y-4">
            <Link
              href="/donate"
              className="block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Donate Now
            </Link>
            <Link
              href="/sponsor"
              className="block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Be a Sponsor
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
