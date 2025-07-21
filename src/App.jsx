import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import LocomotiveScroll from 'locomotive-scroll';
import Testimonial from './components/Testimonial'
import Quote from './components/Quote.jsx';
import Integrate from './components/Integrate.jsx'
import Footer from './components/Footer.jsx';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="bg-[#0C0B0C] h-screen w-full text-white">
        <Navbar />
        <Herosection />
        <Testimonial />
        <Quote />
        < Integrate />
        <Footer />


      </div>
    </>
  )
}

export default App
