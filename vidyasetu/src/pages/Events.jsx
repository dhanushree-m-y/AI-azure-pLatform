import React, { useState } from 'react';
import map from "../assets/Map/map.jpg"
import htmd from "../assets/FeaturedEvents/htmd.png"
import web3 from "../assets/FeaturedEvents/web3.png"
import ai from "../assets/FeaturedEvents/AIcamp.png"
import science from "../assets/FeaturedEvents/science1.png"
import career from "../assets/FeaturedEvents/career.jpeg"
import peer from "../assets/FeaturedEvents/peer.png"
import teacher from "../assets/FeaturedEvents/teacher.png"
import maths from "../assets/FeaturedEvents/maths.png"
import coder from "../assets/FeaturedEvents/coder.png"
// Component for event cards with image support
const EventCard = ({ title, date, location, distance, description, imageSrc, registrationRequired, buttons, offlineAccess, transportSubsidy }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
      {imageSrc && (
        <div className="mb-3 relative">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-40 object-cover rounded-lg"
          />
          {offlineAccess && (
            <div className="absolute top-2 left-2 bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded-full">
              Offline Access
            </div>
          )}
          {transportSubsidy && (
            <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              Travel Support
            </div>
          )}
        </div>
      )}
      <h3 className="font-bold text-purple-900">{title}</h3>
      {date && <p className="text-gray-700"><span className="font-medium text-purple-700">Date:</span> {date}</p>}
      {location && <p className="text-gray-700"><span className="font-medium text-purple-700">Location:</span> {location}</p>}
      {distance && <p className="text-gray-700"><span className="font-medium text-purple-700">Distance:</span> {distance}</p>}
      {registrationRequired && <p className="text-sm text-purple-700 font-medium">Registration required</p>}
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      
      {buttons && buttons.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {buttons.map((button, index) => (
            <button 
              key={index}
              className={`${button.primary 
                ? 'bg-gradient-to-r from-purple-800 to-purple-600 text-white hover:from-purple-700 hover:to-purple-500' 
                : 'bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 hover:from-yellow-300 hover:to-yellow-200'} 
                px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all`}
              onClick={button.onClick}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Component for the calendar view
const CalendarView = ({ viewMode, setViewMode }) => {
  return (
    <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-purple-900">Calendar View</h2>
        <div className="flex space-x-2">
          {['Monthly', 'Weekly', 'Daily'].map(mode => (
            <button 
              key={mode}
              className={`px-3 py-1 rounded-full ${viewMode === mode 
                ? 'bg-gradient-to-r from-purple-800 to-purple-600 text-white' 
                : 'bg-gray-200 text-gray-700'} transition-all`}
              onClick={() => setViewMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
      <div className="text-center font-medium text-purple-800">March 2025</div>
      
      {/* Map Integration */}
      <div className="mt-4 rounded-lg overflow-hidden border">
        <img 
          src={map}
          alt="Event map" 
          className="w-full h-64 object-cover"
        />
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white p-3 flex justify-between items-center">
          <span>Events near Bangalore</span>
          <button className="px-3 py-1 bg-yellow-400 text-purple-900 rounded-full text-sm font-medium">View full map</button>
        </div>
      </div>
      
      {/* Date selection buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {['Today', 'Tomorrow', 'This weekend', 'Next weekend', 'Choose date', 'All upcoming'].map(option => (
          <button key={option} className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white p-3 rounded-lg flex justify-between items-center transition-all">
            <span>{option}</span>
            <span>→</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Component for filters
const FilterSection = ({ filters, handleFilterChange }) => {
  return (
    <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
      <h2 className="font-semibold mb-2 text-purple-900">Filter Events:</h2>
      <div className="flex flex-wrap gap-3">
        {[
          { id: 'competitions', label: 'Competitions' },
          { id: 'scholarships', label: 'Scholarships' },
          { id: 'workshops', label: 'Workshops' },
          { id: 'localEvents', label: 'Local Events' },
          { id: 'webinars', label: 'Webinars' },
          { id: 'offlineAccess', label: 'Offline Access' },
          { id: 'lowBandwidth', label: 'Low Bandwidth' },
          { id: 'transportSupport', label: 'Transport Support' },
          { id: 'vernacularLanguage', label: 'Local Language' }
        ].map(filter => (
          <label key={filter.id} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full border border-purple-200 hover:border-purple-400 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={filters[filter.id]}
              onChange={() => handleFilterChange(filter.id)}
              className="h-4 w-4 text-purple-600"
            />
            <span className="text-purple-900">{filter.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

// Component for featured events
const FeaturedEvents = () => {
  return (
    <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3 text-purple-900">Featured Conferences</h2>
      
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {[
          {
            title: "HTMD Conference India 2024",
            date: "Dec 07, 2024",
            time: "9:00 AM - 5:00 PM",
            location: "Microsoft Reactor, Lavelle Road",
            attendees: "1200 attending",
            price: "₹299",
            image: htmd,
            tags: ["Technology", "Innovation", "AI"],
            transportSupport: true,
            scholarshipAvailable: true
          },
          {
            title: "Web 3 Conference",
            date: "Dec 07, 2024",
            time: "9:00 AM - 5:00 PM",
            location: "Microsoft Reactor, Lavelle Road",
            attendees: "1200 attending",
            price: "₹299",
            image: web3,
            tags: ["Technology", "Innovation", "AI"],
            transportSupport: false,
            scholarshipAvailable: true
          },
          {
            title: "AI, LLMs, ML Data Meetup",
            date: "Dec 07, 2024",
            time: "9:00 AM - 5:00 PM",
            location: "Microsoft Reactor, Lavelle Road",
            attendees: "1200 attending",
            price: "₹299",
            image: ai,
            tags: ["Technology", "Innovation", "AI"],
            transportSupport: true,
            scholarshipAvailable: false
          }
        ].map((event, index) => (
          <div key={index} className="min-w-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all bg-white">
            <div className="relative">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
              <div className="absolute top-2 left-2 bg-white/90 rounded-full px-2 py-1 text-xs text-purple-900 font-medium">Conference</div>
              <div className="absolute top-2 right-2 bg-yellow-400 rounded-full px-2 py-1 text-xs text-purple-900 font-medium flex items-center">
                <span className="mr-1">★</span> 4.8
              </div>
              {event.transportSupport && (
                <div className="absolute bottom-2 left-2 bg-purple-600 text-white rounded-full px-2 py-1 text-xs font-medium">
                  Transport Support
                </div>
              )}
              {event.scholarshipAvailable && (
                <div className="absolute bottom-2 right-2 bg-yellow-400 text-purple-900 rounded-full px-2 py-1 text-xs font-medium">
                  Scholarships
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-bold text-lg text-purple-900">{event.title}</h3>
              <div className="flex items-center space-x-1 text-sm mt-2">
                <span className="text-purple-600">📅</span>
                <span className="text-gray-700">{event.date}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm mt-1">
                <span className="text-purple-600">⏰</span>
                <span className="text-gray-700">{event.time}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm mt-1">
                <span className="text-purple-600">📍</span>
                <span className="text-gray-700">{event.location}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm mt-1">
                <span className="text-purple-600">👥</span>
                <span className="text-gray-700">{event.attendees}</span>
              </div>
              <div className="flex gap-2 mt-2">
                {event.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-purple-700">{event.price}</span>
                <button className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white px-3 py-1 rounded-full shadow-sm transition-all">Register Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for upcoming hackathons
const UpcomingHackathons = () => {
  return (
    <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3 text-purple-900">Upcoming Hackathons</h2>
      <div className="border rounded-lg p-4 bg-white">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative">
            <img 
              src="/api/placeholder/300/200" 
              alt="Digital Innovation Challenge" 
              className="rounded-lg w-full md:w-full h-40 object-cover"
            />
            <div className="absolute top-2 left-2 bg-yellow-400 text-purple-900 text-xs font-bold px-2 py-1 rounded-full">
              Offline Access
            </div>
            <div className="absolute bottom-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              Transport Support
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-purple-800">Digital Innovation Challenge 2025</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="text-gray-700"><span className="font-medium text-purple-700">Date:</span> March 15-16, 2025</p>
                <p className="text-gray-700"><span className="font-medium text-purple-700">Location:</span> Online (Low bandwidth options available)</p>
                <p className="text-gray-700"><span className="font-medium text-purple-700">Registration Deadline:</span> March 10, 2025</p>
                
                <div className="mt-3">
                  <h4 className="font-medium text-purple-800">Skills Required:</h4>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Basic programming knowledge</li>
                    <li>Problem-solving skills</li>
                    <li>Creativity</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-purple-800">Preparation Resources:</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Intro to Coding (Beginner-Friendly)</li>
                  <li>Problem Solving Techniques</li>
                  <li>Team Collaboration Guide</li>
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white px-3 py-1 rounded-full shadow-sm transition-all">Register Now</button>
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 text-purple-900 px-3 py-1 rounded-full shadow-sm transition-all">Add to Calendar</button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-purple-900 px-3 py-1 rounded-full shadow-sm transition-all">Download Materials</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rural Student Resources Component
const RuralStudentResources = () => {
  return (
    <div className="mb-6 bg-gradient-to-r from-purple-800 to-purple-600 p-4 rounded-lg shadow text-white">
      <h2 className="text-xl font-semibold mb-3">Resources for Rural Students</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
          <div className="bg-yellow-400 text-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-3 font-bold text-2xl">
            📱
          </div>
          <h3 className="font-bold text-lg mb-2">Offline Access</h3>
          <p className="text-white/90 mb-2">Download events and materials for offline access. Look for the "Offline Access" badge on events.</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-3 py-1 rounded-full text-sm font-medium mt-2 transition-colors">
            How to Download
          </button>
        </div>
        
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
          <div className="bg-yellow-400 text-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-3 font-bold text-2xl">
            🚌
          </div>
          <h3 className="font-bold text-lg mb-2">Transport Support</h3>
          <p className="text-white/90 mb-2">Apply for transport subsidies for events with the "Transport Support" badge. Covers up to 80% of travel costs.</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-3 py-1 rounded-full text-sm font-medium mt-2 transition-colors">
            Apply Now
          </button>
        </div>
        
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
          <div className="bg-yellow-400 text-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-3 font-bold text-2xl">
            🔄
          </div>
          <h3 className="font-bold text-lg mb-2">Low Bandwidth Mode</h3>
          <p className="text-white/90 mb-2">Enable low bandwidth mode for slower internet connections. Optimizes images and loads text content first.</p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-3 py-1 rounded-full text-sm font-medium mt-2 transition-colors">
            Enable Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Vernacular Language Support
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  
  return (
    <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3 text-purple-900">Language Preferences</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {['English', 'ಕನ್ನಡ (Kannada)', 'हिंदी (Hindi)', 'తెలుగు (Telugu)', 'தமிழ் (Tamil)', 'മലയാളം (Malayalam)', 'मराठी (Marathi)', 'ଓଡ଼ିଆ (Odia)'].map(language => (
          <button 
            key={language}
            className={`p-2 rounded-lg text-center ${
              selectedLanguage === language 
                ? 'bg-gradient-to-r from-purple-800 to-purple-600 text-white' 
                : 'bg-white border border-purple-200 text-purple-900 hover:border-purple-400'
            } transition-all`}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </button>
        ))}
      </div>
      
      <div className="mt-4 bg-white p-3 rounded-lg border border-purple-200">
        <p className="text-purple-900 font-medium">Selected: {selectedLanguage}</p>
        <p className="text-gray-600 text-sm mt-1">Event descriptions and materials will be prioritized in your selected language when available.</p>
      </div>
    </div>
  );
};

// Digital Literacy Modules
const DigitalLiteracyModules = () => {
  return (
    <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3 text-purple-900">Digital Literacy Resources</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-purple-200 hover:border-purple-400 shadow-sm hover:shadow transition-all">
          <div className="h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mb-3 w-full"></div>
          <h3 className="font-bold text-purple-900">Basics of Computers</h3>
          <div className="flex items-center text-sm mt-2 text-gray-600">
            <span>Progress: 0/5 modules</span>
            <span className="ml-auto text-purple-700">Beginner</span>
          </div>
          <button className="mt-3 w-full bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white py-2 rounded-full shadow-sm transition-all">
            Start Learning
          </button>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-purple-200 hover:border-purple-400 shadow-sm hover:shadow transition-all">
          <div className="h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mb-3 w-3/4"></div>
          <h3 className="font-bold text-purple-900">Internet & Web Browsing</h3>
          <div className="flex items-center text-sm mt-2 text-gray-600">
            <span>Progress: 2/5 modules</span>
            <span className="ml-auto text-purple-700">Beginner</span>
          </div>
          <button className="mt-3 w-full bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white py-2 rounded-full shadow-sm transition-all">
            Continue Learning
          </button>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-purple-200 hover:border-purple-400 shadow-sm hover:shadow transition-all">
          <div className="h-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mb-3 w-1/2"></div>
          <h3 className="font-bold text-purple-900">Mobile Applications</h3>
          <div className="flex items-center text-sm mt-2 text-gray-600">
            <span>Progress: 1/5 modules</span>
            <span className="ml-auto text-purple-700">Beginner</span>
          </div>
          <button className="mt-3 w-full bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white py-2 rounded-full shadow-sm transition-all">
            Continue Learning
          </button>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start">
          <div className="bg-yellow-400 text-purple-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-3">
            💡
          </div>
          <div>
            <h4 className="font-medium text-purple-900">Offline Learning Available</h4>
            <p className="text-gray-700 text-sm">Download these modules for offline access. Each module is less than 10MB and includes audio guides for accessibility.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for local educational events
const LocalEducationalEvents = () => {
  return (
    <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3 text-purple-900">Local Educational Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EventCard 
          title="Science Exhibition"
          date="March 5, 2025"
          location="Mysuru District Science Center"
          distance="18 km"
          registrationRequired={false}
          imageSrc={science}
          offlineAccess={true}
          transportSubsidy={true}
          buttons={[
            { label: "View on Map", primary: false },
            { label: "Get Directions", primary: false },
            { label: "Apply for Transport", primary: true }
          ]}
        />
        
        <EventCard 
          title="Career Guidance Workshop"
          date="March 12, 2025"
          location="Bangalore Rural Community Hall"
          distance="35 km"
          registrationRequired={true}
          imageSrc={teacher}
          offlineAccess={true}
          transportSubsidy={true}
          buttons={[
            { label: "Register", primary: true },
            { label: "View on Map", primary: false },
            { label: "Apply for Transport", primary: false }
          ]}
        />
      </div>
    </div>
  );
};

// Peer Mentorship & Community Support
const PeerMentorship = () => {
  return (
    <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-3 text-purple-900">Peer Mentorship Program</h2>
      
      <div className="bg-white p-4 rounded-lg border border-purple-200">
        <div className="flex flex-col md:flex-row gap-4">
          <img 
            src={peer}
            alt="Peer Mentorship" 
            className="rounded-lg w-full md:w-1/4 h-40 object-cover"
          />
          <div className="flex-1">
            <h3 className="font-bold text-purple-800">Connect with Successful Rural Students</h3>
            <p className="text-gray-700 mt-2">Our peer mentorship program connects you with successful students from similar backgrounds who have overcome challenges similar to yours.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div>
                <h4 className="font-medium text-purple-800">Benefits:</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>One-on-one guidance from experienced peers</li>
                  <li>Regular check-ins and support sessions</li>
                  <li>Help navigating educational opportunities</li>
                  <li>Available in multiple local languages</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-purple-800">How It Works:</h4>
                <ol className="list-decimal ml-5 text-gray-700">
                  <li>Complete a short profile about your interests</li>
                  <li>Get matched with compatible mentors</li>
                  <li>Connect through text, voice, or in-person</li>
                  <li>Build a lasting relationship for success</li>
                </ol>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white px-4 py-2 rounded-full shadow-sm transition-all">
                Find a Mentor
              </button>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 text-purple-900 px-4 py-2 rounded-full shadow-sm transition-all">
                Become a Mentor
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-purple-900 px-4 py-2 rounded-full shadow-sm transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Events component
const Events = () => {
  const [viewMode, setViewMode] = useState('Monthly');
  const [filters, setFilters] = useState({
    competitions: false,
    scholarships: false,
    workshops: false,
    localEvents: false,
    webinars: false,
    offlineAccess: false,
    lowBandwidth: false,
    transportSupport: false,
    vernacularLanguage: false
  });

  const handleFilterChange = (filter) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filter]: !prevFilters[filter]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gradient-to-b from-purple-50 to-blue-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 bg-gradient-to-r from-purple-800 to-purple-600 p-4 rounded-lg text-white">
        <h1 className="text-2xl font-bold">Educational Opportunities</h1>
        <div className="flex items-center mt-3 md:mt-0">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-4 py-2 rounded-full mr-2 font-medium shadow-sm transition-colors">
            Low Bandwidth Mode
          </button>
          <button className="bg-white hover:bg-gray-100 text-purple-900 px-4 py-2 rounded-full font-medium shadow-sm transition-colors">
            Download App (5MB)Download App (5MB)
          </button>
        </div>
      </div>
      
      <CalendarView viewMode={viewMode} setViewMode={setViewMode} />
      <FilterSection filters={filters} handleFilterChange={handleFilterChange} />
      <FeaturedEvents />
      <UpcomingHackathons />
      <RuralStudentResources />
      <LanguageSelector />
      <DigitalLiteracyModules />
      <LocalEducationalEvents />
      <PeerMentorship />
      
      <div className="mb-6 bg-gradient-to-br from-purple-50 to-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3 text-purple-900">All Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Array of events could go here, using the EventCard component */}
          <EventCard 
            title="Coding Workshop for Beginners"
            date="March 8, 2025"
            location="Online"
            description="Learn the basics of programming in this beginner-friendly workshop."
            imageSrc={coder}
            offlineAccess={true}
            transportSubsidy={false}
            buttons={[
              { label: "Register", primary: true },
              { label: "Add to Calendar", primary: false }
            ]}
          />
          
          <EventCard 
            title="Mathematics Competition"
            date="March 14, 2025"
            location="Bangalore Urban"
            distance="25 km"
            description="Annual mathematics competition with scholarships for winners."
            imageSrc={maths}
            registrationRequired={true}
            offlineAccess={false}
            transportSubsidy={true}
            buttons={[
              { label: "Register", primary: true },
              { label: "View Details", primary: false },
              { label: "Apply for Transport", primary: false }
            ]}
          />
          
          <EventCard 
            title="Science Fair 2025"
            date="March 20, 2025"
            location="Mysuru"
            distance="42 km"
            description="Showcase your science projects and win prizes."
            imageSrc={science}
            registrationRequired={true}
            offlineAccess={true}
            transportSubsidy={true}
            buttons={[
              { label: "Register", primary: true },
              { label: "View on Map", primary: false },
              { label: "Apply for Transport", primary: false }
            ]}
          />
        </div>
        
        <div className="mt-4 flex justify-center">
          <button className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white px-6 py-2 rounded-full shadow-sm transition-all">
            View All Events
          </button>
        </div>
      </div>
      
      <footer className="mt-8 p-4 bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg text-white text-center">
        <p>© 2025 Educational Opportunities Platform for Rural Students</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-yellow-300 transition-colors">About</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Contact</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Events;