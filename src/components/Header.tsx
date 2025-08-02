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
      {/* Top Bar */}
      <div className={`text-white px-4 text-sm transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
          <div className="flex items-center gap-6 text-gray-300">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              info@chpremierservices.com
            </span>
          </div>
          <span className="text-gold-400 font-semibold">24/7 Premium Service</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 font-extrabold text-2xl px-3 py-2 rounded-xl shadow-gold">
              CH
            </div>
            <div className="text-white leading-tight">
              <div className="font-extrabold text-xl font-luxury">Premier Services</div>
              <div className="text-sm text-gold-300">Luxury • Reliability • Excellence</div>
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
            className="md:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-rich-black-900/95 backdrop-blur border-t border-gold-400/20 py-4">
            {navigation.map((item) => (
              <div key={item.name} className="mb-2">
                <Link
                  to={item.path}
                  className={`block px-4 py-3 text-white font-medium transition hover:text-gold-400 ${
                    isActiveRoute(item.path) ? 'text-gold-400' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 pl-4 border-l border-gold-400/30">
                    {item.submenu.slice(1).map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block py-2 text-sm text-gray-300 hover:text-gold-400 transition ${
                          location.pathname === subItem.path ? 'text-gold-400' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
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