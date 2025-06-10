'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Star, Play, CheckCircle } from 'lucide-react';

// Using your retail.json data structure
const retailData = {
  "hero": {
    "title": "Revolutionize Retail with AI-Driven Consulting",
    "subtitle": "Unlock Growth, Efficiency, and Customer Loyalty with Next-Gen Retail AI Solutions",
    "description": "Transform Your Retail Business with Artificial Intelligence. Is your retail operation ready to thrive in a fast-changing, data-driven world? Our consulting team specializes in delivering tailored AI solutions that empower retailers to optimize operations, personalize customer experiences, and drive measurable business results.",
    "cta": "Book Your Free AI Consultation",
    "heroImage": "/retail-hero.jpeg"
  },
  "whyChooseUs": {
    "title": "Why Choose Our AI-Driven Retail Consulting?",
    "features": [
      {
        "icon": "🧠",
        "title": "Industry-Leading AI Expertise",
        "description": "Our consultants combine deep retail knowledge with advanced AI, ML, and generative AI technologies to solve your unique business challenges and seize new opportunities"
      },
      {
        "icon": "🔄",
        "title": "End-to-End Solutions",
        "description": "From AI strategy and roadmap development to custom solution integration and ongoing support, we guide you through every step of your digital transformation journey."
      },
      {
        "icon": "📈",
        "title": "Proven Business Impact",
        "description": "Our AI-powered solutions have delivered up to 7% sales uplift, 5pp increase in operating profit margin, and up to 50% boost in EBITDA for leading retailers."
      },
      {
        "icon": "⚡",
        "title": "Seamless Integration",
        "description": "We design and deploy AI systems that fit your existing tech stack, minimizing disruption and maximizing ROI."
      }
    ]
  },
  "services": {
    "title": "Our AI Retail Consulting Services",
    "subtitle": "Comprehensive solutions tailored to your retail needs",
    "servicesList": [
      {
        "title": "AI/ML Strategy & Roadmapping",
        "description": "Define your AI vision and develop a clear, actionable plan tailored to your business goals.",
        "icon": "🎯"
      },
      {
        "title": "Predictive Analytics & Demand Forecasting",
        "description": "Leverage historical data and market trends to optimize inventory, reduce waste, and improve planning accuracy.",
        "icon": "📊"
      },
      {
        "title": "Dynamic Pricing & Merchandising",
        "description": "Implement real-time pricing optimization and AI-driven merchandising for higher margins and better customer engagement.",
        "icon": "💰"
      },
      {
        "title": "Personalization & Customer Insights",
        "description": "Deliver hyper-personalized recommendations and experiences across channels, boosting loyalty and conversion.",
        "icon": "👥"
      },
      {
        "title": "AI-Driven Supply Chain & Inventory Management",
        "description": "Automate inventory tracking, replenishment, and logistics for greater efficiency and resilience.",
        "icon": "📦"
      },
      {
        "title": "AI Agent & Copilot Development",
        "description": "Deploy AI-powered agents for customer service, fraud detection, and omnichannel support.",
        "icon": "🤖"
      },
      {
        "title": "Generative AI & Chatbots",
        "description": "Enhance customer engagement with natural language chatbots and content generation tools.",
        "icon": "💬"
      }
    ]
  },
  "stats": {
    "title": "Proven Results",
    "metrics": [
      {
        "value": "7%",
        "label": "Sales Uplift",
        "description": "Average increase in sales performance"
      },
      {
        "value": "5pp",
        "label": "Operating Profit Margin",
        "description": "Percentage point increase in margins"
      },
      {
        "value": "50%",
        "label": "EBITDA Boost",
        "description": "Enhancement in operational efficiency"
      },
      {
        "value": "3-6",
        "label": "Months to Impact",
        "description": "Time to see measurable results"
      }
    ]
  },
  "process": {
    "title": "Our Proven Process",
    "subtitle": "A systematic approach to retail transformation",
    "steps": [
      {
        "step": "01",
        "title": "Discovery & Analysis",
        "description": "Deep dive into your business needs, current systems, and growth objectives"
      },
      {
        "step": "02",
        "title": "Strategy Development",
        "description": "Create a comprehensive roadmap tailored to your specific retail challenges"
      },
      {
        "step": "03",
        "title": "Implementation",
        "description": "Execute the strategy with precision, ensuring seamless integration and minimal disruption"
      },
      {
        "step": "04",
        "title": "Optimization & Growth",
        "description": "Continuously optimize and innovate to drive sustained business growth"
      }
    ]
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "questions": [
      {
        "question": "What types of AI solutions do you offer?",
        "answer": "We provide strategy consulting, custom AI development, integration, and ongoing support for predictive analytics, personalization, supply chain optimization, dynamic pricing, and more."
      },
      {
        "question": "How quickly can we see results?",
        "answer": "Our agile approach delivers early wins through pilot projects and scalable solutions, with measurable impact often within months."
      },
      {
        "question": "Can you integrate with our existing systems?",
        "answer": "Yes, our solutions are designed for seamless integration with your current platforms and data infrastructure."
      }
    ]
  },
  "cta": {
    "title": "Ready to Accelerate Your Retail Transformation?",
    "subtitle": "Let's explore how our AI-driven solutions can help you outpace the competition and delight your customers.",
    "buttonText": "Book Your Consultation Now",
    "tagline": "Empowering retailers to lead with AI—driving growth, efficiency, and customer satisfaction for the future of retail."
  }
};

