import React from 'react';
import NavButton from '../ReuseableComponents/NavButton'; // adjust path as needed

const MegaMenu = () => {
    return (
        <div className="absolute transition-opacity duration-200 ease-in-out top-full left-0 w-full Primary-Background text-white shadow-xl z-40">
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10 px-8 py-8">
                {/* Info Block */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">
                        The world’s trusted infrastructure consulting firm
                    </h2>
                    <p className="text-sm mb-4">
                        We partner with our clients to deliver a better world
                    </p>
                    <NavButton>Download factsheet →</NavButton>
                </div>

                {/* Markets */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-2">Markets</h3>
                        <ul className="space-y-4">
                            <li className="dropdown-link">Energy</li>
                            <li className="dropdown-link">Transportation</li>
                            <li className="dropdown-link">Water</li>
                            <li className="dropdown-link">Healthcare</li>
                            <li className="dropdown-link">National Governments</li>
                        </ul>
                    </div>
                    <NavButton className="mt-4">View all markets →</NavButton>
                </div>

                {/* Services */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-2">Services</h3>
                        <ul className="space-y-4">
                            <li className="dropdown-link">Strategic Cost Management</li>
                            <li className="dropdown-link">EPC Advisory</li>
                            <li className="dropdown-link">Advanced Engineering & Design</li>
                            <li className="dropdown-link">Strategic Project Management</li>
                            <li className="dropdown-link">Environmental Solutions</li>
                            <li className="dropdown-link">Global Government Advisory</li>
                        </ul>
                    </div>
                    <NavButton className="mt-4">View all services →</NavButton>
                </div>

                {/* Projects */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-2">Projects</h3>
                        <ul className="space-y-4">
                        <li className="dropdown-link">Raja Nahar Singh
                            International Cricket
                            Stadium, Faridabad</li>
                        <li className="dropdown-link">Saudi Ministry of Defence
                            Facilities</li>
                        <li className="dropdown-link">Multi-specialty
                            Healthcare Complexes</li>
                        <li className="dropdown-link">Odia University, Odissa</li>
                        <li className="dropdown-link">EMRS, Meghalaya
                        </li>
                       </ul>
                    </div>
                    <NavButton className="mt-4">View all Projects →</NavButton>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
