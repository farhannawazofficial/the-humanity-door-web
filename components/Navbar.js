// components/Navbar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/images/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 ">
                            <Link href="/" className="text-xl font-bold text-gray-800">
                                <Image
                                    src={Logo}
                                    width={280}
                                    
                                    alt="Picture of the author"
                                />
                            </Link>
                        </div>
                        <div className="hidden md:ml-16 my-[18px] md:flex md:space-x-8">
                            <Link href="/about" className="text-gray-800 hover:text-green-900">
                                About
                            </Link>
                            <Link href="/services" className="text-gray-800 hover:text-green-900">
                                Services
                            </Link>
                            <Link href="/media" className="text-gray-800 hover:text-green-900">
                                Media
                            </Link>
                            <Link href="/contact" className="text-gray-800 hover:text-green-900">
                                Contact Us
                            </Link>
                            <Link href="/bank-details" className="text-gray-800 hover:text-green-900">
                                Bank Details
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:flex md:space-x-4">
                            <button className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
                                Donate Now
                            </button>
                            <button className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                                Be a Sponsor
                            </button>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-600"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/about" className="block text-gray-800 hover:text-green-900">
                        About
                    </Link>
                    <Link href="/services" className="block text-gray-800 hover:text-green-900">
                        Services
                    </Link>
                    <Link href="/media" className="block text-gray-800 hover:text-green-900">
                        Media
                    </Link>
                    <Link href="/contact" className="block text-gray-800 hover:text-green-900">
                        Contact Us
                    </Link>
                    <Link href="/bank-details" className="block text-gray-800 hover:text-green-900">
                        Bank Details
                    </Link>
                    <button className="block w-full text-left bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
                        Donate Now
                    </button>
                    <button className="block w-full text-left bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                        Be a Sponsor
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
