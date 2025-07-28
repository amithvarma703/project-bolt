import React from 'react';
import { Shield, TrendingUp, Cog, Briefcase, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';

function App() {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions and expert consultation."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Growth Marketing",
      description: "Data-driven strategies to accelerate your business growth and market presence."
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-600" />,
      title: "Digitalization & Automation",
      description: "Streamline your operations with cutting-edge digital transformation solutions."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: "Technology & Media Consulting",
      description: "Expert guidance to navigate the evolving technology and media landscape."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              We help businesses thrive in the digital age through innovative solutions in cybersecurity, marketing, and technology.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center transition duration-300">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your business needs in the digital era
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your business? Contact us today for a consultation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-600">contact@dasandbrosmedia.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-gray-600">123 Business Avenue, Suite 100, New York, NY 10001</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold mb-4">Das And Bros Media</h3>
              <p className="text-gray-400">
                Empowering businesses with innovative digital solutions since 2020.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Das And Bros Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;