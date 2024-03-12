import { useState } from "react";
import GlowingBg from "./GlowingBg";
import { SectionHeader } from "./SectionHeader";
import SlideElement from "../shared/SlideElement";
import { AnimatePresence, motion } from "framer-motion";
import { prices_cards } from "../pages/pricing/data";
import { PiCheckCircle } from "react-icons/pi";
import tw from "tailwind-styled-components";

export default function PricingSection({ glowing }) {
  const [featurePlan, setFeaturePlan] = useState("monthly");
  const plans = ["monthly", "yearly"];
  return (
    <>
      {glowing ? (
        <GlowingBg
          glowing="!-top-0"
          className="py-40 text-center flex flex-col"
        >
          <SectionHeader
            smallTitle="Pricing"
            largeTitle="Transparent Pricing Plans"
          />
        </GlowingBg>
      ) : (
        <SectionHeader
          smallTitle="Pricing"
          largeTitle="Transparent Pricing Plans"
          className="text-center mx-auto mb-20"
        />
      )}

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
          <AnimatePresence key={featurePlan}>
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
}
// CARD
const Card = ({ data, featurePlan }) => {
  const { title, price, description, features } = data;
  return (
    <CardContainer>
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

const CardContainer = tw.div`
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
