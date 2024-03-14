import { FaFacebookF, FaLinkedinIn, FaYoutube,FaXTwitter  } from "react-icons/fa6";
const team = [
  {
    img: "employe2.jpg",
    name: "Alex Thompson",
    position: "Software Enginer",
    description:
      "Meet Alex, our dedicated software engineer who turns complex problems into elegant solutions.",
    socials: [
      { logo: <FaXTwitter  /> },
      { logo: <FaFacebookF /> },
      { logo: <FaLinkedinIn /> },
      { logo: <FaYoutube /> },
    ],
  },
  {
    img: "employe3.jpg",
    name: "Jordan Rodriguez",
    position: "Markteing Lead",
    description:
      "Jordan, our marketing maestro, is the driving force behind our brand's visibility and success.",
    socials: [
      { logo: <FaXTwitter /> },
      { logo: <FaFacebookF /> },
      { logo: <FaLinkedinIn /> },
      { logo: <FaYoutube /> },
    ],
  },
  {
    img: "employe1.jpg",
    name: "MF DOOM",
    position: "A human",
    description: "He eats, drinks, sleeps and sleeps more.",
    socials: [
      { logo: <FaXTwitter /> },
      { logo: <FaFacebookF /> },
      { logo: <FaLinkedinIn /> },
      { logo: <FaYoutube /> },
    ],
  },
];

const jobs = [
  {
    role: "Customer Support Specialist",
    location: "Anywhere",
    description:
      "Join our customer-focused team as a Customer Support Specialist, where your dedication will ensure our clients receive exceptional service.",
  },
  {
    role: "Data Analyst",
    location: "Anywhere",
    description:
      "Join our team as a Data Analyst and turn raw data into actionable insights that drive informed business decisions.",
  },
  {
    role: "UX/UI Designer",
    location: "Anywhere",
    description:
      "Shape user experiences and bring creative visions to life as a UX/UI Designer in our collaborative and innovative team.",
  },
  {
    role: "Content Marketing Manager",
    location: "Anywhere",
    description:
      "Join our team as a Content Marketing Manager and be the driving force behind creating compelling narratives that resonate with our audience.",
  },
  {
    role: "Software Engineer",
    location: "Anywhere",
    description:
      "We're seeking a skilled Software Engineer to join our innovative team, where your coding expertise will shape the future of our digital solutions.",
  },
  {
    role: "Digital Marketing Specialist",
    location: "Anywhere",
    description:
      "Join our dynamic team as a Digital Marketing Specialist, where your creativity and strategic mindset will drive impactful online campaigns.",
  },
];
export { jobs, team };
