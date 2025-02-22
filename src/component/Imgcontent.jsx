import React, { useState, useEffect } from "react";

const Imgcontent = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/premium-photo/full-concentration-work-friendly-team_317809-6031.jpg?ga=GA1.1.1680593197.1709317341&semt=ais_hybrid",
      text: "Think Over The World",
      buttonText: "Join Us",
    },
    {
      image:
        "https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?ga=GA1.1.1680593197.1709317341&semt=ais_hybrid",
      text: "Change The World",
      buttonText: "Click Here",
    },
    {
      image:
        "https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg",
      text: "Explore The World",
      buttonText: "Join Us",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Slide Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover" // Ensures full-width images
            />
            {/* Overlay & Text */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4 sm:px-12">
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase mb-4 transition-all duration-700">
                {slide.text}
              </h1>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-lg font-semibold transition-all">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/70 text-white rounded-full hover:bg-gray-900/90 sm:p-4"
      >
        <svg className="size-6 sm:size-7" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/70 text-white rounded-full hover:bg-gray-900/90 sm:p-4"
      >
        <svg className="size-6 sm:size-7" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`size-3 sm:size-4 rounded-full border ${
              currentIndex === index ? "bg-blue-600 border-blue-500" : "border-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Imgcontent;
