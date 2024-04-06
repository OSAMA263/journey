import { PiCirclesFourFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";
import LayoutPage from "./LayoutPage";
import { InputGroup } from "@chakra-ui/react";
import MainBtn from "../components/MainBtn";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Fragment } from "react";

export default function Footer() {
  return (
    <LayoutPage className={"mt-20 !pt-0"}>
      <footer className="bg-dots">
        <FooterWrapper>
          <div className="space-y-4 max-lg:col-span-3">
            <NavLink
              to="/"
              className="w-fit [&>span]:hover:-rotate-[135deg] hover:scale-90 flex gap-2"
            >
              <span className="duration-500  text-2xl transition-all text-white">
                <PiCirclesFourFill />
              </span>
              Logo?
            </NavLink>
            <p>
              Join our newsletter to stay up to date with all future Releases.
            </p>
            <InputGroup>
              <input
                type="email"
                name="email"
                placeholder="enter ur email"
                className="pe-36"
              />
              <MainBtn className="absolute right-4 top-1/2 -translate-y-1/2">
                Subscribe
              </MainBtn>
            </InputGroup>
            <p>
              By subscribing you confirm that you’ve read and agree to our{" "}
              <NavLink className={"text-yellow-color hover:text-white"}>
                Terms & Conditions
              </NavLink>
              .
            </p>
          </div>
          {links.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-yellow-color mb-6">{title}</h2>
              <ul>
                {links.map(({ label, url }) => (
                  <li key={label}>
                    {typeof url === "string" ? (
                      <span className="[&>a]:hover:text-yellow-color">
                        <NavLink to={url}>{label}</NavLink>
                      </span>
                    ) : (
                      <span className="[&>a]:hover:text-yellow-color">
                        <span></span>
                        <NavLink to="" className="flex gap-x-2">
                          {url} {label}
                        </NavLink>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </FooterWrapper>
        <div className="w-full flex max-sm:flex-col justify-between py-8">
          <span>osam263</span>
          <span className="flex">
            Developed By {"\u00A0"}
            <h6>OSAMA263</h6>
          </span>
          <h6>Terms & Conditions</h6>
        </div>
      </footer>
    </LayoutPage>
  );
}
const FooterWrapper = tw.div`
grid
grid-cols-[1.60fr_repeat(3,minmax(0,1fr))]
max-lg:grid-rows-2
max-lg:grid-cols-2
mx-auto
sm:gap-20
max-sm:gap-y-20
py-20
border-b
border-light-gray
`;

const links = [
  {
    title: "website",
    links: [
      { label: "Home", url: "/" },
      { label: "Features", url: "/features" },
      { label: "Pricing", url: "/pricing" },
    ],
  },
  {
    title: "company",
    links: [
      { label: "About Us", url: "/about-us" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    title: "socials",
    links: [
      { label: "Twitter", url: <FaXTwitter /> },
      { label: "Facebook", url: <FaFacebookF /> },
      { label: "Youtube", url: <FaYoutube /> },
      { label: "LinkedIn", url: <FaLinkedinIn /> },
    ],
  },
];
