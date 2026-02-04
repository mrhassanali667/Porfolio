import React from 'react';

const projectsData = [
    {
        id: 1,
        category: 'Apps',
        title: 'Bigger, Bolder and Better',
        description: "We're from Poland, we're passionate with the space & create the values sustainable over time",
        image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Project+1',
        tags: ['ReactJS', 'TailwindCSS', 'Figma'],
        hoverTitle: 'MooNex Labs',
        hoverDesc: 'Project was about precision and information....'
    },
    {
        id: 2,
        category: 'Branding',
        title: 'Sebastian Camargo',
        description: 'A mobile app design showcasing a unique portfolio.',
        image: 'https://via.placeholder.com/400x600/1a1a1a/ffffff?text=Project+2',
        tags: ['NextJS', 'Sanity.io', 'CSS Modules'],
        hoverTitle: 'Branding Launch',
        hoverDesc: 'Identity and brand guidelines design.'
    },
    {
        id: 3,
        category: 'UI/UX',
        title: 'Grow Your Business, With Us',
        description: 'Dashboard design for business analytics.',
        image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Project+3',
        tags: ['VueJS', 'SASS', 'Adobe XD'],
        hoverTitle: 'Business Dash',
        hoverDesc: 'Enhancing user experience and data visualization.'
    },
    {
        id: 4,
        category: 'Content',
        title: 'Deloitte.',
        description: 'How Deloitte found freedom, flexibility, and rebrand success in the switch to DStudio',
        image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Project+4',
        tags: ['WordPress', 'Elementor', 'SEO'],
        hoverTitle: 'Deloitte Case Study',
        hoverDesc: 'A comprehensive content strategy for re-branding.'
    }
];

const Work = () => {
    // Filter state aur logic yahan se hta di gayi hai

    return (
        <div id="work" className="bg-[#0f0715] min-h-screen text-white py-20 px-4 md:px-8 font-sans relative overflow-hidden">
            <div className={`absolute top-[20%] right-[20%] w-[800px] h-[800px] bg-[#2a1454] opacity-70 blur-[140px] rounded-full`}></div>

            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
                    My Recent Work
                </h2>

                {/* Projects Container (Using Flexbox) */}
                <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className={`relative group bg-[#180b22] rounded-xl  overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-[1.02] 
                         w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)]`}
                        >
                            {/* Project Image */}
                            <div className="w-full flex justify-center items-center overflow-hidden">
                                <img
                                    src={"/images/image.jpg"}
                                    alt={project.title}
                                    className="w-[90%] h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Purple Hover Box */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-purple-600 to-purple-800
                          translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 md:p-8 z-10">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{project.hoverTitle}</h3>
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-white transform group-hover:rotate-45 transition-transform duration-300"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                                <p className="text-gray-200 text-sm md:text-base">{project.hoverDesc}</p>
                            </div>

                            {/* Project Details */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;