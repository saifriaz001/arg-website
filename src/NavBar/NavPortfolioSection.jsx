import React from 'react';
import NavButton from '../ReuseableComponents/NavButton'; // adjust path as needed
import { Link } from 'react-router-dom';

const NavPortfolioSection = ({ onLinkClick }) => {
    return (
        <div className='nav-section-background' >
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10 px-8 py-8">



                {/* Services */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-white brand-heading text-lg font-semibold mb-2">International Portfolios</h3>
                        <ul className="space-y-4">
                            <li className="dropdown-link">Administration Building, Najran University</li>
                            <li className="dropdown-link">100 Bedded Prince Mansour Military Hospital</li>
                            <li className="dropdown-link">Ali Reza Shopping Mall</li>
                            <li className="dropdown-link">Healthcare</li>
                            <li className="dropdown-link">Saudi Aerospace Engineering Industries</li>
                        </ul>
                    </div>
                    <Link to={'/projectspage'} onClick={onLinkClick}><NavButton className="">Global Portfolios →</NavButton></Link>
                </div>

                {/* Projects */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-white brand-heading text-lg font-semibold mb-2">Indian Portfolios</h3>
                        <ul className="space-y-4">
                            <li className="dropdown-link">Raja Nahar Singh Cricket Stadium, Faridabad</li>
                            <li className="dropdown-link">Smart Industrial Park, Padora, Shivpuri</li>
                            <li className="dropdown-link">NRI Lake City, Rudrapur</li>
                            <li className="dropdown-link">Vrinda City, Greater Noida</li>
                            <li className="dropdown-link">Ballabhgarh Bus Terminal Redevelopment</li>

                        </ul>
                    </div>
                   <Link to={'/projectspage'} onClick={onLinkClick}><NavButton className="">Indian Portfolios →</NavButton></Link>
                </div>
            
            </div>
        </div>
    );
};

export default NavPortfolioSection;
