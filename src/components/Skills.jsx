import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress } from 'react-icons/si';

const skillsData = [
    { name: 'HTML', percentage: '95%', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS', percentage: '90%', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', percentage: '92%', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', percentage: '85%', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'React', percentage: '90%', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', percentage: '88%', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Node.js', percentage: '82%', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express', percentage: '80%', icon: <SiExpress className="text-white" /> },
];

const Skills = () => {
    return (
        <div id="skills" className="bg-[#050709] min-h-screen text-white py-20 px-4 flex flex-col items-center font-sans">
            {/* Heading Section */}
            <div className="text-center max-w-2xl mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                    My Skills
                </h2>
                <p className="text-gray-400">
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                </p>
            </div>

            {/* Skills Container */}
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center group cursor-pointer">
                        {/* Skill Card */}
                        <div className="w-32 h-36 md:w-36 md:h-44 bg-[#140c1c] rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 border border-transparent 
              group-hover:border-[#8750f7] group-hover:bg-[#2a1454] shadow-2xl overflow-hidden">

                            {/* Icon Logic: Default Grayscale, Hover per Colorfull */}
                            <div className="text-5xl md:text-6xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                                {skill.icon}
                            </div>

                            {/* Percentage */}
                            <span className="text-gray-400 font-bold text-lg group-hover:text-white transition-colors duration-500">
                                {skill.percentage}
                            </span>
                        </div>

                        {/* Skill Name */}
                        <span className="mt-4 text-[#8750f7] font-medium group-hover:text-white transition-colors duration-500">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;