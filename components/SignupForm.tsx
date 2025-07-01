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
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
}

interface SignupFormProps {
  onComplete: (data: SignupData) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onComplete }) => {
  const [formData, setFormData] = useState<SignupData>({
    email: '',
    companyName: '',
    firstName: '',
    lastName: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState<string>('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.companyName) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Submit to HubSpot

      // If successful, set success status
      setSubmitStatus('success');

      // Call the onComplete callback after a short delay to show success state
      setTimeout(() => {
        onComplete(formData);
      }, 1500);

    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center space-x-3">
          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>Submitting...</span>
        </div>
      );
    }

    if (submitStatus === 'success') {
      return (
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl">✓</span>
          <span>Successfully Submitted!</span>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center space-x-2">
        <span>Continue</span>
        <span className="text-xl">→</span>
      </div>
    );
  };

  const getButtonClass = () => {
    const baseClass = "w-full font-semibold py-5 rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-pink-600/25 active:scale-[0.98]";

    if (submitStatus === 'success') {
      return `${baseClass} bg-gradient-to-r from-green-600 to-green-700 text-white`;
    }

    if (submitStatus === 'error') {
      return `${baseClass} bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800`;
    }

    return `${baseClass} bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800 hover:scale-[1.02] hover:shadow-xl disabled:from-pink-400 disabled:to-pink-500 disabled:cursor-not-allowed disabled:scale-100`;
  };

  return (
    <>
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
                Begin Your Journey
              </h2>
              <p className="text-gray-600">
                Get a personalized growth strategy for your business
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* First Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  onFocus={() => setFocused('firstName')}
                  onBlur={() => setFocused('')}
                  className="peer w-full px-6 py-5 border-2 border-gray-200 rounded-2xl bg-gray-50 outline-none transition-all duration-300 
              focus:border-pink-600 focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="firstName"
                  className={`absolute left-4 flex items-center text-gray-500 bg-white pr-2 transition-all duration-300 transform pointer-events-none
              ${focused === 'firstName' || formData.firstName
                      ? '-translate-y-8 text-sm font-semibold text-pink-600 z-10 px-2'
                      : 'translate-y-5 text-base'
                    } peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-pink-600 peer-focus:bg-white peer-focus:z-10 peer-focus:px-2`}
                  style={{ top: 0 }}
                >
                  {/* User icon */}
                  <svg className="inline-block mr-1" width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" stroke="#be185d" strokeWidth="2" fill="none" />
                    <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#be185d" strokeWidth="2" fill="none" />
                  </svg>
                  First Name
                </label>
              </div>

              {/* Last Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  onFocus={() => setFocused('lastName')}
                  onBlur={() => setFocused('')}
                  className="peer w-full px-6 py-5 border-2 border-gray-200 rounded-2xl bg-gray-50 outline-none transition-all duration-300 
              focus:border-pink-600 focus:bg-white focus:shadow-lg group-hover:border-gray-300"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="lastName"
                  className={`absolute left-4 flex items-center text-gray-500 bg-white pr-2 transition-all duration-300 transform pointer-events-none
              ${focused === 'lastName' || formData.lastName
                      ? '-translate-y-8 text-sm font-semibold text-pink-600 z-10 px-2'
                      : 'translate-y-5 text-base'
                    } peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-pink-600 peer-focus:bg-white peer-focus:z-10 peer-focus:px-2`}
                  style={{ top: 0 }}
                >
                  <svg className="inline-block mr-1" width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" stroke="#be185d" strokeWidth="2" fill="none" />
                    <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#be185d" strokeWidth="2" fill="none" />
                  </svg>
                  Last Name
                </label>
              </div>
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

              {/* Error Message */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500">❌</span>
                    <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✅</span>
                    <p className="text-green-700 text-sm font-medium">Successfully submitted...!</p>
                  </div>
                </div>
              )}

              {/* Value Proposition */}
              <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
                <h4 className="font-semibold text-gray-800 mb-2">What you'll get:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-pink-600 mr-2">✓</span>Custom strategic recommendations</li>
                  <li className="flex items-center"><span className="text-pink-600 mr-2">✓</span>30-minute consultation call</li>
                  <li className="flex items-center"><span className="text-pink-600 mr-2">✓</span>Industry benchmarking report</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading || !formData.firstName || !formData.lastName || !formData.email || !formData.companyName}
                className={getButtonClass()}
              >
                {getButtonContent()}
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
                  <a href="#" className="text-pink-600 hover:text-pink-700 underline font-medium">Privacy Policy</a>
                  . No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Trust Elements */}
        {/* <div className="mt-6 text-center">
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
        </div> */}
      </div>
    </>
  );
};

export default SignupForm;