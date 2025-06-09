'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Mock data for professional consulting elements
const stats = [
  { number: '500+', label: 'Companies Transformed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '2.5x', label: 'Average Growth Rate' },
  { number: '24/7', label: 'Expert Support' }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'TechVision Inc.',
    role: 'CEO',
    content: 'Their strategic insights transformed our operations and doubled our revenue within 8 months.',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Michael Rodriguez',
    company: 'Global Dynamics',
    role: 'Operations Director',
    content: 'Exceptional expertise in process optimization. Highly recommend their consulting services.',
    avatar: '/api/placeholder/40/40'
  },
  {
    name: 'Emily Watson',
    company: 'Innovation Labs',
    role: 'Founder',
    content: 'Game-changing strategies that positioned us as industry leaders. Outstanding results.',
    avatar: '/api/placeholder/40/40'
  }
];

const features = [
  {
    icon: '🎯',
    title: 'Strategic Planning',
    description: 'Comprehensive roadmaps tailored to your business objectives'
  },
  {
    icon: '📊',
    title: 'Performance Analytics',
    description: 'Data-driven insights to optimize your operations'
  },
  {
    icon: '🚀',
    title: 'Growth Acceleration',
    description: 'Proven methodologies to scale your business rapidly'
  },
  {
    icon: '💡',
    title: 'Innovation Consulting',
    description: 'Transform ideas into market-leading solutions'
  }
];

interface SignupData {
  email: string;
  companyName: string;
}

interface SignupFormProps {
  onComplete: (data: SignupData) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState<SignupData>({
    email: '',
    companyName: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState<string>('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (!formData.email || !formData.companyName) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    onComplete(formData);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/20 to-white">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white border-b border-pink-100">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                          <Image
            src="/logo.png"
            alt="Company Logo"
            fill
            className="object-contain"
            priority
          />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Staaj Solutions</h1>
                <p className="text-sm text-gray-600">Strategic Business Consulting</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <span className="text-sm text-gray-600">📞 +1 (555) 123-4567</span>
              <span className="text-sm text-gray-600">✉️ hello@staaj.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full">
                <span className="text-pink-600 font-medium text-sm">🏆 #1 Rated Consulting Firm</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                Transform Your Business with 
                <span className="text-pink-600 block">Expert Consulting</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join industry leaders who've accelerated their growth through our proven strategies and personalized consulting approach.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center p-4 rounded-xl bg-white shadow-lg border border-pink-100 transition-all duration-500 hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-pink-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 bg-white rounded-xl shadow-lg border border-pink-100 transition-all duration-500 hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Testimonial Carousel */}
            <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-pink-100">
                <div 
                  className="h-full bg-pink-600 transition-all duration-4000 ease-linear"
                  style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
                ></div>
              </div>
              <div className="pt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonials[currentTestimonial].name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="transition-all duration-500">
                      <p className="text-gray-700 italic mb-3">"{testimonials[currentTestimonial].content}"</p>
                      <div>
                        <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-pink-600 font-bold">ISO</span>
                </div>
                <p className="text-xs text-gray-600">Certified</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-pink-600 font-bold">★★★★★</span>
                </div>
                <p className="text-xs text-gray-600">5.0 Rating</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-pink-600 font-bold">24/7</span>
                </div>
                <p className="text-xs text-gray-600">Support</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-pink-100 relative overflow-hidden">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-600/5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-600 rounded-2xl mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Start Your Assessment
                  </h2>
                  <p className="text-gray-600">
                    Get a personalized growth strategy for your business
                  </p>
                  <div className="mt-4 inline-flex items-center space-x-2 text-sm text-pink-600">
                    <span>⏱️ Takes 2 minutes</span>
                    <span>•</span>
                    <span>🔒 100% Confidential</span>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <span className="ml-2 text-sm text-pink-600 font-medium">Basic Info</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-200"></div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">2</div>
                    <span className="ml-2 text-sm text-gray-500">Assessment</span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-200"></div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">3</div>
                    <span className="ml-2 text-sm text-gray-500">Results</span>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {/* Company Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      onFocus={() => setFocused('companyName')}
                      onBlur={() => setFocused('')}
                      className="peer w-full px-6 py-5 border-2 border-gray-200 rounded-2xl bg-gray-50 outline-none transition-all duration-300 
                                focus:border-pink-600 focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="companyName"
                      className={`absolute left-4 text-gray-500 transition-all duration-300 transform pointer-events-none
                                ${focused === 'companyName' || formData.companyName 
                                  ? '-translate-y-8 text-sm font-semibold text-pink-600 bg-white px-2'
                                  : 'translate-y-5 text-base'
                                } peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-pink-600 peer-focus:bg-white peer-focus:px-2`}
                    >
                      🏢 Company Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      className="peer w-full px-6 py-5 border-2 border-gray-200 rounded-2xl bg-gray-50 outline-none transition-all duration-300 
                                focus:border-pink-600 focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-4 text-gray-500 transition-all duration-300 transform pointer-events-none
                                ${focused === 'email' || formData.email 
                                  ? '-translate-y-8 text-sm font-semibold text-pink-600 bg-white px-2'
                                  : 'translate-y-5 text-base'
                                } peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-pink-600 peer-focus:bg-white peer-focus:px-2`}
                    >
                      📧 Business Email
                    </label>
                  </div>

                  {/* Value Proposition */}
                  <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
                    <h4 className="font-semibold text-gray-800 mb-2">What you'll get:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center"><span className="text-pink-600 mr-2">✓</span>Personalized growth assessment</li>
                      <li className="flex items-center"><span className="text-pink-600 mr-2">✓</span>Custom strategic recommendations</li>
                      <li className="flex items-center"><span className="text-pink-600 mr-2">✓</span>30-minute consultation call</li>
                      <li className="flex items-center"><span className="text-pink-600 mr-2">✓</span>Industry benchmarking report</li>
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white font-semibold py-5 rounded-2xl
                             transition-all duration-300 transform hover:from-pink-700 hover:to-pink-800 hover:scale-[1.02] hover:shadow-xl
                             disabled:from-pink-400 disabled:to-pink-500 disabled:cursor-not-allowed disabled:scale-100
                             focus:outline-none focus:ring-4 focus:ring-pink-600/25 active:scale-[0.98]"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Preparing Your Assessment...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Begin Strategic Assessment</span>
                        <span className="text-xl">→</span>
                      </div>
                    )}
                  </button>

                  {/* Security & Terms */}
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center"><span className="text-green-500 mr-1">🔒</span>SSL Secured</span>
                      <span className="flex items-center"><span className="text-blue-500 mr-1">🛡️</span>GDPR Compliant</span>
                      <span className="flex items-center"><span className="text-purple-500 mr-1">⚡</span>Instant Access</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      By continuing, you agree to our{' '}
                      <a href="#" className="text-pink-600 hover:text-pink-700 underline font-medium">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-pink-600 hover:text-pink-700 underline font-medium">Privacy Policy</a>
                      . No spam, unsubscribe anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Trust Elements */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-3">Trusted by leading companies worldwide</p>
              <div className="flex items-center justify-center space-x-6 opacity-50">
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border">
                  <span className="text-xs font-semibold text-gray-600">Fortune 500</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border">
                  <span className="text-xs font-semibold text-gray-600">Startups</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm border">
                  <span className="text-xs font-semibold text-gray-600">SMEs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;