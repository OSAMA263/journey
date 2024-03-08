import SlideElement from "../../shared/SlideElement";
import LayoutPage from "../../shared/LayoutPage";
import tw from "tailwind-styled-components";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { threeCols, fourGrid, accordion, checkList } from "./data";
import { PiCaretUpDuotone } from "react-icons/pi";
import GlowingBg from "../../shared/GlowingBg";
import CardFeature from "../../components/CardFeature";
import dashboardImg from "/home/dashboard.webp";
import accordionImg from "/home/accordion image.webp";
import pieChartImg from "/home/pie chart.webp";
import trafficChartImg from "/home/traffic chart.webp";
import AutoSlider from "../../components/AutoSlider";

export default function Home() {
  return (
    <LayoutPage>
      {/* HERO SECTION */}
      <GlowingBg glowing="!top-0" className="h-dvh flex flex-col">
        <SectionGrid className="grid-cols-[1.25fr_1fr] my-0 bg-dots">
          <div className="space-y-2">
            <button className="px-4 py-1 border border-light-gray hover:shadow-[0px_0px_5px_1px_white] rounded-3xl">
              Book your Free Consultation Call
            </button>
            <h1>
              Explore new
              <span className="underline text-yellow-color">Workflows</span> for
              better Productivity
            </h1>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              odio?
            </p>
            <TwoBtnsGroup />
          </div>
          {/* image  */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/home/home hero.webp"
                className="z-10 relative"
                alt=""
              />
              <img
                src="/home/home shape1.svg"
                className="absolute top-full -translate-y-1/2 right-full translate-x-1/2"
                alt=""
              />
              <img
                src="/home/home shape2.svg"
                className="absolute bottom-full translate-y-1/2 left-full -translate-x-1/2"
                alt=""
              />
            </div>
          </div>
        </SectionGrid>
        {/* AUTO SLIDER LOGOS */}
        <AutoSlider/>
      </GlowingBg>
      {/* THREE COLUMNS SECTION */}
      <SectionGrid className="space-y-16 flex flex-col text-center">
        <SectionTitle
          largeTitle="Advanced Workflows for faster Turn Around Times"
          smallTitle="Core Features"
          styles="w-[80%] mx-auto"
        />
        <GlowingBg
          glowing="!bg-opacity-35"
          className="grid grid-cols-3 gap-x-10"
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
        <div>
          <SectionTitle
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
          <SectionTitle
            smallTitle="Features"
            largeTitle="Deliver great Results - Always!"
          />
          <Accordions />
          <TwoBtnsGroup />
        </div>
      </SectionGrid>
      {/* CHESK MARK LIST SECTION */}
      <SectionGrid className="grid-cols-[1.25fr_1fr]">
        <div className="space-y-1">
          <SectionTitle smallTitle="Features" largeTitle="Detailed Analytics" />
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
    </LayoutPage>
  );
}

const Accordions = () => {
  return (
    <Accordion allowToggle className="space-y-6">
      {accordion.map(({ icon, title }, i) => (
        <SlideElement key={i}>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <AccordionButton
                border={"1px solid #404041"}
                textAlign={"start"}
                flexDir={"column"}
                transitionDuration={1}
                borderRadius={24}
                _expanded={{ borderColor: "#f8f858" }}
                _hover={{ borderColor: "#f8f858" }}
                p={6}
              >
                <div className="flex justify-between w-full text-2xl">
                  <h4 className="flex gap-x-4">
                    <span className="text-yellow-color">{icon} </span>
                    {title}
                  </h4>

                  <span
                    className={`${
                      isExpanded ? "-rotate-180" : "rotate-0"
                    } translate-all duration-500`}
                  >
                    <PiCaretUpDuotone />
                  </span>
                </div>
                <AccordionPanel p={0} pt={8}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    odit reiciendis, iure totam sunt aut doloribus.
                  </p>
                </AccordionPanel>
              </AccordionButton>
            )}
          </AccordionItem>
        </SlideElement>
      ))}
    </Accordion>
  );
};
const SectionTitle = (props) => {
  const { largeTitle, smallTitle, styles } = props;

  return (
    <div className={`${styles ?? ""} space-y-1`}>
      <SlideElement>
        <h6 className="text-yellow-color">{smallTitle}</h6>
      </SlideElement>
      <SlideElement>
        <h1>{largeTitle}</h1>
      </SlideElement>
      <SlideElement>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
          temporibus ipsum porro quidem laborum harum esse consequuntur quo
          ipsam eum.
        </p>
      </SlideElement>
    </div>
  );
};
const TwoBtnsGroup = () => {
  return (
    <div className="flex !mt-12 gap-x-6 font-semibold">
      <button className="px-8 py-3 yellow-border-btn">Get Started</button>
      <button className="px-8 py-3 rounded-3xl hover:bg-light-gray">
        Learn More
      </button>
    </div>
  );
};
const TwoImages = (props) => {
  const { bigImg, smallImg, br = "", bl = "" } = props;
  return (
    <GlowingBg
      glowing="!-top-1/2 !w-[100%] !blur-[60px] !h-[100%]"
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
};
const SectionGrid = tw.div`
grid
gap-x-16
items-center
my-64
h-full
`;
