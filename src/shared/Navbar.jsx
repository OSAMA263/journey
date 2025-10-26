import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import MainBtn from "../components/MainBtn";
import { PiCirclesFourFill } from "react-icons/pi";
import {
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  Slide,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { PiCaretUpDuotone } from "react-icons/pi";
import LayoutPage from "./LayoutPage";

export default function Navbar() {
  const [SM_DEVICE] = useMediaQuery("(max-width: 1024px)", { ssr: false });
  const [navbarStyles, setNavbarStyles] = useState(false);
  // navbar expande toggle
  const [isExpanded, setIsExpanded] = useState(false);
  // nav item dropdown
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { pathname } = useLocation();
  // close dropdown when we navigate
  useEffect(() => {
    onClose();
    setIsExpanded(false);
  }, [pathname]);
  // make navbar bgc lighter when u scroll
  useEffect(() => {
    const headerBgc = window.addEventListener("scroll", () => {
      setNavbarStyles(window.scrollY >= 60 ? true : false);
    });
    return window.removeEventListener("scroll", headerBgc);
  }, []);

  return (
    <Header className={navbarStyles ? "!bg-opacity-50" : "bg-opacity-100"}>
      <LayoutPage className={"!pt-0"}>
        <Nav className={navbarStyles ? "!py-4" : "!py-6"}>
          <NavLink
            to="/"
            className="z-20 [&>span]:hover:-rotate-[135deg] hover:scale-90 flex gap-2"
          >
            <span className="text-2xl duration-500  transition-all text-white">
              <PiCirclesFourFill />
            </span>
            Journey
          </NavLink>
          {!SM_DEVICE && (
            <>
              <LinkList>
                {nav_links.map(({ title, url }) => (
                  <li key={title}>
                    <NavLink to={url}>{title}</NavLink>
                  </li>
                ))}
                <li className="relative">
                  <Menu isOpen={isOpen} onClose={onClose}>
                    <MenuButton onClick={onToggle} className="[&>span]:!flex">
                      Company
                      <span
                        className={`ms-2 text-xl ${
                          isOpen ? "rotate-0" : "rotate-180"
                        }`}
                      >
                        <PiCaretUpDuotone />
                      </span>
                    </MenuButton>
                    <MenuList
                      mt={3}
                      minW={""}
                      py={8}
                      px={12}
                      className="!rounded-3xl gap-y-2 !border-light-gray flex flex-col items-start !bg-opacity-50 !bg-black"
                    >
                      <NavLink to="/about-us">About Us</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </MenuList>
                  </Menu>
                </li>
              </LinkList>
              <div className="max-md:hidden flex items-center gap-x-6">
                <TwoBtns />
              </div>
            </>
          )}
          {/* small device navbar */}
          {SM_DEVICE && (
            <NavbarSm {...{ setIsExpanded, isExpanded, isOpen, onToggle }} />
          )}
        </Nav>
      </LayoutPage>
    </Header>
  );
}
// NACBAR ON SMALL DEVICES-------------------
const NavbarSm = (props) => {
  const { isOpen, onToggle, setIsExpanded, isExpanded } = props;
  return (
    <>
      <ToggleIconBtn
        className="navbar-toggle-btn"
        aria-label="expande nav bar"
        $isExpanded={isExpanded}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <span className="first"></span>
        <span className="middle"></span>
        <span className="last"></span>
      </ToggleIconBtn>
      <Slide
        direction="top"
        className={`py-10 backdrop-blur-sm bg-black-color bg-opacity-50 ${
          isExpanded && "!top-[47px]"
        }`}
        in={isExpanded}
      >
        <LayoutPage>
          <div>
            <ul className="space-y-4 [&_a]:block mb-10">
              {nav_links.map(({ title, url }) => (
                <li key={title}>
                  <NavLink to={url}>{title}</NavLink>
                </li>
              ))}
              <li>
                <button onClick={onToggle} className="flex">
                  Company
                  <span
                    className={`ms-2 text-xl ${
                      isOpen ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    <PiCaretUpDuotone />
                  </span>
                </button>
                <Collapse className="ml-4 space-y-2 mt-4" in={isOpen}>
                  <NavLink to="/about-us">About Us</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </Collapse>
              </li>
            </ul>
            <TwoBtns />
          </div>
        </LayoutPage>
      </Slide>
      <NavbarOverlay
        onClick={() => setIsExpanded(false)}
        className={
          isExpanded && "opacity-100 visible -z-10 backdrop-blur-[1px]"
        }
      />
    </>
  );
};
const TwoBtns = () => {
  return (
    <>
      <button className="px-6 py-2 hover:bg-light-gray rounded-full">
        Login
      </button>
      <MainBtn />
    </>
  );
};
const ToggleIconBtn = tw.button`
${({ $isExpanded }) =>
  $isExpanded
    ? `
    [&>.first]:rotate-45 
    [&>.last]:-rotate-45 
    [&>.first]:!top-1/2 
    [&>.last]:!top-1/2 
    [&>.middle]:opacity-0
    [&>.middle]:invisible
    `
    : ""}
`;
const NavbarOverlay = tw.div`
transition-all
fixed
left-0
top-0
w-dvw
h-dvh
bg-black
bg-opacity-50
opacity-0
invisible
`;
const LinkList = tw.ul`
flex
items-center
max-md:hidden 
gap-x-8
text-lg
`;

const Nav = tw.nav`
mx-auto
flex
items-end
transition-all
duration-700
justify-between
relative
z-20
[&_a:hover]:text-yellow-color
[&_button:hover]:text-yellow-color
[&_button:hover_span]:!text-yellow-color
[&_button_span]:transition-all
[&_button_span]:duration-500
[&_button_span]:text-white
`;

const Header = tw.header`
bg-black
w-full
lg:backdrop-blur-sm
fixed
transition-all
duration-700
z-[69696969]
font-semibold
`;

const nav_links = [
  { title: "Features", url: "/features" },
  { title: "Pricing", url: "/pricing" },
];
