import React from 'react';
import { ArrowRight, Users, Target, TrendingUp, CheckCircle, Star, Zap, Award, Clock, BarChart3, Briefcase, Settings } from 'lucide-react';
import Link from 'next/link';
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS embedded in head */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-right {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes logo-glow {
            0%, 100% {
              filter: drop-shadow(0 0 8px rgba(220, 38, 127, 0.3));
            }
            50% {
              filter: drop-shadow(0 0 24px rgba(220, 38, 127, 0.6)) drop-shadow(0 0 30px rgba(239, 68, 68, 0.4));
            }
          }

          @keyframes logo-bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0) scale(1);
            }
            40% {
              transform: translateY(-8px) scale(1.05);
            }
            60% {
              transform: translateY(-4px) scale(1.02);
            }
          }

          @keyframes logo-pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }

          .animate-fade-in-right {
            animation: fade-in-right 0.8s ease-out forwards;
          }

          .animate-slide-in {
            animation: slide-in 0.6s ease-out forwards;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-logo-glow {
            animation: logo-glow 3s ease-in-out infinite;
          }

          .animate-logo-bounce {
            animation: logo-bounce 2s ease-in-out infinite;
          }

          .animate-logo-pulse {
            animation: logo-pulse 2s ease-in-out infinite;
          }

          .counter-animation {
            animation: fade-in-up 0.8s ease-out forwards;
          }

          .logo-hover-effect {
            transition: all 0.3s ease;
          }

          .logo-hover-effect:hover {
            transform: scale(1.1) rotate(5deg);
            filter: drop-shadow(0 10px 20px rgba(220, 38, 127, 0.4));
          }
        `
      }} />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-red-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-300 to-red-400 rounded-full opacity-20 animate-pulse"></div>
          <div 
            className="absolute top-1/3 -left-8 w-32 h-32 bg-gradient-to-br from-red-300 to-pink-400 rounded-full opacity-15 animate-bounce" 
            style={{animationDuration: '3s'}}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-25 animate-pulse" 
            style={{animationDelay: '1s'}}
          ></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d51657' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <nav className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              {/* Logo: keep square aspect, center, and clarity */}
              <div className="relative">
                <div className="w-12 h-12 overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-lg logo-hover-effect animate-logo-glow border border-pink-200">
                  <img 
                    src="/logo.png"
                    alt="STAAJ Solutions Logo"
                    className="object-contain w-full h-full"
                    style={{ aspectRatio: "1 / 1" }}
                    draggable={false}
                  />
                </div>
                {/* Animated ring around logo */}
                <div className="absolute -inset-2 border-2 border-pink-300 rounded-full opacity-20 animate-logo-pulse pointer-events-none"></div>
              </div>
              <div className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="font-extrabold tracking-tight">STAAJ</span>
                <span className="text-red-600 font-extrabold tracking-tight">Solutions</span>
              </div>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Scaling your business is hard.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">We're here to help.</span>
                </h1>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We empower small and midsize businesses to scale with confidence through enterprise-level expertise and personalized support.
                </p>
              </div>

              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Link href = '/auth'>
                <button className="group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">Trusted by 50+ businesses</span>
                </div>
              </div>
            </div>

            {/* Right Image with Animation */}
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Video-like animated container */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Business professionals collaborating"
                    className="w-full h-auto"
                  />
                  {/* Animated overlay elements */}
                  <div 
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg p-2 animate-bounce" 
                    style={{animationDelay: '1s'}}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-700">Live Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements with Animation */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-700">Growth Acceleration</span>
                </div>
              </div>
              <div 
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-float" 
                style={{animationDelay: '1s'}}
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-pink-600" />
                  <span className="text-sm font-medium text-gray-700">90-Day Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
       <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution to scale your business effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* STAAJ Lite */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border-2 border-red-100 hover:border-red-300 transform hover:scale-105 group">
            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-200 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">STAAJ Lite</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Customer Journey Excellence through streamlined processes and CRM optimization.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">30-day rapid deployment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">HubSpot CRM integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Process mapping & workflows</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Team training & support</span>
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-medium">
                Quick Start
              </span>
            </div>
            <div className="text-center">
              <Link
                href="/landingpage/#services?service=lite"
                scroll={false}
                className="inline-block px-5 py-2 mt-2 rounded-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow hover:scale-105 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* STAAJ Pro */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border-2 border-pink-100 hover:border-pink-300 transform hover:scale-105 group">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
              <BarChart3 className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">STAAJ Pro</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              End-to-End Lean Operations with real-time dashboards and process optimization.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Real-time performance dashboards</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Lean process optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Advanced CRM workflows</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Strategic planning alignment</span>
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="inline-block bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full font-medium">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <Link
                href="/landingpage/#services?service=pro"
                scroll={false}
                className="inline-block px-5 py-2 mt-2 rounded-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow hover:scale-105 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* STAAJ Enterprise */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border-2 border-orange-100 hover:border-orange-300 transform hover:scale-105 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
              <Briefcase className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">STAAJ Enterprise</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Monthly Team Performance & Growth Support with continuous strategic guidance.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Monthly KPI reviews</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Team coaching & development</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Strategic business planning</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Quarterly roadmap support</span>
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">
                Premium
              </span>
            </div>
            <div className="text-center">
              <Link
                href="/landingpage/#services?service=enterprise"
                scroll={false}
                className="inline-block px-5 py-2 mt-2 rounded-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow hover:scale-105 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border-2 border-purple-100 hover:border-purple-300 transform hover:scale-105 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-200 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
              <Settings className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tailored services for unique business needs and specialized requirements.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Fractional C-Suite services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Sales & marketing support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Technology planning</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Training & development</span>
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
                Bespoke
              </span>
            </div>
            <div className="text-center">
              <Link
                href="/landingpage/#services?service=custom"
                scroll={false}
                className="inline-block px-5 py-2 mt-2 rounded-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow hover:scale-105 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Key Stats */}
      <div className="bg-white mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Logo in stats section */}
            <div className="flex justify-center mb-6">
  <div className="w-16 h-16 overflow-hidden rounded-lg bg-white flex items-center justify-center shadow-lg border border-pink-200 animate-logo-bounce opacity-80 mix-blend-multiply">
    <img 
      src="/logo.png"
      alt="STAAJ Solutions"
      className="object-contain w-full h-full"
      style={{ aspectRatio: "1 / 1" }}
      draggable={false}
    />
  </div>
</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Growing Businesses</h2>
            <p className="text-lg text-gray-600">Our proven track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 counter-animation">4-50</h3>
              <p className="text-gray-600 font-medium">Employee businesses we serve</p>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 counter-animation">$100K-$2.5M</h3>
              <p className="text-gray-600 font-medium">Annual revenue range</p>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 counter-animation">90 Days</h3>
              <p className="text-gray-600 font-medium">Quarterly framework delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="bg-gradient-to-br from-gray-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Quarterly Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide enterprise-level expertise through our comprehensive PPTFM approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* STAAJ Discovery */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-pink-100 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-200 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-red-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">STAAJ Discovery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We perform foundational work to learn what you know about your business and what you don't.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.1s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Business assessment</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.2s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Market analysis</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.3s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Opportunity identification</span>
                </div>
              </div>
            </div>

            {/* STAAJ Growth */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-pink-100 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-pink-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">STAAJ Growth</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide tools and strategies to onboard new customers and grow your revenue.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.4s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Customer acquisition</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.5s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Revenue optimization</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.6s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Market expansion</span>
                </div>
              </div>
            </div>
            {/* STAAJ Efficiency */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-pink-100 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-orange-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">STAAJ Efficiency</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We implement actions to reduce costs and create value opportunities for your business.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.7s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Cost reduction</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.8s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Process optimization</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{animationDelay: '0.9s'}}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Value creation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Final CTA */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div 
            className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce" 
            style={{animationDuration: '4s'}}
          ></div>
          <div 
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse" 
            style={{animationDelay: '2s'}}
          ></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Scale with Confidence?
          </h2>
          <p className="text-xl text-pink-100 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Join successful business leaders who trust STAAJ Solutions to help them reach their full potential.
          </p>
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/auth">
            <button className="group bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}