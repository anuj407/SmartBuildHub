// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#14142b] text-white py-4 px-6 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src="/building-icon.svg" // replace with your icon path
          alt="logo"
          className="h-8"
        />
        <h1 className="text-2xl font-bold">Construction</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-8 font-semibold">
        <a href="#" className="hover:text-orange-500 transition">Home</a>
        <a href="#" className="hover:text-orange-500 transition">About</a>
        <a href="#" className="hover:text-orange-500 transition">Projects</a>
        <a href="#" className="hover:text-orange-500 transition">Services</a>
        <a href="#" className="hover:text-orange-500 transition">Blog</a>
        <a href="#" className="hover:text-orange-500 transition">Pages</a>
        <a href="#" className="hover:text-orange-500 transition">Contact</a>
      </nav>

      {/* CTA Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-lg transition">
        CONTACT NOW
      </button>
    </header>
  );
};

export default Header;
