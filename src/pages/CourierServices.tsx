import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Clock, Shield, MapPin, Truck, CheckCircle, Zap, Globe } from 'lucide-react';

const CourierServices = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Same Day Delivery',
      description: 'Express delivery service with guaranteed same-day delivery options'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Handling',
      description: 'Professional handling with full insurance coverage for your packages'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Real-Time Tracking',
      description: 'Live GPS tracking so you always know where your package is'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Proof of Delivery',
      description: 'Digital signatures and photo confirmation for complete transparency'
    }
  ];

  const services = [
    {
      title: 'Express Delivery',
      description: 'Urgent packages delivered within hours across the metropolitan area',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['1-4 hour delivery', 'Priority handling', 'Direct route service', 'SMS notifications']
    },
    {
      title: 'Business Solutions',
      description: 'Comprehensive logistics solutions for businesses of all sizes',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Contract rates', 'Regular pickups', 'Account management', 'Bulk discounts']
    },
    {
      title: 'Legal Documents',
      description: 'Secure, confidential delivery of sensitive legal and business documents',
      image: 'https://images.pexels.com/photos/5466271/pexels-photo-5466271.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Chain of custody', 'Confidential handling', 'Court filings', 'Notary services']
    },
    {
      title: 'Medical Courier',
      description: 'Specialized handling for medical specimens, equipment, and supplies',
      image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Temperature controlled', 'HIPAA compliant', 'Lab samples', 'Medical equipment']
    }
  ];

  const serviceAreas = [
    { area: 'Downtown Core', time: '30 minutes' },
    { area: 'Metropolitan Area', time: '1-2 hours' },
    { area: 'Greater Region', time: '2-4 hours' },
    { area: 'Interstate', time: 'Same day' }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Courier Services</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Fast, reliable, and secure package delivery services for individuals and businesses. 
              When your delivery matters, trust CH Premier Services.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link
              to="/booking"
              className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              Schedule Delivery Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Courier Service?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine speed, security, and reliability to provide the best courier service experience 
              for all your delivery needs.
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Courier Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From urgent express deliveries to specialized business solutions, 
              we provide comprehensive courier services tailored to your needs.
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
                        <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
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

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Service Areas & Delivery Times</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive coverage with guaranteed delivery times 
              across our extensive service network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="bg-yellow-400 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{area.area}</h3>
                <p className="text-gray-600">Delivery in {area.time}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Need delivery outside our standard areas? Contact us for custom delivery solutions.
            </p>
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all"
            >
              Contact for Custom Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, straightforward pricing with no hidden fees. Choose the service level that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Express</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-4">$25</div>
              <p className="text-gray-300 mb-6">1-4 hour delivery</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Clock className="w-4 h-4 text-yellow-400 mr-2" />Same-day delivery</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 text-yellow-400 mr-2" />Real-time tracking</li>
                <li className="flex items-center"><Shield className="w-4 h-4 text-yellow-400 mr-2" />Insurance included</li>
              </ul>
            </div>

            <div className="bg-yellow-400 text-slate-900 rounded-xl p-8 text-center transform scale-105">
              <div className="flex items-center justify-center mb-4">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Business</h3>
              <div className="text-4xl font-bold mb-4">$150</div>
              <p className="mb-6">Monthly package (10 deliveries)</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Truck className="w-4 h-4 mr-2" />Regular pickups</li>
                <li className="flex items-center"><Globe className="w-4 h-4 mr-2" />Extended coverage</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Account management</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-4">$45</div>
              <p className="text-gray-300 mb-6">Specialized handling</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center"><Shield className="w-4 h-4 text-yellow-400 mr-2" />Confidential documents</li>
                <li className="flex items-center"><Clock className="w-4 h-4 text-yellow-400 mr-2" />Temperature control</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />Chain of custody</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Volume discounts available for businesses with regular delivery needs.</p>
            <Link
              to="/booking"
              className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures your packages are handled professionally from pickup to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Schedule Pickup', description: 'Book online or call to schedule', icon: <Clock className="w-6 h-6" /> },
              { step: '02', title: 'Secure Packaging', description: 'Professional handling and protection', icon: <Shield className="w-6 h-6" /> },
              { step: '03', title: 'Real-Time Tracking', description: 'Monitor your delivery progress', icon: <MapPin className="w-6 h-6" /> },
              { step: '04', title: 'Delivery Confirmation', description: 'Digital proof of delivery', icon: <CheckCircle className="w-6 h-6" /> }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 text-slate-900 w-16 h-16 rounded-full flex flex-col items-center justify-center mx-auto mb-4">
                  <div className="text-xs font-bold">{item.step}</div>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Need Fast, Reliable Delivery?</h2>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Trust CH Premier Services for all your courier needs. Professional service, competitive rates, and guaranteed delivery times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all"
            >
              Schedule Delivery
            </Link>
            <Link
              to="/contact"
              className="border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-900 hover:text-white transition-all"
            >
              Get Business Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourierServices;