import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import { FreeMode, Pagination } from "swiper";

// icons
import {
  RxArrowTopRight,
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

// data

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Elevating premium brand experiences through strategic digital transformation and high-scale creative campaigns.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Crafting high-performance, user-centric interfaces (UX) using Tailwind CSS and modern visual suites to maximize engagement.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Architecting robust, full-stack platforms and scalable databases using Next.js, React, and rigorous computer science principles.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Developing targeted, data-driven content strategies designed to support lead generation and capture high-intent digital traffic.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Optimizing core platforms for maximum visibility and using data analytics to turn organic search traffic into measurable revenue.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[340px] sm:h-[540px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} className="flex">
            <div className="bg-[rgba(65,47,123,0.15)] w-full h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-4xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
