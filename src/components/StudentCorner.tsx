
import React from 'react';
import { Book, Calendar, Users, Award } from 'lucide-react';

const StudentCorner = () => {
  const notices = [
    {
      title: 'End Semester Examination Schedule',
      date: 'April 10, 2025',
      category: 'Academics'
    },
    {
      title: 'Annual Technical Fest - TechVision 2025',
      date: 'March 25, 2025',
      category: 'Events'
    },
    {
      title: 'Scholarship Applications Open',
      date: 'April 5, 2025',
      category: 'Announcements'
    },
    {
      title: 'Industry Visit to XYZ Technologies',
      date: 'April 20, 2025',
      category: 'Industrial Visits'
    }
  ];

  const events = [
    {
      title: 'National Conference on Emerging Technologies',
      date: 'May 15-16, 2025',
      image: '/event1.jpg'
    },
    {
      title: 'Cultural Fest - Rhythms 2025',
      date: 'April 28-30, 2025',
      image: '/event2.jpg'
    },
    {
      title: 'International Workshop on AI & Machine Learning',
      date: 'June 5-6, 2025',
      image: '/event3.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Student Corner</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Stay updated with the latest notices, events, and activities happening at Ganga Mai Engineering College.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Services */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gmec-blue text-white py-3 px-4">
              <h3 className="text-lg font-semibold">Student Services</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-4">
                <li>
                  <a 
                    href="/student-corner/library" 
                    className="flex items-center p-3 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Book size={18} className="text-gmec-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gmec-blue">Library</h4>
                      <p className="text-sm text-gray-600">Access e-resources and book management</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="/student-corner/calendar" 
                    className="flex items-center p-3 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Calendar size={18} className="text-gmec-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gmec-blue">Academic Calendar</h4>
                      <p className="text-sm text-gray-600">Important dates and schedules</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="/student-corner/clubs" 
                    className="flex items-center p-3 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Users size={18} className="text-gmec-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gmec-blue">Clubs & Societies</h4>
                      <p className="text-sm text-gray-600">Join extracurricular activities</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="/student-corner/achievements" 
                    className="flex items-center p-3 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Award size={18} className="text-gmec-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gmec-blue">Student Achievements</h4>
                      <p className="text-sm text-gray-600">Recognizing outstanding performances</p>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <a 
                  href="/student-corner" 
                  className="text-gmec-blue hover:underline font-medium inline-flex items-center"
                >
                  View All Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Latest Notices */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gmec-blue text-white py-3 px-4">
              <h3 className="text-lg font-semibold">Latest Notices</h3>
            </div>
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                {notices.map((notice, index) => (
                  <li key={index} className="py-3">
                    <span className="inline-block text-xs font-medium text-white bg-gmec-orange px-2 py-1 rounded mb-1">
                      {notice.category}
                    </span>
                    <h4 className="font-medium text-gray-800 hover:text-gmec-blue transition-colors">
                      <a href="#">{notice.title}</a>
                    </h4>
                    <p className="text-xs text-gray-500">Posted on: {notice.date}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <a 
                  href="/student-corner/notices" 
                  className="text-gmec-blue hover:underline font-medium inline-flex items-center"
                >
                  View All Notices
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gmec-blue text-white py-3 px-4">
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-4">
                {events.map((event, index) => (
                  <li key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/400x200?text=Event+${index+1}`;
                      }}
                    />
                    <div className="p-3">
                      <h4 className="font-medium text-gray-800">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <a 
                  href="/student-corner/events" 
                  className="text-gmec-blue hover:underline font-medium inline-flex items-center"
                >
                  View All Events
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCorner;
