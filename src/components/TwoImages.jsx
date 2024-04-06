import tw from "tailwind-styled-components";
import SlideElement from "../shared/SlideElement";
import GlowingBg from "./GlowingBg";

export default function TwoImages(props) {
  const { bigImg, smallImg, br = "", bl = "" } = props;
  return (
    <Wrapper>
      <GlowingBg
        glowing="!max-lg:w-[100%] !blur-[90px] !max-lg:h-[100%]"
        className="relative w-[90%] max-lg:mx-auto"
      >
        <SlideElement className="h-full">
          <img
            className="h-full w-full rounded-2xl"
            src={bigImg}
            alt={bigImg}
            loading="lazy"
          />
        </SlideElement>
        <SlideElement
          className={`absolute -bottom-[10%] w-1/2 h-1/2 ${
            br ? "md:-right-[10%]" : bl && "md:-left-[10%]"
          }`}
        >
          <img
            src={smallImg}
            className="w-full rounded-2xl h-full object-contain"
            alt={smallImg}
          />
        </SlideElement>
      </GlowingBg>
    </Wrapper>
  );
}
const Wrapper = tw.div`
[&_img]:max-lg:mx-auto 
[&_img]:max-xl:w-[90%] 
[&_img]:max-lg:w-[60%]
`;
