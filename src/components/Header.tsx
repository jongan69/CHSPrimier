import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigation = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      submenu: [
        { name: 'All Services', path: '/services' },
        { name: 'Limousine Service', path: '/services/limo' },
        { name: 'Boat Charters', path: '/services/boat-charters' },
        { name: 'Courier Services', path: '/services/courier' },
        { name: 'Luxury Concierge', path: '/services/concierge' },
      ]
    },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ], []);

  const isActiveRoute = (path: string) => {
    return path === '/services'
      ? location.pathname === '/services' || location.pathname.startsWith('/services/')
      : location.pathname === path;
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-rich-black-900/95 backdrop-blur-md shadow-lg border-b border-gold-400/20'
        : 'bg-rich-black-900/90 backdrop-blur-md'
    }`}>
      {/* Top Bar - Hidden on mobile when scrolled, always visible on desktop */}
      <div className={`text-white px-4 text-sm transition-all duration-300 ${
        isScrolled 
          ? 'h-0 overflow-hidden opacity-0 md:h-auto md:opacity-100' 
          : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-2 gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-gray-300 text-center sm:text-left">
            <span className="flex items-center gap-2 text-xs sm:text-sm">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <a href="tel:5551234567" className="hover:text-gold-400 transition">(555) 123-4567</a>
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <a href="mailto:info@chpremierservices.com" className="hover:text-gold-400 transition">info@chpremierservices.com</a>
            </span>
          </div>
          <span className="text-gold-400 font-semibold text-xs sm:text-sm">24/7 Premium Service</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-4 min-w-0">
            <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 font-extrabold text-xl sm:text-2xl px-2 sm:px-3 py-1 sm:py-2 rounded-xl shadow-gold flex-shrink-0">
              CH
            </div>
            <div className="text-white leading-tight min-w-0">
              <div className="font-extrabold text-lg sm:text-xl font-luxury truncate">Premier Services</div>
              <div className="text-xs sm:text-sm text-gold-300 hidden sm:block">Luxury • Reliability • Excellence</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => toggleDropdown(item.name)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className={`flex items-center gap-1 text-white font-medium transition-all hover:text-gold-400 ${
                        isActiveRoute(item.path) ? 'text-gold-400' : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-gold-lg border border-gold-100 py-2 z-50 transition-all duration-200 ${
                      activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-4 py-2 text-rich-black-700 rounded-md hover:bg-gold-50 hover:text-gold-600 transition ${
                            location.pathname === subItem.path ? 'bg-gold-50 text-gold-600 font-semibold' : ''
                          }`}
                          onClick={closeDropdown}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white font-medium transition hover:text-gold-400 ${
                      isActiveRoute(item.path) ? 'text-gold-400' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-6 py-2 rounded-xl font-semibold shadow-gold hover:shadow-gold-lg transition transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 -m-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-rich-black-900/95 backdrop-blur border-t border-gold-400/20 py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name} className="mb-1">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`w-full text-left px-4 py-3 text-white font-medium transition hover:text-gold-400 flex items-center justify-between ${
                        isActiveRoute(item.path) ? 'text-gold-400' : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${
                      activeDropdown === item.name ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <div className="ml-4 pl-4 border-l border-gold-400/30 pb-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block py-2 text-sm text-gray-300 hover:text-gold-400 transition ${
                              location.pathname === subItem.path ? 'text-gold-400 font-medium' : ''
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-white font-medium transition hover:text-gold-400 ${
                      isActiveRoute(item.path) ? 'text-gold-400' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Contact Info */}
            <div className="px-4 py-4 border-t border-gold-400/20 mt-4">
              <div className="flex flex-col gap-3 text-sm">
                <a 
                  href="tel:5551234567" 
                  className="flex items-center gap-2 text-gray-300 hover:text-gold-400 transition"
                >
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </a>
                <a 
                  href="mailto:info@chpremierservices.com" 
                  className="flex items-center gap-2 text-gray-300 hover:text-gold-400 transition"
                >
                  <Mail className="w-4 h-4" />
                  info@chpremierservices.com
                </a>
              </div>
            </div>
            
            <Link
              to="/booking"
              className="block mt-4 mx-4 bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 text-center px-6 py-3 rounded-xl font-semibold shadow-gold hover:shadow-gold-lg transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;