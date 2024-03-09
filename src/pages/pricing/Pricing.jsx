import React from "react";
import LayoutPage from "../../shared/LayoutPage";
import { SectionHeader } from "../../components/SectionHeader";
import { prices_cards } from "./data";

export default function Pricing() {

  return <LayoutPage></LayoutPage>;
}
// ?featuress[0].cell2:"check"
export const PricingSection = () => {
  return (
    <>
      <SectionHeader
        smallTitle="Pricing"
        largeTitle="Transparent Pricing Plans"
        className="py-40"
      />
    </>
  );
};

const PricesCards = () => {
  return;
};

const Table = () => {
  const features = ["title1", "title2", "title3", "title4"];
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
    <div>
      <h1>title</h1>
      {/* grid table */}
      <div className="grid grid-cols-4">
        <div>features title</div>
        <div>10</div>
        <div>100</div>
        <div>unlimeted</div>
      </div>
    </div>
  );
};
