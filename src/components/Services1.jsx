import React from 'react';
import image1 from "../assets/Business Strategy.png"
import image2 from "../assets/value.webp"
import image3 from '../assets/Financial.png'
const topFeatures = [
    {
        title: 'Cost Analysis and Estimation',
        description: 'ARG provides clients with accurate budgetary forecasts, from preliminary estimates to detailed post-design completion costing.',
        image: image1, // Replace with actual path
    },
    {
        title: 'Value Engineering / Design Review',
        description: 'Our critical evaluation of design options and materials identifies efficiencies and eliminates unnecessary costs.',
        image:image2,
    },
    {
        title: 'Financial Control Systems',
        description: 'Robust cost management strategies empower significant savings across the entire project lifecycle.',
        image: image3,
    },
];

const caseStudies = [
    {
        title: 'Raja Nahar Singh International Cricket Stadium, Faridabad',
        description: 'Comprehensive cost management ensuring optimal budget utilization for world-class sporting infrastructure.',
    },
    {
        title: 'Saudi Ministry of Defence Facilities',
        description: 'Strategic cost planning and value engineering for mission-critical defense infrastructure.',
    },
    {
        title: 'Multi-specialty Healthcare Complexes',
        description: 'Budget optimization for advanced medical facilities without compromising on quality or technical specifications.',
    },
    {
        title: 'Odia University, Odisha',
        description: 'Cost-effective campus development supporting higher education infrastructure in Odisha with a focus on sustainability.',
    },
    {
        title: 'EMRS, Meghalaya',
        description: 'Efficient cost and project controls for delivering quality educational infrastructure in remote tribal regions.',
    },
    {
        title: 'Ballabhgarh Bus Terminal',
        description: 'Redesign and redevelopment of a key transit node through integrated engineering and cost planning solutions.',
    },
    {
        title: 'Directorate of Fire Services, Chandigarh',
        description: 'Optimized capital planning and facility design for critical emergency response infrastructure.',
    },
    {
        title: 'Indian Institute of Art and Design, Gurugram',
        description: 'Financial and design advisory for a creative academic institution with unique spatial and technical requirements.',
    },
    {
        title: 'Piramal School of Learning, Jaipur',
        description: 'Strategic cost structuring for a modern educational campus aligned with progressive learning environments.',
    },
];


const Service1 = () => {
    return (
        <div className="w-10/12 mx-auto py-10 space-y-10">
            <h2 className="text-3xl font-bold text-center text-[#333] mb-8">
                Core Expertise: Strategic Cost Management
            </h2>

            {/* Top Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                {topFeatures.map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#F9F6F2] rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-fill rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-[#D87026] mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Case Study Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {caseStudies.map((item, i) => (
                    <div
                        key={i}
                        className="bg-[#FFF7EC] border border-[#F3E2D0] p-4 rounded-md shadow hover:shadow-md transition"
                    >
                        <h4 className="font-semibold text-base text-[#444] mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service1;
