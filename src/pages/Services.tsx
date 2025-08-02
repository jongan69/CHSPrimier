import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Anchor, Package, Clock, Shield, Star, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Luxury Limousines',
      description: 'Premium transportation for special occasions, business travel, and airport transfers.',
      features: ['Professional chauffeurs', 'Premium vehicles', 'Airport transfers', 'Special events'],
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/limo',
      color: 'from-gold-400 to-gold-600'
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: 'Boat Charters',
      description: 'Exclusive yacht charters, sunset cruises, and private water events.',
      features: ['Private yachts', 'Sunset cruises', 'Event hosting', 'Water sports'],
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/boat-charters',
      color: 'from-gold-500 to-gold-700'
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: 'Courier Services',
      description: 'Fast, reliable package delivery for individuals and businesses.',
      features: ['Express delivery', 'Secure handling', 'Real-time tracking', 'Business solutions'],
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/courier',
      color: 'from-gold-600 to-gold-800'
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: 'Luxury Concierge',
      description: 'Personalized lifestyle management and exclusive access to premium experiences.',
      features: ['Event planning', 'Travel arrangements', 'Lifestyle management', 'VIP access'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/concierge',
      color: 'from-gold-700 to-gold-900'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Round-the-clock service for all your transportation and delivery needs'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Fully Licensed & Insured',
      description: 'Complete peace of mind with full licensing and comprehensive insurance coverage'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Meticulously maintained fleet and vessels for the ultimate luxury experience'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-rich-black-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black-900/95 via-rich-black-800/90 to-rich-black-900/95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-luxury">Our Premium Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of luxury transportation, exclusive charter, 
            and reliable courier services designed to exceed your expectations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-rich-black-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-gold-lg overflow-hidden hover:shadow-gold-lg transition-all transform hover:-translate-y-2 border border-gold-100">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-rich-black-900 mb-4">{service.title}</h3>
                  <p className="text-rich-black-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-rich-black-600">
                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full bg-rich-black-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rich-black-800 transition-all group shadow-gold"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Why Choose Our Services?</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              Experience the difference that comes with choosing a premium service provider 
              committed to excellence in every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-rich-black-900 mb-4">{benefit.title}</h3>
                <p className="text-rich-black-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-rich-black-900 to-rich-black-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-luxury">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our streamlined process ensures a seamless experience from booking to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Request Quote', description: 'Contact us with your requirements' },
              { step: '02', title: 'Customize Service', description: 'We tailor the service to your needs' },
              { step: '03', title: 'Confirm Booking', description: 'Secure your reservation with ease' },
              { step: '04', title: 'Enjoy Excellence', description: 'Experience our premium service' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-gold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Ready to Experience Premium Service?</h2>
          <p className="text-xl text-rich-black-700 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your requirements and receive a personalized quote 
            for any of our luxury services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-rich-black-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-800 transition-all shadow-lg"
            >
              Book Service Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-rich-black-900 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-900 hover:text-white transition-all"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;