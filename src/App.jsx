import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import { lazy } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

function App() {
  // make a page progress bar under the navbar
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
// const About = lazy(() => import("./pages/about/About"));
// const Blog = lazy(() => import("./pages/blog/Blog"));
// const Pricing = lazy(() => import("./pages/pricing/Pricing"));
// const Features = lazy(() => import("./pages/features/Features"));
// const Contact = lazy(() => import("./pages/contact/Contact"));

export default App;
