
import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* College Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Ganga Mai Engineering College</h3>
              <p className="text-gray-300 mb-4">
                Approved by AICTE, Affiliated to I.K.G.P.T.U, Jalandhar
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
                  <span>Hoshiarpur Road, Chuharwali, Phagwara, Punjab, India</span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <span>+91 8882171717</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  <span>info@gangamaiengg.org.in</span>
                </li>
                <li className="flex items-center">
                  <Globe size={18} className="mr-2 flex-shrink-0" />
                  <span>www.gangamaiengg.org.in</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> About Us
                  </a>
                </li>
                <li>
                  <a href="/academics" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Academics
                  </a>
                </li>
                <li>
                  <a href="/admissions" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Admissions
                  </a>
                </li>
                <li>
                  <a href="/placements" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Placements
                  </a>
                </li>
                <li>
                  <a href="/student-corner" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Student Corner
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about/infrastructure" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Infrastructure
                  </a>
                </li>
                <li>
                  <a href="/academics/departments" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Departments
                  </a>
                </li>
                <li>
                  <a href="/admissions/scholarships" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Scholarships
                  </a>
                </li>
                <li>
                  <a href="/academics/faculty" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Faculty
                  </a>
                </li>
                <li>
                  <a href="/student-corner/clubs" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Clubs & Societies
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Careers
                  </a>
                </li>
                <li>
                  <a href="/alumni" className="text-gray-300 hover:text-white flex items-center">
                    <ChevronRight size={14} className="mr-1" /> Alumni
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-3 mb-6">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              
              <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
              <p className="text-gray-300 mb-3">Subscribe to our newsletter for updates</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gmec-orange text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-900 py-4 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Ganga Mai Engineering College. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
