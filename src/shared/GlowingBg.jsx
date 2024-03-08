export default function GlowingBg(props) {
  const { glowing, className = "", children } = props;
  return (
    <div className={"relative " + className}>
      {children}
      <div className="absolute -z-10 w-full h-full">
        <div className="relative h-full w-full">
          <div
            className={
              `absolute bg-yellow-color w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 rounded-[50%] -translate-y-1/2 blur-[150px] -z-[9] bg-opacity-50 ` +
              glowing
            }
          ></div>
        </div>
      </div>
    </div>
  );
}
