import React, { useState } from 'react';

const MobileMenu = () => {
  const [expanded, setExpanded] = useState('');

  const toggle = (section) => {
    setExpanded(prev => (prev === section ? '' : section));
  };

  const sections = [
    { title: 'Home', sub: [] },
    { title: 'About Us', sub: [] },
    {
      title: 'Services',
      sub: [
        'Strategic Cost Management',
        'EPC Advisory',
        'Advanced Engineering & Design',
        'Strategic Project Management',
        'Environmental Solutions',
        'Global Government Advisory'
      ]
    },
    {
      title: 'Portfolios',
      sub: [
        {
          heading: 'International Portfolios',
          items: [
            'Administration Building, Najran University',
            '100 Bedded Prince Mansour Military Hospital',
            'Ali Reza Shopping Mall',
            'Healthcare',
            'Saudi Aerospace Engineering Industries'
          ]
        },
        {
          heading: 'Indian Portfolios',
          items: [
            'Raja Nahar Singh Cricket Stadium, Faridabad',
            'Smart Industrial Park, Padora, Shivpuri',
            'NRI Lake City, Rudrapur',
            'Vrinda City, Greater Noida',
            'Ballabhgarh Bus Terminal Redevelopment'
          ]
        }
      ]
    },
    { title: 'Careers', sub: [] },
    { title: 'News & Blog', sub: [] }
  ];

  return (
    <div className="mobile-menu xl:hidden">
      {sections.map(({ title, sub }) => (
        <div key={title} className="mobile-section">
          <div
            className="mobile-section-title"
            onClick={() => sub.length > 0 && toggle(title)}
          > 
          <div className=' w-full flex flex-col'> 
            <div className="mobile-title-text ">{title}</div>
            
          </div>
          
            
            {sub.length > 0 && (
              <span className="mobile-title-icon">{expanded === title ? '▲' : '▼'}</span>
            )}
          </div>
          <div className='mobile-line'></div>

          {expanded === title && Array.isArray(sub) && sub.length > 0 && (
            <div className="mobile-submenu">
              {typeof sub[0] === 'string' &&
                sub.map(item => (
                  <div key={item} className="mobile-subitem">{item}
                  <div className='mobile-line'></div>
                  </div>
                  
                ))
              }

              {typeof sub[0] === 'object' &&
                sub.map(section => (
                  <div key={section.heading}>
                    <div className="mobile-subheading">{section.heading}</div>

                    <ul className="mobile-sublist">
                      {section.items.map(item => (
                        <div>
                          <li key={item} className="mobile-subitem mt-1">{item}</li>
                          <div className='mobile-line'></div>

                        </div>
                        
                        
                      ))}
                      
                    </ul>
                  </div>
                ))
              }
            </div>
          )}
          
        </div>
        
      ))}
    </div>
  );
};

export default MobileMenu;
