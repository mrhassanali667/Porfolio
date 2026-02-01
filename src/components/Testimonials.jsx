import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Tim Bailey",
        role: "SEO Specialist, Theme Junction",
        image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with real image
        text: "“Taylor is a professional Designer he really helps my business by providing value to my business.”"
    },
    {
        id: 2,
        name: "Brandon Fraser",
        role: "Senior Software Dev, Cosmic Sport",
        image: "https://randomuser.me/api/portraits/men/44.jpg", // Replace with real image
        text: "“Taylor is a professional Designer he really helps my business by providing value to my business.”"
    }
];

const Testimonials = () => {
    return (
        <div id="testimonials" className="bg-[#050709] text-white py-24 px-6 md:px-12 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">

                {/* Left Side: Heading */}
                <div className="lg:w-1/3 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent mb-6 leading-tight">
                        My Client's Stories
                    </h2>
                    <p className="text-gray-400 text-lg max-w-sm mx-auto lg:mx-0">
                        Empowering people in new a digital journey with my super services
                    </p>
                </div>

                {/* Right Side: Testimonial Cards */}
                <div className="lg:w-2/3 flex flex-wrap md:flex-nowrap justify-center gap-8 relative">
                    {testimonials.map((client) => (
                        <div
                            key={client.id}
                            className="bg-[#140c1c] p-10 rounded-[40px] w-full md:w-1/2 relative border border-transparent hover:border-[#8750f7] transition-all duration-500 group shadow-2xl"
                        >
                            {/* User Image Frame */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-24 h-24 rounded-tl-[40px] rounded-br-[40px] overflow-hidden border-2 border-transparent group-hover:border-[#8750f7] transition-all duration-500">
                                    <img src={client.image} alt={client.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                {/* Logo/Icon placeholder as seen in image */}
                                <div className="text-[#8750f7] text-3xl">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3601 14 14.017 12.6569 14.017 11V8H20.017V14H22.017V21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697V14H5.01697C3.36012 14 2.01697 12.6569 2.01697 11V8H8.01697V14H10.017V21H2.01697Z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Quote Text */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-10 italic">
                                {client.text}
                            </p>

                            {/* Client Info */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#8750f7] transition-colors">{client.name}</h4>
                                <p className="text-gray-500 text-sm uppercase tracking-widest">{client.role}</p>
                            </div>
                        </div>
                    ))}

                    {/* Dots Indicator */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#8750f7]"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                        <span className="w-2 h-2 rounded-full bg-gray-700"></span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;