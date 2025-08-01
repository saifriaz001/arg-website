import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [expanded, setExpanded] = useState('');

  const toggle = (section) => {
    setExpanded(prev => (prev === section ? '' : section));
  };

  const sections = [
    { title: 'Home', sub: [], link: '/' },
    { title: 'About Us', sub: [], link: '/about-us' },
    {
      title: 'Our Work',
      sub: [
        { label: 'Markets', link: '/markets' },
        { label: 'Services', link: '/servicespage' },
        { label: 'Projects', link: '/projects' }
      ]
    },
    { title: 'Careers', sub: [], link: '/careers' },
    { title: 'News & Blog', sub: [], link: '/news' }
  ];

  return (
    <div className="mobile-menu xl:hidden">
      {sections.map(({ title, sub, link }) => {
        // ❗ Skip if sub is empty AND no direct link
        if (!link && Array.isArray(sub) && sub.length === 0) return null;

        return (
          <div key={title} className="mobile-section">
            <div
              className="mobile-section-title"
              onClick={() => sub.length > 0 && toggle(title)}
            >
              <div className="w-full flex flex-col">
                {link ? (
                  <Link to={link} className="mobile-title-text">
                    {title}
                  </Link>
                ) : (
                  <div className="mobile-title-text">{title}</div>
                )}
              </div>
              {sub.length > 0 && (
                <span className="mobile-title-icon">
                  {expanded === title ? '▲' : '▼'}
                </span>
              )}
            </div>
            <div className="mobile-line"></div>

            {expanded === title && Array.isArray(sub) && sub.length > 0 && (
              <div className="mobile-submenu">
                <ul className="mobile-sublist">
                  {sub.map(({ label, link }) => (
                    <li key={label} className="mobile-subitem mt-1">
                      <Link to={link}>{label}</Link>
                      <div className="mobile-line"></div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MobileMenu;
