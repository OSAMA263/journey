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
      <GlowingBg glowing="!top-0 !bg-opacity-25" className="grid grid-cols-2 gap-x-20 items-center pt-40">
        <div className="space-y-10">
          <SectionHeader
            smallTitle="Contact Us"
            largeTitle="Get in Touch with our Team of Experts"
          />
          {/* FORM IPUTS */}
          <Form />
        </div>
        <img src="/about hero.webp" alt="hero img" className="rounded-xl" />
      </GlowingBg>
      <FAQS />
      <GetStarted />
    </LayoutPage>
  );
}
const Form = () => {
  return (
    <div className="space-y-4">
      <FormContainer>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone Number" />
        <select>
          <option>Company Size</option>
          <option value="">12</option>
          <option value="">12</option>
          <option value="">12</option>
        </select>
        <textarea
          className="col-span-2"
          name=""
          id=""
          rows="5" placeholder="How can we help ypu?"
        ></textarea>
        <MainBtn className="col-span-2 py-3" type="submit">
          Submit
        </MainBtn>
      </FormContainer>
      <p className="text-base">
        By submitting this Form you confirm that you’ve rea and agree to our{" "}
        <Link className="text-yellow-color hover hover:text-white">
          Terms & Conditions.
        </Link>
      </p>
    </div>
  );
};

const FormContainer = tw.form`
grid grid-cols-2
gap-4
`;
