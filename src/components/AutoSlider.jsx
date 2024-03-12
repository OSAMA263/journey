import "swiper/css";
import "swiper/css/free-mode";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import logo1 from "/home/logo1.svg";
import logo2 from "/home/logo2.svg";
import logo3 from "/home/logo3.svg";
import logo4 from "/home/logo4.svg";
import logo5 from "/home/logo5.svg";
import SlideElement from "../shared/SlideElement";

export default function AutoSlider() {
  const swiperProps = {
    slidesPerView: 5,
    spaceBetween: 30,
    allowTouchMove: false,
    centeredSlides: true,
    loop: true,
    speed: 2500,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
  };
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
  ];
  return (
    <SlideElement className="auto-slider">
      <div className="absolute w-full h-full bg-black-color bg-opacity-40 z-40"></div>
      <Swiper {...swiperProps}>
        {logos.map((src, i) => (
          <SwiperSlide key={i}>
            <img className="w-40" src={src} alt={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideElement>
  );
}
