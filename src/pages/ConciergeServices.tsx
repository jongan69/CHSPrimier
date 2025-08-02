import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Calendar, Clock, Shield, Star, Users, Plane, Building, Heart } from 'lucide-react';

const ConciergeServices = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Event Planning & Coordination',
      description: 'From intimate gatherings to grand celebrations, we handle every detail with precision and style.',
      features: ['Wedding planning', 'Corporate events', 'Birthday celebrations', 'Anniversary parties']
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Travel Arrangements',
      description: 'Curated travel experiences with exclusive access to the world\'s finest destinations and accommodations.',
      features: ['Luxury accommodations', 'Private jet charters', 'Exclusive experiences', 'VIP airport services']
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Lifestyle Management',
      description: 'Comprehensive lifestyle services to enhance your daily life and free up your valuable time.',
      features: ['Personal shopping', 'Home management', 'Pet care services', 'Household staffing']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Personal Services',
      description: 'Tailored personal services designed to meet your unique needs and preferences.',
      features: ['Restaurant reservations', 'Spa appointments', 'Fitness training', 'Wellness programs']
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Round-the-clock access to our concierge team for all your needs'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Discrete & Confidential',
      description: 'Complete privacy and discretion in all our services'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Exclusive Access',
      description: 'VIP access to premium venues, events, and experiences'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personal Touch',
      description: 'Dedicated concierge assigned to understand your preferences'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Executive',
      content: 'The concierge service has transformed how I manage my busy lifestyle. Every detail is handled perfectly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Entrepreneur',
      content: 'Exclusive access to events and venues I never knew existed. Truly exceptional service.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Luxury Traveler',
      content: 'From travel planning to event coordination, they make everything seamless and extraordinary.',
      rating: 5
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
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-20 h-20 rounded-full flex items-center justify-center shadow-gold">
              <Crown className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-luxury">Luxury Concierge Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the epitome of personalized luxury with our comprehensive concierge services. 
            From event planning to lifestyle management, we bring your vision to life with precision and elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-gold"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-400 hover:text-rich-black-900 transition-all backdrop-blur-sm"
            >
              Consult with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-rich-black-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Our Concierge Services</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              Discover our comprehensive range of luxury concierge services designed to enhance your lifestyle 
              and provide you with exclusive access to the finest experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-gold-lg p-8 hover:shadow-gold-lg transition-all transform hover:-translate-y-2 border border-gold-100">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-gold">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-rich-black-900 mb-4">{service.title}</h3>
                <p className="text-rich-black-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-rich-black-600">
                      <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Why Choose Our Concierge Service?</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              Experience the difference that comes with choosing a premium concierge service 
              committed to excellence in every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-rich-black-900 to-rich-black-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-luxury">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients about their exceptional concierge experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-rich-black-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-400/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gold-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-rich-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">How Our Concierge Service Works</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              Our streamlined process ensures a seamless experience from initial consultation to service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', description: 'We discuss your needs and preferences' },
              { step: '02', title: 'Service Planning', description: 'Customized service plan created for you' },
              { step: '03', title: 'Dedicated Concierge', description: 'Personal concierge assigned to your account' },
              { step: '04', title: 'Ongoing Support', description: '24/7 access to premium concierge services' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-gold">
                  {item.step}
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
          <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Ready to Experience Luxury Concierge Service?</h2>
          <p className="text-xl text-rich-black-700 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your concierge needs and discover how we can enhance your lifestyle 
            with our premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-rich-black-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-800 transition-all shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              to="/contact"
              className="border-2 border-rich-black-900 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-rich-black-900 hover:text-white transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConciergeServices; 