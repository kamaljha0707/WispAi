import React from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowRoundUp } from 'react-icons/io';
import logo from '../assets/logo-wispai.png'

function Navbar() {
  return (
   <motion.div
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-3 px-6 py-2 rounded-[1.6rem] text-[#ffff]"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        // border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1
      }}
    >
      {/* Logo */}
      <motion.div
        className='flex items-center  cursor-pointer'
      >
        <img src={logo} className='h-14 w-20 ' alt="logo" title='Wipe Ai' />
        {/* <h1 id="logo" className='flex  items-center text-2xl font-bold leading-none  cursor-pointer tracking'>
          Wipe <span className='text-[#7620DF] ml-1'>AI</span>
        </h1> */}
      </motion.div>

      {/* Links */}
      <div id="navlinks" className='flex space-x-10 cursor-pointer '>
        {["How it Works", "Release", "Pricing", "Privacy"].map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            whileHover="hover"
            initial="initial"
          >
            <motion.a
              className="text-[14.9744px] text-white font-light tracking-wide  pb-1 block"
              
            >
              {item}
            </motion.a>

            <motion.div
              className="absolute bottom-0 left-0 w-full h-px bg-[#7389f4] origin-left"
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 }
              }}
              transition={{
                duration: 0.3,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      {/* <motion.div
        id='btn'
        className='bg-[#7389f4] text-[#f8f8ff] py-3 px-6 flex items-center rounded-full cursor-pointer gap-3'
        whileHover={{
          backgroundColor: "#5a70e0",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className='text-sm font-medium tracking-wide'
          whileHover={{
            x: -4,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 7
            }
          }}
        >
          Sign in
        </motion.span>

        <motion.div
          className='relative w-6 h-6 flex items-center justify-center'
        >
          <motion.span
            className='absolute w-full h-full bg-white/90 rounded-full'
            whileHover={{
              scale: 1.3,
              opacity: 0.7,
              transition: {
                type: "spring",
                stiffness: 600,
                damping: 5
              }
            }}
          />

          <motion.span
            whileHover={{
              rotate: 90,
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 700,
                damping: 5
              }
            }}
          >
            <IoIosArrowRoundUp className='text-[#7389f4] text-2xl relative' />
          </motion.span>
        </motion.div>
      </motion.div> */}
    </motion.div>
  )
}

export default Navbar