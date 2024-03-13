import React from "react";
import Accordions from "./Accordions";
import { SectionHeader } from "./SectionHeader";
import GlowingBg from "./GlowingBg";
import MainBtn from "./MainBtn";

export default function FAQS() {
  return (
    <div className="flex flex-col gap-y-8">
      <SectionHeader
        smallTitle="FAQS"
        largeTitle="Frequently Asked Questions"
        className="mx-auto text-center"
      />
      <MainBtn>Contact</MainBtn>
      <GlowingBg className="w-[60%]" glowing="!bg-opacity-15">
        <Accordions data={FAQ} />
      </GlowingBg>
    </div>
  );
}

const FAQ = [
  { title: "Do you offer support?" },
  { title: "What are your fees?" },
  { title: "How can you help?" },
  { title: "Do you offer Refunds?" },
  { title: "What Plan fits me best?" },
];
