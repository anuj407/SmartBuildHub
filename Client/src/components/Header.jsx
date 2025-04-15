import React, { useState } from "react";
import logo from "../assets/smartbuild_Logo_dark.png";

const Header = () => {
  const [hoverButton, setHoverButton] = useState(null);

  const navItems = [
    "Home",
    "About",
    "Projects",
    "Services",
    "Blog",
    "Pages",
    "Contact",
  ];

  return (
    <header className="relative backdrop-blur-md bg-[#14142b] text-white py-3 px-6 flex items-center justify-between border-b border-white/10 shadow-lg">
      {/* Glass Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14142b]/90 via-[#14142b]/70 to-[#14142b]/80 backdrop-blur-md -z-10"></div>

      {/* Logo Section with subtle hover zoom */}
      <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
        <img src={logo} alt="SmartBuild Logo" className="h-16" />
      </div>

      {/* Navigation Menu with improved hover effects */}
      <nav className="hidden md:flex items-center gap-8 font-medium">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="relative py-2 px-1 overflow-hidden group"
            onMouseEnter={() => setHoverButton(item)}
            onMouseLeave={() => setHoverButton(null)}
          >
            <span className="relative z-10 transition duration-300 group-hover:text-orange-400">
              {item}
            </span>
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                hoverButton === item ? "w-full" : ""
              }`}
            ></span>
          </a>
        ))}
      </nav>

      {/* Buttons with hover effects */}
      <div className="flex items-center gap-4">
        <button className="relative overflow-hidden bg-transparent border border-white/30 text-white font-medium py-2 px-4 rounded-lg group">
          <span className="relative z-10 transition duration-300 group-hover:text-[#14142b]">
            Sign In
          </span>
          <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </button>

        <button className="relative overflow-hidden bg-orange-500 text-white font-medium py-2 px-4 rounded-lg group">
          <span className="relative z-10 transition duration-300">Sign Up</span>
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
