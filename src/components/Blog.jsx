import React from 'react';
import { FaCalendarAlt, FaCommentDots } from 'react-icons/fa';

const blogData = [
    {
        id: 1,
        category: 'SAAS',
        date: 'May 10, 2024',
        comments: 'No Comments',
        title: 'The Role Of Technology In Modern...',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop' // Placeholder image
    },
    {
        id: 2,
        category: 'DESIGN',
        date: 'May 10, 2024',
        comments: 'No Comments',
        title: 'The Services Provide For Design',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 3,
        category: 'TECHNOLOGY',
        date: 'May 10, 2024',
        comments: 'No Comments',
        title: 'Digital Marketo To Their New Office.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500&auto=format&fit=crop'
    }
];

const Blogs = () => {
    return (
        <div className="bg-[#050709] text-white py-20 px-4 md:px-10 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent mb-4">
                        Recent Blogs
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                        We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                    </p>
                </div>

                {/* Blogs Container (Using Flexbox) */}
                <div className="flex flex-wrap justify-center gap-6">
                    {blogData.map((blog) => (
                        <div
                            key={blog.id}
                            className="group w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] bg-[#140c1c] rounded-[25px] overflow-hidden border border-transparent hover:border-[#8750f7] transition-all duration-500 shadow-xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden p-4">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover rounded-[20px] transform group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Category Badge */}
                                <span className="absolute top-8 left-8 bg-[#8750f7] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {blog.category}
                                </span>
                            </div>

                            {/* Content Section */}
                            <div className="px-6 pb-8">
                                {/* Date & Comments */}
                                <div className="flex items-center gap-4 text-[#8750f7] text-xs mb-3 font-medium">
                                    <div className="flex items-center gap-1">
                                        <FaCalendarAlt />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaCommentDots />
                                        <span>{blog.comments}</span>
                                    </div>
                                </div>

                                {/* Blog Title */}
                                <h3 className="text-xl font-bold text-white group-hover:text-[#8750f7] transition-colors duration-300 leading-snug">
                                    {blog.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;