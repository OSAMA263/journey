import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import MainBtn from "../components/MainBtn";
import { PiCirclesFourFill } from "react-icons/pi";
import { Menu, MenuButton, MenuList, useDisclosure } from "@chakra-ui/react";
import { PiCaretUpDuotone } from "react-icons/pi";
import LayoutPage from "./LayoutPage";
export default function Navbar() {
  const [headerOpacity, setHeaderOpacity] = useState("bg-opacity-100");
  const { isOpen, onClose, onToggle } = useDisclosure();
  const { pathname } = useLocation();
  // close dropdown when we navigate
  useEffect(() => {
    onClose();
  }, [pathname]);
  // make navbar bgc lighter when u scroll
  useEffect(() => {
    const headerBgc = window.addEventListener("scroll", () => {
      setHeaderOpacity(window.scrollY >= 60 ? "bg-opacity-50 py-3" : "");
    });
    return window.removeEventListener("scroll", headerBgc);
  }, []);

  return (
    <Header className={headerOpacity}>
      <LayoutPage>
        <Nav>
          <NavLink to="/" className="[&>span]:hover:-rotate-[135deg] hover:scale-75 flex gap-2">
            <span className="text-2xl duration-500  transition-all text-white">
              <PiCirclesFourFill />
            </span>
            Logo?
          </NavLink>
          <UL>
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
          </UL>
          <div className="flex items-center gap-x-6">
            <button className="px-6 py-2 hover:bg-light-gray rounded-full">
              Login
            </button>
            <MainBtn />
          </div>
        </Nav>
      </LayoutPage>
    </Header>
  );
}
const UL = tw.ul`
flex
items-center
gap-x-8
[&_a:hover]:text-yellow-color
[&_button:hover]:!text-yellow-color
[&_button:hover_span]:!text-yellow-color
[&_button_span]:transition-all
[&_button_span]:duration-500
[&_button_span]:text-white
text-lg
`;

const Nav = tw.nav`
mx-auto
flex
items-center
justify-between
`;

const Header = tw.header`
bg-black
py-6
w-full
fixed
transition-all
duration-700
z-[6969]
backdrop-blur-sm
font-semibold
`;

const nav_links = [
  { title: "Features", url: "/features" },
  { title: "Pricing", url: "/pricing" },
];
