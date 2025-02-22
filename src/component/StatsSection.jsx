import React from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const videos = [
  {
    title: "Project Showcase",
    url: "https://www.w3schools.com/html/mov_bbbb.mp4",
  },
  {
    title: "Team Collaboration",
    url: "https://www.w3schools.com/html/movieb.mp4",
  },
  {
    title: "Tech Innovations",
    url: "https://www.w3schools.com/html/mov_bbbb.mp4",
  },
];

const StatsSection = () => {
  const stats = [
    { number: 259, label: "Minimum Projects Completed" },
    { number: 10000, label: "Satisfied Customers" },
    { number: 32, label: "Awards Received" },
    { number: 10, label: "Years of Experience" },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          You Always Get the Best Guidance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* ✅ Animated Number */}
              <h3 className="text-4xl font-extrabold text-blue-600">
                <CountUp start={0} end={stat.number} duration={4.5} separator="," />
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Testimonials Section */}
      <div className="w-full bg-gray-100 flex flex-col justify-center items-center mt-6">
        <h2 className="text-4xl font-bold mb-6 text-center">Intern Testimonials</h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full h-[60vh]"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[60vh] flex justify-center items-center">
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StatsSection;
