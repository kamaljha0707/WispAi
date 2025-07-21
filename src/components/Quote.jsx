import React from 'react'
import gradient from '../assets/asset38.jpg'
import { FaBolt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";


function Quote() {
    return (
        <>
            <section className='relative bg-[#0C0B0C] w-full  text-white pb-20  px-6 sm:px-36 overflow-hidden min-h-[70vh'>
                {/* Gradient Blur Background */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <img
                        src={gradient}
                        alt="gradient"
                        className="absolute left-[-280px] bottom-[200px] w-[900px] h-[900px] object-cover opacity-30 blur-[120px]"
                    />
                </div>

                {/* Why Chose us?  */}
                <div className='h-full w-full bg-[#0C0B0C] flex justify-between items-center mt-10 sm:mt-20 min-h-[85vh]'>
                    {/* left side */}
                    <div className='h-full w-1/2 text-white'>
                        <p className='text-lg font-light'>Why Choose Us? </p>
                        <h1 className='text-6xl font-medium tracking-wide mt-4 mb-10'>The #1 AI Executive Assistant</h1>
                        <div className='flex  items-center gap-64 '>
                            <div>
                                <h2 className='text-5xl tracking-wide font-semibold mb-3'>20k</h2>
                                <span className='text-lg text-zinc-500'>Users</span>
                            </div>
                            <div>
                                <h2 className='text-5xl tracking-wide font-semibold mb-3'>2k+</h2>
                                <span className='text-lg text-zinc-500 mr-14'>Recorded Hours</span>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="w-1/2 pl-6 py-16  text-white space-y-8">
                        {/* Card 1 */}
                        <div className="bg-[#18181E] border border-[#2a2a33] rounded-2xl p-6 flex items-start gap-5 shadow-lg">
                            <div className="p-3 rounded-xl bg-[#312E81] bg-opacity-30 text-indigo-400">
                                <FaBolt className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Lightning Fast Setup</h3>
                                <p className="text-gray-400 text-lg mb-4">
                                    Get started in under 2 minutes. Connect your calendar and start recording meetings instantly.
                                </p>
                                <button className="relative bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer ">
                                    <span className="block transition-transform duration-300 hover:scale-[1.02]">
                                        Quick Start
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#18181E] border border-[#2a2a33] rounded-2xl p-6 flex items-start gap-5 shadow-lg">
                            <div className="p-3 rounded-xl bg-[#15803D] bg-opacity-20 text-green-400">
                                <FaUsers className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Team Collaboration</h3>
                                <p className="text-gray-400 text-lg mb-4">
                                    Share meeting insights instantly with your team. Collaborate on action items and follow-ups seamlessly.
                                </p>
                                <button className="relative bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer ">
                                    <span className="block transition-transform duration-300 hover:scale-[1.02]">
                                        Connect Now
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote section */}
                <div className='flex justify-center flex-col text-center w-full h-[75vh]'>
                <h1 className='text-5xl px-14 font-light  leading-normal text-center tracking-tight'>"WispAI is revolutionary. They've created an AI- <br />powered solution that transforms how we work <br /> and communicate."</h1>
                <h2 className='mt-8 mb-1 text-zinc-500 font-medium tracking-wide text-2xl '>Director</h2>
                <p className='text-lg text-gray-600'>Aveva</p>
                </div>
            </section>
        </>
    )
}

export default Quote