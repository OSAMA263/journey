import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import logo1 from "/home/logo1.svg";
import logo2 from "/home/logo2.svg";
import logo3 from "/home/logo3.svg";
import logo4 from "/home/logo4.svg";
import logo5 from "/home/logo5.svg";
import tw from "tailwind-styled-components";

export default function AutoSlider() {
  const swiperProps = {
    centeredSlides: true,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    speed: 800,
    autoplay: { delay: 100, disableOnInteraction: false },
    modules: [Autoplay, FreeMode],
  };
  const logoArr = Array.from({ length: 3 }, () => logos).flat();
  return (
    <div className="auto-slider">
      <div className="absolute w-full h-full bg-black-color bg-opacity-40 z-40"></div>
      <Swiper className="[&>.swiper-wrapper]:!items-center" {...swiperProps}>
        {logoArr.map((src, i) => (
          <SwiperSlide key={i}>
            <img className="w-40" src={src} alt={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
const Container = tw.div`
after:absolute
after:w-20
after:h-full
after:left-0
after:bg-[gradient(to_right,)]
`;

const logos = [logo1, logo2, logo3, logo4, logo5];
