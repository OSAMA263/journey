import LayoutPage from "../../shared/LayoutPage";
import GlowingBg from "../../components/GlowingBg";
import { SectionHeader } from "../../components/SectionHeader";
import FAQS from "../../components/FAQS";
import GetStarted from "../../components/GetStarted";
import tw from "tailwind-styled-components";
import MainBtn from "../../components/MainBtn";
import { Link } from "react-router-dom";
import { SectionGrid } from "../home/Home";

export default function Contact() {
  return (
    <LayoutPage>
      <GlowingBg glowing="!-top-1/2 !bg-opacity-25">
        <SectionGrid className="lg:grid-cols-2 gap-20 pt-40">
          <div className="space-y-10">
            <SectionHeader
              smallTitle="Contact Us"
              largeTitle="Get in Touch with our Team of Experts"
            />
            {/* FORM IPUTS */}
            <Form />
          </div>
          <img src="about hero.webp" alt="hero img" className="rounded-xl" />
        </SectionGrid>
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
        <input name="user name" type="text" placeholder="Name" />
        <input name="email address" type="email" placeholder="Email" />
        <input name="phone numebr" type="number" placeholder="Phone Number" />
        <select name="company size">
          <option>Company Size</option>
          <option value="">20+</option>
          <option value="">40+</option>
          <option value="">60+</option>
        </select>
        <textarea
          className="col-span-2"
          name="message"
          rows="5"
          placeholder="How can we help ypu?"
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
gap-3
`;
