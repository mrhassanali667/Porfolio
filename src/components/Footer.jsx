import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#050709] py-12 px-4 border-t border-gray-900/50">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">

                {/* Logo Section */}
                <div className="flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full">
                        {/* Logo Image */}
                        <img src="/images/logo.png" alt="" />
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {['Services.', 'Work.', 'Skills.', 'Experience.', 'Blog.'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace('.', '')}`}
                            className="text-white text-sm md:text-base font-semibold hover:text-[#8750f7] transition-colors duration-300 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8750f7] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* Copyright Section */}
                <div className="text-center mt-4">
                    <p className="text-gray-500 text-sm tracking-wide">
                        © 2026 All Rights Reserved by <span className="text-[#8750f7] font-medium cursor-pointer hover:underline">Hassan Ali</span>
                    </p>
                </div>

            </div>

            {/* Back to Top Button (Bottom Right) */}
            <div className="fixed bottom-8 right-8">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-12 h-12 rounded-full border-2 border-[#8750f7]/30 flex items-center justify-center text-[#8750f7] hover:bg-[#8750f7] hover:text-white transition-all duration-300 group shadow-lg shadow-purple-900/20"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
            </div>
        </footer>
    );
};

export default Footer;