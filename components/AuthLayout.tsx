'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Image from 'next/image';

// Shared sidebar content
const SidebarContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const journeySteps = [
    { 
      icon: '🎯', 
      title: 'Customer Journey Analysis', 
      description: 'Map your customer touchpoints and identify optimization opportunities',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      icon: '📊', 
      title: 'Operational Maturity Review', 
      description: 'Evaluate your current processes and systems for scalability',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: '⏱️', 
      title: 'Time & Resource Optimization', 
      description: 'Streamline workflows and maximize your team\'s productivity',
      color: 'from-blue-500 to-purple-500'
    },
    { 
      icon: '💼', 
      title: 'Sales & Business Operations', 
      description: 'Align your sales strategy with operational capabilities',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      icon: '📢', 
      title: 'Marketing Awareness Strategy', 
      description: 'Build brand visibility and customer engagement frameworks',
      color: 'from-green-500 to-indigo-500'
    }
  ];

  const stats = [
    { number: '90', label: 'Day Framework', suffix: '' },
    { number: '500', label: 'Businesses Served', suffix: '+' },
    { number: '3x', label: 'Average Growth', suffix: '' },
    { number: '24/7', label: 'Expert Support', suffix: '' }
  ];

  const testimonials = [
    { 
      name: 'Sarah Mitchell', 
      role: 'CEO', 
      company: 'TechFlow Solutions', 
      content: 'The comprehensive approach transformed how we understand our customers and operations.' 
    },
    { 
      name: 'David Chen', 
      role: 'Operations Director', 
      company: 'Growth Dynamics', 
      content: 'Their systematic framework identified gaps we never knew existed. Revenue increased 40%.' 
    },
    { 
      name: 'Lisa Rodriguez', 
      role: 'Founder', 
      company: 'Innovate Labs', 
      content: 'From customer journey to marketing strategy - they covered everything we needed to scale.' 
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Cycle through journey steps
    const stepInterval = setInterval(() => {
      setCurrentStep(i => (i + 1) % journeySteps.length);
    }, 3000);

    // Cycle through testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(i => (i + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>      
      {/* Hero */}
      <div className="space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
          <span className="text-pink-600 font-medium text-sm">🚀 Comprehensive Business Transformation</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Scale Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 block">Strategic Clarity</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Our proven framework examines every aspect of your business to unlock sustainable growth and operational excellence.
        </p>
      </div>

      {/* Journey Framework Showcase */}
      <div className="bg-white rounded-2xl shadow-xl border border-pink-100 p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gray-100 rounded-t-2xl">
          <div 
            className={`h-full bg-gradient-to-r ${journeySteps[currentStep].color} transition-all duration-500 rounded-t-2xl`}
            style={{width: `${((currentStep + 1) / journeySteps.length) * 100}%`}}
          />
        </div>
        
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Our 5-Pillar Framework</h3>
          
          {/* Current Step Display */}
          <div className="mb-8 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 bg-gradient-to-r ${journeySteps[currentStep].color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                {journeySteps[currentStep].icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">{journeySteps[currentStep].title}</h4>
                <p className="text-gray-600">{journeySteps[currentStep].description}</p>
              </div>
            </div>
          </div>

          {/* All Steps Overview */}
          <div className="grid grid-cols-1 gap-3">
            {journeySteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  idx === currentStep 
                    ? 'bg-gradient-to-r from-pink-100 to-purple-100 scale-105' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                  idx === currentStep 
                    ? `bg-gradient-to-r ${step.color} text-white shadow-md` 
                    : 'bg-white text-gray-600'
                }`}>
                  {step.icon}
                </div>
                <span className={`text-sm font-medium ${
                  idx === currentStep ? 'text-gray-800' : 'text-gray-600'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`text-center p-4 rounded-xl bg-white shadow-lg border border-pink-100 transition-all duration-500 hover:shadow-xl hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-1">
              {stat.number}{stat.suffix}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-pink-100">
          <div 
            className="h-full bg-gradient-to-r from-pink-600 to-purple-600 transition-all duration-5000 ease-linear" 
            style={{width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`}} 
          />
        </div>
        <div className="pt-4 flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
            {testimonials[currentTestimonial].name[0]}
          </div>
          <div>
            <p className="text-gray-700 italic mb-2">"{testimonials[currentTestimonial].content}"</p>
            <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
          </div>
        </div>
      </div>

      {/* Trust Elements */}
      <div className="flex items-center justify-center space-x-6 opacity-70">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-pink-600 font-bold text-xs">PROVEN</span>
          </div>
          <p className="text-xs text-gray-600">Framework</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-pink-600 font-bold text-xs">★★★★★</span>
          </div>
          <p className="text-xs text-gray-600">5.0 Rating</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-pink-600 font-bold text-xs">EXPERT</span>
          </div>
          <p className="text-xs text-gray-600">Support</p>
        </div>
      </div>
    </div>
  );
};

export const AuthLayout: React.FC<{children: ReactNode}> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/20 to-purple-50/20">
    {/* Header */}
    <div className="relative overflow-hidden bg-white border-b border-pink-100">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 via-purple-600/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 relative">
            <Image src="/logo.png" alt="STAAJ Solutions Logo" fill className="object-contain" priority/>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">STAAJ Solutions</h1>
            <p className="text-sm text-gray-600">Strategic Business Transformation</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <span className="text-sm text-gray-600">📞 Ready to Scale?</span>
          <span className="text-sm text-gray-600">✉️ Start Your Journey</span>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <SidebarContent />
        {children}
      </div>
    </div>

    <div className="mt-6 text-center py-8">
      <div className="flex items-center justify-center space-x-6 opacity-50">
        <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-pink-100">
          <span className="text-xs font-semibold text-gray-600">SME Growth</span>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-pink-100">
          <span className="text-xs font-semibold text-gray-600">Operational Excellence</span>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-pink-100">
          <span className="text-xs font-semibold text-gray-600">Strategic Planning</span>
        </div>
      </div>
    </div>
  </div>
);