import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Clock, Shield, Star, Users, MapPin } from 'lucide-react';

const LimoServices = () => {
  const features = [
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Premium Fleet',
      description: 'Luxury sedans, SUVs, and stretch limousines maintained to perfection'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Professional Chauffeurs',
      description: 'Experienced, licensed drivers committed to your safety and comfort'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Punctual Service',
      description: 'Always on time, every time - reliability you can count on'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Fully insured vehicles with comprehensive safety protocols'
    }
  ];

  const services = [
    {
      title: 'Airport Transfers',
      description: 'Comfortable, reliable transportation to and from all major airports',
      image: 'https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Flight monitoring', 'Meet & greet service', 'Luggage assistance', 'Multiple airports served']
    },
    {
      title: 'Special Events',
      description: 'Make your special occasions unforgettable with our luxury transportation',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Weddings', 'Proms & graduations', 'Anniversaries', 'Birthday celebrations']
    },
    {
      title: 'Corporate Travel',
      description: 'Professional transportation solutions for business executives and teams',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Executive sedans', 'Group transportation', 'Conference shuttles', 'Client entertainment']
    },
    {
      title: 'City Tours',
      description: 'Explore the city in comfort with our guided luxury transportation',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Custom itineraries', 'Local expertise', 'Flexible scheduling', 'Group accommodations']
    }
  ];

  const fleet = [
    {
      name: 'Executive Sedan',
      capacity: '1-3 passengers',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Leather interior', 'Climate control', 'WiFi available', 'Premium sound system']
    },
    {
      name: 'Luxury SUV',
      capacity: '1-6 passengers',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Spacious interior', 'Entertainment system', 'Refreshment bar', 'Extra luggage space']
    },
    {
      name: 'Stretch Limousine',
      capacity: '8-10 passengers',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Full bar setup', 'LED lighting', 'Premium sound', 'Privacy partition']
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Luxury Limousine Services</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Experience unparalleled luxury and comfort with our premium limousine services. 
              Perfect for special occasions, business travel, and airport transfers.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link
              to="/booking"
              className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Book Your Limo Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Limousine Service?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We set the standard for luxury transportation with our commitment to excellence, 
              safety, and unmatched customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
                <div className="bg-yellow-400 text-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Limousine Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From airport transfers to special celebrations, we provide luxury transportation 
              for every occasion and requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Fleet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully maintained fleet of luxury vehicles, 
              each designed to provide the ultimate in comfort and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{vehicle.name}</h3>
                  <p className="text-yellow-600 font-medium mb-4">{vehicle.capacity}</p>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
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
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no surprises. Our pricing is straightforward and competitive 
              for the luxury service you receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Airport Transfer</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-4">$150</div>
              <p className="text-gray-300 mb-6">Per trip, one-way</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><MapPin className="w-4 h-4 text-yellow-400 mr-2" />All major airports</li>
                <li className="flex items-center"><Clock className="w-4 h-4 text-yellow-400 mr-2" />Flight monitoring</li>
                <li className="flex items-center"><Users className="w-4 h-4 text-yellow-400 mr-2" />Up to 3 passengers</li>
              </ul>
            </div>

            <div className="bg-yellow-400 text-slate-900 rounded-xl p-8 text-center transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Special Events</h3>
              <div className="text-4xl font-bold mb-4">$200</div>
              <p className="mb-6">Per hour (3 hour minimum)</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Star className="w-4 h-4 mr-2" />Wedding packages</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2" />Red carpet service</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2" />Champagne included</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Corporate</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-4">$180</div>
              <p className="text-gray-300 mb-6">Per hour</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Shield className="w-4 h-4 text-yellow-400 mr-2" />Executive sedans</li>
                <li className="flex items-center"><Shield className="w-4 h-4 text-yellow-400 mr-2" />WiFi & charging</li>
                <li className="flex items-center"><Shield className="w-4 h-4 text-yellow-400 mr-2" />Professional service</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">All prices include professional chauffeur, fuel, and standard amenities.</p>
            <Link
              to="/booking"
              className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Experience Luxury?</h2>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Book your luxury limousine service today and experience the difference that true premium transportation makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all"
            >
              Book Limousine Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-900 hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LimoServices;