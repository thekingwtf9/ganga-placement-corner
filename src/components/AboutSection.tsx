
import React from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">About Ganga Mai Engineering College</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Established in 2008, Ganga Mai Engineering College is committed to providing quality technical education 
            and producing industry-ready professionals equipped with practical knowledge and skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img 
              src="/college-building.jpg" 
              alt="GMEC College Building" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/600x400?text=GMEC+Building";
              }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gmec-blue mb-4">Excellence in Education</h3>
            <p className="text-gray-700 mb-6">
              Ganga Mai Engineering College is committed to academic excellence and holistic development of students. 
              Our institution provides state-of-the-art infrastructure, experienced faculty members, and 
              industry-relevant curriculum to prepare students for successful careers.
            </p>
            <p className="text-gray-700 mb-6">
              We offer various undergraduate and postgraduate programs in engineering and technology disciplines. 
              Our focus is on practical learning, innovation, and research to nurture future leaders in the field of technology.
            </p>
            <a href="/about" className="text-gmec-blue font-semibold hover:underline inline-flex items-center">
              Learn more about us 
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <GraduationCap className="w-8 h-8 text-gmec-blue" />
            </div>
            <h3 className="text-xl font-bold text-gmec-blue mb-2">500+</h3>
            <p className="text-gray-600">Graduates Every Year</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-gmec-blue" />
            </div>
            <h3 className="text-xl font-bold text-gmec-blue mb-2">NAAC A+</h3>
            <p className="text-gray-600">Accreditation</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <BookOpen className="w-8 h-8 text-gmec-blue" />
            </div>
            <h3 className="text-xl font-bold text-gmec-blue mb-2">10+</h3>
            <p className="text-gray-600">Engineering Programs</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-gmec-blue" />
            </div>
            <h3 className="text-xl font-bold text-gmec-blue mb-2">100+</h3>
            <p className="text-gray-600">Experienced Faculty</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
