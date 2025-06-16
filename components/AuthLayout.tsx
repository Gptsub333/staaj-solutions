'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Image from 'next/image';

// Sidebar with distinct animation (scale + fade, origin-left)
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
      description: 'Align your sales strategy with operational capabilities for growth',
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
      content: 'The comprehensive approach transformed how we understand our customers and operations.',
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      name: 'David Chen', 
      role: 'Operations Director', 
      company: 'Growth Dynamics', 
      content: 'Their systematic framework identified gaps we never knew existed. Revenue increased 40%.',
      color: 'from-amber-500 to-orange-500'
    },
    { 
      name: 'Lisa Rodriguez', 
      role: 'Founder', 
      company: 'Innovate Labs', 
      content: 'From customer journey to marketing strategy - they covered everything we needed to scale.',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialProgress, setTestimonialProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Cycle through journey steps
    const stepInterval = setInterval(() => {
      setCurrentStep(i => (i + 1) % journeySteps.length);
    }, 3000);

    // Cycle through testimonials with animated progress
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(i => (i + 1) % testimonials.length);
      setTestimonialProgress(0); // Reset progress when switching testimonials
    }, 5000);

    // Animate testimonial progress
    const progressInterval = setInterval(() => {
      setTestimonialProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 2; // Increment by 2% every 100ms for smooth animation
      });
    }, 100);

    return () => {
      clearInterval(stepInterval);
      clearInterval(testimonialInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <aside
      className={`
        space-y-8
        transition-transform transition-opacity duration-1000 ease-out
        ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        origin-left
      `}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Hero */}
      <div className="space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
          <span className="text-pink-600 font-medium text-sm">🚀 Comprehensive Business Transformation</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Scale Your Business with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 block">
            Strategic Clarity
          </span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Our proven framework examines every aspect of your business to unlock sustainable growth and operational excellence.
        </p>
      </div>

      {/* Journey Framework Showcase - KEEPS ORIGINAL TOP PROGRESS BAR */}
      <div className="bg-white rounded-2xl shadow-xl border border-pink-100 p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gray-100 rounded-t-2xl">
          <div
            className={`h-full bg-gradient-to-r ${journeySteps[currentStep].color} transition-all duration-500 rounded-t-2xl`}
            style={{ width: `${((currentStep + 1) / journeySteps.length) * 100}%` }}
          />
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Our 5-Pillar Framework</h3>

          {/* Current Step Display */}
          <div className="mb-8 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl animate-stepfadein">
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
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                    idx === currentStep
                      ? `bg-gradient-to-r ${step.color} text-white shadow-md`
                      : 'bg-white text-gray-600'
                  }`}
                >
                  {step.icon}
                </div>
                <span
                  className={`text-sm font-medium ${
                    idx === currentStep ? 'text-gray-800' : 'text-gray-600'
                  }`}
                >
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
            className={`
              text-center p-4 rounded-xl bg-white shadow-lg border border-pink-100 transition-all duration-500 hover:shadow-xl hover:scale-105
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-1">
              {stat.number}
              {stat.suffix}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonial - NEW CIRCULAR PROGRESS ANIMATION */}
      <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 relative overflow-hidden">
        {/* Circular Progress Indicator */}
        <div className="absolute top-4 right-4 w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#f3f4f6"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="url(#testimonialGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - testimonialProgress / 100)}`}
              className="transition-all duration-100 ease-linear"
            />
            <defs>
              <linearGradient id="testimonialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-6 h-6 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
              {currentTestimonial + 1}
            </div>
          </div>
        </div>

        {/* Testimonial Dots Indicator */}
        <div className="flex space-x-2 mb-4">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentTestimonial
                  ? `bg-gradient-to-r ${testimonials[currentTestimonial].color} scale-125`
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="flex items-start space-x-4 animate-testimonialfadein">
          <div className={`w-12 h-12 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
            {testimonials[currentTestimonial].name[0]}
          </div>
          <div className="flex-1">
            <p className="text-gray-700 italic mb-2">"{testimonials[currentTestimonial].content}"</p>
            <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm text-gray-600">
              {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
            </p>
          </div>
        </div>

        {/* Bottom progress bar with different style */}
        <div className="mt-4 w-full h-1 bg-gray-100 rounded-full">
          <div
            className={`h-full bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full transition-all duration-100 ease-linear`}
            style={{ width: `${testimonialProgress}%` }}
          />
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
    </aside>
  );
};

export const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/20 to-purple-50/20">
    {/* Header */}
    <div className="relative overflow-hidden bg-white border-b border-pink-100">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 via-purple-600/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 relative">
            <Image src="/logo.png" alt="STAAJ Solutions Logo" fill className="object-contain" priority />
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
      {/* 2-column grid: sidebar animates, form stays static */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <SidebarContent />
        {/* Make sure the form column has NO animation classes */}
        <section className="w-full flex justify-center items-center">
          {children}
        </section>
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