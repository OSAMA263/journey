import tw from "tailwind-styled-components";

export default function CardFeature(props) {
  const { border, data, children, className } = props;
  return (
    <Container className={className} $border={border}>
      <div className="space-y-6 text-start text-lg font-semibold">
        <div className="sm:p-5 p-2 border border-light-gray sm:rounded-2xl rounded-lg w-fit">
          <span className="sm:text-3xl text-xl text-yellow-color ">
            {data.icon}
          </span>
        </div>
        <div className="space-y-3 font-normal">
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
    ? `
    border 
    rounded-2xl
    hover:border-yellow-color
    bg-black-color
    bg-opacity-25
    cursor-pointer
    border-light-gray 
    border-opacity-50
    [&>div]:sm:p-12
    [&>div]:p-8
    transition-all
    duration-500
    `
    : ""}
    w-full
    h-full
    overflow-hidden
`;
