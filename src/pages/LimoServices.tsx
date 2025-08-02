import { Link } from 'react-router-dom';
import { Star, Shield, Clock, Award } from 'lucide-react';

const LimoServices = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Round-the-clock service whenever you need us'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Luxury vehicles maintained to perfection'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '5-Star Service',
      description: 'Exceptional customer service that exceeds expectations'
    }
  ];

  const services = [
    {
      title: 'Airport Transfers',
      description: 'Reliable airport pickup and drop-off services with flight monitoring.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Flight monitoring', 'Meet & greet service', 'Luggage assistance', 'Professional chauffeurs']
    },
    {
      title: 'Wedding Transportation',
      description: 'Make your special day even more memorable with our luxury wedding transportation.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Bridal party transport', 'Guest transportation', 'Wedding coordination', 'Elegant presentation']
    },
    {
      title: 'Corporate Events',
      description: 'Professional transportation for business meetings, conferences, and corporate events.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Executive transport', 'Group transportation', 'Business amenities', 'Professional service']
    },
    {
      title: 'Special Occasions',
      description: 'Celebrate life\'s special moments with our luxury transportation services.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Birthday celebrations', 'Anniversary trips', 'Graduation events', 'Holiday transportation']
    }
  ];

  const vehicles = [
    {
      name: 'Stretch Limousine',
      description: 'Classic luxury with modern amenities',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: '8-10 passengers',
      features: ['Leather seating', 'Premium sound system', 'Climate control', 'Refreshments']
    },
    {
      name: 'SUV Limousine',
      description: 'Spacious luxury for larger groups',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: '12-14 passengers',
      features: ['Ample legroom', 'Entertainment system', 'Privacy partition', 'Luggage space']
    },
    {
      name: 'Sedan Limousine',
      description: 'Elegant transportation for intimate occasions',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      capacity: '4-6 passengers',
      features: ['Executive comfort', 'Professional service', 'Business amenities', 'Privacy']
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-rich-black-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black-900/95 via-rich-black-800/90 to-rich-black-900/95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-luxury">Luxury Limousine Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Experience the epitome of luxury transportation with our premium limousine services. 
            From airport transfers to special events, we provide elegant, reliable, and professional service.
          </p>
          <div className="mt-8">
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all transform hover:scale-105 shadow-gold"
            >
              Book Your Limo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Why Choose Our Limousine Service?</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              We set the standard for luxury transportation with our commitment to excellence, 
              reliability, and customer satisfaction.
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
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Our Limousine Services</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              From airport transfers to special events, we provide comprehensive limousine services 
              tailored to your specific needs.
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
                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
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

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Our Premium Fleet</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              Choose from our selection of luxury vehicles, each maintained to the highest standards 
              for your comfort and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-gold-lg overflow-hidden border border-gold-100">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rich-black-900 mb-2">{vehicle.name}</h3>
                  <p className="text-rich-black-600 mb-3">{vehicle.description}</p>
                  <p className="text-gold-600 font-medium mb-4">Capacity: {vehicle.capacity}</p>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-rich-black-600 text-sm">
                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
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

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-rich-black-900 to-rich-black-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-luxury">Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Competitive rates for luxury transportation with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rich-black-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Airport Transfer</h3>
              <div className="text-4xl font-bold text-gold-400 mb-6">$150</div>
              <p className="text-gray-300 mb-6">One-way airport transportation</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Flight monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Meet & greet service
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Luggage assistance
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 rounded-xl p-8 text-center transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Hourly Service</h3>
              <div className="text-4xl font-bold mb-6">$95</div>
              <p className="mb-6">Per hour for events and tours</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rich-black-900 rounded-full mr-3"></div>
                  Professional chauffeur
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rich-black-900 rounded-full mr-3"></div>
                  Fuel included
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-rich-black-900 rounded-full mr-3"></div>
                  Insurance coverage
                </li>
              </ul>
            </div>

            <div className="bg-rich-black-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Wedding Package</h3>
              <div className="text-4xl font-bold text-gold-400 mb-6">$500</div>
              <p className="text-gray-300 mb-6">Complete wedding transportation</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Bridal party transport
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Guest transportation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                  Wedding coordination
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Ready to Experience Luxury?</h2>
          <p className="text-xl text-rich-black-700 mb-8 max-w-3xl mx-auto">
            Contact us today to book your luxury limousine service and experience the difference 
            that premium transportation makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-rich-black-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-800 transition-all shadow-lg"
            >
              Book Now
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

export default LimoServices;