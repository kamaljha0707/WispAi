import React from 'react'
import gradient from '../assets/asset38.jpg'
import cornell from '../assets/asset3.png'
import aveva from '../assets/asset4.png'
import qualcomm from '../assets/asset5.png'
import Btn from './Btn'
function Testimonial() {
    return (
        <>
            <section className="relative bg-[#0C0B0C] w-full flex flex-col items-center text-white pt-20 px-6 sm:px-36 overflow-hidden min-h-screen">
                {/* Gradient Blur Background */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <img
                        src={gradient}
                        alt="gradient"
                        className="absolute right-[-150px] top-[-150px] w-[900px] h-[900px] object-cover opacity-30 blur-[120px]"
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Logos */}
                    <div className="text-center mt-36 mb-30 w-full">
                        <p className="text-gray-300 text-lg font-medium mb-6">Loved by people at</p>
                        <div className="flex flex-wrap justify-center items-center gap-16 opacity-80">
                            <img src={cornell} alt="Cornell University" className="h-14 cursor-pointer grayscale hover:grayscale-0 transition duration-300" />
                            <img src={aveva} alt="Aveva" className="h-10 cursor-pointer grayscale hover:grayscale-0 transition duration-300" />
                            <img src={qualcomm} alt="Qualcomm" className="h-10 cursor-pointer grayscale hover:grayscale-0 transition duration-300" />
                        </div>
                    </div>

                    {/* Headline */}
                    <div className="text-center mt-8 w-full">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Reclaim your Time</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Experience email automation that adapts to your style and needs
                        </p>
                        {/* CTA Button */}
                        <Btn/>
                    </div>

                    {/* Steps */}
                    <div className="w-full   flex flex-col sm:flex-row items-center justify-center mt-10 sm:mt-36 text-center min-h-[65vh]">
                        <div className='border-b-2 sm:border-b-0 sm:border-r-2 px-6 py-12 sm:py-0 border-[#333333] w-full sm:w-1/3 capitalize flex flex-col justify-center items-center relative'>
                            <span className='absolute top-0 right-6 py-1 px-2.5 font-medium rounded-full  bg-[#d2c8de] text-[#7E22CE]'>1 min</span>
                            <div className="h-36 w-36 bg-[#333333] rounded-3xl mb-10 flex flex-col items-center justify-center text-center captialize text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">
                                <div className='h-36 w-42 rounded-3xl bg-zinc-800'> </div>
                            </div>
                            <h1 className='text-white text-2xl sm:text-3xl leading-normal font-medium tracking-wide'>
                                Link Gmail <br />
                            </h1>
                            <p className='text-[#888888] text-md font-medium mt-6'>
                                Connect your inbox in <br />  just 30 seconds.

                            </p>
                        </div>
                        <div className='border-b-2 sm:border-b-0 sm:border-r-2 px-6 py-12 sm:py-0 border-[#333333] w-full sm:w-1/3 flex justify-center items-center flex-col  capitalize relative'>
                            <span className='absolute top-0 right-6 py-1 px-2.5 font-medium rounded-full  bg-[#e3cfb3] text-[#A16207]'>3 min</span>
                            <div className="h-36 w-36 bg-[#333333] rounded-3xl mb-10 flex flex-col items-center justify-center text-center captialize text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">
                                {/* <span className="text-8xl ">2<sup className='bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 lowercase text-2xl mb-1'>nd</sup></span>
                                <span className="text-3xl tracking-wider mt-1">step</span> */}
                                <div className='h-36 w-42 rounded-3xl bg-zinc-800'></div>
                            </div>
                            <h1 className='text-white text-2xl sm:text-3xl leading-normal font-medium tracking-wide'>
                                Wisp onboards itself
                            </h1>
                            <p className='text-[#888888] text-md font-medium mt-6 '>
                                Wisp knows your style and  <br />
                                context instantly.
                            </p>
                        </div>
                        <div className='px-6 py-12 sm:py-0 w-full sm:w-1/3 capitalize flex flex-col justify-center items-center relative '>
                            <span className='absolute top-0 right-0 py-1 px-2 font-medium rounded-full bg-[#cae8d5] text-[#15803D]'>
                                Save 1h
                            </span>

                            <div className="h-36 w-36  mb-10 flex flex-col items-center justify-center text-center capitalize">


                                <svg className="w-20 h-20 rotate-6" viewBox="0 0 24 24" fill="url(#grad1)">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#a855f7" />
                                            <stop offset="100%" stopColor="#6366f1" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        fill="currentColor"
                                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                    />
                                </svg>

                                <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">
                                    Done
                                </span>
                            </div>
                            <h1 className='text-white text-2xl sm:text-3xl leading-normal font-medium tracking-wide'>
                                Check and send
                            </h1>
                            <p className='text-[#888888] text-md font-medium mt-6'>
                                Review with confidence and <br />  send your drafts instantly.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial