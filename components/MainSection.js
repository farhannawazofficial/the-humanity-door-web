// components/MainSection.js
"use client";
import Typical from 'react-typical';


const MainSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Saylani Welfare Non-Governmental Organization in Pakistan
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The largest NGO offering free assistance
        </p>
        <Typical
          steps={[
            'Saylani Welfare is on the ground and already working with local communities to assess how best to support underprivileged families in more than 63 areas of day-to-day lives.',
            3000,
            'Explore More',
            3000,
          ]}
          loop={Infinity}
          wrapper="p"
          className="text-lg text-gray-700"
        />
      </div>
    </section>
  );
};

export default MainSection;
