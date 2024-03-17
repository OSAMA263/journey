import CardFeature from "../../components/CardFeature";
import { SectionHeader } from "../../components/SectionHeader";
import GlowingBg from "../../components/GlowingBg";
import LayoutPage from "../../shared/LayoutPage";
import { fourGrid } from "../home/data";
import { SectionGrid } from "../home/Home";
import TwoImages from "../../components/TwoImages";
import dashboardImg from "/home/dashboard.webp";
import pieChartImg from "/home/pie chart.webp";
import tw from "tailwind-styled-components";
import PricingSection from "../../components/PricingSection";
import SlideElement from "../../shared/SlideElement";
import FAQS from "../../components/FAQS";
import Testimonial from "../../components/Testimonial";
import GetStarted from "../../components/GetStarted";

export default function Features() {
  return (
    <LayoutPage>
      <GlowingBg glowing="!-top-0" className="pt-40 text-center flex flex-col">
        <SectionHeader
          smallTitle="Features"
          largeTitle="Boost your Productivity & drive more Sales"
        />
      </GlowingBg>
      {/* FIRST SECTION WITH IMAGES */}
      <SectionGrid className="grid-cols-[1.25fr_1fr]">
        <SectionHeader
          smallTitle="Productivity"
          largeTitle="AI Driven Statistics"
          className="max-lg:order-1"
        />
        <TwoImages br smallImg={pieChartImg} bigImg={dashboardImg} />
      </SectionGrid>
      {/* WEIRD SECTION GRID FOUR */}
      <WeirdGrid>
        {fourGrid.map((data, i) => (
          <SlideElement
            className={
              i === 0
                ? "lg:row-span-2 max-lg:col-span-2"
                : i === 3
                ? "col-span-2"
                : ""
            }
            key={i}
          >
            <CardFeature border data={data}>
              {i === 0 && (
                <div className="relative">
                  <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black-color"></div>
                  <img src={dashboardImg} alt="dashboard" />
                </div>
              )}
            </CardFeature>
          </SlideElement>
        ))}
      </WeirdGrid>
      <SectionGrid className="grid-cols-[1fr_1.25fr]">
        <TwoImages br smallImg={pieChartImg} bigImg={dashboardImg} />
        <SectionHeader
          smallTitle="Analytics"
          largeTitle="Detailed Statistics"
        />
      </SectionGrid>
      <PricingSection />
      <Testimonial />
      <FAQS />
      <GetStarted />
    </LayoutPage>
  );
}

const WeirdGrid = tw.div`
grid
lg:grid-cols-3
grid-cols-2
lg:grid-rows-2
lg:gap-10
gap-2
my-32
`;
