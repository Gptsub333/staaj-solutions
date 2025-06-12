'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Download, CheckCircle, Star, Award, Lightbulb,
  LineChart, Users2, Target, BarChart, Users, Settings, Bot, Cloud,
  Brain, Database, Shield, Network, Phone, Mail, Linkedin, Twitter, ChevronDown, ChevronUp, Menu, X, MapPin, Puzzle, TrendingUp 
} from 'lucide-react';

// --- Animated Typewriter Component ---
interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  className = "",
  typingSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timer = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }
      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }
      } else {
        if (currentText === currentWord) {
          setIsPaused(true);
        } else {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deleteSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deleteSpeed, pauseDuration]);

  return (
    <span className={`${className} inline-block min-h-[1.2em]`}>
      {currentText}
      <span className="animate-pulse text-pink-600">|</span>
    </span>
  );
};

const DotBackground = ({ density = 1, opacity = 0.4, color = "#e5e7eb" }) => (
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      opacity: opacity,
      backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1.5px, transparent 0)`,
      backgroundSize: `${30 / density}px ${30 / density}px`,
      backgroundPosition: "0 0, 15px 15px"
    }}
  />
);
// --- Animated Counter ---
interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const prefix = value.match(/[^0-9.]/g)?.join('') || '';
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const current = Math.floor(numericValue * progress);
      setDisplayValue(prefix + current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {displayValue}
    </motion.div>
  );
};

// --- Main Component ---
const GenericLandingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Typewriter for all industries
  const typewriterWords = [
    "accelerate growth with AI",
    "optimize your workflow",
    "unlock new business value",
    "enhance customer experience",
    "automate operations",
    "make smarter decisions",
    "grow your impact"
  ];

  // Market Statistics (generic, not industry-specific)
  const marketStatistics = [
    {
      title: "AI Market Value",
      value: "$200B",
      growth: "+36% CAGR",
      description: "Estimated by 2030",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Productivity Boost",
      value: "40%",
      growth: "Average with AI",
      description: "Improvement across sectors",
      icon: <LineChart className="w-5 h-5" />
    },
    {
      title: "Businesses Transformed",
      value: "1000+",
      growth: "AI-driven success",
      description: "Companies worldwide",
      icon: <Users2 className="w-5 h-5" />
    },
    {
      title: "Faster Time-to-Market",
      value: "60%",
      growth: "Reduction possible",
      description: "With process automation",
      icon: <Target className="w-5 h-5" />
    }
  ];

  // Services (all-industry)
  const services = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "AI Strategy & Roadmap",
      description: "Define your vision and build a step-by-step plan to adopt and scale AI for sustainable growth.",
      features: [
        "Opportunity assessment",
        "Strategic planning",
        "Tech stack recommendations",
        "Implementation roadmap",
        "Risk mitigation"
      ],
      timeline: "4-6 weeks",
      roi: "Strategic clarity",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description: "Leverage data analytics to forecast trends, optimize processes, and drive informed decisions.",
      features: [
        "Descriptive & predictive analytics",
        "Dashboards & reporting",
        "Forecasting models",
        "Anomaly detection",
        "Real-time monitoring"
      ],
      timeline: "4-8 weeks",
      roi: "Better decisions",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Experience Optimization",
      description: "Personalize engagement and retention using AI-powered tools for all sectors.",
      features: [
        "Segmentation & targeting",
        "Churn prediction",
        "Personalized journeys",
        "Feedback analysis",
        "Sentiment detection"
      ],
      timeline: "6-10 weeks",
      roi: "Stronger loyalty",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Process Automation",
      description: "Automate routine tasks and complex workflows for efficiency, cost savings, and scalability.",
      features: [
        "Robotic process automation",
        "Document & email automation",
        "AI-powered support",
        "Workflow optimization",
        "Resource allocation"
      ],
      timeline: "6-12 weeks",
      roi: "Cost reduction",
      color: "from-pink-500 to-pink-600"
    }
  ];

  // Additional AI Services
  const aiServices = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Assistants & Chatbots",
      description: "Automated support and interaction",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud AI Integration",
      description: "Scalable AI for any platform",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Custom ML Solutions",
      description: "Tailored to your needs",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Architecture",
      description: "AI-ready data pipelines",
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Security",
      description: "Responsible and compliant AI",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "AI as a Service",
      description: "Subscription-based AI tools",
      color: "from-orange-400 to-orange-500"
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Broad Industry Expertise",
      description: "Our AI consultants have hands-on experience across finance, healthcare, retail, logistics, education, and more.",
      stats: "15+ Years Average Industry Experience",
      details: [
        "Deep vertical and cross-industry know-how",
        "Proven history delivering business value",
        "Solutions tailored for any organization"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Measurable Impact",
      description: "We help organizations of all sizes achieve transformative results—improved efficiency, growth, and innovation.",
      stats: "Up to 40% Faster Results",
      details: [
        "Accelerated project delivery",
        "Quick wins and long-term ROI",
        "Clear metrics and reporting"
      ]
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Custom Solutions for You",
      description: "Every engagement is unique. We design, build, and optimize solutions to fit your business, not a template.",
      stats: "100% Tailored Approach",
      details: [
        "Flexible methodology",
        "Integrate with your existing tools",
        "Ongoing optimization"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partner for the Long Run",
      description: "We’re with you from strategy to implementation and continuous improvement.",
      stats: "End-to-End Support",
      details: [
        "Collaborative process",
        "Training and enablement",
        "Continuous support"
      ]
    }
  ];

  // FAQs (generic)
  const faqs = [
    {
      question: "How do you ensure solutions fit any industry?",
      answer: "We start with a discovery session to understand your specific needs, challenges, and context—then design AI solutions tailored for your goals, data, and workflows."
    },
    {
      question: "Can you help migrate legacy systems to AI-powered processes?",
      answer: "Yes. We specialize in seamless integration and transformation, ensuring minimal disruption while maximizing new capabilities."
    },
    {
      question: "When will we see value from AI adoption?",
      answer: "Most organizations see measurable results within weeks or months, depending on the project scope. We focus on quick wins and sustainable improvements."
    },
    {
      question: "What data requirements do you have?",
      answer: "We can work with organizations at any stage of data maturity. If needed, we’ll help you improve data collection, quality, and readiness alongside the AI project."
    },
    {
      question: "How do you ensure responsibility and compliance?",
      answer: "We follow responsible AI practices—bias testing, transparency, and regulatory alignment are built into every project."
    },
    {
      question: "What makes your consulting different?",
      answer: "Our broad, hands-on experience, custom approach, and commitment to measurable outcomes set us apart. We partner closely to deliver real business value."
    }
  ];

  // Framer Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };
  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  // FAQ toggle
  const toggleFaq = (index: number): void => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="relative z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 shadow-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.01 }}>
                <div className="relative">
                  <img
                    src="/logo2.png"
                    alt="Your Company"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-gray-500 font-medium">AI Consulting for Every Industry</div>
                </div>
              </motion.div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <motion.a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</motion.a>
              <motion.a href="#why-us" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Why Us</motion.a>
              <motion.a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">FAQ</motion.a>
            </div>
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                <motion.a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Services
                </motion.a>
                <motion.a href="#why-us" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Why Us
                </motion.a>
                <motion.a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </motion.a>
                <motion.button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                  Book AI Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative py-0 min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/ai-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text legibility */}
        <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-[#222a3d]/70 via-[#1c1f2a]/50 to-[#4066d6]/30 pointer-events-none" />
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-[calc(100vh-5rem)] justify-center">
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center px-4 py-2 mb-6 bg-white/80 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 backdrop-blur-md"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              AI Solutions for Every Industry
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight mb-4"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              Transform <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-pink-400 bg-clip-text text-transparent">Your Business</span> with AI
            </motion.h1>
            <motion.div className="text-lg md:text-xl text-white/90 font-medium min-h-[2.2em] mb-8" variants={fadeIn} initial="hidden" animate="visible">
              <TypewriterText words={typewriterWords} />
            </motion.div>
            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-3 mb-7" variants={fadeIn} initial="hidden" animate="visible">
              <motion.button
                className="bg-gradient-to-r from-purple-500 via-pink-600 to-pink-500 text-white px-7 py-3 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  Book Free AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </motion.button>
              <motion.button
                className="bg-white/90 backdrop-blur-sm text-gray-800 px-7 py-3 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  AI Capabilities Brochure
                </span>
              </motion.button>
            </motion.div>
            {/* Trust Indicators */}
            <motion.div className="flex flex-wrap items-center gap-5" variants={fadeIn} initial="hidden" animate="visible">
              <div className="flex items-center text-sm text-white">
                <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                1000+ Organizations Served
              </div>
              <div className="flex items-center text-sm text-white">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                4.9/5 Client Satisfaction
              </div>
              <div className="flex items-center text-sm text-white">
                <Award className="w-4 h-4 text-blue-200 mr-1" />
                15+ Years AI Experience
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="inline-block px-3 py-1 mb-4 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
              AI for Everyone
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              The Opportunity Across All Sectors
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              AI is transforming every industry, unlocking new efficiencies, growth, and innovation for organizations worldwide.
            </p>
          </motion.div>
          <motion.div className="grid md:grid-cols-4 gap-6 mb-12" variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {marketStatistics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 group"
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">{stat.title}</div>
                  <div className="text-xs text-green-600 font-medium mb-2">{stat.growth}</div>
                  <div className="text-xs text-gray-500">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-16 bg-gray-50 relative">
        <DotBackground density={1} opacity={0.2} color="#919294" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="inline-block px-3 py-1 mb-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
              Why Work With Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              AI Consulting for Any Organization
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine broad industry knowledge with deep AI expertise to deliver solutions for any business or sector.
            </p>
          </motion.div>
          <motion.div className="space-y-12 md:space-y-16" variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}
                variants={fadeIn}
              >
                {/* Image Column */}
                <div className="md:w-2/5 w-full h-64 md:h-auto bg-gray-100 flex items-center justify-center">
                  <img src={`/images/generic-${index + 1}.png`} alt={item.title} className="w-full h-full object-cover" />
                </div>
                {/* Text Column */}
                <div className="md:w-3/5 w-full p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-indigo-600 mb-3 md:mb-4 transition-transform duration-200 inline-block">
                    {React.cloneElement(item.icon, { className: "w-7 h-7 md:w-8 md:h-8" })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">{item.description}</p>
                  <div className="text-sm md:text-base font-semibold text-indigo-700 mb-4">{item.stats}</div>
                  {item.details && item.details.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              Our Services
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              AI Solutions for Every Need
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From strategy to operations, we offer end-to-end AI consulting and implementation for any organization or business process.
            </p>
          </motion.div>
          <motion.div className="space-y-8" variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200/80 hover:shadow-xl transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                  <div className="lg:w-2/5 flex-shrink-0">
                    <div className="flex items-start mb-3">
                      <div className={`bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-200 mr-3 mt-1 p-3 rounded-lg shadow-sm`}>
                        {React.cloneElement(service.icon, { className: "w-7 h-7" })}
                      </div>
                      <div>
                        <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-1">{service.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mb-3">
                          <span className="font-semibold text-green-600">{service.roi}</span>
                          <span className="text-gray-500">{service.timeline}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:w-3/5 space-y-4">
                    <div>
                      <h4 className="text-base font-semibold text-gray-800 mb-2">Key Capabilities:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Additional Services */}
          <motion.div className="mt-16" variants={fadeIn}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">Additional AI Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all text-center"
                  variants={scaleIn}
                  whileHover={{ y: -2, scale: 1.03 }}
                >
                  <div className={`bg-gradient-to-r ${service.color} w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-3 text-white`}>
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{service.title}</h4>
                  <p className="text-xs text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50 relative overflow-hidden">
        <DotBackground density={1} opacity={0.2} color="#919294" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              Questions?
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our AI consulting services for all industries and organizations.
            </p>
          </motion.div>
          <motion.div className="space-y-4" variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                variants={scaleIn}
              >
                <button
                  className="w-full flex justify-between items-center text-left p-6"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-gray-100 text-sm text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerChildren}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" variants={fadeIn}>
              Ready to Begin Your AI Journey?
            </motion.h2>
            <motion.p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto" variants={fadeIn}>
              Let’s talk about how AI can transform your business—no matter your industry or starting point.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={fadeIn}>
              <motion.button
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Consultation
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-pink-600 transition-colors"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Download AI Brochure
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <img src="/logo2.png" alt="Your Company" className="h-8 w-auto mr-2" />
                <span>Your Company</span>
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Empowering organizations to lead with AI—driving smarter growth, higher efficiency, and better outcomes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Experience</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Process Automation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">+1 (800) 000-0000</span>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">contact@yourcompany.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">123 AI Way, Innovation City</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GenericLandingPage;