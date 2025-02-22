import React, { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";
import logo from "../assets/logo.webp"; // Ensure this path is correct

const Navbarb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll direction to hide/reveal navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        {/* ✅ Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-16" />
          <h1 className="text-2xl font-bold text-gray-800 whitespace-nowrap">
            Bridge Group Solutions
          </h1>
        </div>

        {/* ✅ Email Section */}
        <div className="hidden md:flex items-center space-x-2">
          <Mail className="w-5 h-5 text-blue-500" />
          <span className="font-bold text-black">Email:</span>
          <h1 className="text-black-300">contactus@bridgegroupsolutions.com</h1>
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden mt-3 md:mt-0">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* ✅ Navigation Links */}
      <div
        className={`bg-blue-900 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
        } md:flex md:items-center md:justify-start`}
      >
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 p-4 text-white">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Outsourcing", path: "/outsourcing" },
            { name: "Investing", path: "/investing" },
            { name: "Careers", path: "/careers" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact Us", path: "/contact" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="hover:text-blue-300 text-lg font-medium transition-all duration-300 ease-in-out py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbarb;
