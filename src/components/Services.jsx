import React from 'react'

const Services = () => {

    const services = [
        {
            id: "01",
            title: "Web Full Stack Web Development",
            desc: "End-to-end MERN web applications with scalable backend, clean frontend, and optimized performance.",
        },
        {
            id: "02",
            title: "Frontend Development (React / Next.js)",
            desc: "Modern, responsive, SEO-friendly user interfaces built with React, Next.js, and Tailwind CSS.",
        },
        {
            id: "03",
            title: "Backend & API Development",
            desc: "Secure REST APIs with authentication, database integration, and efficient server-side business logic.",
        },
        {
            id: "04",
            title: "Real-Time Applications",
            desc: "Real-time chat, notifications, and live updates using Socket.io for seamless user interaction.",
        },
    ];

    return (
        <div id="services" className="bg-[#050709] text-white py-20 px-4 font-sans">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent mb-4">
                    My Quality Services
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                </p>
            </div>

            <div className="max-w-6xl mx-auto border-t border-gray-800">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group relative overflow-hidden border-b border-gray-800 cursor-pointer"
                    >
                        {/* Sliding Purple Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8750f7] to-[#2a1454] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center py-8 px-6 transition-colors duration-300">
                            {/* Service Number */}
                            <div className="text-xl font-bold text-white md:mr-8 mb-4 md:mb-0">
                                {service.id}
                            </div>

                            {/* Title */}
                            <div className="text-2xl max-md:text-center md:text-3xl font-bold flex-1">
                                {service.title}
                            </div>

                            {/* Description */}
                            <div className="text-gray-400 group-hover:text-white transition-colors duration-300 flex-[2] max-md:text-center text-sm md:text-base px-0 md:px-10 mb-4 md:mb-0">
                                {service.desc}
                            </div>

                            {/* Arrow Icon */}
                            <div className="text-2xl transition-transform duration-300 group-hover:-rotate-45">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-purple-500 group-hover:text-white"
                                >
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services