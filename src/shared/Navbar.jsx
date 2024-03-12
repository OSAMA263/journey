import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";

export default function Navbar() {
  const [headerOpacity, setHeaderOpacity] = useState("bg-opacity-100");
  
  useEffect(() => {
    const headerBgc = window.addEventListener("scroll", () => {
      setHeaderOpacity(window.scrollY >= 60 ? "bg-opacity-50 py-3" : "");
    });
    return window.removeEventListener("scroll", headerBgc);
  }, []);

  return (
    <Header className={headerOpacity}>
      <Nav>
        <NavLink to="/">logo</NavLink>
        <UL>
          {nav_links.map(({ title, url }) => (
            <li key={title}>
              <NavLink to={url}>{title}</NavLink>
            </li>
          ))}
          <li>
            <button>dropdown</button>
          </li>
        </UL>
        <div className="flex items-center gap-x-6">
          <h6>cart</h6>
          <button className="px-4 py-2 hover:bg-light-gray rounded-full">
            Login
          </button>
          <button className="px-4 py-2 glowing-btn">Get Started</button>
        </div>
      </Nav>
    </Header>
  );
}
const UL = tw.ul`
flex
items-center
gap-x-8
[&>li:hover]:text-yellow-color
[&>li]:cursor-pointer
text-lg
`;

const Nav = tw.nav`
w-[65%]
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
  { title: "Contact", url: "/Contact" },
];
