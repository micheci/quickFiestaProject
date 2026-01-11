import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Accessibility from "./components/Accessibility";
import BalloonTestimonialSection from "./components/BalloonTestimonialSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Reviews from "./components/Reviews";
import CustomizeParty from "./components/CustomizeParty";
import React from "react";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      
      <ScrollToTop /> {/* ensures every route starts at top */}

      <Routes>
        {/* Main landing page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
               <Contact />
              <HowItWorks />
              <Packages />
              <BalloonTestimonialSection />
              <Reviews />
             
            </>
          }
        />

        {/* Accessibility page */}
        <Route path="/accessibility" element={<Accessibility />} />

        {/* Customize Party page */}
        <Route path="/customize" element={<CustomizeParty />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
