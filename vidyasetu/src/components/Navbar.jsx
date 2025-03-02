import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-2xl">VidyaSetu</span>
            <span className="hidden sm:flex ml-2 text-xs bg-white text-purple-700 px-2 py-1 rounded-full">
              ವಿದ್ಯಾಸೇತು
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="font-medium hover:text-purple-200 transition">Home</a>
            <a href="#" className="font-medium hover:text-purple-200 transition">Dashboard</a>
            <a href="#" className="font-medium hover:text-purple-200 transition">Materials</a>
            <a href="#" className="font-medium hover:text-purple-200 transition">AI Quiz</a>
            <a href="#" className="font-medium hover:text-purple-200 transition">Tools</a>
            <a href="#" className="font-medium hover:text-purple-200 transition">Community</a>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-white text-purple-700 px-4 py-2 rounded-md font-medium shadow-sm hover:bg-purple-50 transition btn-shine">
              Login
            </button>
            <button className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-md font-medium shadow-sm hover:bg-yellow-300 transition btn-shine">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-purple-500">
            <div className="flex flex-col space-y-4">
              <a href="#" className="font-medium hover:text-purple-200 transition">Home</a>
              <a href="#" className="font-medium hover:text-purple-200 transition">Dashboard</a>
              <a href="#" className="font-medium hover:text-purple-200 transition">Materials</a>
              <a href="#" className="font-medium hover:text-purple-200 transition">AI Quiz</a>
              <a href="#" className="font-medium hover:text-purple-200 transition">Tools</a>
              <a href="#" className="font-medium hover:text-purple-200 transition">Community</a>
              <div className="flex space-x-4 pt-4">
                <button className="bg-white text-purple-700 px-4 py-2 rounded-md font-medium shadow-sm hover:bg-purple-50 transition btn-shine">
                  Login
                </button>
                <button className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-md font-medium shadow-sm hover:bg-yellow-300 transition btn-shine">
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;