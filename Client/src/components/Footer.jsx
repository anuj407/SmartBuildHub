// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0d0f1c] text-white pt-16 pb-8 px-6 md:px-16 relative">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Column 1 - Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/building-icon.svg" alt="logo" className="h-8" />
            <h2 className="text-2xl font-bold">Construction</h2>
          </div>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-400">198 West 21th Street, Suite 721 New York, NY 10010</p>
          <p className="text-gray-400 mt-2">Phone: +95 (0) 123 456 789</p>
          <p className="text-gray-400">Cell: +95 (0) 123 456 789</p>
        </div>

        {/* Column 4 - Newsletter & Map */}
        <div className="flex flex-col gap-4">
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#1a1c2f] px-4 py-2 text-sm text-white placeholder-gray-400 outline-none w-2/3"
            />
            <button className="bg-white text-black px-4 py-2 font-semibold hover:bg-orange-500 hover:text-white transition">
              SIGN UP
            </button>
          </div>
          <img
            src="/world-map.png"
            alt="World map"
            className="h-32 w-full object-contain"
          />
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="mt-10 text-sm text-gray-400 text-center">
        <p>
          Copyright ©2025 All rights reserved | This template is made with
          <span className="text-red-500 mx-1">❤️</span>by{" "}
          <a href="https://colorlib.com" className="text-orange-500">
            Colorlib
          </a>
        </p>
      </div>

      {/* Scroll to top button */}
      <button
        className="absolute cursor-pointer text-2xl font-bold right-6 bottom-6 bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
