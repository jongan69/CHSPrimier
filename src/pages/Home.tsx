import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';
import TestimonialsSlider from '../components/TestimonialsSlider';
import useStaggeredAnimation from '../hooks/useStaggeredAnimation';

const Home = () => {
  const services = [
    {
      title: 'Luxury Limousines',
      description: 'Premium transportation for special events, airport transfers, and business travel.',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/limo'
    },
    {
      title: 'Boat Charters',
      description: 'Private yacht charters, sunset cruises, and exclusive water events.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/boat-charters'
    },
    {
      title: 'Courier Services',
      description: 'Fast, reliable package delivery for individuals and businesses.',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/courier'
    },
    {
      title: 'Luxury Concierge',
      description: 'Personalized lifestyle management and exclusive access to premium experiences.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/services/concierge'
    }
  ];

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
      description: 'Luxury vehicles and vessels maintained to perfection'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '5-Star Service',
      description: 'Exceptional customer service that exceeds expectations'
    }
  ];

  // Staggered animations for different sections
  const heroAnimation = useStaggeredAnimation(3, 200, 300); // Title, subtitle, buttons
  const servicesAnimation = useStaggeredAnimation(4, 150, 500); // Service cards (updated to 4)
  const featuresAnimation = useStaggeredAnimation(4, 100, 800); // Feature cards

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rich-black-900/95 via-rich-black-800/90 to-rich-black-900/95 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 font-luxury transition-all duration-700 ease-out ${
            heroAnimation.isVisible(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <span className="block">Premier</span>
            <span className="text-gold-400 bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">Luxury Services</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200 transition-all duration-700 ease-out delay-200 ${
            heroAnimation.isVisible(1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Experience unparalleled luxury with our comprehensive transportation, charter, courier, and concierge services. 
            Where elegance meets reliability.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ease-out delay-400 ${
            heroAnimation.isVisible(2) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-gold"
            >
              <span>Get Your Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 hover:text-rich-black-900 transition-all backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-rich-black-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Our Premium Services</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              From luxury transportation to exclusive charters, reliable courier services, and personalized concierge experiences, 
              we deliver excellence in every experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-gold-lg transition-all transform hover:-translate-y-2 border border-gray-100 duration-700 ease-out ${
                  servicesAnimation.isVisible(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rich-black-900 mb-3">{service.title}</h3>
                  <p className="text-rich-black-600 mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium group"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-rich-black-900 to-rich-black-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-luxury">Why Choose CH Premier Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We set the standard for luxury service with our commitment to excellence, 
              reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`text-center group transition-all duration-700 ease-out ${
                  featuresAnimation.isVisible(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold group-hover:shadow-gold-lg transition-all transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSlider />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-400 to-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Ready for Premium Service?</h2>
          <p className="text-xl text-rich-black-700 mb-8 max-w-2xl mx-auto">
            Experience the difference that true luxury service makes. Contact us today for your personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-rich-black-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-800 transition-all shadow-lg hover:shadow-xl"
            >
              Book Service Now
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

export default Home;