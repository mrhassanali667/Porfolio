'use client'

import React from 'react'


const Navbar = () => {
    return (
        <header className="h-[100px] w-full flex items-end bg-transparent z-50">
            <nav className="h-auto w-full flex items-center justify-between p-20 lg:p-7 xl:px-10 py-4  text-white font-sans">
                <div className="flex items-center  gap-3 mr-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full">
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                    <a href="mailto:mail@gerolddesign.com" className="text-md font-medium hover:text-purple-400 transition-colors">
                        mail@gerolddesign.com
                    </a>
                </div>

                <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold [&>li>a]:text-[1.1em]">
                    <li><a href="#" className="hover:text-purple-400 transition-colors">Services</a></li>
                    <li><a href="#" className="hover:text-purple-400 transition-colors">Works</a></li>
                    <li><a href="#" className="hover:text-purple-400 transition-colors">Resume</a></li>
                    <li><a href="#" className="hover:text-purple-400 transition-colors">Skills</a></li>
                    <li><a href="#" className="hover:text-purple-400 transition-colors">Testimonials</a></li>
                    <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                </ul>

                <div className='flex'>
                    <a href='#' className="px-7 py-3 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white font-bold text-md hover:opacity-90 cursor-pointer hover:from-[#2a1454] hover:to-[#2a1454] transition-all shadow-lg border border-white/10">
                        Hire me!
                    </a>
                    <div className="flex flex-col items-end gap-1.5 cursor-pointer group p-4 bg-[#0a0510] w-fit">
                        <div className="w-7 h-[3px]  bg-white rounded-full"></div>
                        <div className="w-9 h-[3px]  bg-white rounded-full"></div>
                        <div className="w-6 h-[3px]  bg-white rounded-full transition-all group-hover:w-8"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar