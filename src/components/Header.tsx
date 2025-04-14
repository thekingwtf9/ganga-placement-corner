
import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header>
      {/* Top information bar */}
      <div className="bg-gmec-blue text-white text-sm">
        <div className="container mx-auto px-4 py-1 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone size={14} className="mr-1" />
              <span>+91 8882171717</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-1" />
              <span>info@gangamaiengg.org.in</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>Mon - Sat: 9:00AM - 5:00PM</span>
          </div>
        </div>
      </div>
      
      {/* Logo and title */}
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-4 lg:mb-0">
          <img 
            src="/logo.png" 
            alt="Ganga Mai Engineering College Logo" 
            className="h-16 mr-4"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/80?text=GMEC";
            }}
          />
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-gmec-blue">GANGA MAI ENGINEERING COLLEGE</h1>
            <p className="text-xs md:text-sm text-gray-600">Approved by AICTE, Affiliated to I.K.G.P.T.U, Jalandhar</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button className="bg-gmec-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Apply Now
          </button>
          <button className="bg-gmec-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Student Login
          </button>
        </div>
      </div>
      
      {/* Announcement ticker */}
      <div className="announcement-ticker">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="mr-8">📢 Admissions Open for 2025-26 Academic Year</span>
            <span className="mr-8">🏆 Our students won 1st prize in State Level Technical Competition</span>
            <span className="mr-8">📚 New courses added for the upcoming semester</span>
            <span className="mr-8">🎓 Convocation ceremony scheduled for next month</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
