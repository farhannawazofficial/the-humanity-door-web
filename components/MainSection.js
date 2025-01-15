
"use client";
import Typical from 'react-typical';
import Image from 'next/image';
import Main from '../public/images/main.png'


export default function MainSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:flex lg:items-center lg:space-x-16">
        {/* Left Side: Text */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-4xl font-bold leading-snug text-gray-800">
            Welcome to the <span className="text-green-600">Humanity Door Foundation</span> Non-Governmental Organization in Pakistan
          </h1>
          <p className="mt-6 text-xl font-medium text-gray-600">
            The largest NGO offering free services <Typical
            steps={[
              'Monthly Family Support',
              3000,
              'Clean Water',
              3000,
              'Green Plants',
              3000,
            ]}
            loop={Infinity}
            wrapper="p"
            className="text-lg text-green-600"
          />
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day-to-day lives.
          </p>
          <div className="mt-8">
            <a
              href="/explore"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="ml-2 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <Image
            src={Main}
            alt="Saylani Welfare Work"
            width={500}
            height={500}
            className="rounded-full shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
