import tw from "tailwind-styled-components";

export default function LayoutPage({ children, className }) {
  return <Container className={className ?? ""}>{children}</Container>;
}

const Container = tw.div`
2xl:max-w-[75%]
xl:container
!mx-auto
sm:px-6
px-1
lg:space-y-60
space-y-32
[&_h1]:xl:text-5xl
[&_h1]:lg:text-4xl
[&_h1]:text-2xl
[&_h6]:max-lg:text-lg
[&_p]:max-lg:text-sm
[&_p]:text-base
lg:pt-20
`;
