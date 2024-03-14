import tw from "tailwind-styled-components";
import AutoSlider from "../../components/AutoSlider";
import GetStarted from "../../components/GetStarted";
import GlowingBg from "../../components/GlowingBg";
import MainBtn from "../../components/MainBtn";
import { SectionHeader } from "../../components/SectionHeader";
import Testimonial from "../../components/Testimonial";
import LayoutPage from "../../shared/LayoutPage";
import SlideElement from "../../shared/SlideElement";
import { SectionGrid } from "../home/Home";
import { jobs, team } from "./data";
export default function About() {
  return (
    <LayoutPage>
      <GlowingBg glowing="top-0" className="space-y-20">
        <SectionGrid className="grid-cols-[1.25fr_1fr] pt-40">
          <SectionHeader
            smallTitle="About Us"
            largeTitle="A Company you can place your Trust in"
          />
          <img src="/about hero.webp" alt="hero img" className="rounded-xl" />
        </SectionGrid>
      </GlowingBg>
      <AutoSlider />
      {/* OUT CUSTOMERS */}
      <SlideElement className="space-y-20 bg-dots text-balance text-center !mt-32">
        <h1>We create automated Processes that enhance Global Companies</h1>
        <div className="grid grid-cols-4 text-start gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <SlideElement
              i={i}
              key={i}
              className="p-8 rounded-2xl border border-light-gray space-y-10"
            >
              <h1>6M</h1>
              <span>Customers Genrated</span>
            </SlideElement>
          ))}
        </div>
      </SlideElement>
      {/* OUR FUCKIN TEAM */}
      <GlowingBg glowing="!bg-opacity-25" className="space-y-20">
        <SectionHeader
          smallTitle="Our Team"
          largeTitle="Meet the Team"
          className="text-center mx-auto"
        />
        {/* CARDS team */}
        <div className="grid grid-cols-3 gap-x-20">
          {team.map(({ img, name, position, description, socials }, i) => (
            <div className="space-y-6 text-center" key={i}>
              <SlideElement className="rounded-2xl overflow-hidden w-[90%] mx-auto">
                <img src={img} className=" hover:scale-110 w-full" alt={name} />
              </SlideElement>
              <SlideElement>
                <h6>{name}</h6>
                <span>{position}</span>
              </SlideElement>
              <SlideElement>
                <p>{description}</p>
              </SlideElement>
              <SlideElement className="flex justify-center gap-x-4">
                {socials.map(({ logo }, j) => (
                  <SocialLink key={j}>{logo}</SocialLink>
                ))}
              </SlideElement>
            </div>
          ))}
        </div>
      </GlowingBg>
      <Testimonial />
      {/* HOW FUKCING GREAT ARE WE */}
      <div>
        <SectionHeader
          smallTitle="We're Hiring"
          largeTitle="Join our Team"
          className="text-center mx-auto"
        />
      </div>
      <JobOffers />
      {/*  */}
      <GetStarted />
    </LayoutPage>
  );
}

const JobOffers = () => {
  return (
    <GlowingBg
      glowing="!bg-opacity-15"
      className="space-y-8 !mt-20 w-[69%] mx-auto"
    >
      {jobs.map(({ role, location, description }, i) => (
        <SlideElement key={i}>
          <JobCard>
            <div className="flex justify-between">
              <div>
                <h2>{role}</h2>
                <span>{location}</span>
              </div>
              <MainBtn>Apply Now</MainBtn>
            </div>
            <p>{description}</p>
          </JobCard>
        </SlideElement>
      ))}
    </GlowingBg>
  );
};

const SocialLink = tw.small`
border
rounded-full
transition-all
duration-300
p-2
text-black
text-xl
cursor-pointer
border-yellow-color
bg-yellow-color
hover:bg-transparent
hover:text-yellow-color
hover:scale-110
`;

const JobCard = tw.div`
space-y-16
border
cursor-pointer
rounded-2xl
border-light-gray
hover:border-yellow-color
p-10
transition-all
duration-300
`;
