import {
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
} from "@chakra-ui/react";
import SlideElement from "../shared/SlideElement";
import { PiCaretUpDuotone } from "react-icons/pi";

export default function Accordions({ data }) {
  return (
    <Accordion allowToggle className="space-y-8">
      {data.map(({ icon, title }, i) => (
        <SlideElement key={i}>
          <AccordionItem border="none">
            {({ isExpanded }) => (
              <AccordionButton
                border={"1px solid #404041"}
                textAlign={"start"}
                alignItems={"start"}
                flexDir={"column"}
                transitionDuration={1}
                borderRadius={24}
                _expanded={{ borderColor: "#f8f858" }}
                _hover={{ borderColor: "#f8f858" }}
                p={6}
              >
                <div className="flex justify-between w-full text-2xl">
                  <h4 className="flex gap-x-4">
                    {icon && <span className="text-yellow-color">{icon}</span>}
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
}
