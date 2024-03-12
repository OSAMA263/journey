import SlideElement from "../shared/SlideElement";
import GlowingBg from "./GlowingBg";

export default function TwoImages(props) {
  const { bigImg, smallImg, br = "", bl = "" } = props;
  return (
    <GlowingBg
      glowing="!w-[100%] !blur-[90px] !h-[100%]"
      className="relative w-[90%]"
    >
      <SlideElement className="h-full rounded-2xl overflow-hidden">
        <img className="h-full w-full" src={bigImg} alt={bigImg} />
      </SlideElement>
      <SlideElement
        className={`absolute -bottom-[10%] w-1/2 h-1/2 rounded-2xl overflow-hidden ${
          br ? "-right-[10%]" : bl && "-left-[10%]"
        }`}
      >
        <img
          src={smallImg}
          className="w-full h-full object-contain"
          alt={smallImg}
        />
      </SlideElement>
    </GlowingBg>
  );
}
