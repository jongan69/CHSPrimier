import { Link } from 'react-router-dom';
import { Star, Shield, Clock, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Luxury Vehicles' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Service Available' }
  ];

  const values = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, dependable service every time.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Punctuality',
      description: 'We understand the value of time and ensure timely service delivery.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'Premium vehicles, professional staff, and exceptional customer care.'
    }
  ];

  const team = [
    {
      name: 'Michael Anderson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/556047/pexels-photo-556047.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'With over 15 years in luxury transportation, Michael leads our company with vision and expertise.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Sarah ensures every operation runs smoothly and every client receives exceptional service.'
    },
    {
      name: 'David Chen',
      role: 'Fleet Manager',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'David maintains our fleet to the highest standards, ensuring safety and luxury.'
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-luxury">About CH Premier Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            We are a premier luxury service provider committed to delivering exceptional experiences 
            through our comprehensive transportation, charter, courier, and concierge services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-rich-black-900 mb-2">{stat.number}</div>
                <div className="text-rich-black-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-rich-black-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-rich-black-900 mb-6 font-luxury">Our Mission</h2>
              <p className="text-lg text-rich-black-600 mb-6 leading-relaxed">
                To provide unparalleled luxury transportation and service experiences that exceed our clients' expectations. 
                We believe that every journey should be memorable, every service should be exceptional, and every client 
                should feel valued and respected.
              </p>
              <p className="text-lg text-rich-black-600 leading-relaxed">
                Our commitment to excellence drives everything we do, from maintaining our premium fleet to training our 
                professional staff. We understand that luxury is not just about the vehicles or services we provide, 
                but about the entire experience we create for our clients.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Luxury Service"
                className="rounded-2xl shadow-gold-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Luxury Charter"
                className="rounded-2xl shadow-gold-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-rich-black-900 mb-6 font-luxury">Our Vision</h2>
              <p className="text-lg text-rich-black-600 mb-6 leading-relaxed">
                To be the leading luxury service provider, recognized for our commitment to excellence, 
                innovation, and customer satisfaction. We envision a future where luxury transportation 
                and services are accessible, reliable, and consistently exceptional.
              </p>
              <p className="text-lg text-rich-black-600 leading-relaxed">
                We strive to continuously improve our services, expand our offerings, and maintain the 
                highest standards of quality and professionalism. Our goal is to create lasting relationships 
                with our clients based on trust, reliability, and exceptional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-rich-black-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Our Core Values</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and ensure we deliver the highest quality service to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-rich-black-900 mb-3">{value.title}</h3>
                <p className="text-rich-black-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rich-black-900 mb-4 font-luxury">Meet Our Leadership Team</h2>
            <p className="text-xl text-rich-black-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in luxury services and customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-gold-200 shadow-gold"
                />
                <h3 className="text-xl font-semibold text-rich-black-900 mb-2">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-4">{member.role}</p>
                <p className="text-rich-black-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-rich-black-900 to-rich-black-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 font-luxury">Ready to Experience Our Premium Service?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your requirements and discover how we can provide you with the luxury service you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all shadow-gold"
            >
              Book Service Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-rich-black-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;