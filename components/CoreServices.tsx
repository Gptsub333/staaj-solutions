import { Clock, BarChart3, Briefcase, Settings, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CoreServicesHomeSection() {
  return (
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
                href="/#services?service=lite"
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
                href="/#services?service=pro"
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
                href="/#services?service=enterprise"
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
                href="/#services?service=custom"
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
  );
}