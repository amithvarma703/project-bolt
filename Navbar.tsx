import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-blue-600">
              Das And Bros Media
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition">Contact</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;