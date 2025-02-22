// import React from 'react'




// const Features = () => {
//  const cards = [
//    {
//      id: 1,
//      text: "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
//    },
//    {
//      id: 2,
//      text: "Easily test UI components, refine designs, and explore new frontend techniques.",
//    },
//    {
//      id: 3,
//      text: "An efficient way to create interactive web applications with modern styling and responsiveness.",
//    },
//    {
//      id: 4,
//      text: "A fast and lightweight approach to building stunning interfaces with Tailwind CSS and React.",
//    },
//  ];

//  return (
//    <div className="flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
//      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:max-w-4xl mx-auto">
//        {cards.map((card) => (
//          <div
//            key={card.id}
//            className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg sm:px-10"
//          >
//            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]" />
//            <div className="relative z-10 mx-auto max-w-md">
//              <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
//                <svg
//                  xmlns="http://www.w3.org/2000/svg"
//                  fill="none"
//                  viewBox="0 0 24 24"
//                  strokeWidth="1.5"
//                  stroke="currentColor"
//                  className="h-10 w-10 text-white transition-all"
//                >
//                  <path
//                    strokeLinecap="round"
//                    strokeLinejoin="round"
//                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
//                  />
//                </svg>
//              </span>
//              <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
//                <p>{card.text}</p>
//              </div>
//              <div className="pt-5 text-base font-semibold leading-7">
//                <p>
//                  <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
//                    Read the docs →
//                  </a>
//                </p>
//              </div>
//            </div>
//          </div>
//        ))}
//      </div>
//    </div>
//  );
// };

// export default Features



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
