import AutoSlider from "../../components/AutoSlider";
import GetStarted from "../../components/GetStarted";
import GlowingBg from "../../components/GlowingBg";
import MainBtn from "../../components/MainBtn";
import { SectionHeader } from "../../components/SectionHeader";
import Testimonial from "../../components/Testimonial";
import LayoutPage from "../../shared/LayoutPage";
import SlideElement from "../../shared/SlideElement";
import { SectionGrid } from "../home/Home";

export default function About() {
  return (
    <LayoutPage>
      <GlowingBg glowing="top-0" className="space-y-20">
        <SectionGrid className="grid-cols-[1.25fr_1fr]">
          <SectionHeader
            smallTitle="About Us"
            largeTitle="A Company you can place your Trust in"
          />
          <img src="/about hero.webp" alt="hero img" className="rounded-xl" />
        </SectionGrid>
        <AutoSlider />
      </GlowingBg>
      {/* OUT CUSTOMERS */}
      <div className="space-y-10 bg-dots">
        <h1></h1>
        <div className="grid grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-light-gray space-y-10"
            >
              <h1>6M</h1>
              <span>Customers Genrated</span>
            </div>
          ))}
        </div>
      </div>
      {/* OUR FUCKIN TEAM */}
      <GlowingBg glowing="">
        <SectionHeader
          smallTitle="Our Team"
          largeTitle="Meet the Team"
          className="text-center mb-10"
        />
        {/* CARDS team */}
        <div className="grid grid-cols-3 gap-x-20">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="space-y-6 text-center" key={i}>
              <div className="rounded-2xl overflow-hidden">
                <img src="" className=" hover:scale-125" alt="name" />
              </div>
              <div>
                <h6>name</h6>
                <span>position roll</span>
              </div>
              <p>
                some teact about that fucing person and how fucking great he is
                and blah blah
              </p>
              <div className="flex gap-x-4 mx-auto">
                <small className="border border-yellow-color rounded-full p-2 bg-yellow-color hover:bg-transparent hover:text-yellow-color"></small>
              </div>
            </div>
          ))}
        </div>
      </GlowingBg>
      <Testimonial />
      {/* HOW FUKCING GREAT ARE WE */}
      <div>
        <SectionHeader
          smallTitle="We're Hiring"
          largeTitle="Join our Team"
          classNmae="text-center"
        />
      </div>
      <JobOffers/>
      {/*  */}
      <GetStarted/>
    </LayoutPage>
  );
}
const JobOffers = () => {
  return (
    <GlowingBg glowing="!bg-opacity-25" className="space-y-8 !mt-10">
      <SlideElement className="space-y-16 border cursor-pointer border-light-gray hover:border-yellow-color p-10">
        <div className="flex justify-between">
          <div>
            <h2>job title</h2>
            <span>location</span>
          </div>
          <MainBtn>Apply Now</MainBtn>
        </div>
        <p>
          job desctions Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Delectus, cupiditate?
        </p>
      </SlideElement>
    </GlowingBg>
  );
};
