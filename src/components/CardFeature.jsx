import tw from "tailwind-styled-components";

export default function CardFeature({ border, data }) {
  return (
    <Container $border={border}>
      <div className="space-y-6 text-start text-lg font-semibold">
        <div className="p-5 border border-light-gray rounded-2xl w-fit">
          <span className="text-3xl text-yellow-color ">{data.icon}</span>
        </div>
        <div className="space-y-1">
          <h3>{data.title}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            pariatur ducimus
          </p>
        </div>
      </div>
    </Container>
  );
}
const Container = tw.div`
${({ $border }) =>
  $border
    ? "border rounded-2xl px-10 py-20 hover:border-yellow-color bg-black-color bg-opacity-25 cursor-pointer border-light-gray border-opacity-50 transition-all duration-500"
    : ""}
`;
