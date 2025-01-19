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
      image: "/path-to-image1.jpg",
    },
    {
      name: "Ahmed Khan",
      title: "CEO, ABC Tech",
      review:
        "The Humanity Door Foundation has set the benchmark for welfare work in Pakistan. Their efforts are unmatched, and their dedication to uplifting the underprivileged is truly inspiring.",
      image: "/path-to-image2.jpg",
    },
    {
      name: "Maria Zahra",
      title: "Social Activist",
      review:
        "I’ve seen the impact of The Humanity Door Foundation work first-hand. Their projects are life-changing for the people they serve. May Allah bless them abundantly.",
      image: "/path-to-image3.jpg",
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
