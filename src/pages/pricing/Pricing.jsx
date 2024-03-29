import LayoutPage from "../../shared/LayoutPage";
import { SectionHeader } from "../../components/SectionHeader";
import { prices_cards, features } from "./data";
import tw from "tailwind-styled-components";
import { PiCheckCircle } from "react-icons/pi";
import PricingSection from "../../components/PricingSection";
import GetStarted from "../../components/GetStarted";
import FAQS from "../../components/FAQS";
import MainBtn from "../../components/MainBtn";

export default function Pricing() {
  return (
    <LayoutPage>
      <PricingSection glowing />
      <Table />
      <FAQS />
      <GetStarted />
    </LayoutPage>
  );
}

const Table = () => {
  function featureCell(val) {
    if (!isNaN(val)) {
      return val;
    } else if (val === "check") {
      return <PiCheckCircle />;
    } else if (val === "unlimited") {
      return "Unlimited";
    } else {
      return "";
    }
  }

  return (
    <div>
      <SectionHeader
        smallTitle="Transparent Plans"
        largeTitle="Compare all available Plans"
        className="text-center mx-auto"
      />
      {/* GRID TABLE */}
      <div className="mt-20">
        <GridTable className="sm:sticky top-0 bg-black-color max-md:grid-cols-3 max-sm:grid-cols-1">
          <div className="max-md:hidden"></div>
          {prices_cards.map(({ title, description, price }, i) => (
            <div className="lg:p-6 p-3 space-y-2" key={i}>
              <h6>{title}</h6>
              <h2 className="text-3xl">
                ${price.monthly}
                <span className="text-[#9ea0a9] text-base">/mo</span>
              </h2>
              <p>{description.slice(0, 100)}</p>
              <MainBtn className="w-full !mt-8" />
            </div>
          ))}
        </GridTable>
        {/* TABLE WITH FEATURES */}
        {features.map(({ title, featuresInfo }, i) => (
          <div className="mt-6" key={i}>
            <h2 className="font-bold text-xl p-4 max-md:text-center">
              {title}
            </h2>
            {featuresInfo.map(({ featureTitle, cell1, cell2, cell3 }, j) => (
              <div
                className={`border-light-gray ${j == 0 ? "border-t" : ""}`}
                key={j}
              >
                <GridTable
                  className="max-md:grid-rows-2 max-md:grid-cols-3"
                  $icon={(cell1 || cell2 || cell3) === "check"}
                  $cells={true}
                >
                  <h2 className="max-md:col-span-3 max-md:text-center">{featureTitle}</h2>
                  <span>{featureCell(cell1)}</span>
                  <span>{featureCell(cell2)}</span>
                  <span>{featureCell(cell3)}</span>
                </GridTable>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
const GridTable = tw.div`
grid
md:grid-cols-4
divide-x
divide-light-gray
border-b
border-light-gray
[&>span]:p-4
[&>span]:text-lg
[&>h2]:p-4
[&>h2]:text-gray-color
[&>span]:font-semibold
${({ $cells }) =>
  $cells
    ? "[&>:not(:nth-child(1))]:flex [&>:not(:nth-child(1))]:justify-center"
    : ""}
    ${({ $icon }) => ($icon ? "[&>span]:text-white [&>span]:text-xl" : "")}
`;