export default function RetailPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const navItems = ['Services', 'Process', 'Results', 'FAQ', 'Contact'];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#d51657] to-[#e83e74] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Retail AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-[#d51657] font-medium transition-colors duration-200">
                  {item}
                </a>
              ))}
              <button className="bg-[#d51657] hover:bg-[#e83e74] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-gray-700 hover:text-[#d51657] font-medium">
                  {item}
                </a>
              ))}
              <button className="mt-4 w-full bg-[#d51657] hover:bg-[#e83e74] text-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-red-50 pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d51657]/5 to-[#e83e74]/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-flex items-center bg-[#d51657]/10 text-[#d51657] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="w-4 h-4 mr-2" />
                {retailData.hero.subtitle}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {retailData.hero.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                Transform your retail business with AI. Our consulting team delivers tailored solutions that optimize operations and drive measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-[#d51657] hover:bg-[#e83e74] text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group">
                  {retailData.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-[#d51657] text-[#d51657] hover:bg-[#d51657] hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No Setup Fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Quick Results
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#d51657] to-[#e83e74] rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">AI Performance Dashboard</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Sales Uplift</span>
                        <span className="font-bold text-green-600">+7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Profit Margin</span>
                        <span className="font-bold text-green-600">+5pp</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">EBITDA Boost</span>
                        <span className="font-bold text-green-600">+50%</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-2">AI-Powered</div>
                    <div className="text-lg opacity-90">Retail Intelligence</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-[#d51657]">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="results" className="py-16 bg-[#d51657] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{retailData.stats.title}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {retailData.stats.metrics.map((stat, index) => (
              <div key={index} className={`text-center transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {retailData.whyChooseUs.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailData.whyChooseUs.features.map((feature, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 delay-${index * 100}`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {retailData.services.title}
            </h2>
            <p className="text-xl text-gray-600">{retailData.services.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailData.services.servicesList.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {retailData.process.title}
            </h2>
            <p className="text-xl text-gray-300">{retailData.process.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailData.process.steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-[#d51657] w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mb-6 group-hover:bg-[#e83e74] transition-colors duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                {index < retailData.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-[#d51657] opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {retailData.faq.title}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {retailData.faq.questions.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {openFaq === index && (
                  <div className="bg-white px-6 pb-6 rounded-b-xl -mt-2">
                    <p className="text-gray-700 pt-4 border-t border-gray-100">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#d51657] to-[#e83e74] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {retailData.cta.title}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {retailData.cta.subtitle}
          </p>
          <button className="bg-white text-[#d51657] px-12 py-4 rounded-xl text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl mb-8">
            {retailData.cta.buttonText}
          </button>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {retailData.cta.tagline}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-[#d51657] mb-4">AI Retail Solutions</div>
          <p className="text-gray-400">Transforming retail through artificial intelligence</p>
        </div>
      </footer>
    </div>
  );
}