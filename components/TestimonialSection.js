"use client";

import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Arshad Wali Muhammad",
      title: "Group Director, Gerry's Group",
      review:
        "The Humanity Door Foundation is a name that needs no introduction today. The journey this team embarked upon was made possible owing to their zeal, enthusiasm & commitment to the society and by the grace of Allah (SWT). It has become a name that we need and not just the one we want. I wish Saylani’s team all the success and blessings they deserve for the future.",
      image: "data:image/jpeg;base64,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",
    },
    {
      name: "Ahmed Khan",
      title: "CEO, ABC Tech",
      review:
        "The Humanity Door Foundation has set the benchmark for welfare work in Pakistan. Their efforts are unmatched, and their dedication to uplifting the underprivileged is truly inspiring.",
      image: "data:image/jpeg;base64,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",
    },
    {
      name: "Maria Zahra",
      title: "Social Activist",
      review:
        "I’ve seen the impact of The Humanity Door Foundation work first-hand. Their projects are life-changing for the people they serve. May Allah bless them abundantly.",
      image: "data:image/jpeg;base64,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",
    },
    {
      name: "Usman Iqbal",
      title: "Philanthropist",
      review:
        "The Humanity Door Foundation is doing incredible work for humanity. Their consistent efforts in providing food, education, and healthcare are a testament to their commitment.",
      image: "/path-to-image4.jpg",
    },
    {
      name: "Fatima Noor",
      title: "Entrepreneur",
      review:
        "The Humanity Door Foundation dedication to their cause is commendable. They are truly making a difference in society, and I wholeheartedly support their mission.",
      image: "/path-to-image5.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-500">Our Testimonials</h2>
        <p className="mt-2 text-xl text-gray-700">What They Say?</p>
        <div className="mt-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-green-500 mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-600">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.title}</p>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}
