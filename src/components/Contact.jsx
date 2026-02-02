import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <div id="contact" className="bg-[#050709] text-white py-20 px-6 md:px-12 font-sans text-wrap">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                {/* Left Side: Contact Form Card */}
                <div className="w-full lg:w-3/5 bg-[#140c1c] p-8 md:p-10 rounded-[30px] shadow-2xl">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent mb-4">
                        Let’s work together!
                    </h2>
                    <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
                        I design and code beautifully simple things and i love what i do. Just simple like that!
                    </p>

                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full bg-[#050709] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-[#8750f7] outline-none transition-all"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full bg-[#050709] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-[#8750f7] outline-none transition-all"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-[#050709] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-[#8750f7] outline-none transition-all"
                            />
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="w-full bg-[#050709] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-[#8750f7] outline-none transition-all"
                            />
                        </div>

                        <select className="w-full bg-[#050709] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-400 focus:border-[#8750f7] outline-none transition-all appearance-none">
                            <option>—Please choose an option—</option>
                            <option>Web Design</option>
                            <option>UI/UX Design</option>
                            <option>App Development</option>
                        </select>

                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="w-full bg-[#050709] border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-[#8750f7] outline-none transition-all resize-none"
                        ></textarea>

                        <button className="bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side: Contact Info */}
                <div className="w-full lg:w-2/5 flex flex-col gap-10 pt-10">

                    {/* Phone */}
                    <div className="flex items-center gap-5 group">
                        <div className="min-w-12 h-12 rounded-full bg-gradient-to-b from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                            <FaPhoneAlt size={18} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Phone</p>
                            <a href='tel:03193588038' className=" text-lg font-bold hover:text-[#8750f7] transition-colors cursor-pointer">+92 319 3588038</a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-5 group">
                        <div className="min-w-12 h-12 rounded-full bg-gradient-to-b from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                            <FaEnvelope size={18} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Email</p>
                            <a href='mailto:mrhassanali667@gmail.com' className="break-all text-lg font-bold hover:text-[#8750f7] transition-colors cursor-pointer">mrhassanali667@gmail.com</a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-5 group">
                        <div className="min-w-12 h-12 rounded-full bg-gradient-to-b from-[#8750f7] to-[#2a1454] flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                            <FaMapMarkerAlt size={18} />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Location</p>
                            <h4 className="text-lg font-bold leading-tight">Malir, Karachi, Pakistan</h4>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactSection;