import SlideElement from "../shared/SlideElement";

export const SectionHeader = (props) => {
  const { largeTitle, smallTitle, className } = props;

  return (
    <div className={`${className ?? ""} space-y-1 text-pretty w-[80%]`}>
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
