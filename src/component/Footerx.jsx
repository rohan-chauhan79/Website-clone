import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa"; // ✅ Added FaEnvelope

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Have a Questions?</h3>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              className="w-full h-70 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093665!2d144.95373531568056!3d-37.81627974201217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1645638898251!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info with Icons */}
          <div className="mt-10 space-y-2">
            <p className="text-gray-400">📞 +91-8860060616</p>
            <p className="text-gray-400 flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> {/* ✅ Fixed email icon */}
              contactus@bridgegroupsolutions.com
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Careers", "Gallery", "Contact Us"].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            {[
              "Mutual Funds",
              "Wealth Management",
              "Portfolio Management",
              "Pension Funds",
              "Real Estate",
              "ERP & Customized Software",
              "Software Testing",
              "Internship",
              "Current Opening",
            ].map((service) => (
              <li key={service}>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscription & Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe Us!</h3>
          <div className="flex items-center bg-white text-black rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2">Subscribe</button>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        Copyright © 2025 All rights reserved | This template is made with 💙 by{" "}
        <span className="text-blue-400">Rohan Kumar</span>
      </div>
    </footer>
  );
};

export default Footer;
