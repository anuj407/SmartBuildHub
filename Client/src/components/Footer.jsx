import React from "react";
import { ChevronUp, Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "../assets/smartbuild_Logo_dark.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d0f1c] to-[#14142b] text-white pt-20 pb-8 px-6 md:px-16 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Column 1 - Logo & Description */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="logo" className="h-16" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                Construction
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              We're dedicated to building the future with innovative
              construction solutions that stand the test of time.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="bg-[#1a1c2f] hover:bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "About",
                "Services",
                "Projects",
                "Blog",
                "Careers",
                "Contact Us",
              ].map((link) => (
                <li
                  key={link}
                  className="transition-transform duration-300 hover:translate-x-2"
                >
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <div className="mt-1 p-2 bg-[#1a1c2f] rounded-md group-hover:bg-orange-500 transition-colors">
                  <MapPin
                    size={16}
                    className="text-orange-400 group-hover:text-white"
                  />
                </div>
                <span className="group-hover:text-white transition-colors">
                  198 West 21th Street, Suite 721
                  <br />
                  New York, NY 10010
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="p-2 bg-[#1a1c2f] rounded-md group-hover:bg-orange-500 transition-colors">
                  <Phone
                    size={16}
                    className="text-orange-400 group-hover:text-white"
                  />
                </div>
                <span className="group-hover:text-white transition-colors">
                  +91 7007575886
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="p-2 bg-[#1a1c2f] rounded-md group-hover:bg-orange-500 transition-colors">
                  <Mail
                    size={16}
                    className="text-orange-400 group-hover:text-white"
                  />
                </div>
                <span className="group-hover:text-white transition-colors">
                  info@construction.com
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="p-2 bg-[#1a1c2f] rounded-md group-hover:bg-orange-500 transition-colors">
                  <Clock
                    size={16}
                    className="text-orange-400 group-hover:text-white"
                  />
                </div>
                <span className="group-hover:text-white transition-colors">
                  Mon - Fri: 9AM - 5PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter & Map */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Newsletter
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500 rounded-full"></span>
              </h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex rounded-lg overflow-hidden shadow-lg">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#1a1c2f] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none w-2/3 focus:ring-2 focus:ring-orange-500/50"
                />
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 w-1/3">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 min-w-[100%] h-96 relative overflow-hidden rounded-lg border border-[#1a1c2f] group hover:border-orange-500/30 transition-colors duration-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14223.884772862788!2d80.99815679999999!3d26.967811549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff2addd9b239%3A0xc21a9bbd557936ec!2sIntegral%20University!5e0!3m2!1sen!2sin!4v1744719827775!5m2!1sen!2sin"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 border-t border-[#1a1c2f] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Construction Company. All rights
              reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        className="absolute cursor-pointer right-6 bottom-6 bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUp size={20} className="group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
