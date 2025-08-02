import { Link } from 'react-router-dom';
import { Package, Clock, Shield, Star, MapPin, Zap, CheckCircle } from 'lucide-react';

const CourierServices = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Insured',
      description: 'All packages are fully insured and handled with care'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Express delivery options for time-sensitive items'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Premium Service',
      description: 'Professional handling and white-glove service'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Real-time Tracking',
      description: 'Track your package every step of the way'
    }
  ];

  const services = [
    {
      title: 'Express Delivery',
      description: 'Same-day and next-day delivery for urgent packages.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Same-day delivery', 'Next-day delivery', 'Real-time tracking', 'Priority handling']
    },
    {
      title: 'Business Solutions',
      description: 'Comprehensive courier services for businesses of all sizes.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Regular pickups', 'Bulk shipping', 'Account management', 'Custom solutions']
    },
    {
      title: 'Specialty Items',
      description: 'Handling of fragile, valuable, and temperature-sensitive items.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Fragile handling', 'Temperature control', 'Valuable items', 'Special packaging']
    },
    {
      title: 'International Shipping',
      description: 'Reliable international courier services with customs handling.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Customs clearance', 'Documentation', 'Tracking', 'Insurance']
    }
  ];

  const serviceAreas = [
    {
      area: 'Downtown Core',
      time: '30-60 minutes',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      area: 'Metropolitan Area',
      time: '1-2 hours',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      area: 'Airport Zone',
      time: '45-90 minutes',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      area: 'Business District',
      time: '30-45 minutes',
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-rich-black-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black-900/95 via-rich-black-800/90 to-rich-black-900/95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-luxury">Courier Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Fast, reliable, and secure courier services for individuals and businesses. 
            From same-day delivery to international shipping, we handle it all with care.
          </p>
          <div className="mt-8">
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all transform hover:scale-105 shadow-gold"
            >
              Book Courier Service
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Why Choose Our Courier Service?</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              We provide reliable, secure, and fast courier services with professional handling 
              and comprehensive tracking for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-rich-black-900 mb-3">{feature.title}</h3>
                <p className="text-rich-black-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-rich-black-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Our Courier Services</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              From express delivery to international shipping, we offer comprehensive courier 
              solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-gold-lg overflow-hidden border border-gold-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rich-black-900 mb-3">{service.title}</h3>
                  <p className="text-rich-black-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-rich-black-600">
                        <CheckCircle className="w-4 h-4 text-gold-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Service Areas & Delivery Times</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              We provide fast and reliable delivery throughout the metropolitan area 
              with competitive delivery times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-gold-lg p-6 text-center border border-gold-100">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-rich-black-900 mb-2">{area.area}</h3>
                <p className="text-gold-600 font-medium">{area.time}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-rich-black-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rich-black-800 transition-all shadow-gold"
            >
              Check Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-rich-black-900 to-rich-black-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-luxury">Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Competitive rates with no hidden fees. Get a quote based on your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rich-black-800 rounded-xl p-8 text-center">
              <Zap className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Express Delivery</h3>
              <div className="text-4xl font-bold text-gold-400 mb-4">$25</div>
              <p className="text-gray-300 mb-6">Same-day delivery</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Clock className="w-4 h-4 text-gold-400 mr-2" />Same-day delivery</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 text-gold-400 mr-2" />Real-time tracking</li>
                <li className="flex items-center"><Shield className="w-4 h-4 text-gold-400 mr-2" />Insurance included</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 rounded-xl p-8 text-center transform scale-105">
              <Shield className="w-8 h-8 text-rich-black-900 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Premium Service</h3>
              <div className="text-4xl font-bold text-rich-black-900 mb-4">$45</div>
              <p className="mb-6">White-glove service</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Shield className="w-4 h-4 text-rich-black-900 mr-2" />Confidential documents</li>
                <li className="flex items-center"><Clock className="w-4 h-4 text-rich-black-900 mr-2" />Temperature control</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-rich-black-900 mr-2" />Chain of custody</li>
              </ul>
            </div>

            <div className="bg-rich-black-800 rounded-xl p-8 text-center">
              <Package className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Standard Delivery</h3>
              <div className="text-4xl font-bold text-gold-400 mb-4">$15</div>
              <p className="text-gray-300 mb-6">Next-day delivery</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Package className="w-4 h-4 text-gold-400 mr-2" />Secure handling</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 text-gold-400 mr-2" />Package tracking</li>
                <li className="flex items-center"><Shield className="w-4 h-4 text-gold-400 mr-2" />Basic insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">How It Works</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              Our simple process ensures your package is handled with care from pickup to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Book Service', description: 'Schedule pickup online or call us' },
              { step: '02', title: 'Package Pickup', description: 'We collect your package securely' },
              { step: '03', title: 'Safe Transport', description: 'Professional handling and tracking' },
              { step: '04', title: 'Fast Delivery', description: 'Timely delivery to destination' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex flex-col items-center justify-center mx-auto mb-4 shadow-gold">
                  <span className="text-lg font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-rich-black-900 mb-3">{item.title}</h3>
                <p className="text-rich-black-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Need Fast, Reliable Delivery?</h2>
          <p className="text-xl text-rich-black-700 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your courier needs and receive a personalized quote 
            for fast, secure delivery services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-rich-black-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-800 transition-all shadow-lg"
            >
              Book Courier Service
            </Link>
            <Link
              to="/contact"
              className="border-2 border-rich-black-900 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-900 hover:text-white transition-all"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourierServices;