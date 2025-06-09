'use client';

import React, { useState, useEffect } from 'react';
import type { UserProfile } from '../../types/auth';

interface TechLandingProps {
  userProfile: UserProfile;
}

const TechLanding: React.FC<TechLandingProps> = ({ userProfile }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Digital Transformation',
      icon: '🚀',
      description: 'Modernize your tech stack and optimize workflows for maximum efficiency',
      features: ['Cloud Migration', 'API Integration', 'Automation Solutions', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Product Strategy',
      icon: '💡',
      description: 'Build products that users love and markets demand',
      features: ['Market Analysis', 'User Research', 'Feature Roadmap', 'MVP Development'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Scale Operations',
      icon: '📈',
      description: 'Scale your tech operations without breaking the bank or culture',
      features: ['Team Scaling', 'Process Optimization', 'DevOps Setup', 'Quality Assurance'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, DataFlow AI',
      content: 'Transformed our deployment process from days to hours. Game-changer for our startup.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder, CloudSync',
      content: 'The strategic guidance helped us pivot at the right time. Now we\'re growing 300% YoY.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Watson',
      role: 'VP Engineering, TechNova',
      content: 'Finally have a scalable architecture that grows with us. No more technical debt!',
      rating: 5,
      avatar: '👩‍🔬'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.05%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Floating tech elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            <div className="text-6xl">
              {['💻', '⚡', '🔮', '🌐', '⚙️', '🎯'][i]}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Personalized Greeting */}
              <div className="mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
                  <span className="text-blue-300 text-sm font-medium">
                    Welcome, {userProfile.companyName} 👋
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Scale Your Tech
                </span>
                <br />
                <span className="text-white">Like a Pro</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                {userProfile.businessStage === 'starting' && "Ready to build your tech foundation the right way?"}
                {userProfile.businessStage === 'growing' && "Time to scale your tech without the growing pains."}
                {userProfile.businessStage === 'stuck' && "Let's break through those technical barriers holding you back."}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  <span className="relative z-10">Start My Tech Transformation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center">
                    📞 Book Strategy Call
                  </span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <span className="text-sm font-medium">Trusted by 200+ tech companies</span>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                  <span className="text-sm ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tailored Solutions
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Based on your challenge: "{userProfile.mainChallenge.substring(0, 100)}..."
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 cursor-pointer ${activeService === index ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActiveService(index)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-blue-200">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  
                  <p className="text-blue-100 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-blue-300">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-3xl">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform {userProfile.companyName}?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Your vision: "{userProfile.successVision.substring(0, 120)}..."
                <br />
                Let's make it happen in 90 days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  <span className="relative z-10">Let's Build Your Future 🚀</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default TechLanding;