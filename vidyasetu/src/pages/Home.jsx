import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import girl from "../assets/students/girl.png";
import girl2 from "../assets/students/girl2.png";
import teacher from "../assets/students/teacher.png";

const Home = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  
  React.useEffect(() => {
    // Auto rotate carousel every 5 seconds
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide >= 2 ? 0 : prevSlide + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Update carousel position when activeSlide changes
  React.useEffect(() => {
    const carousel = document.getElementById('hero-carousel');
    if (carousel) {
      carousel.style.transform = `translateX(-${activeSlide * 100}%)`;
    }
  }, [activeSlide]);
  
  return (
    <div className="font-sans">
      <Navbar />
      
      {/* Hero section carousel with gradient background */}
      <div className="relative h-screen md:h-96 overflow-hidden gradient-animation">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Background image layer */}
        <div className="absolute inset-0 overflow-hidden">
          {activeSlide === 0 && (
            <img 
              src={girl} 
              alt="Rural education" 
              className="w-full h-full object-cover opacity-60"
            />
          )}
          {activeSlide === 1 && (
            <img 
              src={girl2}
              alt="Students learning" 
              className="w-full h-full object-cover opacity-60"
            />
          )}
          {activeSlide === 2 && (
            <img 
              src={teacher}
              alt="Language education" 
              className="w-full h-full object-cover opacity-60"
            />
          )}
        </div>
        
        {/* Carousel container */}
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="carousel-container h-full">
            <div className="flex h-full transition-transform duration-700 ease-in-out transform" 
                id="hero-carousel"
                style={{transform: `translateX(-${activeSlide * 100}%)`}}>
              
              {/* Slide 1 */}
              <div className="min-w-full h-full flex flex-col justify-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 kannada-text">
                  ಎಲ್ಲರಿಗೂ ಶಿಕ್ಷಣ - ಯಾವುದೇ ಅಡೆತಡೆಗಳಿಲ್ಲದೆ
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                  Education for Everyone - Without Barriers
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100">
                  VidyaSetu bridges the gap between rural students and quality education 
                  through AI-powered learning tools in Kannada.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-yellow-500 text-indigo-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-400 transition btn-shine">
                    Start Learning Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-white hover:text-indigo-900 transition">
                    Learn More
                  </button>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div className="min-w-full h-full flex flex-col justify-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 kannada-text">
                  ಎಂದಿಗೂ ಕಲಿಯಲು ತಡವಾಗುವುದಿಲ್ಲ
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                  It's Never Too Late to Learn
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100">
                  Our personalized learning paths adapt to your schedule and pace,
                  making education accessible to students of all backgrounds.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-yellow-500 text-indigo-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-400 transition btn-shine">
                    Discover Your Path
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-white hover:text-indigo-900 transition">
                    How It Works
                  </button>
                </div>
              </div>
              
              {/* Slide 3 */}
              <div className="min-w-full h-full flex flex-col justify-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 kannada-text">
                  ಭಾಷೆ ಅಡ್ಡಿಯಾಗಬಾರದು
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-6">
                  Language Should Never Be a Barrier
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100">
                  Our AI-powered tools translate complex academic concepts into 
                  simple Kannada, making quality education truly accessible.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-yellow-500 text-indigo-900 px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-400 transition btn-shine">
                    Try Translation Tools
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-white hover:text-indigo-900 transition">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-20">
          {[0, 1, 2].map((index) => (
            <button 
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSlide === index 
                  ? "bg-white opacity-100 scale-125" 
                  : "bg-white opacity-60 hover:opacity-80"
              }`}
              id={`slide-${index}`}
            />
          ))}
        </div>
        
        {/* Arrow navigation */}
        <button 
          onClick={() => setActiveSlide((prev) => (prev <= 0 ? 2 : prev - 1))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full z-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setActiveSlide((prev) => (prev >= 2 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full z-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Features section */}
      <div className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            Our Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover-card-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2 text-center">
                AI-Powered Learning
              </h3>
              <p className="text-gray-600 text-center">
                Our intelligent tutoring system adapts to your learning style and pace, 
                providing personalized guidance in Kannada.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover-card-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2 text-center">
                Textbook Scanner
              </h3>
              <p className="text-gray-600 text-center">
                Take a photo of any textbook page and get instant explanations, 
                translations, and practice questions in your language.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover-card-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2 text-center">
                Work Offline
              </h3>
              <p className="text-gray-600 text-center">
                Download learning materials to use when you don't have internet access. 
                Your progress syncs when you reconnect.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover-card-lift">
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2 text-center">
                Community Support
              </h3>
              <p className="text-gray-600 text-center">
                Connect with other students, teachers, and mentors from similar backgrounds 
                who understand your unique challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
   
      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-indigo-50 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-indigo-900 mb-2">25,000+</h3>
              <p className="text-purple-700 font-medium">Rural Students Supported</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-indigo-900 mb-2">15</h3>
              <p className="text-purple-700 font-medium">Districts Reached</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-indigo-900 mb-2">120,000+</h3>
              <p className="text-purple-700 font-medium">Hours of Learning Delivered</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg shadow-sm">
              <h3 className="text-4xl font-bold text-indigo-900 mb-2">2.5M+</h3>
              <p className="text-purple-700 font-medium">Quiz Questions Answered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-to-r from-purple-800 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="bg-gradient-to-br from-purple-700 to-indigo-700 rounded-xl p-6 shadow-lg transform transition hover:scale-105">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="/api/placeholder/300/200" alt="Student Kavitha" className="w-full object-cover" />
              </div>
              <p className="italic mb-6 text-gray-200 leading-relaxed">
                "VidyaSetu helped me prepare for my science exams when I couldn't understand 
                the textbook. The explanations in Kannada made everything clear."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  K
                </div>
                <div>
                  <p className="font-semibold text-lg">Kavitha</p>
                  <p className="text-sm text-purple-200">Grade 10, Ramanagara District</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-gradient-to-br from-purple-700 to-indigo-700 rounded-xl p-6 shadow-lg transform transition hover:scale-105">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="/api/placeholder/300/200" alt="Student Raju" className="w-full object-cover" />
              </div>
              <p className="italic mb-6 text-gray-200 leading-relaxed">
                "I improved my math score from 65% to 89% using the practice quizzes 
                and step-by-step problem solving tool."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  R
                </div>
                <div>
                  <p className="font-semibold text-lg">Raju</p>
                  <p className="text-sm text-purple-200">Grade 8, Mandya District</p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-gradient-to-br from-purple-700 to-indigo-700 rounded-xl p-6 shadow-lg transform transition hover:scale-105">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img src="/api/placeholder/300/200" alt="Student Lakshmi" className="w-full object-cover" />
              </div>
              <p className="italic mb-6 text-gray-200 leading-relaxed">
                "The offline study materials allowed me to learn even during power 
                outages in our village."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 text-lg font-bold">
                  L
                </div>
                <div>
                  <p className="font-semibold text-lg">Lakshmi</p>
                  <p className="text-sm text-purple-200">Grade 11, Chitradurga District</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-bold hover:bg-indigo-100 transition btn-shine">
              View More Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* Latest Resources */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Latest Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-card-lift">
              <div className="h-48 bg-purple-200 relative">
                <img src="/api/placeholder/400/300" alt="Science visualization" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 px-3 py-1 m-2 text-sm font-bold rounded">
                  Grade 8 Science
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">New Science Visualizations</h3>
                <p className="text-gray-600 mb-4">Interactive diagrams explaining photosynthesis with Kannada audio</p>
                <button className="text-indigo-600 font-semibold flex items-center hover:text-indigo-800 transition">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Resource 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-card-lift">
              <div className="h-48 bg-indigo-200 relative">
                <img src="/api/placeholder/400/300" alt="Math problem solver" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 px-3 py-1 m-2 text-sm font-bold rounded">
                  Grade 9-10 Math
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Math Problem Solver</h3>
                <p className="text-gray-600 mb-4">Step-by-step guidance for algebra and geometry</p>
                <button className="text-indigo-600 font-semibold flex items-center hover:text-indigo-800 transition">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Resource 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-card-lift">
              <div className="h-48 bg-pink-200 relative">
                <img src="/api/placeholder/400/300" alt="History timeline" className="w-full h-full object-cover" />
                <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 px-3 py-1 m-2 text-sm font-bold rounded">
                  Grade 7-12 History
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-800 mb-2">History Timeline</h3>
                <p className="text-gray-600 mb-4">Interactive journey through Karnataka's rich history</p>
                <button className="text-indigo-600 font-semibold flex items-center hover:text-indigo-800 transition">
                  Explore
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition btn-shine">
              Explore Full Library
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 gradient-animation text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join thousands of rural students achieving their dreams with VidyaSetu.
          </h2>
          <button className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-300 transition btn-shine">
            Register Now - It's Free
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;