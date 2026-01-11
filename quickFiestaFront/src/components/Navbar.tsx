import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll to section, navigating to homepage if needed
  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      // Navigate home first
      navigate("/", { replace: false });
      // Wait a tick for homepage to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      // Already on homepage
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50 font-inter">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <div
          className="text-2xl font-bold text-orange-600 cursor-pointer"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          Quick Fiesta
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection("packages")}>Packages</li>
          <li className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection("contact")}>Get a Quote</li>
          <li className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection("reviews")}>Reviews</li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-800 p-2 rounded-md hover:bg-gray-100 transition"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md w-full flex flex-col items-center space-y-4 py-6 font-medium">
          <li className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection("packages")}>Packages</li>
          <li className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection("contact")}>Get a Quote</li>
          <li className="cursor-pointer hover:text-orange-500" onClick={() => scrollToSection("reviews")}>Reviews</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
