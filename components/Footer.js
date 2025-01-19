import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/images/logo.png';
import { FaFacebookF, FaWhatsapp, FaYoutube, AiFillTikTok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-start">
          <Link href="/" className="text-xl font-bold text-gray-800">
                                <Image
                                    src={Logo}
                                    width={280}
                                    
                                    alt="Picture of the author"
                                />
                            </Link>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-full transition-transform duration-300 hover:scale-110"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              {/* <a
                href="#"
                className="bg-black p-2 rounded-full transition-transform duration-300 hover:scale-110"
              >
                <AiFillTikTok className="text-white text-lg" />
              </a> */}
              <a
                href="#"
                className="bg-red-600 p-2 rounded-full transition-transform duration-300 hover:scale-110"
              >
                <FaYoutube className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="bg-green-500 p-2 rounded-full transition-transform duration-300 hover:scale-110"
              >
                <FaWhatsapp className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Chairman Message
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Annual Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Bank Details
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Donations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>A-25, Bahadurabad Chowrangi Karachi, Pakistan</li>
              <li>
                UAN: 111-729-528 (+0092-213)4130786-90
              </li>
              <li>Cell: 92-311-1728528</li>
              <li>USA: +1 (716) 941 7792</li>
              <li>UK: +44 (15) 970 6256</li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors"
                >
                  For Istikhara Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} The Humanity Door Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
