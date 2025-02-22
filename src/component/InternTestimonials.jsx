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

const InternTestimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl  text-gray-900 mb-8">Star Performer of the Week</h2>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full max-w-4xl"
        >
          {performers.map((performer, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white shadow-xl rounded-xl p-6 max-w-sm text-center transform transition-all hover:scale-105 hover:shadow-2xl">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-yellow-500 shadow-lg overflow-hidden">
                  <img
                    src={performer.image}
                    alt={performer.name}
                    className="w-full h-full object-contain"
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
export default InternTestimonials;
