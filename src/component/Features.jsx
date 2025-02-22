
import React from "react";
import { FaReact, FaCode, FaLaptopCode, FaPalette } from "react-icons/fa"; // Import different icons

const Features = () => {
  const cards = [
    {
      id: 1,
      text: "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      icon: <FaReact className="h-10 w-10 text-white transition-all" />, // React Icon
    },
    {
      id: 2,
      text: "Easily test UI components, refine designs, and explore new frontend techniques.",
      icon: <FaCode className="h-10 w-10 text-white transition-all" />, // Code Icon
    },
    {
      id: 3,
      text: "An efficient way to create interactive web applications with modern styling and responsiveness.",
      icon: <FaLaptopCode className="h-10 w-10 text-white transition-all" />, // Laptop Code Icon
    },
    {
      id: 4,
      text: "A fast and lightweight approach to building stunning interfaces with Tailwind CSS and React.",
      icon: <FaPalette className="h-10 w-10 text-white transition-all" />, // Palette Icon
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:max-w-4xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg sm:px-10"
          >
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                {card.icon} {/* Dynamic Icon for Each Card */}
              </span>
              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>{card.text}</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
                    Read the docs →
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
