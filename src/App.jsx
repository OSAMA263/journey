import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/home/Home";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

function App() {
  // make a page progress bar under the navbar
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <Suspense fallback={<span>loading</span>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
export default App;

const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Pricing = lazy(() => import("./pages/pricing/Pricing"));
const Features = lazy(() => import("./pages/features/Features"));