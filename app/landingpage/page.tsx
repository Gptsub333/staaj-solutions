'use client';

import React, { useState, useEffect, useRef , useCallback} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Download, CheckCircle, Star, Award, Lightbulb,
  LineChart, Users2, Target, BarChart, Users, Settings, Bot, Cloud,
  Brain, Database, Shield, Network, Phone, Mail, Linkedin, Twitter, ChevronDown, ChevronUp, Menu, X, MapPin, Puzzle, TrendingUp,Clock,BookOpenCheck, Briefcase, Megaphone, Sparkles, BarChart3, ChevronLeft, ChevronRight, ExternalLink,} from 'lucide-react';
import { useRouter } from 'next/navigation';


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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const sparkleVariants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const smoothVariants = {
  // Reduced motion for better performance
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 }
  },
  slideIn: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }
};

// Optimized transition settings
const smoothTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.4
};

const quickTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.2
};


// --- Main Component ---
const GenericLandingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const serviceRefs: React.MutableRefObject<(HTMLDivElement | null)[]> = useRef([]);
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement | null>(null); 
  const [showServiceSection, setShowServiceSection] = useState(false);
   const [showServiceDetail, setShowServiceDetail] = React.useState(false);



   useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash.startsWith("#services")) {
      setShowServiceDetail(true);
      const match = hash.match(/service=([a-zA-Z0-9_-]+)/);
      const svcKey = match ? match[1] : "overview";
      const found = services.findIndex(s => s.key === svcKey);
      setSelectedService(found !== -1 ? found : 0);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [sectionRef]);

  // Update URL/hash only if detail is open
  useEffect(() => {
    if (!showServiceDetail) return;
    const key = services[selectedService].key;
    router.replace(
      `${window.location.pathname}${window.location.search}#services?service=${key}`,
      { scroll: false }
    );
  }, [selectedService, showServiceDetail, router]);

  // Navbar handler to open detail view
  const handleNavToServices = React.useCallback(() => {
    setShowServiceDetail(true);
    setSelectedService(0);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    router.replace(`${window.location.pathname}${window.location.search}#services?service=overview`, { scroll: false });
  }, [router, sectionRef]);

  // Close detail view and clear hash
  const handleCloseDetail = () => {
    setShowServiceDetail(false);
    router.replace(`${window.location.pathname}${window.location.search}`, { scroll: false });
  };

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
    key: 'overview',
    title: 'STAAJ Solutions',
    subtitle: 'Service Overview',
    icon: <BookOpenCheck className="w-12 h-12 text-blue-700" />,
    summary: 'Empowering businesses to scale effectively through people-first strategies, operational maturity, and data-driven insights.',
    objective: '',
    features: [
      'STAAJ Lite: Rapid deployment (30 days) of customer journey excellence using HubSpot CRM.',
      'STAAJ Pro: Comprehensive end-to-end operations with real-time dashboards and lean process optimization.',
      'STAAJ Enterprise: Annual program featuring monthly KPI reviews, team coaching, and strategic planning by seasoned experts.',
      'Custom Solutions: Tailored services for unique business needs, including CRM integrations, AI workflows, and training.',
    ],
    ideal: 'Businesses of all sizes looking for scalable, effective, people-driven growth.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    link: '/staaj-services?service=overview'
  },
  {
    key: 'lite',
    title: 'STAAJ Lite',
    subtitle: 'Customer Journey Excellence',
    icon: <Clock className="w-12 h-12 text-red-600" />,
    summary: 'Rapid deployment (30 days) of customer journey excellence using HubSpot CRM.',
    objective: 'Enhance customer experience through streamlined processes and effective CRM utilization.',
    features: [
      'Quick Implementation: Launch within 30 days.',
      'CRM Integration: Optimized HubSpot setup.',
      'Process Mapping: Design and implement customer journey workflows.',
      'Team Training: Equip staff with best practices.',
      'Ongoing Support: Continuous optimization and feedback.',
    ],
    ideal: 'Small to medium-sized businesses aiming to improve customer interactions and satisfaction.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    link: '/staaj-services?service=lite'
  },
  {
    key: 'pro',
    title: 'STAAJ Pro',
    subtitle: 'End-to-End Lean Operations',
    icon: <BarChart3 className="w-12 h-12 text-pink-600" />,
    summary: 'Comprehensive end-to-end operations with real-time dashboards and lean process optimization.',
    objective: 'Achieve operational maturity through streamlined processes and data-driven insights.',
    features: [
      'Comprehensive Dashboards: Real-time performance metrics.',
      'Lean Process Optimization: Eliminate inefficiencies and reduce waste.',
      'Advanced CRM Workflows: Enhanced automation and customer engagement.',
      'Team Development: Ongoing training and support.',
      'Strategic Planning: Align operations with business goals.',
    ],
    ideal: 'Growing businesses seeking to scale operations efficiently and effectively.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    link: '/staaj-services?service=pro'
  },
  {
    key: 'enterprise',
    title: 'STAAJ Enterprise',
    subtitle: 'Monthly Team Performance & Growth Support',
    icon: <Briefcase className="w-12 h-12 text-orange-600" />,
    summary: 'Annual program featuring monthly KPI reviews, team coaching, and strategic planning by seasoned experts.',
    objective: 'Sustain growth and operational excellence through continuous support and strategic planning.',
    features: [
      'Monthly KPI Reviews: Assess and optimize key performance indicators.',
      'Team Coaching: Develop internal capabilities and leadership.',
      'Strategic Business Planning: Adapt to market changes and drive competitive advantage.',
      'Employee & Self-Care Surveys: Monitor and improve team well-being.',
      'Quarterly Roadmap Support: Ensure alignment with long-term goals.',
    ],
    ideal: 'Established businesses aiming to maintain momentum and navigate complex challenges.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    link: '/staaj-services?service=enterprise'
  },
  {
    key: 'custom',
    title: 'Custom Solutions',
    subtitle: 'Tailored Services for Unique Needs',
    icon: <Settings className="w-12 h-12 text-purple-700" />,
    summary: 'Tailored services for unique business needs, including CRM integrations, AI workflows, and training.',
    objective: 'Provide bespoke solutions to address specific business challenges and objectives.',
    features: [
      'Customized CRM Integrations: Tailor CRM systems to business requirements.',
      'AI Workflows: Implement artificial intelligence to enhance operations.',
      'Team Training: Develop skills and knowledge within the team.',
      'Strategic Partnerships: Build and manage business relationships.',
      'Technology Planning: Plan and implement technology strategies.',
    ],
    ideal: 'Businesses with unique needs that require specialized solutions beyond standard offerings.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    link: '/staaj-services?service=custom'
  },
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

   const navigateService = (direction: string) => {
    if (direction === 'prev') {
      setSelectedService(selectedService === 0 ? services.length - 1 : selectedService - 1);
    } else {
      setSelectedService(selectedService === services.length - 1 ? 0 : selectedService + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
     {/* Navigation */}
<motion.nav
  className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm"
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
       <motion.a
          href="#services"
          onClick={e => { e.preventDefault(); handleNavToServices(); }}
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >Services</motion.a>
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
          <source src="https://www.pexels.com/download/video/3192305/" type="video/mp4" />
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
             <motion.div
              className="mb-7 text-base md:text-lg text-white/90 font-medium"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <p>
                Discover how your organization can streamline operations, enhance customer experiences and unlock new opportunities through AI-driven solutions. Our team partners with you from strategy to implementation, ensuring measurable results for businesses of every size and sector.
              </p>
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
   {/* Services Section */}
      <section
        ref={sectionRef}
        id="services"
        className="py-16 bg-gradient-to-br from-gray-50 via-pink-25 to-white relative overflow-hidden"
      >
        {/* Optimized Background Elements - Reduced blur for better performance */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full blur-2xl opacity-40" />
        </div>

        <motion.div
          initial={smoothVariants.fadeInUp.initial}
          whileInView={smoothVariants.fadeInUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothTransition, duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={smoothVariants.scaleIn.initial}
              whileInView={smoothVariants.scaleIn.animate}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 rounded-full text-sm font-semibold border border-pink-200 shadow-md backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              Our Signature Service Suite
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <motion.h2
              initial={smoothVariants.fadeInUp.initial}
              whileInView={smoothVariants.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent mb-4 leading-tight"
            >
              Transformative Solutions for Every Stage of Growth
            </motion.h2>
            <motion.p
              initial={smoothVariants.fadeInUp.initial}
              whileInView={smoothVariants.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: 0.3 }}
              className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              STAAJ Solutions delivers high-value, low-cost transformation in{' '}
              <span className="font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded-lg">30 days</span>.
              We combine people-first expertise with best-practice technology to accelerate your business journey.
            </motion.p>
          </div>

          {/* Service Navigator - Optimized for smoother interactions */}
          <motion.div 
            className="mb-8"
            initial={smoothVariants.fadeInUp.initial}
            whileInView={smoothVariants.fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {services.map((service, index) => (
                <motion.button
                  key={service.key}
                  onClick={() => setSelectedService(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={quickTransition}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedService === index
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg'
                      : 'bg-white/80 text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-pink-200/50'
                  }`}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Featured Service Display - Optimized for smoother transitions */}
          <div className="mb-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={smoothTransition}
                className="absolute inset-0"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-pink-200/50 shadow-xl overflow-hidden">
                  {/* Service Navigation - Improved button interactions */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 border-b border-pink-200/50">
                    <motion.button
                      onClick={() => navigateService('prev')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={quickTransition}
                      className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <ChevronLeft className="w-5 h-5 text-pink-600" />
                    </motion.button>
                    <div className="text-center">
                      <h3 className="text-sm font-semibold text-pink-700">
                        Service {selectedService + 1} of {services.length}
                      </h3>
                    </div>
                    <motion.button
                      onClick={() => navigateService('next')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={quickTransition}
                      className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <ChevronRight className="w-5 h-5 text-pink-600" />
                    </motion.button>
                  </div>

                  {/* Service Content - Fixed height to prevent layout shifts */}
                  <div className="p-8 min-h-[500px]">
                    <div className="flex flex-col lg:flex-row gap-8 h-full">
                      {/* Left Column - Service Info */}
                      <div className="lg:w-2/3">
                        <motion.div 
                          className="flex items-center gap-4 mb-6"
                          initial={smoothVariants.slideIn.initial}
                          animate={smoothVariants.slideIn.animate}
                          transition={{ ...smoothTransition, delay: 0.1 }}
                        >
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-white shadow-lg border border-gray-200">
                            {services[selectedService].icon}
                          </div>
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                              {services[selectedService].title}
                            </h3>
                            <p className="text-pink-600 font-semibold">
                              {services[selectedService].subtitle}
                            </p>
                          </div>
                        </motion.div>
                        
                        <motion.p 
                          className="text-gray-600 text-lg mb-6 leading-relaxed"
                          initial={smoothVariants.fadeInUp.initial}
                          animate={smoothVariants.fadeInUp.animate}
                          transition={{ ...smoothTransition, delay: 0.2 }}
                        >
                          {services[selectedService].summary}
                        </motion.p>
                        
                        {services[selectedService].objective && (
                          <motion.div 
                            className="mb-6"
                            initial={smoothVariants.fadeInUp.initial}
                            animate={smoothVariants.fadeInUp.animate}
                            transition={{ ...smoothTransition, delay: 0.3 }}
                          >
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Objective</h4>
                            <p className="text-gray-600 leading-relaxed">
                              {services[selectedService].objective}
                            </p>
                          </motion.div>
                        )}
                        
                        <motion.div 
                          className="mb-6"
                          initial={smoothVariants.fadeInUp.initial}
                          animate={smoothVariants.fadeInUp.animate}
                          transition={{ ...smoothTransition, delay: 0.4 }}
                        >
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                          <div className="space-y-3">
                            {services[selectedService].features.map((feature, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ ...quickTransition, delay: index * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mt-2 flex-shrink-0" />
                                <p className="text-gray-600 leading-relaxed">{feature}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-200/50"
                          initial={smoothVariants.scaleIn.initial}
                          animate={smoothVariants.scaleIn.animate}
                          transition={{ ...smoothTransition, delay: 0.5 }}
                        >
                          <h4 className="text-sm font-semibold text-pink-700 mb-2">Ideal For</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {services[selectedService].ideal}
                          </p>
                        </motion.div>
                      </div>
                      
                      {/* Right Column - Image */}
                      <motion.div 
                        className="lg:w-1/3"
                        initial={smoothVariants.scaleIn.initial}
                        animate={smoothVariants.scaleIn.animate}
                        transition={{ ...smoothTransition, delay: 0.3 }}
                      >
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 lg:h-full">
                          <img
                            src={services[selectedService].image}
                            alt={services[selectedService].title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Spacer to maintain layout */}
            <div className="invisible min-h-[600px]" />
          </div>

          {/* Bottom Call-to-Action */}
          <motion.div
            className="mt-25 text-center"
            initial={smoothVariants.fadeInUp.initial}
            whileInView={smoothVariants.fadeInUp.animate}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.2 }}
          >
            <div className="mt-20 inline-flex flex-col sm:flex-row items-center gap-4 p-5 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-200/50 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-pink-700 font-semibold text-sm">
                  <Users className="w-4 h-4" />
                  People-First Expertise
                </div>
                <div className="hidden sm:block w-px h-6 bg-pink-300" />
                <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm">
                  <BarChart3 className="w-4 h-4" />
                  Data-Driven Results
                </div>
                <div className="hidden sm:block w-px h-6 bg-pink-300" />
                <div className="flex items-center gap-2 text-pink-700 font-semibold text-sm">
                  <Clock className="w-4 h-4" />
                  Delivered in 30 Days
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
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
        Whether you're optimizing workflows, improving customer touchpoints, or reimagining your business with data, our experts are here to guide you. Let's explore the tangible benefits of AI for your unique goals.
      </motion.p>
      <motion.div className="text-white/80 text-base md:text-lg font-medium" variants={fadeIn}>
        <p>
          We believe in partnership and transparency. Reach out to us to learn how our AI consulting services can help you achieve sustainable growth, innovation, and operational excellence.
        </p>
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