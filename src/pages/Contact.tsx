import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 987-6543'],
      link: 'tel:+15551234567'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      details: ['info@chpremierservices.com', 'support@chpremierservices.com'],
      link: 'mailto:info@chpremierservices.com'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Address',
      details: ['123 Luxury Ave', 'Premium City, PC 12345'],
      link: '#'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Hours',
      details: ['24/7 Service Available', 'Emergency calls welcome'],
      link: '#'
    }
  ];

  const serviceAreas = [
    'Downtown Premium City',
    'Luxury Heights',
    'Executive District',
    'Waterfront Estates',
    'Business Center',
    'Airport Zone',
    'Resort Area',
    'Corporate Park'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-rich-black-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-luxury">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium service? Get in touch with us today for personalized quotes, 
            bookings, or any questions about our luxury services.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-rich-black-900 mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className={i === 0 ? 'text-rich-black-900 font-medium' : 'text-gray-600 text-sm'}>
                    <a href={info.link} className="hover:text-gold-600 transition-colors">
                      {detail}
                    </a>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-b from-rich-black-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-rich-black-900 mb-4 font-luxury">Send Us a Message</h2>
              <p className="text-rich-black-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent requests, please call us directly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-rich-black-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-rich-black-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-rich-black-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-rich-black-900 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="limo">Luxury Limousines</option>
                      <option value="boat">Boat Charters</option>
                      <option value="courier">Courier Services</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-rich-black-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all transform hover:scale-105 shadow-gold flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map & Service Areas */}
            <div>
              <div className="bg-white rounded-xl shadow-gold-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-rich-black-900 mb-4 font-luxury">Find Us</h2>
                <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gold-400" />
                    <span className="text-rich-black-600">123 Luxury Ave, Premium City, PC 12345</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gold-400" />
                    <span className="text-rich-black-600">24/7 Service Available</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-gold-lg p-8">
                <h3 className="text-xl font-semibold text-rich-black-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                      <span className="text-rich-black-600 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-rich-black-900 to-rich-black-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 font-luxury">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your requirements and receive a personalized quote 
            for any of our luxury services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-rich-black-900 px-8 py-4 rounded-lg font-semibold text-lg hover:from-gold-300 hover:to-gold-400 transition-all flex items-center space-x-2 shadow-gold"
            >
              <span>Book Service Now</span>
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-rich-black-900 transition-all flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;