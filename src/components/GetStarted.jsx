import GlowingBg from "../components/GlowingBg";
import MainBtn from "../components/MainBtn";
import SlideElement from "../shared/SlideElement";
export default function GetStarted() {
  return (
    <SlideElement>
      <GlowingBg
        className="bg-dots text-center space-y-4 p-20 border border-light-gray rounded-2xl overflow-hidden"
        glowing="!blur-[150px]"
      >
        <h1>Get Started with LuneFlow.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eos nihil numquam maiores autem cum.
        </p>
        <MainBtn />
      </GlowingBg>
    </SlideElement>
  );
}
