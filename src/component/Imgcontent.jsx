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
    }, 3000); // Change slide every 3 seconds

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
    <div className="relative w-full min-h-96 bg-white rounded-lg overflow-hidden">
      {/* Image Slide Container */}
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Left-aligned Text & Button */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start text-white px-8 sm:px-16 transition-opacity duration-700">
              <h1
                className={`text-4xl sm:text-5xl font-extrabold uppercase mb-4 transition-transform duration-700 ${
                  currentIndex === index ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
                }`}
              >
                {slide.text}
              </h1>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute inset-y-0 left-0 flex justify-center items-center w-[46px] h-full bg-gray-800/50 text-white hover:bg-gray-900/80"
      >
        <svg
          className="size-5"
          width={24}
          height={24}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute inset-y-0 right-0 flex justify-center items-center w-[46px] h-full bg-gray-800/50 text-white hover:bg-gray-900/80"
      >
        <svg
          className="size-5"
          width={24}
          height={24}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`size-3 rounded-full border ${
              currentIndex === index ? "bg-blue-900 border-blue-700" : "border-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Imgcontent;
