import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const performers = [
  {
    name: "Sophia Miller",
    role: "Software Engineer",
    feedback: "Sophia delivered an outstanding project ahead of schedule with exceptional quality!",
    image: "https://www.bridgegroupsolutions.com/images/rolishri.jpg",
  },
  {
    name: "Ethan Carter",
    role: "Product Manager",
    feedback: "Ethan's leadership and strategic thinking helped us close a major deal this week.",
    image: "https://www.bridgegroupsolutions.com/images/RISHIKA.jpg",
  },
  {
    name: "Ava Johnson",
    role: "UI/UX Designer",
    feedback: "Ava introduced a fresh UI concept that significantly improved user engagement!",
    image: "https://www.bridgegroupsolutions.com/images/rolishri.jpg",
  },
  {
    name: "Liam Smith",
    role: "Marketing Strategist",
    feedback: "Liam's innovative campaigns resulted in a 40% increase in customer engagement!",
    image: "https://www.bridgegroupsolutions.com/images/rolishri.jpg",
  },
];

const StarPerformer = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Star Performer of the Week</h2>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false} // Centered slides disabled for multiple slides
          slidesPerView={2} // Change this to 2, 3, or 4 based on the number of slides visible at once
          spaceBetween={30} // Space between slides
          loop={true}
          speed={1200} // Smooth scrolling speed
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto move all slides
          pagination={{ clickable: true }}
          className="w-full max-w-4xl"
        >
          {performers.map((performer, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white shadow-xl rounded-xl p-6 max-w-sm text-center transform transition-all duration-700 hover:scale-105">
                <div className="w-52 h-52 mx-auto mb-4 rounded-full border-4 border-yellow-500 shadow-lg overflow-hidden">
                  <img
                    src={performer.image}
                    alt={performer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{performer.name}</h3>
                <p className="text-sm text-gray-500">{performer.role}</p>
                <p className="mt-3 text-gray-700 italic">"{performer.feedback}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StarPerformer;
