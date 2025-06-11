'use client';


import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Calendar, FileText, Database, Code, Server, Puzzle,
  Building, Rocket, Users, DollarSign, Award, CheckCircle, Phone, Mail,
  Linkedin, Twitter, ChevronDown, ChevronUp, Menu, X, ArrowRight,
  Download, ExternalLink, Star, Coffee, Shield, Clock, Target, Zap,
  Monitor, ShoppingBag, Heart, TrendingUp, BarChart3, Lightbulb,
  Briefcase, Users2, Settings, Play, Eye, Filter,
  Bot, LineChart, PieChart, BarChart, Brain,
  MessageSquare, Video, Search, Network, Layers,
  Smartphone, Cloud, Lock, TrendingDown, ArrowUpRight, ChevronLeft, ChevronRight, MapPin
} from 'lucide-react';


// Custom Typewriter Component
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


// Animated Counter Component
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


const AISaaSGrowthConsulting = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Carousel state for Hero Section
  const [[currentHeroSlide, directionHero], setCurrentHeroSlide] = useState([0, 0]);


  // Auto-scroll for Hero Carousel
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      paginateHero(1); // Move to the next slide
    }, 5000); // Change slide every 5 seconds


    return () => clearInterval(autoScrollInterval); // Clear interval on component unmount
  }, [currentHeroSlide]);


  // SaaS AI growth typewriter words
  const typewriterWords = [
    "accelerate growth with AI",
    "optimize operations",
    "transform customer experience",
    "reduce churn by 40%",
    "maximize your ROI",
    "gain competitive advantage"
  ];


  const toggleFaq = (index: number): void => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };


  // Market Statistics with SaaS & AI focus
  const marketStatistics = [
    {
      title: "SaaS AI Market Growth",
      value: "$120B",
      growth: "+32% CAGR",
      description: "Market size by 2030",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "AI Implementation ROI",
      value: "3.5x",
      growth: "Average return",
      description: "For SaaS companies",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: "Companies Supported",
      value: "350+",
      growth: "Successfully guided",
      description: "Across all SaaS sectors",
      icon: <Users2 className="w-5 h-5" />
    },
    {
      title: "Time-to-Market Reduction",
      value: "50%",
      growth: "Faster deployment",
      description: "With AI integration",
      icon: <Target className="w-5 h-5" />
    }
  ];


  // AI-Driven SaaS Growth Services
  const services = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "AI Strategy & Roadmap Development",
      description: "Define your AI vision and create a step-by-step plan for scalable, long-term growth with a strategic approach to AI implementation in your SaaS offering.",
      features: [
        "AI opportunity assessment and business case development",
        "Strategic planning and capability mapping",
        "Investment prioritization and resource allocation",
        "Competitive landscape analysis",
        "Technology stack recommendations",
        "Implementation timeline and milestone planning",
        "Risk mitigation strategies",
        "AI governance framework development"
      ],
      timeline: "4-6 weeks",
      roi: "Strategic clarity & direction",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Predictive Analytics & Data Insights",
      description: "Leverage your data to forecast trends, optimize product features, and make informed decisions using advanced AI-driven analytics to deliver actionable business intelligence.",
      features: [
        "Customer behavior prediction models",
        "Product usage pattern analysis",
        "Churn prediction and prevention",
        "Revenue forecasting and optimization",
        "Real-time business analytics dashboards",
        "Feature prioritization based on user data",
        "Market trend analysis and forecasting",
        "Anomaly detection and proactive issue resolution"
      ],
      timeline: "6-10 weeks",
      roi: "25-40% improved decision accuracy",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Acquisition & Retention Optimization",
      description: "Use AI to identify high-value customers, reduce churn, and personalize marketing efforts for targeted growth and improved customer lifetime value.",
      features: [
        "AI-powered customer segmentation and targeting",
        "Predictive lead scoring and qualification",
        "Personalized customer journey mapping",
        "Automated engagement strategies",
        "Churn risk identification and prevention",
        "Dynamic pricing optimization",
        "Customer sentiment analysis",
        "Retention program optimization"
      ],
      timeline: "8-12 weeks",
      roi: "30% reduction in customer acquisition cost",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Automated Operations & Process Optimization",
      description: "Streamline workflows and reduce costs with intelligent automation and AI-powered tools that transform manual processes into efficient, scalable operations.",
      features: [
        "Workflow automation implementation",
        "Intelligent document processing",
        "AI-powered customer support systems",
        "DevOps and CI/CD optimization",
        "Resource allocation and capacity planning",
        "Quality assurance automation",
        "Business process reengineering",
        "Cost optimization through AI efficiencies"
      ],
      timeline: "10-14 weeks",
      roi: "Up to 60% operational cost reduction",
      color: "from-pink-500 to-pink-600"
    }
  ];


  // Additional AI Services for SaaS
  const aiServices = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Generative AI & Chatbots",
      description: "AI-driven assistants and content generation tools",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Scalable AI Integration",
      description: "Seamless embedding of AI into existing architecture",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models for your business challenges",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Architecture Optimization",
      description: "Building AI-ready data pipelines and warehouses",
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Security & Compliance",
      description: "Ensuring ethical AI use and data protection",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "AI as a Service Implementation",
      description: "Developing subscription-based AI capabilities",
      color: "from-orange-400 to-orange-500"
    }
  ];


  // Why Partner with Us content
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Specialized AI & SaaS Expertise",
      description: "Our consultants blend deep SaaS industry knowledge with cutting-edge AI capabilities, delivering solutions tailored to your business goals and challenges.",
      stats: "15+ Years Average AI & SaaS Experience",
      details: [
        "Specialized expertise at the intersection of AI and SaaS",
        "Deep understanding of SaaS metrics, business models, and growth levers",
        "Proven track record implementing AI in subscription-based businesses"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Growth Impact",
      description: "SaaS companies leveraging AI-driven consulting see up to 50% faster time-to-market for new features, improved customer retention, and measurable revenue growth.",
      stats: "Up to 50% Faster Time-to-Market",
      details: [
        "Accelerated product development through AI-powered workflows",
        "Improved customer retention through predictive churn modeling",
        "Enhanced revenue through AI-optimized pricing strategies"
      ]
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Custom AI Solutions",
      description: "We develop, integrate, and optimize AI models for your unique needs—whether it's predictive analytics, churn reduction, dynamic pricing, or automated customer engagement.",
      stats: "100% Tailored to Your Business Needs",
      details: [
        "Custom models developed specifically for your use case",
        "AI solutions that integrate with your existing tech stack",
        "Continuous optimization based on your business feedback"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "End-to-End Support",
      description: "From AI strategy and opportunity mapping to model deployment and ongoing optimization, we guide you every step of the way through your AI transformation journey.",
      stats: "Full Lifecycle AI Implementation",
      details: [
        "Comprehensive strategy development and planning",
        "Hands-on implementation and integration support",
        "Continuous optimization and performance monitoring"
      ]
    }
  ];


  // SaaS AI-specific FAQs
  const faqs = [
    {
      question: "How do you tailor AI solutions for each SaaS business?",
      answer: "We start with a discovery session, assess your data and objectives, and develop custom AI models aligned with your unique growth goals and industry needs. Each solution is built specifically for your business context, existing tech stack, and strategic priorities."
    },
    {
      question: "Can you help migrate legacy SaaS products to AI-powered platforms?",
      answer: "Absolutely. We specialize in seamless integration and migration, ensuring minimal disruption and maximum scalability. Our approach focuses on incremental transformation that preserves existing functionality while progressively enhancing capabilities through AI."
    },
    {
      question: "How soon can we see results from AI implementation?",
      answer: "Many clients experience measurable impact within months through agile pilot projects and continuous optimization. We focus on quick wins first, often delivering initial results within 30-90 days, while building toward more comprehensive transformation."
    },
    {
      question: "What data requirements are needed to implement AI solutions?",
      answer: "While more data typically yields better results, we can work with various data maturity levels. Our approach includes assessing your current data assets, identifying gaps, and developing strategies to enhance data collection and quality alongside AI implementation."
    },
    {
      question: "How do you ensure AI solutions remain ethical and unbiased?",
      answer: "We incorporate ethics and bias testing throughout our development process. This includes diverse training data, regular bias audits, transparent AI decision-making processes, and governance frameworks that align with industry best practices and regulatory requirements."
    },
    {
      question: "What makes your AI consulting different from others?",
      answer: "Our specialized focus on the SaaS industry, combined with deep AI expertise and practical implementation experience, sets us apart. We don't just provide recommendations—we partner with you to implement, optimize, and scale AI solutions that deliver measurable business impact."
    }
  ];


  // Success Stories for SaaS AI
  const successStories = [
    {
      title: "Churn Reduction Success",
      description: "Implemented predictive churn models for a B2B SaaS platform, resulting in 42% reduction in customer attrition and $1.2M in preserved annual recurring revenue.",
      metric: "42% churn reduction",
      category: "Customer Retention"
    },
    {
      title: "Conversion Optimization",
      description: "Developed AI-driven personalization engine for a marketing SaaS, increasing trial-to-paid conversion by 35% and boosting average contract value by 28%.",
      metric: "35% higher conversions",
      category: "Growth Optimization"
    },
    {
      title: "Operational Efficiency",
      description: "Automated support ticket routing and resolution for an enterprise SaaS provider, reducing response times by 67% while handling 3x the volume with the same team size.",
      metric: "67% faster response",
      category: "Process Automation"
    }
  ];


  // Framer Motion variants - reusing the same animation styles
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };


  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  const fadeInInPlace = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  // Enhanced dot background component
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


  const paginateHero = (newDirection: number) => {
    setCurrentHeroSlide([currentHeroSlide + newDirection, newDirection]);
  };


  // Carousel variants
  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };


  // Hero carousel data
  const heroCarouselItems = [
    {
      icon: <Brain className="w-10 h-10 text-white" />,
      title: "AI-Powered Growth Acceleration",
      description: "Transform your SaaS business with cutting-edge AI strategies that drive customer acquisition, enhance retention, and unlock new revenue streams.",
      highlightIcon: <TrendingUp className="w-4 h-4 mr-2" />,
      highlightTitle: "Growth Impact:",
      highlightText: "Our clients achieve an average of 40% growth in annual recurring revenue after implementing our AI solutions."
    },
    {
      icon: <Bot className="w-10 h-10 text-white" />,
      title: "Customer Experience Transformation",
      description: "Deliver hyper-personalized experiences that delight customers, reduce churn, and turn users into advocates with intelligent recommendation engines.",
      highlightIcon: <Users className="w-4 h-4 mr-2" />,
      highlightTitle: "Retention Boost:",
      highlightText: "Reduce churn by up to 45% with AI-powered customer insights and personalization."
    },
    {
      icon: <Settings className="w-10 h-10 text-white" />,
      title: "Operational Excellence",
      description: "Streamline workflows, reduce costs, and increase team productivity with AI automation that transforms how your SaaS business operates.",
      highlightIcon: <Target className="w-4 h-4 mr-2" />,
      highlightTitle: "Efficiency Gain:",
      highlightText: "Achieve up to 60% improvement in operational efficiency through intelligent process automation."
    }
  ];


  const heroSlideIndex = ((currentHeroSlide % heroCarouselItems.length) + heroCarouselItems.length) % heroCarouselItems.length;
  const currentHeroItem = heroCarouselItems[heroSlideIndex];
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;


  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global Enhanced Background */}
      <DotBackground density={1.2} opacity={0.25} color="#919294" />
     
      {/* Professional Navigation */}
      <motion.nav
        className="relative z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 shadow-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <div className="relative">
                  <img
                    src="/logo2.png" // Assume the logo exists
                    alt="STAAJ AI Solutions"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-gray-500 font-medium">Leading AI SaaS Consulting Firm</div>
                </div>
              </motion.div>
            </div>


            <div className="hidden lg:flex items-center space-x-8">
              <motion.a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" whileHover={{ y: -1 }}>
                Services
              </motion.a>
              <motion.a href="#why-us" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" whileHover={{ y: -1 }}>
                Why Choose Us
              </motion.a>
              <motion.a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors" whileHover={{ y: -1 }}>
                FAQ
              </motion.a>
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


        {/* Mobile menu */}
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
                  Why Choose Us
                </motion.a>
                <motion.a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </motion.a>
                <motion.button
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book AI Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50/50 py-12 lg:py-16 overflow-hidden min-h-[calc(100vh-5rem)]">
        <DotBackground density={1} opacity={0.3} color="#919294" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {/* Specialty Badge */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700"
                variants={scaleIn}
              >
                <Brain className="w-4 h-4 mr-2" />
                Accelerate SaaS Growth with AI-Driven Consulting
              </motion.div>


              {/* Main Headline */}
              <motion.div variants={fadeIn} className='h-auto md:h-48'>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                  Transform Your SaaS{' '}
                  <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-purple-500 via-pink-600 to-pink-400 bg-clip-text text-transparent">
                    with Advanced AI
                  </span>
                </h1>
              </motion.div>


              {/* Subheadline */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
                variants={slideInLeft}
              >
                Is your SaaS company ready to outpace the competition, optimize operations, and deliver
                <span className="font-semibold text-gray-800"> personalized customer experiences?</span> Our AI-based growth consulting empowers SaaS
                businesses to harness the latest in artificial intelligence, machine learning, and data
                analytics—driving sustainable growth and maximizing ROI.
              </motion.p>


              {/* Key Benefits */}
              <motion.div
                className="grid sm:grid-cols-3 gap-3"
                variants={staggerChildren}
              >
                {[
                  { icon: <Brain className="w-5 h-5" />, title: "AI-Powered", desc: "ML & AI expertise", color: "from-blue-500 to-blue-600" },
                  { icon: <Database className="w-5 h-5" />, title: "Data-Driven", desc: "Actionable insights", color: "from-green-500 to-green-600" },
                  { icon: <TrendingUp className="w-5 h-5" />, title: "Growth-Focused", desc: "Results guaranteed", color: "from-pink-500 to-pink-600" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-200/60 hover:shadow-md transition-all duration-300"
                    variants={scaleIn}
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`bg-gradient-to-r ${benefit.color} text-white p-1 rounded-lg mr-2`}>{benefit.icon}</div>
                      <div className="font-bold text-gray-900 text-sm">{benefit.title}</div>
                    </div>
                    <div className="text-xs text-gray-600">{benefit.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
           
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                variants={fadeIn}
              >
                <motion.button
                  className="bg-gradient-to-r from-purple-500 via-pink-600 to-pink-500 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    Book Free AI Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </motion.button>
               
                <motion.button
                  className="bg-white/95 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <Download className="mr-2 h-5 w-5" />
                    AI Growth Capabilities Brochure
                  </span>
                </motion.button>
              </motion.div>


              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap items-center gap-4 pt-4"
                variants={fadeIn}
              >
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  350+ SaaS Companies Supported
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  4.9/5 Client Satisfaction
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 text-blue-500 mr-1" />
                  12+ Years AI Experience
                </div>
              </motion.div>
            </motion.div>


            {/* Right Column */}
<motion.div
  className="relative flex items-center justify-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={slideInRight}
>
  <motion.div
    className="bg-gradient-to-br from-white via-blue-50 to-purple-50/80 p-8 rounded-2xl shadow-2xl border border-gray-200/60 text-center space-y-6 w-full max-w-md"
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <motion.div
      className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <Brain className="w-10 h-10 text-white" />
    </motion.div>
    
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        AI-Powered Growth Acceleration
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Transform your SaaS business with cutting-edge AI strategies that drive customer acquisition, 
        enhance retention, and unlock new revenue streams.
      </p>
    </div>

    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 text-left">
      <div className="text-sm font-semibold text-green-800 mb-1 flex items-center">
        <TrendingUp className="w-4 h-4 mr-2" />
        Growth Impact
      </div>
      <div className="text-sm text-green-700">
        Our clients achieve an average of 40% growth in annual recurring revenue after implementing our AI solutions.
      </div>
    </div>

    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
      <div className="flex items-center">
        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
        Proven Results
      </div>
      <div className="flex items-center">
        <Shield className="w-4 h-4 text-blue-500 mr-1" />
        Enterprise Grade
      </div>
    </div>
  </motion.div>
</motion.div>
          </div>
          </div>
        </section>
      {/* You may have more sections here... */}


      {/* Market Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
              Market Insights
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              AI-Powered SaaS: The Growth Opportunity
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The AI-enabled SaaS market is experiencing explosive growth, creating unprecedented
              opportunities for companies that successfully integrate artificial intelligence into their offerings.
            </p>
          </motion.div>
         
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-12"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {marketStatistics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 group"
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
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


          {/* Success Stories Preview */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300"
                variants={scaleIn}
                whileHover={{ y: -2 }}
              >
                <div className="text-xs text-blue-600 font-semibold mb-2">{story.category}</div>
                <h4 className="font-bold text-gray-900 mb-2">{story.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{story.description}</p>
                <div className="text-lg font-bold text-blue-600">{story.metric}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 bg-gray-50 relative">
        <DotBackground density={1} opacity={0.2} color="#919294" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
              Why Partner With Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              AI SaaS Growth Consultants
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine deep SaaS industry knowledge with cutting-edge AI expertise to deliver solutions that drive measurable business impact.
            </p>
          </motion.div>
         
          <motion.div
            className="space-y-12 md:space-y-16"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group overflow-hidden
                            flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}
                variants={fadeInInPlace}
              >
                {/* Image Column */}
                <div className="md:w-2/5 w-full h-64 md:h-auto bg-gray-100">
                  <img
                    src={`/${index + 1}.jpeg`} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Text Column */}
                <div className="md:w-3/5 w-full p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-indigo-600 mb-3 md:mb-4 transition-transform duration-200 inline-block">
                    {React.cloneElement(item.icon, { className: "w-7 h-7 md:w-8 md:h-8" })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">{item.description}</p>
                  <div className="text-sm md:text-base font-semibold text-indigo-700 mb-4">{item.stats}</div>
                  {/* Added details rendering */}
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


      {/* Our Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              Our Services
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              AI-Driven SaaS Growth Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions to accelerate your SaaS growth, optimize operations,
              and deliver exceptional customer experiences.
            </p>
          </motion.div>
         
          <motion.div
            className="space-y-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
            <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">Additional AI Services for SaaS</h3>
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
     
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50 relative overflow-hidden">
        <DotBackground density={1} opacity={0.2} color="#919294" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our AI-driven SaaS consulting services and how we can help your business grow.
            </p>
          </motion.div>
         
          <motion.div
            className="space-y-4"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={fadeIn}
            >
              Ready to Scale Your SaaS with AI?
            </motion.h2>
           
            <motion.p
              className="text-lg mb-8 text-white/90 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              Let's discuss your business challenges and explore how AI-driven strategies can help you
              achieve your next stage of growth.
            </motion.p>


            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
            >
              <motion.button
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Consultation Now
              </motion.button>
             
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-pink-600 transition-colors"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Download AI Growth Capabilities Brochure
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Footer with Contact Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <img src="/logo2.png" alt="STAAJ AI Solutions" className="h-8 w-auto mr-2" />
                <span>STAAJ AI Solutions</span>
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Empowering SaaS companies to lead with AI—driving smarter growth, higher efficiency, and exceptional customer experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
           
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Strategy & Roadmap</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Predictive Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Acquisition & Retention</a></li>
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
              <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">+1 (800) 456-7890</span>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">contact@staajai.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">123 AI Innovation Way, San Francisco, CA 94107</span>
                </div>
              </div>
            </div>
          </div>
         
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} STAAJ AI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default AISaaSGrowthConsulting;
