"use client";

import { FaHeartbeat, FaHome, FaLaptopCode, FaSeedling } from "react-icons/fa";

export default function OtherProjects() {
  const projects = [
    {
      title: "Hepatitis",
      description:
        "The Humanity Door Foundation has also set up a clinic for the best treatment of hepatitis patients where hepatitis patients are being treated.",
      icon: <FaHeartbeat className="text-green-600 w-10 h-10" />,
    },
    {
      title: "Housing Society",
      description:
        "The Humanity Door Foundation is also providing its own home facility for the homeless people. So far, thousands of houses and flats have been constructed and given in easy installments.",
      icon: <FaHome className="text-green-600 w-10 h-10" />,
    },
    {
      title: "IT Literacy",
      description:
        "We are committed to developing more than 1 million software developers, which will add about 100 billion annually to Pakistan's economy and help ease the debt burden on Pakistan.",
      icon: <FaLaptopCode className="text-green-600 w-10 h-10" />,
    },
    {
      title: "Tharparkar",
      description:
        "In Tharparkar, Saylani has set up several schools and RO plants, dug wells, and brought the children there to Karachi and taught them modern technology.",
      icon: <FaSeedling className="text-green-600 w-10 h-10" />,
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-green-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-600">
              The Humanity Door Foundation serve almost 300,000 underprivileged on daily basis
            </h3>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/037/064/781/small_2x/female-individuals-in-charitable-organization-offering-support-to-those-in-need-by-serving-complimentary-food-hunger-relief-team-of-volunteers-providing-hot-meals-and-provisions-to-underprivileged-photo.jpg" // Replace with your image URL
              alt="Serving People"
              className="mt-4 rounded-lg shadow-md"
            />
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Other Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div>{project.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
