import { NavLink } from "react-router-dom";
import GlowingBg from "../components/GlowingBg";
import MainBtn from "../components/MainBtn";
import SlideElement from "../shared/SlideElement";
import { PiRocketLaunchBold } from "react-icons/pi";

export default function GetStarted() {
  return (
    <SlideElement>
      <GlowingBg
        className="bg-dots text-center space-y-6 p-20 border border-light-gray rounded-2xl overflow-hidden"
        glowing="!blur-[200px] !bg-opacity-25"
      >
        <h2 className="text-3xl">Get Started with LuneFlow.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          eos nihil numquam maiores autem cum.
        </p>
        <MainBtn>
          <NavLink to="/pricing" className={"flex gap-x-2"}>
            <span className="text-2xl text-white">
              <PiRocketLaunchBold />
            </span>
            Get Started
          </NavLink>
        </MainBtn>
      </GlowingBg>
    </SlideElement>
  );
}
