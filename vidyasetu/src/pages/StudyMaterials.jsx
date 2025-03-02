import React, { useState } from 'react';

const StudyMaterials = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');

  const subjects = ['All', 'Mathematics', 'Science', 'English', 'Hindi', 'Social Studies', 'Computer Science'];
  const grades = ['All', 'Grade 1-5', 'Grade 6-8', 'Grade 9-10', 'Grade 11-12'];

  const studyMaterials = [
    {
      id: 1,
      title: 'Algebra Fundamentals',
      subject: 'Mathematics',
      grade: 'Grade 9-10',
      type: 'Notes',
      author: 'Prof. Sharma',
      downloads: 2345,
      thumbnail: '/api/placeholder/240/135',
      date: '15 Feb 2025'
    },
    {
      id: 2,
      title: 'Chemistry Revision Guide',
      subject: 'Science',
      grade: 'Grade 11-12',
      type: 'PDF',
      author: 'Dr. Patel',
      downloads: 1872,
      thumbnail: '/api/placeholder/240/135',
      date: '10 Feb 2025'
    },
    {
      id: 3,
      title: 'English Grammar Workbook',
      subject: 'English',
      grade: 'Grade 6-8',
      type: 'Workbook',
      author: 'Mrs. Gupta',
      downloads: 3150,
      thumbnail: '/api/placeholder/240/135',
      date: '28 Jan 2025'
    },
    {
      id: 4,
      title: 'Physics Formula Sheet',
      subject: 'Science',
      grade: 'Grade 11-12',
      type: 'Cheatsheet',
      author: 'Prof. Verma',
      downloads: 4215,
      thumbnail: '/api/placeholder/240/135',
      date: '05 Feb 2025'
    },
    {
      id: 5,
      title: 'Indian History Timeline',
      subject: 'Social Studies',
      grade: 'Grade 9-10',
      type: 'Infographic',
      author: 'Dr. Sen',
      downloads: 1456,
      thumbnail: '/api/placeholder/240/135',
      date: '22 Jan 2025'
    },
    {
      id: 6,
      title: 'Python Programming Basics',
      subject: 'Computer Science',
      grade: 'Grade 9-10',
      type: 'Tutorial',
      author: 'Mr. Kumar',
      downloads: 2789,
      thumbnail: '/api/placeholder/240/135',
      date: '12 Feb 2025'
    },
    {
      id: 7,
      title: 'Hindi Vyakaran Notes',
      subject: 'Hindi',
      grade: 'Grade 6-8',
      type: 'Notes',
      author: 'Mrs. Sharma',
      downloads: 1234,
      thumbnail: '/api/placeholder/240/135',
      date: '08 Feb 2025'
    },
    {
      id: 8,
      title: 'Trigonometry Practice Problems',
      subject: 'Mathematics',
      grade: 'Grade 11-12',
      type: 'Worksheet',
      author: 'Dr. Iyer',
      downloads: 2567,
      thumbnail: '/api/placeholder/240/135',
      date: '01 Feb 2025'
    }
  ];

  // Filter study materials based on search and filter criteria
  const filteredMaterials = studyMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        material.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'All' || material.subject === selectedSubject;
    const matchesGrade = selectedGrade === 'All' || material.grade === selectedGrade;
    
    return matchesSearch && matchesSubject && matchesGrade;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold">VidyaSetu</div>
            <span className="bg-yellow-500 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">BETA</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-yellow-300">Home</a>
            <a href="#" className="hover:text-yellow-300 font-semibold border-b-2 border-yellow-400">Study Materials</a>
            <a href="#" className="hover:text-yellow-300">Live Classes</a>
            <a href="#" className="hover:text-yellow-300">Mentors</a>
            <a href="#" className="hover:text-yellow-300">Community</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-800 px-4 py-2 rounded-lg font-medium">Login</button>
            <button className="bg-white hover:bg-gray-200 text-blue-600 px-4 py-2 rounded-lg font-medium">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Study Materials Library</h1>
          <p className="text-xl mb-8">Access high-quality learning resources created by top educators across India</p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg flex">
            <input
              type="text"
              placeholder="Search by title, subject, or author..."
              className="flex-grow px-6 py-4 text-gray-700 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-800 px-6 py-4 font-medium">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="col-span-1">
            <label className="block text-gray-700 font-medium mb-2">Filter by Subject</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 font-medium mb-2">Filter by Grade</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              {grades.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 font-medium mb-2">Sort By</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Title (A-Z)</option>
              <option>Title (Z-A)</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 font-medium mb-2">Material Type</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Types</option>
              <option>Notes</option>
              <option>PDFs</option>
              <option>Worksheets</option>
              <option>Infographics</option>
              <option>Practice Tests</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 font-medium">Showing {filteredMaterials.length} of {studyMaterials.length} materials</p>
        </div>

        {/* Study Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMaterials.map(material => (
            <div key={material.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={material.thumbnail} 
                alt={material.title} 
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold">{material.subject}</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded font-semibold">{material.type}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{material.title}</h3>
                <p className="text-gray-600 mb-2">{material.grade}</p>
                <p className="text-gray-500 text-sm mb-3">By {material.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{material.downloads} downloads</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            Load More Materials
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Why Use VidyaSetu's Study Materials?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert-Created Content</h3>
              <p className="text-gray-600">All materials are created by experienced educators and subject experts from across India.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aligned with Curriculum</h3>
              <p className="text-gray-600">Materials follow CBSE, ICSE, and state board curricula to ensure relevance to your studies.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Diverse Formats</h3>
              <p className="text-gray-600">Access notes, practice tests, worksheets, infographics, and more to suit your learning style.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contribution CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Are You an Educator?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Share your knowledge and expertise with students across India. Contribute your study materials to our growing library.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-800 px-8 py-3 rounded-lg font-bold text-lg">
            Become a Contributor
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VidyaSetu</h3>
              <p className="text-gray-400">Connecting students with quality education across India.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Study Materials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Live Classes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Find a Mentor</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Feedback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm4.622 7.21a5.93 5.93 0 01-1.751.505 3.075 3.075 0 001.331-1.678 6.03 6.03 0 01-1.93.738 2.991 2.991 0 00-2.191-.949 2.98 2.98 0 00-2.985 2.986c0 .238.026.47.076.692a8.46 8.46 0 01-6.146-3.119 2.97 2.97 0 00-.404 1.5c0 1.035.531 1.95 1.33 2.485a2.954 2.954 0 01-1.352-.373v.039c0 1.447 1.028 2.658 2.4 2.932a2.95 2.95 0 01-1.347.053 2.985 2.985 0 002.785 2.077 5.975 5.975 0 01-3.704 1.277c-.241 0-.481-.014-.72-.042a8.419 8.419 0 004.569 1.34c5.483 0 8.48-4.544 8.48-8.48 0-.128-.004-.259-.01-.385a6.064 6.064 0 001.482-1.55z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 2C6.512 2 2 6.512 2 12.017c0 4.449 2.932 8.205 6.989 9.512.51.092.695-.224.695-.49 0-.245-.01-1.052-.015-1.913-2.842.62-3.444-1.193-3.444-1.193-.464-1.184-1.132-1.5-1.132-1.5-.926-.633.07-.62.07-.62 1.023.07 1.563 1.052 1.563 1.052.909 1.556 2.38 1.106 2.959.846.091-.658.354-1.107.646-1.362-2.27-.255-4.654-1.135-4.654-5.04 0-1.114.398-2.023 1.051-2.736-.104-.255-.454-1.286.1-2.683 0 0 .858-.271 2.81 1.047a9.818 9.818 0 012.557-.344c.867.005 1.738.118 2.556.344 1.95-1.318 2.807-1.047 2.807-1.047.555 1.397.205 2.428.1 2.683.655.713 1.05 1.622 1.05 2.736 0 3.917-2.387 4.782-4.663 5.032.366.316.693.936.693 1.887 0 1.362-.014 2.46-.014 2.8 0 .267.182.586.7.485A10.021 10.021 0 0022 12.017C22 6.512 17.52 2 12.017 2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.5 5c-1.988 0-3.656.679-4.973 2.038C10.214 5.679 8.545 5 6.5 5h-2v4h2c2.071 0 3.5 1.43 3.5 3.5v3h2v-3c0-2.07 1.429-3.5 3.5-3.5h2v-4h-2zm0 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"></path>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="mt-2 flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 w-full text-gray-800 rounded-l focus:outline-none" />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-800 px-4 py-2 rounded-r font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 VidyaSetu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudyMaterials;