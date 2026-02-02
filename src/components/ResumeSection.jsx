import React from 'react';
import { FaGraduationCap, FaMedal } from 'react-icons/fa';

const experienceData = [
    {
        year: 'Dec 2024 - Jan 2026',
        title: 'Web and App Development (MERN Stack) — Training',
        place: 'Saylani Mass IT Training (SMIT) — Hands-on learning with real-world project practice using MongoDB, Express, React, and Node.js'
    },
];

const educationData = [
    { year: 'Matriculation', title: 'Karachi Board of Secondary Education (BSEK)', place: 'Completed' },
    { year: 'First Year (Pre-Engineering)', title: 'Board of Intermediate Education Karachi (BIEK)', place: 'Ongoing' },
];

const ResumeSection = () => {
    return (
        <div id="resume" className="bg-[#050709] min-h-screen w-full text-white py-20 px-4 md:px-10 font-sans">
            <div className="max-w-7xl mx-auto flex flex-wrap gap-16 lg:gap-24">

                {/* My Experience Column */}
                <div className="flex-1 min-w-[315px]">
                    <div className="flex items-center gap-4 mb-10">
                        <FaMedal className="text-purple-500 text-3xl" />
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                            My Experience
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6">
                        {experienceData.map((item, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-[#140c1c] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#2a1454] hover:to-[#8750f7] border border-transparent"
                            >
                                <span className="text-purple-400 font-bold text-lg group-hover:text-white transition-colors">
                                    {item.year}
                                </span>
                                <h3 className="text-2xl font-extrabold mt-2 group-hover:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 mt-1 group-hover:text-gray-200 uppercase text-sm tracking-wide">
                                    {item.place}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* My Education Column */}
                <div className="flex-1 min-w-[315px]">
                    <div className="flex items-center gap-4 mb-10">
                        <FaGraduationCap className="text-purple-500 text-4xl" />
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                            My Education
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6">
                        {educationData.map((item, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-[#140c1c] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#2a1454] hover:to-[#8750f7]"
                            >
                                <span className="text-purple-400 font-bold text-lg group-hover:text-white transition-colors">
                                    {item.year}
                                </span>
                                <h3 className="text-2xl font-extrabold mt-2 group-hover:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 mt-1 group-hover:text-gray-200 uppercase text-sm tracking-wide">
                                    {item.place}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResumeSection;