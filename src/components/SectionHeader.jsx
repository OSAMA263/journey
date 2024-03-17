import tw from "tailwind-styled-components";
import SlideElement from "../shared/SlideElement";

export const SectionHeader = (props) => {
  const { largeTitle, smallTitle, className } = props;

  return (
    <Container className={className??""}>
      <SlideElement>
        <h6 className="text-yellow-color">{smallTitle}</h6>
      </SlideElement>
      <SlideElement>
        <h1>{largeTitle}</h1>
      </SlideElement>
      <SlideElement>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
          temporibus ipsum porro quidem laborum harum esse consequuntur quo
          ipsam eum.
        </p>
      </SlideElement>
    </Container>
  );
};

const Container=tw.div`
space-y-6
text-pretty
w-[78%]
max-lg:mx-auto
`