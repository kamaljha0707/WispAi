import { FaSlack, FaMicrosoft, FaGoogle, FaEnvelope } from 'react-icons/fa';
import { SiNotion, SiHubspot, SiLinear } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import React from 'react';

const integrations = [
    { name: 'Gmail', desc: 'Send notes to meeting invitees', icon: <MdEmail className="text-red-400 text-3xl" /> },
    { name: 'Slack', desc: 'Send notes to Slack channels', icon: <FaSlack className="text-purple-400 text-3xl" /> },
    { name: 'Notion', desc: 'Update pages with notes', icon: <SiNotion className="text-white text-3xl" /> },
    { name: 'HubSpot', desc: 'Update deals automatically', icon: <SiHubspot className="text-orange-400 text-3xl" /> },
    { name: 'Outlook', desc: 'Connect your calendar', icon: <FaEnvelope className="text-blue-300 text-3xl" /> },
    { name: 'Google Calendar', desc: 'Connect your calendar', icon: <FaGoogle className="text-green-400 text-3xl" /> },
    { name: 'Teams', desc: 'Join Microsoft Teams meetings', icon: <FaMicrosoft className="text-indigo-300 text-3xl" /> },
    { name: 'Linear', desc: 'Create tasks from meetings', icon: <SiLinear className="text-white text-3xl" /> },
];

export default function Integrate() {
    return (
        <section className="bg-[#0C0B0C] py-16 text-white min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* text */}
                <div className="text-center mt-8 mb-14 w-full">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 ">Integrate with Anything</h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Seamlessly integrate with the tools you already use
                    </p>
                </div>

                {/* companies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {integrations.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1c1c1c57] hover:bg-[#2a2a2a] transition-colors rounded-xl p-6 flex flex-col items-center text-center shadow-md"
                        >
                            <div className="bg-[#2e2e2e] p-4 rounded-full mb-4">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}