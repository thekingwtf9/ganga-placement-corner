
import React from 'react';
import { Briefcase, BarChart, Building, Award, Users } from 'lucide-react';

const PlacementSection = () => {
  // Mock data for placement statistics
  const statistics = [
    {
      year: '2024',
      totalStudents: 570,
      placedStudents: 510,
      percentagePlaced: '89.5%',
      highestPackage: '42 LPA',
      averagePackage: '8.2 LPA'
    },
    {
      year: '2023',
      totalStudents: 540,
      placedStudents: 465,
      percentagePlaced: '86.1%',
      highestPackage: '38 LPA',
      averagePackage: '7.8 LPA'
    },
    {
      year: '2022',
      totalStudents: 520,
      placedStudents: 438,
      percentagePlaced: '84.2%',
      highestPackage: '36 LPA',
      averagePackage: '7.5 LPA'
    }
  ];

  // Mock data for top recruiters
  const topRecruiters = [
    { name: 'Microsoft', logo: '/microsoft.png' },
    { name: 'Google', logo: '/google.png' },
    { name: 'Amazon', logo: '/amazon.png' },
    { name: 'Infosys', logo: '/infosys.png' },
    { name: 'TCS', logo: '/tcs.png' },
    { name: 'Wipro', logo: '/wipro.png' },
    { name: 'IBM', logo: '/ibm.png' },
    { name: 'Accenture', logo: '/accenture.png' }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Placements</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Ganga Mai Engineering College has an excellent track record of placements with renowned companies visiting our campus for recruitment drives every year.
          </p>
        </div>

        {/* Placement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover border-t-4 border-gmec-blue">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <Briefcase className="w-6 h-6 text-gmec-blue" />
            </div>
            <h3 className="text-2xl font-bold text-gmec-blue mb-1">500+</h3>
            <p className="text-gray-600">Annual Job Offers</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover border-t-4 border-gmec-orange">
            <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
              <BarChart className="w-6 h-6 text-gmec-orange" />
            </div>
            <h3 className="text-2xl font-bold text-gmec-blue mb-1">90%</h3>
            <p className="text-gray-600">Placement Rate</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover border-t-4 border-gmec-green">
            <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
              <Award className="w-6 h-6 text-gmec-green" />
            </div>
            <h3 className="text-2xl font-bold text-gmec-blue mb-1">42 LPA</h3>
            <p className="text-gray-600">Highest Package</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center card-hover border-t-4 border-gmec-yellow">
            <div className="inline-block p-3 bg-yellow-100 rounded-full mb-4">
              <Building className="w-6 h-6 text-gmec-yellow" />
            </div>
            <h3 className="text-2xl font-bold text-gmec-blue mb-1">100+</h3>
            <p className="text-gray-600">Recruiting Companies</p>
          </div>
        </div>

        {/* Last 3 years placement statistics */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gmec-blue mb-6 text-center">Placement Statistics</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gmec-blue text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Academic Year</th>
                  <th className="py-3 px-4 text-left">Total Students</th>
                  <th className="py-3 px-4 text-left">Placed Students</th>
                  <th className="py-3 px-4 text-left">Percentage Placed</th>
                  <th className="py-3 px-4 text-left">Highest Package</th>
                  <th className="py-3 px-4 text-left">Average Package</th>
                </tr>
              </thead>
              <tbody>
                {statistics.map((stat, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4">{stat.year}</td>
                    <td className="py-3 px-4">{stat.totalStudents}</td>
                    <td className="py-3 px-4">{stat.placedStudents}</td>
                    <td className="py-3 px-4">{stat.percentagePlaced}</td>
                    <td className="py-3 px-4">{stat.highestPackage}</td>
                    <td className="py-3 px-4">{stat.averagePackage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Recruiters */}
        <div>
          <h3 className="text-xl font-bold text-gmec-blue mb-6 text-center">Our Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topRecruiters.map((recruiter, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center h-24 card-hover">
                <img 
                  src={recruiter.logo} 
                  alt={`${recruiter.name} logo`} 
                  className="max-h-12 max-w-full"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/150x80?text=${recruiter.name}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a 
            href="/placements" 
            className="bg-gmec-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            View Detailed Placement Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
