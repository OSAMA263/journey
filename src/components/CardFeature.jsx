import tw from "tailwind-styled-components";

export default function CardFeature(props) {
  const { border, data, children, className } = props;
  return (
    <Container className={className} $border={border}>
      <div className="px-10 py-14 space-y-6 text-start text-lg font-semibold">
        <div className="p-5 border border-light-gray rounded-2xl w-fit">
          <span className="text-3xl text-yellow-color ">{data.icon}</span>
        </div>
        <div className="space-y-1">
          <h3>{data.title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            expedita error cupiditate non odit? Quasi!
          </p>
        </div>
      </div>
      {children}
    </Container>
  );
}
const Container = tw.div`
${({ $border }) =>
  $border
    ? "border rounded-2xl hover:border-yellow-color bg-black-color bg-opacity-25 cursor-pointer border-light-gray border-opacity-50 transition-all duration-500"
    : ""}
    w-full
    h-full
    overflow-hidden
`;
