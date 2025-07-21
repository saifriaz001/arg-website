import React from 'react';
import NavButton from '../ReuseableComponents/NavButton'; // adjust path as needed
import { Link } from 'react-router-dom';
import "../Pages/Section.css"
const NavServiceSection = ( { onLinkClick }) => {
    return (
        <div className='nav-section-background'>
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10 px-8 py-8">
                {/* Info Block */}

                {/* Markets */}


                {/* Services */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-white brand-heading text-lg font-semibold mb-2">Services</h3>
                        <ul className="space-y-4">
                            <li className="dropdown-link"><Link to={"/costmanagement"} onClick={onLinkClick}>Strategic Cost Management</Link></li>
                            <li className="dropdown-link"><Link to={"/epcadvisory"} onClick={onLinkClick}>EPC Advisory</Link></li>
                            <li className="dropdown-link"><Link to={'/architectureEngineering'} onClick={onLinkClick}>Advanced Engineering & Design</Link></li>
                            <li className="dropdown-link"><Link to={"/projectManagement"} onClick={onLinkClick} >Strategic Project Management</Link></li>
                            <li className="dropdown-link"><Link to={'/environmentalSolutions'} onClick={onLinkClick} >Environmental Solutions</Link></li>
                            <li className="dropdown-link"><Link to={"/governmentAdvisory"}onClick={onLinkClick} >Global Government Advisory</Link></li>
                        </ul>
                    </div>
                    <Link to={"/servicespage"} onClick={onLinkClick}><NavButton className="mt-4">View all services →</NavButton></Link>
                </div>

                {/* Projects */}
            
            </div>
        </div>
    );
};

export default NavServiceSection;
