import React, { Fragment, useState } from "react";
import LayoutPage from "../../shared/LayoutPage";
import { SectionHeader } from "../../components/SectionHeader";
import { prices_cards } from "./data";
import GlowingBg from "../../components/GlowingBg";
import tw from "tailwind-styled-components";
import { PiCheckCircle } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import SlideElement from "../../shared/SlideElement";

export default function Pricing() {
  return (
    <LayoutPage>
      <PricingSection />
      <Table />
    </LayoutPage>
  );
}

export const PricingSection = () => {
  const [featurePlan, setFeaturePlan] = useState("monthly");
  const plans = ["monthly", "yearly"];
  return (
    <>
      <GlowingBg glowing="!-top-0" className="py-32 text-center flex flex-col">
        <SectionHeader
          smallTitle="Pricing"
          largeTitle="Transparent Pricing Plans"
        />
      </GlowingBg>
      {/* FEATURES PLANS */}
      <div className="space-y-20">
        {/* TOGGLE PLAN BUTTONS */}
        <SlideElement>
          <div className="toggle-plan-btns text-xl">
            {plans.map((plan) => (
              <div key={plan}>
                <button
                  className={featurePlan === plan ? "text-black" : "text-white"}
                  onClick={() => setFeaturePlan(plan)}
                >
                  {plan}
                </button>
                {plan === featurePlan && <ToggleBtnBg layoutId="sup" />}
              </div>
            ))}
          </div>
        </SlideElement>
        {/* cards */}
        <div className="grid grid-cols-3 gap-16">
          <AnimatePresence key={featurePlan} mode="wait">
            {prices_cards.map((data, i) => (
              <SlideElement y="10%" i={i} key={i}>
                <Card {...{ featurePlan, data }} />
              </SlideElement>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

const Card = ({ data, featurePlan }) => {
  const { title, price, description, features } = data;
  return (
    <CardContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h6>{title}</h6>
        <h1 className="text-4xl">
          ${price[featurePlan]}
          <span className="text-[#9ea0a9]">/{featurePlan}</span>
        </h1>
        <p>{description}</p>
      </div>
      {/* FEATURES Cards-------- */}
      <GlowingBg overflowHidden glowing="!blur-[80px] !top-[69%]">
        {features.map((feature, i) => (
          <div className="flex gap-2" key={i}>
            <span className="text-yellow-color text-2xl">
              <PiCheckCircle />
            </span>
            <span>{feature}</span>
          </div>
        ))}
        <button className="glowing-btn py-3 mt-6">Get Started</button>
      </GlowingBg>
    </CardContainer>
  );
};

const Table = () => {
  const features = ["", "title2", "title3", "title4"];
  const featuress = [
    { title: "titlte", cell1: 10, cell2: 100, cell3: "unlimeted" },
    { title: "titlte", cell1: "check", cell2: "check", cell3: "check" },
    { title: "titlte", cell1: false, cell2: "check", cell3: "check" },
    { title: "titlte", cell1: false, cell2: "check", cell3: "check" },
    { title: "titlte", cell1: false, cell2: false, cell3: "check" },
  ];

  !isNaN(featuress[2].cell1)
    ? console.log(featuress[2].cell1)
    : featuress[2].cell1 === "check"
    ? console.log(featuress[2].cell1)
    : console.log(featuress[2].cell1);
  return (
    <TableContainer>
      <SectionHeader
        smallTitle="Transparent Plans"
        largeTitle="Compare all available Plans"
        className="text-center mx-auto"
      />
      {/* GRID TABLE */}
      <div className="mt-20">
        <GridTable className="sticky top-0 bg-light-gray">
          <div></div>
          {prices_cards.map(({ title, description, price }, i) => (
            <div className="p-6" key={i}>
              <h6>{title}</h6>
              <h1 className="text-4xl">
                ${price.monthly}
                <span className="text-[#9ea0a9]">/mo</span>
              </h1>
              <p>{description.slice(0, 100)}</p>
              <button className="glowing-btn py-3 mt-6 w-full">
                Get Started
              </button>
            </div>
          ))}
        </GridTable>
        {/* TABLE WITH FEATURES */}
        <div className="space-y-6 mt-8 ">
          <h2> title</h2>
          <div className="divide-y border-y border-light-gray">
            <GridTable className="border-b-0">
              <div>asd</div>
              <div>asd</div>
              <div>asd</div>
              <div>asd</div>
            </GridTable>
            <GridTable className="border-b-0">
              <div>asd</div>
              <div>asd</div>
              <div>asd</div>
              <div>asd</div>
            </GridTable>
            <GridTable className="border-b-0">
              <div>asd</div>
              <div>asd</div>
              <div>asd</div>
              <div>asd</div>
            </GridTable>
          </div>
        </div>
      </div>
    </TableContainer>
  );
};
const GridTable = tw.div`
grid
grid-cols-4
divide-x
divide-light-gray
border-b
border-light-gray
`;

const TableContainer = tw.div`
mt-40
`;

const ToggleBtnBg = tw(motion.span)`
absolute
left-0
w-full
h-full
bg-yellow-color
rounded-full
p-1
-z-10
`;

const CardContainer = tw(motion.div)`
rounded-2xl 
border
border-light-gray
hover:border-yellow-color
divide-y
h-fit
divide-light-gray
transition-all
duration-500
[&>div]:p-10
[&>div]:flex 
[&>div]:flex-col
[&>div]:gap-4
[&>div]:!items-stretch
`;
