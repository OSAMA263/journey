import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import tw from "tailwind-styled-components";
import SlideElement from "../shared/SlideElement"

export default function Testimonial() {
  return (
    <SlideElement className="bg-dots p-6">
      <Swiper
        navigation={{ nextEl: "#next", prevEl: "#prev" }}
        loop={true}
        allowTouchMove={false}
        modules={[Navigation]}
        spaceBetween={200}
        speed={300}
        className="flex flex-col"
      >
        <NavigateBtns />
        {Array.from({ length: 3 }).map((_, i) => (
          <SwiperSlide key={i}>
            <div className="space-y-4 flex flex-col w-[80%] text-center mx-auto">
              <h1>“An Amazing Service that covered all the bases”</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                commodi adipisci suscipit totam eius, pariatur iusto? Aliquid
                architecto delectus cupiditate?
              </p>
              <div className="flex flex-col">
                <img
                  src="/avatar.jpg"
                  alt="avatar"
                  className="size-16 rounded-full"
                />
                <h6>Admin name</h6>
                <p>osama @ 263</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SlideElement>
  );
}
const NavigateBtns = () => {
  return (
    <NavigationBtnsWrapper>
      <button aria-label="perv img" id="prev">
        <FaLongArrowAltLeft />
      </button>
      <button aria-label="next img" id="next">
        <FaLongArrowAltRight />
      </button>
    </NavigationBtnsWrapper>
  );
};

const NavigationBtnsWrapper = tw.div`
absolute 
z-10
flex
justify-between
w-full
left-0
top-1/2
-translate-y-1/2
[&_button]:bg-light-gray
[&_button:hover]:bg-yellow-color
[&_button:hover]:text-black
[&_button]:p-4
[&_button]:text-2xl
[&_button]:rounded-full
`;
