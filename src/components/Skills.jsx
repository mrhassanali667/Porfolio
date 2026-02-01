import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaServer
} from 'react-icons/fa'; // Icons ke liye
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const skillsData = [
    { name: 'HTML', percentage: '95%', icon: <FaHtml5 /> },
    { name: 'CSS', percentage: '90%', icon: <FaCss3Alt /> },
    { name: 'JavaScript', percentage: '92%', icon: <FaJs /> },
    { name: 'TypeScript', percentage: '85%', icon: <SiTypescript /> },
    { name: 'React', percentage: '90%', icon: <FaReact /> },
    { name: 'Next.js', percentage: '88%', icon: <SiNextdotjs /> },
    { name: 'Node.js', percentage: '82%', icon: <FaNodeJs /> },
    { name: 'Express', percentage: '80%', icon: <FaServer /> },
];

const MySkills = () => {
    return (
        <div className="bg-[#050709] min-h-screen text-white py-20 px-4 flex flex-col items-center">
            {/* Heading Section */}
            <div className="text-center max-w-2xl mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                    My Skills
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                </p>
            </div>

            {/* Skills Container (Flexbox) */}
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center group cursor-pointer">
                        {/* Skill Card */}
                        <div className="w-32 h-36 md:w-36 md:h-44 bg-[#140c1c] rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-300 border border-transparent 
              group-hover:border-purple-600 group-hover:bg-[#2a1454] shadow-lg">

                            {/* Icon - Grayscale by default, Colored on Hover */}
                            <div className="text-4xl md:text-5xl text-gray-500 group-hover:text-white transition-colors duration-300">
                                {skill.icon}
                            </div>

                            {/* Percentage */}
                            <span className="text-gray-400 font-bold text-lg group-hover:text-white transition-colors duration-300">
                                {skill.percentage}
                            </span>
                        </div>

                        {/* Skill Name */}
                        <span className="mt-4 text-purple-500 font-medium group-hover:text-purple-400 transition-colors duration-300">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MySkills;