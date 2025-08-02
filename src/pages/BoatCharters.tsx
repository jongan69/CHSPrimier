import { Link } from 'react-router-dom';
import { Anchor, Users, Clock, Star, Waves, Compass, Sun, Camera } from 'lucide-react';

const BoatCharters = () => {
  const features = [
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Premium Vessels',
      description: 'Luxury yachts and boats maintained to the highest standards'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Experienced Crew',
      description: 'Professional captains and crew ensuring your safety and comfort'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Full-day, half-day, or hourly charters to fit your needs'
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: 'All Weather Ready',
      description: 'Equipped for various weather conditions with safety as priority'
    }
  ];

  const services = [
    {
      title: 'Sunset Cruises',
      description: 'Romantic evening cruises with breathtaking sunset views and premium amenities',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['2-3 hour duration', 'Champagne service', 'Professional photography', 'Gourmet appetizers']
    },
    {
      title: 'Private Events',
      description: 'Host your special celebrations on water with customized event planning',
      image: 'https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Birthday parties', 'Corporate events', 'Wedding receptions', 'Anniversary celebrations']
    },
    {
      title: 'Fishing Charters',
      description: 'Deep sea fishing adventures with experienced guides and top-quality equipment',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['All equipment provided', 'Experienced guides', 'Full or half day trips', 'Fish cleaning service']
    },
    {
      title: 'Corporate Charters',
      description: 'Impressive venues for business meetings, team building, and client entertainment',
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Conference facilities', 'Catering available', 'WiFi connectivity', 'Professional atmosphere']
    }
  ];

  const fleet = [
    {
      name: 'Luxury Motor Yacht',
      capacity: '12-15 guests',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Full galley kitchen', 'Air conditioning', 'Entertainment system', 'Sun deck']
    },
    {
      name: 'Classic Sailing Yacht',
      capacity: '8-10 guests',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Traditional sailing', 'Elegant interior', 'Wine cellar', 'Professional crew']
    },
    {
      name: 'Sport Fishing Boat',
      capacity: '6-8 guests',
      image: 'https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Fishing equipment', 'Fish finder technology', 'Comfortable seating', 'Cooler storage']
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-rich-black-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black-900/95 via-rich-black-800/90 to-rich-black-900/95"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Luxury Boat Charters</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Experience the ultimate in luxury water adventures. From romantic sunset cruises 
              to corporate events and fishing expeditions, we provide unforgettable experiences on the water.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all transform hover:scale-105 shadow-gold"
            >
              Charter Your Yacht Today
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Why Choose Our Charter Service?</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              We provide exceptional maritime experiences with our premium fleet, 
              experienced crew, and commitment to safety and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-rich-black-900 mb-3">{feature.title}</h3>
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
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4">Our Charter Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're planning a romantic evening, corporate event, or adventure on the water, 
              we have the perfect charter experience for you.
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
                  <h3 className="text-xl font-semibold text-rich-black-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-gold-400 mr-2" />
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
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4">Our Luxury Fleet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully maintained fleet of premium vessels, 
              each designed to provide the ultimate maritime experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((vessel, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img 
                  src={vessel.image} 
                  alt={vessel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rich-black-900 mb-2">{vessel.name}</h3>
                  <p className="text-gold-600 font-medium mb-4">{vessel.capacity}</p>
                  <ul className="space-y-2">
                    {vessel.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
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
      <section className="py-20 bg-rich-black-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Charter Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. All packages include professional crew, 
              fuel, and standard amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sunset Cruise</h3>
                              <div className="text-4xl font-bold text-gold-400 mb-4">$800</div>
              <p className="text-gray-300 mb-6">3-hour cruise (up to 8 guests)</p>
              <ul className="space-y-2 text-left">
                                  <li className="flex items-center"><Compass className="w-4 h-4 text-gold-400 mr-2" />Scenic coastal route</li>
                  <li className="flex items-center"><Camera className="w-4 h-4 text-gold-400 mr-2" />Photo opportunities</li>
                  <li className="flex items-center"><Star className="w-4 h-4 text-gold-400 mr-2" />Champagne service</li>
              </ul>
            </div>

                          <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 rounded-xl p-8 text-center transform scale-105">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Private Event</h3>
              <div className="text-4xl font-bold mb-4">$1,200</div>
              <p className="mb-6">4-hour charter (up to 12 guests)</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Star className="w-4 h-4 mr-2" />Custom catering</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2" />Event coordination</li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-2" />Premium bar service</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Anchor className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Day Charter</h3>
                              <div className="text-4xl font-bold text-gold-400 mb-4">$2,000</div>
              <p className="text-gray-300 mb-6">8-hour charter (up to 15 guests)</p>
              <ul className="space-y-2 text-left">
                                  <li className="flex items-center"><Waves className="w-4 h-4 text-gold-400 mr-2" />Extended cruising</li>
                  <li className="flex items-center"><Users className="w-4 h-4 text-gold-400 mr-2" />Multiple activities</li>
                  <li className="flex items-center"><Clock className="w-4 h-4 text-gold-400 mr-2" />Flexible itinerary</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Custom packages available for multi-day charters and special requirements.</p>
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-rich-black-900 mb-4">Ready to Set Sail?</h2>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Experience the luxury and freedom of our premium boat charters. Create unforgettable memories on the water.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-rich-black-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all"
            >
              Charter Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-rich-black-900 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-900 hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoatCharters;