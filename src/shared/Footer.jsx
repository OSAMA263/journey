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

export default function Footer() {
  return (
    <LayoutPage className={"mt-20"}>
      <footer className="bg-dots">
        <FooterWrapper>
          <div className="space-y-4">
            <NavLink
              to="/"
              className="w-fit [&>span]:hover:-rotate-[135deg] hover:scale-75 flex gap-2"
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
            <ul key={title}>
              {title}
              {links.map(({ label, url }) => (
                <li key={label}>
                  {String(url) ? (
                    <span>
                      <NavLink to={url}>{label}</NavLink>
                    </span>
                  ) : (
                    <span className="flex">
                      {url}
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </FooterWrapper>
        <div className="w-full flex justify-between py-8">
          <span>osam263</span>
          <span>
            Developed By <h6>OSAMA263</h6>
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
gap-x-10
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
      { label: "X", url: <FaXTwitter /> },
      { label: "Facebook", url: <FaFacebookF /> },
      { label: "Youtube", url: <FaYoutube /> },
      { label: "LinkedIn", url: <FaLinkedinIn /> },
    ],
  },
];
