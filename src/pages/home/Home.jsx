import SlideElement from "../../shared/SlideElement";
import LayoutPage from "../../shared/LayoutPage";
import tw from "tailwind-styled-components";
import { threeCols, fourGrid, accordion, checkList } from "./data";
import GlowingBg from "../../components/GlowingBg";
import CardFeature from "../../components/CardFeature";
import dashboardImg from "/home/dashboard.webp";
import pieChartImg from "/home/pie chart.webp";
import accordionImg from "/home/accordion image.webp";
import trafficChartImg from "/home/traffic chart.webp";
import AutoSlider from "../../components/AutoSlider";
import { SectionHeader } from "../../components/SectionHeader";
import TwoImages from "../../components/TwoImages";
import Accordions from "../../components/Accordions";
import FAQS from "../../components/FAQS";
import MainBtn from "../../components/MainBtn";
import Testimonial from "../../components/Testimonial";
import GetStarted from "../../components/GetStarted";
import PricingSection from "../../components/PricingSection";

export default function Home() {
  return (
    <LayoutPage>
      {/* HERO SECTION */}
      <GlowingBg
        glowing="!-top-[30%]"
        overflowHidden
        className="h-dvh flex flex-col"
      >
        <SectionGrid className="grid-cols-[1.25fr_1fr] bg-dots !content-center">
          <SlideElement className="space-y-2">
            <button className="px-4 py-1 border border-light-gray hover:shadow-[0px_0px_5px_1px_white] rounded-3xl">
              Book your Free Consultation Call
            </button>
            <h1>
              Explore new{"\u00A0"}
              <small className="underline text-yellow-color">
                Workflows
              </small>{" "}
              for better Productivity
            </h1>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              odio?
            </p>
            <TwoBtnsGroup />
          </SlideElement>
          {/* image  */}
          <SlideElement className="relative max-lg:mx-auto max-xl:w-[90%] max-lg:w-[60%]">
            <div className="rounded-xl overflow-hidden">
              <img
                src="home/home hero.webp"
                className="z-10 relative"
                alt="hero"
              />
              <img
                src="home/home shape1.svg"
                className="absolute w-[20%] top-full -translate-y-1/2 right-full translate-x-1/2"
                alt="shape1"
              />
              <img
                src="home/home shape2.svg"
                className="absolute w-[20%] bottom-full translate-y-1/2 left-full -translate-x-1/2"
                alt="shape2"
              />
            </div>
          </SlideElement>
        </SectionGrid>
        {/* AUTO SLIDER LOGOS */}
      </GlowingBg>
        <AutoSlider/>
      {/* THREE COLUMNS SECTION */}
      <SectionGrid className="space-y-16 text-center">
        <SectionHeader
          largeTitle="Advanced Workflows for faster Turn Around Times"
          smallTitle="Core Features"
          className="w-[80%] mx-auto"
        />
        <GlowingBg
          glowing="!bg-opacity-35"
          className="grid lg:grid-cols-3 sm:gap-10 gap-4 mx-auto" 
        >
          {threeCols.map((data, i) => (
            <SlideElement key={i} i={i}>
              <CardFeature border data={data} />
            </SlideElement>
          ))}
        </GlowingBg>
      </SectionGrid>
      {/* FOURS CARDFeatureS GRID SECTION */}
      <SectionGrid className="grid-cols-[1.25fr_1fr]">
        <div className="max-lg:order-1">
          <SectionHeader
            smallTitle="Features"
            largeTitle="AI Driven Statistics"
          />
          <div className="grid grid-cols-2 gap-8 mt-8">
            {fourGrid.map((data, i) => (
              <SlideElement key={i} i={i}>
                <CardFeature data={data} />
              </SlideElement>
            ))}
          </div>
        </div>
        {/*  */}
        <TwoImages br bigImg={dashboardImg} smallImg={pieChartImg} />
      </SectionGrid>
      {/* ACCORDION SECTION */}
      <SectionGrid className="grid-cols-[1fr_1.25fr]">
        <TwoImages bl bigImg={accordionImg} smallImg={trafficChartImg} />
        {/*  */}
        <div className="space-y-8">
          <SectionHeader
            smallTitle="Features"
            largeTitle="Deliver great Results - Always!"
          />
          <Accordions data={accordion} />
          <TwoBtnsGroup />
        </div>
      </SectionGrid>
      {/* CHESK MARK LIST SECTION */}
      <SectionGrid className="grid-cols-[1.25fr_1fr]">
        <div className="space-y-1">
          <SectionHeader
            smallTitle="Features"
            largeTitle="Detailed Analytics"
          />
          <div className="!mt-10 space-y-2">
            {checkList.map(({ icon, title }, i) => (
              <SlideElement className="flex gap-x-2" i={i} key={i}>
                <span className="text-3xl text-yellow-color">{icon}</span>
                <p>{title}</p>
              </SlideElement>
            ))}
          </div>
        </div>
        {/*   */}
        <TwoImages br bigImg={dashboardImg} smallImg={trafficChartImg} />
      </SectionGrid>
      {/*  */}
      <GetStarted />
      <PricingSection />
      <Testimonial />
      <FAQS />
    </LayoutPage>
  );
}

const TwoBtnsGroup = () => {
  return (
    <TwoBtnsContainer>
      <MainBtn />
      <button className="px-6 py-2 rounded-3xl hover:bg-light-gray">
        Learn More
      </button>
    </TwoBtnsContainer>
  );
};

const TwoBtnsContainer = tw.div`
flex
font-semibold
!mt-12
gap-x-6
max-lg:justify-center
`;
export const SectionGrid = tw.div`
grid
2xl:gap-x-16
max-lg:grid-cols-1
gap-x-4
gap-y-10
items-center
h-full
max-lg:items-center
max-lg:text-center
`;
