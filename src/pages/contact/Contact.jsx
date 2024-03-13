import LayoutPage from "../../shared/LayoutPage";
import GlowingBg from "../../components/GlowingBg";
import { SectionHeader } from "../../components/SectionHeader";
import FAQS from "../../components/FAQS";
import GetStarted from "../../components/GetStarted";
import tw from "tailwind-styled-components";
import MainBtn from "../../components/MainBtn";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <LayoutPage>
      <GlowingBg glwoing="!top-0" className="grid grid-cols-2 gap-x-20">
        <div className="space-y-10">
          <SectionHeader
            smallTitle="Contact Us"
            largeTitle="Get in Touch with our Team of Experts"
          />
          {/* FORM IPUTS */}
          <Form />
        </div>
      </GlowingBg>
      <FAQS />
      <GetStarted />
    </LayoutPage>
  );
}
const Form = () => {
  return (
    <div className="space-y-4">
      <form className="flex gap-4 items-stretch">
        <div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="number" placeholder="Phone Number" />
          <select>
            <option>Company Size</option>
            <option value="">12</option>
            <option value="">12</option>
            <option value="">12</option>
          </select>
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <MainBtn type="submit">Submit</MainBtn>
      </form>
      <p>
        By submitting this Form you confirm that you’ve rea and agree to our
        <Link className="text-yellow-color hover hover:text-white">
          Terms & Conditions.
        </Link>
      </p>
    </div>
  );
};

