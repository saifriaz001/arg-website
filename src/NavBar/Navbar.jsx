import React, { useState, useRef , useEffect } from 'react';
import MegaMenu from './MegaMenu';
import NavServiceSection from './NavServiceSection';
import NavPortfolioSection from './NavPortfolioSection';
import MobileMenu from './MobileMenu';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link , useLocation } from 'react-router-dom';
import "../Pages/Section.css"
import logo from "../assets/arglogo.svg"
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'ourwork' | 'services' | null
  const hoverTimeout = useRef(null);

  const handleMenuEnter = (menuName) => {
    clearTimeout(hoverTimeout.current);
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 400); // delay before closing
  };

  const location = useLocation();

  useEffect(() => {
    // ✅ Close dropdown on route change
    setActiveMenu(null);
    setIsMobileOpen(false);
  }, [location]); 

  return (
    <header
      className="bg-[#f7edd4]  shadow-md relative"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className= " justify-center items-center gap-x-1  flex flex-row ">
          
          <div><Link to={"/"}><img className=' py-2 w-20 h-20' src={logo} alt='logo'/></Link></div>
          <div className=' xl:hidden text-2xl brand-heading font-bold'> ARG </div>
          <div className='  hidden xl:block text-2xl brand-heading font-bold  '><Link to={"/"}>AECS Research Global</Link></div>
          
        </div>

        {/* Mobile Hamburger */}
        <div className="xl:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden  xl:flex space-x-6">
          <Link to={"/"}><span className={`nav-tab ${activeMenu === 'home' ? 'nav-tab-active' : 'nav-tab-hover'
            }`}>Home</span></Link>
          <Link to={"/about-us"}><span className={`nav-tab ${activeMenu === 'about-us' ? 'nav-tab-active' : 'nav-tab-hover'
            }`}>About Us</span></Link>

          {/* Our Work */}
          <span
            className={`nav-tab ${
              activeMenu === 'ourwork' ? 'nav-tab-active' : 'nav-tab-hover'
            }`}
            onMouseEnter={() => handleMenuEnter('ourwork')}
            onMouseLeave={handleMenuLeave}
          >
            Our Work
          </span> 

          {/* Services

          <span
            className={`nav-tab ${activeMenu === 'services' ? 'nav-tab-active' : 'nav-tab-hover'
              }`}
            onMouseEnter={() => handleMenuEnter('services')}
            onMouseLeave={handleMenuLeave}
          >
            Services
          </span>

          {/* Portfolio */}
          {/* <span
            className={`nav-tab ${activeMenu === 'Portfolio' ? 'nav-tab-active' : 'nav-tab-hover'
              }`}
            onMouseEnter={() => handleMenuEnter('Portfolio')}
            onMouseLeave={handleMenuLeave}
          >
            Portfolios
          </span> */}


          <span className={`nav-tab ${activeMenu === 'Careers' ? 'nav-tab-active' : 'nav-tab-hover'
            }`}>Careers</span>
          <Link to={"/news"}><span className={`nav-tab ${activeMenu === 'News' ? 'nav-tab-active' : 'nav-tab-hover'
            }`}>News & Blog</span></Link>
        </nav>
      </div>

      {/* MegaMenu (Our Work) */}
      {activeMenu === 'ourwork' && (
        <div
          className="absolute top-full left-0 w-full"
          onMouseEnter={() => handleMenuEnter('ourwork')}
          onMouseLeave={handleMenuLeave}
        >
          <MegaMenu onLinkClick={() => setActiveMenu(null)} />
        </div>
      )}

      {/* NavServiceSection (Services)
      {activeMenu === 'services' && (
        <div
          className="absolute top-full left-0 w-full"
          onMouseEnter={() => handleMenuEnter('services')}
          onMouseLeave={handleMenuLeave}
        >
          <NavServiceSection onLinkClick={() => setActiveMenu(null)} />
        </div>
      )} */}
      {/* {activeMenu === 'Portfolio' && (
        <div
          className="absolute top-full left-0 w-full"
          onMouseEnter={() => handleMenuEnter('Portfolio')}
          onMouseLeave={handleMenuLeave}
        >
          <NavPortfolioSection onLinkClick={() => setActiveMenu(null)} />
        </div>
      )} */}
      {activeMenu === 'home'}
      {activeMenu === 'about-us'}
      {activeMenu === 'Careers'}
      {activeMenu === 'News'}

      {/* Mobile Menu */}
      {isMobileOpen && <MobileMenu />}
    </header>
  );
};

export default Navbar;
