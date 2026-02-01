'use client'

import React from 'react'


const Navbar = () => {
    return (
        <nav className="h-[70px] w-full flex items-center justify-between px-10 py-4 bg-[#0a0510] text-white font-sans">
            <div className="flex items-center gap-8">
                <div className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-full">
                    <span className="text-2xl font-bold italic">G</span>
                </div>
                <a href="mailto:mail@gerolddesign.com" className="text-sm font-medium hover:text-purple-400 transition-colors">
                    mail@gerolddesign.com
                </a>
            </div>

            <ul className="hidden md:flex items-center gap-8 text-sm font-semibold [&>li>a]:text-[1.2em]">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Works</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Resume</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Skills</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>

            <div>
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#7d4cf6] to-[#4b2aad] font-bold text-sm hover:opacity-90 transition-opacity shadow-lg">
                    Hire me!
                </button>
            </div>
        </nav>
    )
}

export default Navbar