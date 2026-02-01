import React from 'react';
import { FaGraduationCap, FaMedal } from 'react-icons/fa';

const experienceData = [
    { year: '2022 - Present', title: 'LEAD DEVELOPER', place: 'Blockdots, London' },
    { year: '2021 - 2022', title: 'FULL STACK WEB DEVELOPER', place: 'Parsons, The New School' },
    { year: '2020 - 2021', title: 'UI DESIGNER', place: 'House of Life, Leeds' },
    { year: '2018 - 2020', title: 'JUNIOR GRAPHICS DESIGNER', place: 'Theme Junction, Bursa' },
];

const educationData = [
    { year: '2020 - 2023', title: 'PROGRAMMING COURSE', place: 'Harvard University' },
    { year: '2016 - 2020', title: 'GRAPHIC DESIGN COURSE', place: 'University of Denmark' },
    { year: '2012 - 2015', title: 'WEB DESIGN COURSE', place: 'University of California' },
    { year: '2010 - 2011', title: 'DESIGN & TECHNOLOGY', place: 'Parsons, The New School' },
];

const ResumeSection = () => {
    return (
        <div className="bg-[#050709] min-h-screen text-white py-20 px-4 md:px-10 font-sans">
            <div className="max-w-7xl mx-auto flex flex-wrap gap-16 lg:gap-24">

                {/* My Experience Column */}
                <div className="flex-1 min-w-[320px]">
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
                <div className="flex-1 min-w-[320px]">
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