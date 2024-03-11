import tw from "tailwind-styled-components";

export default function GlowingBg(props) {
  const { glowing, className, children, overflowHidden = "" } = props;
  return (
    <div className={"relative " + (className ?? "")}>
      {children}
      <div className="absolute left-0 top-0 -z-10 w-full h-full">
        <div
          className={`relative flex justify-center h-full w-full ${
            overflowHidden && "overflow-hidden"
          }`}
        >
          <div>
            <div></div>
            <div></div>
          </div>
          <Glowing className={glowing ?? ""}></Glowing>
        </div>
      </div>
    </div>
  );
}
const Glowing = tw.div`
absolute
bg-yellow-color
w-[60%]
h-[60%]
rounded-[50%]
blur-[150px]
-z-[9]
bg-opacity-50
`;
