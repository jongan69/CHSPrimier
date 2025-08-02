import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-rich-black-900 to-rich-black-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 font-bold text-xl px-3 py-2 rounded shadow-gold">
                CH
              </div>
              <div>
                <div className="font-bold text-xl font-luxury">Premier Services</div>
                <div className="text-sm text-gold-300">Luxury • Reliability • Excellence</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your premier destination for luxury transportation, exclusive boat charters, and reliable courier services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-gold-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-gold-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-gold-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-gold-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold-400">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/limo" className="text-gray-300 hover:text-gold-400 transition-colors">Luxury Limousines</Link></li>
              <li><Link to="/services/boat-charters" className="text-gray-300 hover:text-gold-400 transition-colors">Boat Charters</Link></li>
              <li><Link to="/services/courier" className="text-gray-300 hover:text-gold-400 transition-colors">Courier Services</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-gold-400 transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-gold-400 transition-colors">All Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">info@chpremierservices.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span className="text-gray-300">123 Luxury Ave, Premium City, PC 12345</span>
              </div>
            </div>
            <div className="mt-4 text-gold-400 font-medium">
              Available 24/7
            </div>
          </div>
        </div>

        <div className="border-t border-gold-400/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CH Premier Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;