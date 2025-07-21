import { motion } from "framer-motion";
import React from "react";
import orbitElement from "../assets/asset36.png"
import heroImg from '../assets/asset8.jpg'
import gradient from '../assets/asset38.jpg'
import Btn from './Btn'

const HeroSection = () => {
  return (
    <section className="relative  min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-36 pt-28 overflow-hidden bg-cover bg-no-repeat bg-right  text-white" style={{ backgroundImage: `url(${orbitElement})`, backgroundSize: "60%" }}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={gradient}
          alt="Gradient Background"
          className="absolute right-[-100px] top-[-100px] w-[900px] h-[900px] object-cover opacity-40 blur-[100px]"
        />
      </div>
      {/* Left: Text Content */}
      <div className="relative  lg:max-w-xl text-center lg:text-left mb-16 lg:mb-0">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-[#B9A3FF] font-stretch-50% text-[18px] mb-2"
        >
          Backed by Y Combinator

        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Save 1 hour <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">
            every day
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10"
        >
          Start your day with an organized inbox, context- <br />aware responses written in your voice, and clear, <br /> concise notes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
            {/* cta button */}
            <Btn/>
         
        </motion.div>
      </div>
      {/* Orbit Image Background - Right only */}
      <div className="absolute inset-y-0 right-0 w-1/2 flex items-start justify-center pointer-events-none  z-9"  >

      </div>
      {/* Right: Phone Image with Orbit BG */}
      <motion.div
        className="relative z-10 w-full lg:w-1/2 h-[60vh] lg:h-[80vh] flex justify-center items-end mt-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >


        {/* Main Phone Image */}
        <div className="relative z-10 w-[300px] sm:w-[250px] lg:w-[320px] ">
          <img
            src={heroImg}
            alt="Superconscious App UI"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;