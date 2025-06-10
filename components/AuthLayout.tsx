'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Image from 'next/image';

// Shared sidebar content
const SidebarContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { number: '500+', label: 'Companies Transformed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '2.5x', label: 'Average Growth Rate' },
    { number: '24/7', label: 'Expert Support' }
  ];
  const features = [
    { icon: '🎯', title: 'Strategic Planning', description: 'Comprehensive roadmaps tailored to your business objectives' },
    { icon: '📊', title: 'Performance Analytics', description: 'Data-driven insights to optimize your operations' },
    { icon: '🚀', title: 'Growth Acceleration', description: 'Proven methodologies to scale your business rapidly' },
    { icon: '💡', title: 'Innovation Consulting', description: 'Transform ideas into market-leading solutions' }
  ];
  const testimonials = [
    { name: 'Sarah Chen', role: 'CEO', company: 'TechVision Inc.', content: 'Their strategic insights transformed our operations and doubled our revenue within 8 months.' },
    { name: 'Michael Rodriguez', role: 'Operations Director', company: 'Global Dynamics', content: 'Exceptional expertise in process optimization. Highly recommend their consulting services.' },
    { name: 'Emily Watson', role: 'Founder', company: 'Innovation Labs', content: 'Game-changing strategies that positioned us as industry leaders. Outstanding results.' }
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(i => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>      
      {/* Hero */}
      <div className="space-y-6">
        <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full">
          <span className="text-pink-600 font-medium text-sm">🏆 #1 Rated Consulting Firm</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Transform Your Business with <span className="text-pink-600 block">Expert Consulting</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Join industry leaders who've accelerated their growth through our proven strategies and personalized consulting approach.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className={`text-center p-4 rounded-xl bg-white shadow-lg border border-pink-100 transition-all duration-500 hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${idx * 100}ms` }}>
            <div className="text-2xl font-bold text-pink-600 mb-1">{stat.number}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className={`p-6 bg-white rounded-xl shadow-lg border border-pink-100 transition-all duration-500 hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${(idx + 4) * 100}ms` }}>
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="bg-white rounded-xl shadow-lg border border-pink-100 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-pink-100">
          <div className="h-full bg-pink-600 transition-all duration-4000 ease-linear" style={{width: `${((currentTestimonial+1)/testimonials.length)*100}%`}} />
        </div>
        <div className="pt-4 flex items-start space-x-4">
          <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">{testimonials[currentTestimonial].name[0]}</div>
          <div>
            <p className="text-gray-700 italic mb-2">"{testimonials[currentTestimonial].content}"</p>
            <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex items-center justify-center space-x-8 opacity-60">
        <div className="text-center"><div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2"><span className="text-pink-600 font-bold">ISO</span></div><p className="text-xs text-gray-600">Certified</p></div>
        <div className="text-center"><div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2"><span className="text-pink-600 font-bold">★★★★★</span></div><p className="text-xs text-gray-600">5.0 Rating</p></div>
        <div className="text-center"><div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-2"><span className="text-pink-600 font-bold">24/7</span></div><p className="text-xs text-gray-600">Support</p></div>
      </div>
    </div>
  );
};

export const AuthLayout: React.FC<{children: ReactNode}> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/20 to-white">
    {/* Header */}
    <div className="relative overflow-hidden bg-white border-b border-pink-100">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 relative"><Image src="/logo.png" alt="Company Logo" fill className="object-contain" priority/></div>
          <div><h1 className="text-2xl font-bold text-gray-800">Staaj Solutions</h1><p className="text-sm text-gray-600">Strategic Business Consulting</p></div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <span className="text-sm text-gray-600">📞 +1 (555) 123-4567</span>
          <span className="text-sm text-gray-600">✉️ hello@staaj.com</span>
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
        <div className="px-4 py-2 bg-white rounded-lg shadow-sm border"><span className="text-xs font-semibold text-gray-600">Fortune 500</span></div>
        <div className="px-4 py-2 bg-white rounded-lg shadow-sm border"><span className="text-xs font-semibold text-gray-600">Startups</span></div>
        <div className="px-4 py-2 bg-white rounded-lg shadow-sm border"><span className="text-xs font-semibold text-gray-600">SMEs</span></div>
      </div>
    </div>
    </div>
);