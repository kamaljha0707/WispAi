import React from "react";
import footerGradient from "../assets/asset39.jpg";

const Footer = () => {
  return (
    <footer
      className="relative w-full min-h-[85vh] bg-[#0C0B0C] text-white  "
      style={{ backgroundImage: `url(${footerGradient})`, backgroundSize: "cover", backgroundPosition: "bottom left;" }}
    >
      <div className="max-w-7xl mx-auto pt-12 pb-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-10">
          <div>
            <p className="text-gray-400 mb-2">Live Limitless</p>
            <h2 className="text-3xl md:text-4xl font-light">hello@wispai.io</h2>
          </div>
          <div className="text-right">
            <p className="text-gray-300 mb-2 text-2xl">WispAI</p>
            <p className="text-gray-400 text-sm mb-4">Transformed your email workflow.</p>
            <button className="bg-white text-[#0C0B0C] rounded-xl px-6 py-2 font-semibold cursor-pointer hover:text-gray-200 hover:border-1 overflow-hidden hover:border-gray-200 transition">
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-between text-center md:text-left text-gray-300 uppercase tracking-wide text-lg mb-6">
          <p>Instagram</p>
          <p>Tik Tok</p>
          <p>Twitter X</p>
          <p>LinkedIn</p>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-10" />

        {/* Huge Brand Name */}
        <h1 className="text-[8.5vw] tracking-wide md:text-[5vw] font-bold  text-center text-white mb-16">
          Ready to save 1 hour every day?
        </h1>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-lg text-gray-400">
          <p>© 2025 WipeAi. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Terms and conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
