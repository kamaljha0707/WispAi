import React from 'react';

const Btn = () => {
  return (
    <div className="relative group">
      <button className="relative overflow-hidden px-8 py-3.5 rounded-[2rem] text-base font-medium transition-all duration-500 ease-out cursor-pointer bg-white text-black border border-gray-200 hover:border-transparent transform group-hover:scale-[1.02]">
        {/* Button Text */}
        <span className="relative z-10 inline-block group-hover:text-white transition-colors duration-300 delay-100">
          Get Started for Free
        </span>

        {/* Gradient Fill */}
        <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500" />
          <span
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            style={{ clipPath: 'circle(0% at var(--x) var(--y))' }}
          />
        </span>

        {/* Shine Effect */}
        <span className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2rem]">
          <span className="absolute top-0 left-0 w-12 h-24 bg-white/30 -rotate-12 transform -translate-x-16 group-hover:translate-x-[120%] transition-transform duration-1000" />
        </span>
      </button>

      {/* Mouse Position CSS for Radial Effect */}
      <style jsx>{`
        button {
          --x: 50%;
          --y: 50%;
        }
        button:hover {
          background: radial-gradient(
            circle closest-side,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 100%
          ) var(--x) var(--y);
        }
      `}</style>
    </div>
  );
};

export default Btn;