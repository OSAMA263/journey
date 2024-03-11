import {
  PiRocketLaunchLight,
  PiChartBar,
  PiCursorClick,
  PiMagicWand,
  PiUsersThree,
  PiListMagnifyingGlass,
  PiChats,
  PiCheckCircle,
} from "react-icons/pi";

const threeCols = [
  { icon: <PiChartBar />, title: "Optimize Your Marketing Strategies" },
  { icon: <PiRocketLaunchLight />, title: "Stay Ahead of the Competition" },
  { icon: <PiCursorClick />, title: "Drive more Engagement" },
];
const fourGrid = [
  { icon: <PiChartBar />, title: "Detailed Statistics" },
  { icon: <PiMagicWand />, title: "Integrated AI" },
  { icon: <PiCursorClick />, title: "Drive Engagement" },
  { icon: <PiUsersThree />, title: "Personalized Experience" },
];
const accordion = [
  { icon: <PiCursorClick />, title: "Drive more Engagement" },
  { icon: <PiListMagnifyingGlass />, title: "Enhanced Search Results" },
  { icon: <PiChats />, title: "Premium Support in all Plans" },
];
const checkList = [
  { icon: <PiCheckCircle />, title: "Detailed Graphs" },
  { icon: <PiCheckCircle />, title: "Extensive Dashboard" },
  { icon: <PiCheckCircle />, title: "All-in-One Marketing Solution" },
];
export { threeCols, fourGrid, accordion, checkList };
