
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      link: '/',
      hasDropdown: false
    },
    { 
      name: 'About Us', 
      link: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Vision & Mission', link: '/about/vision-mission' },
        { name: 'Management', link: '/about/management' },
        { name: 'Principal Message', link: '/about/principal-message' },
        { name: 'Infrastructure', link: '/about/infrastructure' }
      ]
    },
    { 
      name: 'Academics', 
      link: '/academics',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Courses Offered', link: '/academics/courses' },
        { name: 'Departments', link: '/academics/departments' },
        { name: 'Faculty', link: '/academics/faculty' },
        { name: 'Academic Calendar', link: '/academics/calendar' }
      ]
    },
    { 
      name: 'Admissions', 
      link: '/admissions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Admission Process', link: '/admissions/process' },
        { name: 'Fee Structure', link: '/admissions/fee-structure' },
        { name: 'Scholarships', link: '/admissions/scholarships' }
      ]
    },
    { 
      name: 'Placements', 
      link: '/placements',
      hasDropdown: false
    },
    { 
      name: 'Student Corner', 
      link: '/student-corner',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Student Activities', link: '/student-corner/activities' },
        { name: 'Clubs & Societies', link: '/student-corner/clubs' },
        { name: 'Sports', link: '/student-corner/sports' },
        { name: 'Alumni', link: '/student-corner/alumni' }
      ]
    },
    { 
      name: 'Contact', 
      link: '/contact',
      hasDropdown: false
    }
  ];

  return (
    <nav className={`bg-white py-2 shadow-md border-t border-gray-200 ${sticky ? 'fixed top-0 left-0 right-0 z-50 animate-fade-in' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-gmec-blue focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center flex-grow">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index} className="group relative">
                  <a 
                    href={item.link} 
                    className="nav-link flex items-center py-2 px-1"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={14} className="ml-1" />}
                  </a>
                  
                  {item.hasDropdown && (
                    <div className="absolute left-0 top-full bg-white shadow-md rounded-md py-2 w-56 z-50 transform opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <ul>
                        {item.dropdownItems?.map((dropItem, idx) => (
                          <li key={idx}>
                            <a 
                              href={dropItem.link}
                              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gmec-blue transition-colors"
                            >
                              {dropItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link}
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-gmec-blue rounded-md"
                >
                  {item.name}
                </a>
                {item.hasDropdown && (
                  <ul className="pl-6 mt-1 space-y-1">
                    {item.dropdownItems?.map((dropItem, idx) => (
                      <li key={idx}>
                        <a 
                          href={dropItem.link}
                          className="block py-1 px-4 text-sm text-gray-600 hover:bg-gray-100 hover:text-gmec-blue rounded-md"
                        >
                          {dropItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
