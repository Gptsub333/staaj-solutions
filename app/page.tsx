import React from 'react';
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  BarChart3,
  Briefcase,
  Settings,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS for subtle animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slide-in {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes pulse-btn {
            0% { transform: scale(1); }
            30% { transform: scale(1.07); }
            50% { transform: scale(1.12); }
            70% { transform: scale(1.07); }
            100% { transform: scale(1); }
          }

          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
          .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
          .animate-slide-in { animation: slide-in 0.6s ease-out forwards; }
          .logo-hover-effect {
            transition: all 0.3s ease;
          }
          .logo-hover-effect:hover {
            transform: scale(1.05) rotate(2deg);
            filter: drop-shadow(0 8px 16px rgba(220, 38, 127, 0.2));
          }
          .getstarted-animated {
            animation: pulse-btn 1.5s infinite;
            will-change: transform;
          }
          .getstarted-animated:hover {
            animation: none;
            /* The pulse stops on hover, but scale is handled by Tailwind */
          }
          .arrow-animated {
            transition: transform 0.3s cubic-bezier(.4,2,.6,1);
          }
          .group:hover .arrow-animated {
            transform: scale(1.7) translateX(0.25rem);
          }
        `,
        }}
      />
      {/* NAVBAR */}
      <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center group" style={{ textDecoration: 'none' }}>
          <div className="h-14 w-auto flex items-center">
            <img
              src="/logo2.png"
              alt="STAAJ Solutions"
              className="object-contain h-12 w-auto logo-hover-effect"
              draggable={false}
              style={{ maxWidth: '220px', height: '48px' }}
            />
          </div>
        </Link>
      </nav>
      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-red-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Scaling your business is hard.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                    We&apos;re here to help.
                  </span>
                </h1>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We empower small and midsize businesses to scale with confidence through enterprise-level expertise and personalized support.
                </p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link href="/auth">
                  <button className="group getstarted-animated bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 arrow-animated" />
                  </button>
                </Link>
              </div>
            </div>
            {/* Right Hero Image */}
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="hero_background.png"
                    alt="Business professionals collaborating"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
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
              <p className="text-gray-600 mb-2 leading-relaxed font-semibold">
                Road to $1M
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For early-stage founders (4–10 people) building toward their first $1M.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Clear, data-informed decision-making</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Burnout-free growth strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Simple systems that scale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Weekly expert support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Go-to-market and ops setup</span>
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
              <p className="text-gray-600 mb-2 leading-relaxed font-semibold">
                Road to $5M
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For growing teams (10–30 people) scaling past $1M toward $5M.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Smarter workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Custom growth roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Strategic help across teams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Workshops to unlock progress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Culture and performance</span>
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
              <p className="text-gray-600 mb-2 leading-relaxed font-semibold">
                Road to $10M
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For established companies (30–50+ people) aiming for $10M and beyond.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Executive-level guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Revenue ops with measurable ROI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Strategic visibility through better data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Cross-team workflow alignment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Infrastructure for sustainable scale</span>
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
                Got business problems? We'll help you solution them.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Executive-level guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Revenue ops with measurable ROI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Strategic visibility through better data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Cross-team workflow alignment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Infrastructure for sustainable scale</span>
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

      {/* TRUST SECTION (Key Stats) */}
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
              <h3 className="text-4xl font-bold text-gray-900 mb-2 counter-animation">4-100</h3>
              <p className="text-gray-600 font-medium">Employee businesses we serve</p>
            </div>
            <div className="text-center bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 counter-animation">$1M-$10M</h3>
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

      {/* OUR APPROACH (Frameworks) */}
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
                We clarify where your business stands and what’s holding it back.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Map current state and team structure</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Identify gaps in product, process, positioning</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Align on short- and long-term business goals</span>
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
                We drive focused growth through better customer strategy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Sharpen your go-to-market plan</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.5s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Improve lead flow and conversions</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Build repeatable sales and onboarding systems</span>
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
                We optimize how your business runs every day.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.7s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Streamline workflows and reduce overhead</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Fix broken handoffs and misused tools</span>
                </div>
                <div className="flex items-center space-x-3 opacity-0 animate-slide-in" style={{ animationDelay: '0.9s' }}>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Create a structure that scales with less stress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Scale with Confidence?
          </h2>
          <p className="text-xl text-pink-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join successful business leaders who trust STAAJ Solutions to help them reach their full potential.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/auth">
              <button className="group getstarted-animated bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 arrow-animated" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}