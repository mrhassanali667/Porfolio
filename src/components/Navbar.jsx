'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect for sticky header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'Resume', href: '#resume' },
        { name: 'Skills', href: '#skills' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-[100] box-border transition-all duration-300 ${scrolled ? 'bg-[#050709]/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-8'
            }`}>
            <nav className="max-w-[1400px] w-full mx-auto flex items-center justify-between px-6 lg:px-9">

                {/* Logo & Email Section */}
                <div className="flex items-center gap-2 group">
                    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
                    </div>
                    <a href="mailto:mrhassanali667@gmail.com" className="hidden sm:block text-[15px] font-bold text-white hover:text-[#8750f7] transition-colors">
                        mrhassanali667@gmail.com
                    </a>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex items-center gap-7 ">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="text-[15px] font-bold text-white hover:text-[#8750f7] transition-all duration-300 relative group">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8750f7] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Action Buttons & Hamburger */}
                <div className="flex items-center gap-6">
                    <a href="#contact" className=" px-8 py-3 rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white font-bold text-[15px] hover:shadow-[0_0_20px_rgba(135,80,247,0.4)] transition-all duration-300 active:scale-95">
                        Hire me!
                    </a>

                    {/* Custom Hamburger Menu (Image Style) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col items-end gap-1.5 cursor-pointer group z-[110]"
                    >
                        <div className={`h-[3px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-7'}`}></div>
                        <div className={`h-[3px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-9'}`}></div>
                        <div className={`h-[3px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-6 group-hover:w-8'}`}></div>
                    </button>
                </div>

                {/* Mobile Full-Screen Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.4 }}
                            className="h-screen w-screen fixed inset-0 bg-[#050709] z-[105] flex flex-col items-center justify-center p-10 lg:hidden"
                        >
                            <ul className="flex flex-col items-center gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        key={link.name}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-extrabold text-white hover:text-[#8750f7] transition-colors"
                                        >
                                            {link.name.toUpperCase()}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Navbar