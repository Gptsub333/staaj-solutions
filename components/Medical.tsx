// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { Calendar, FileText, Gavel, Microscope, Factory, Clipboard, Hospital,
//   Building, Rocket, Users, DollarSign, Award, CheckCircle, Phone, Mail,
//   Linkedin, Twitter, ChevronDown, ChevronUp, Menu, X, ArrowRight,
//   Download, ExternalLink, Star, Coffee, Shield, Clock, Target, Zap,
//   Monitor, ShoppingBag, Heart, TrendingUp, BarChart3, Lightbulb,
//   Briefcase, Users2, Database, Settings, Play,
//   Stethoscope, Activity, HeartHandshake, Brain, Tablet, Beaker, Globe,
//   MapPin, Calculator, PieChart, BarChart, LineChart, Users as Team,
//   Wrench, Cog, FileCheck, AlertCircle, BookOpen, GraduationCap,
//   MessageSquare, Video, Search, Filter, Layers, Network, Zap as Lightning } from 'lucide-react';

// // Custom Typewriter Component
// interface TypewriterTextProps {
//   words: string[];
//   className?: string;
//   typingSpeed?: number;
//   deleteSpeed?: number;
//   pauseDuration?: number;
// }

// const TypewriterText: React.FC<TypewriterTextProps> = ({
//   words,
//   className = "",
//   typingSpeed = 100,
//   deleteSpeed = 50,
//   pauseDuration = 2000
// }) => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const currentWord = words[currentWordIndex];
    
//     const timer = setTimeout(() => {
//       if (isPaused) {
//         setIsPaused(false);
//         setIsDeleting(true);
//         return;
//       }

//       if (isDeleting) {
//         if (currentText === '') {
//           setIsDeleting(false);
//           setCurrentWordIndex((prev) => (prev + 1) % words.length);
//         } else {
//           setCurrentText(currentWord.substring(0, currentText.length - 1));
//         }
//       } else {
//         if (currentText === currentWord) {
//           setIsPaused(true);
//         } else {
//           setCurrentText(currentWord.substring(0, currentText.length + 1));
//         }
//       }
//     }, isPaused ? pauseDuration : isDeleting ? deleteSpeed : typingSpeed);

//     return () => clearTimeout(timer);
//   }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deleteSpeed, pauseDuration]);

//   return (
//     <span className={`${className} inline-block min-h-[1.2em]`}>
//       {currentText}
//       <span className="animate-pulse text-pink-600">|</span>
//     </span>
//   );
// };

// const MedTech = () => {
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeCase, setActiveCase] = useState(0);
//   const [activeTab, setActiveTab] = useState(0);

//   // Enhanced typewriter words for medical technology
//   const typewriterWords = [
//     "navigate FDA approvals",
//     "accelerate time-to-market", 
//     "scale operations efficiently",
//     "secure funding faster",
//     "optimize clinical trials"
//   ];

//   // Auto-rotate case studies
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCase(prev => (prev + 1) % caseStudies.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const toggleFaq = (index: number): void => {
//     setExpandedFaq(expandedFaq === index ? null : index);
//   };

//   // Comprehensive Medical Technology Content
//   const marketStatistics = [
//     {
//       title: "Global Medical Device Market",
//       value: "$432.6B",
//       growth: "+5.4% CAGR",
//       description: "Expected to reach $671.8B by 2030"
//     },
//     {
//       title: "FDA Approvals Annual",
//       value: "~3,500",
//       growth: "+12% YoY",
//       description: "510(k) clearances and PMA approvals"
//     },
//     {
//       title: "Average Development Time",
//       value: "3-7 years",
//       growth: "25% reduction possible",
//       description: "From concept to market with expert guidance"
//     },
//     {
//       title: "Investment Required",
//       value: "$31M",
//       growth: "Average Series A",
//       description: "For medical device development"
//     }
//   ];

//   const industryTrends = [
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "AI & Machine Learning Integration",
//       description: "Medical devices increasingly incorporate AI for diagnostics, predictive analytics, and personalized treatment recommendations.",
//       impact: "45% of new devices by 2025",
//       applications: ["Diagnostic imaging", "Drug discovery", "Patient monitoring", "Treatment optimization"]
//     },
//     {
//       icon: <Monitor className="w-8 h-8" />,
//       title: "Remote Patient Monitoring",
//       description: "Telehealth expansion drives demand for connected devices that enable continuous patient monitoring from home.",
//       impact: "$2.3B market by 2028",
//       applications: ["Cardiac monitoring", "Diabetes management", "Post-surgical care", "Chronic disease tracking"]
//     },
//     {
//       icon: <Network className="w-8 h-8" />,
//       title: "IoT & Connected Devices",
//       description: "Internet of Medical Things (IoMT) creates new opportunities for data collection and real-time health insights.",
//       impact: "30B+ connected devices",
//       applications: ["Smart implants", "Wearable sensors", "Hospital equipment", "Home health devices"]
//     },
//     {
//       icon: <Lightning className="w-8 h-8" />,
//       title: "Personalized Medicine",
//       description: "Precision medicine drives development of targeted therapies and companion diagnostics tailored to individual patients.",
//       impact: "$3.4T market potential",
//       applications: ["Genetic testing", "Biomarker analysis", "Targeted therapies", "Companion diagnostics"]
//     }
//   ];

//   const regulatoryLandscape = [
//     {
//       region: "United States",
//       icon: "🇺🇸",
//       authority: "FDA",
//       pathways: [
//         { name: "510(k) Premarket Notification", timeline: "3-6 months", complexity: "Moderate" },
//         { name: "Premarket Approval (PMA)", timeline: "12-18 months", complexity: "High" },
//         { name: "De Novo Classification", timeline: "8-12 months", complexity: "High" },
//         { name: "Breakthrough Device Designation", timeline: "6-10 months", complexity: "Variable" }
//       ],
//       requirements: "Quality Management System (QMS), Clinical data, Risk analysis, Labeling"
//     },
//     {
//       region: "European Union",
//       icon: "🇪🇺",
//       authority: "Notified Bodies",
//       pathways: [
//         { name: "CE Mark Class I", timeline: "1-3 months", complexity: "Low" },
//         { name: "CE Mark Class IIa/IIb", timeline: "6-12 months", complexity: "Moderate" },
//         { name: "CE Mark Class III", timeline: "12-24 months", complexity: "High" }
//       ],
//       requirements: "MDR Compliance, Technical documentation, Clinical evaluation, Post-market surveillance"
//     },
//     {
//       region: "Canada",
//       icon: "🇨🇦",
//       authority: "Health Canada",
//       pathways: [
//         { name: "Medical Device License", timeline: "4-8 months", complexity: "Moderate" },
//         { name: "Investigational Testing", timeline: "2-4 months", complexity: "Low" }
//       ],
//       requirements: "Quality system certification, Clinical evidence, Risk management"
//     }
//   ];

//   const challenges = [
//     {
//       icon: <Gavel className="w-12 h-12" />,
//       title: "Regulatory Compliance",
//       description: "Navigating complex FDA approval processes, quality standards, and compliance requirements that can delay market entry by 12-24 months. Each device classification requires specific documentation, clinical evidence, and risk assessments.",
//       impact: "Average 18-month delays",
//       stats: "78% struggle with regulatory pathways",
//       solutions: [
//         "Early regulatory strategy development",
//         "Pre-submission meetings with FDA",
//         "Quality management system implementation",
//         "Clinical trial protocol optimization"
//       ],
//       costImplications: "$2-5M in additional expenses for delays"
//     },
//     {
//       icon: <DollarSign className="w-12 h-12" />,
//       title: "Funding & Investment",
//       description: "Medical technology requires significant capital for R&D, clinical trials, manufacturing scale-up, and regulatory approval. The average medical device startup needs $31M in Series A funding.",
//       impact: "$2-5M funding gap",
//       stats: "65% underfunded for growth",
//       solutions: [
//         "Investor readiness optimization",
//         "Strategic partnership development",
//         "Grant application assistance",
//         "Financial modeling and projections"
//       ],
//       costImplications: "70% higher valuation with proper preparation"
//     },
//     {
//       icon: <Factory className="w-12 h-12" />,
//       title: "Manufacturing Scale-Up",
//       description: "Transitioning from prototype to mass production while maintaining quality, regulatory compliance, and cost-effectiveness. Manufacturing represents 40-60% of total product costs.",
//       impact: "60% cost overruns",
//       stats: "Manufacturing delays common",
//       solutions: [
//         "Supply chain optimization",
//         "Quality assurance implementation",
//         "Cost reduction strategies",
//         "Technology transfer management"
//       ],
//       costImplications: "35% cost reduction with optimization"
//     },
//     {
//       icon: <Users className="w-12 h-12" />,
//       title: "Clinical Development",
//       description: "Designing and executing clinical trials that generate sufficient evidence for regulatory approval while managing costs and timelines. Clinical trials can cost $1-10M depending on complexity.",
//       impact: "Average $5M trial cost",
//       stats: "40% of trials fail endpoints",
//       solutions: [
//         "Protocol design optimization",
//         "Site selection and management",
//         "Patient recruitment strategies",
//         "Data analysis and reporting"
//       ],
//       costImplications: "50% time reduction with proper planning"
//     },
//     {
//       icon: <Globe className="w-12 h-12" />,
//       title: "Market Access & Reimbursement",
//       description: "Securing coverage and reimbursement from insurance providers is critical for commercial success. Health economics data is increasingly required for market access.",
//       impact: "18-month reimbursement timeline",
//       stats: "30% struggle with payer coverage",
//       solutions: [
//         "Health economics analysis",
//         "Real-world evidence generation",
//         "Payer engagement strategy",
//         "Value proposition development"
//       ],
//       costImplications: "3x revenue potential with coverage"
//     }
//   ];

//   const solutions = [
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Regulatory Strategy & FDA Pathway",
//       description: "Comprehensive regulatory strategy development from concept through post-market surveillance. Our experts guide you through the optimal regulatory pathway, ensuring efficient approvals while maintaining compliance.",
//       features: [
//         "FDA Submission Strategy & Pre-submission meetings",
//         "Quality Management System (ISO 13485) implementation",
//         "Clinical Trial Protocol Development & IND submissions",
//         "Regulatory Documentation & Technical writing",
//         "Post-Market Surveillance & Adverse event reporting",
//         "International regulatory strategy (EU MDR, Health Canada)"
//       ],
//       timeline: "6-12 months",
//       roi: "Reduce approval time by 40%",
//       processSteps: [
//         "Initial regulatory assessment and pathway identification",
//         "Pre-submission strategy and FDA meeting preparation",
//         "Documentation development and quality system setup",
//         "Submission preparation and regulatory filing",
//         "FDA interaction management and response handling",
//         "Approval and post-market compliance maintenance"
//       ],
//       expertise: "15+ years regulatory experience, 200+ successful submissions"
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Go-to-Market Strategy",
//       description: "Data-driven market entry strategies that accelerate adoption and revenue growth. We analyze market dynamics, competitive landscape, and customer needs to develop winning commercial strategies.",
//       features: [
//         "Market Analysis & Sizing with competitive intelligence",
//         "Customer Segmentation & Value proposition development",
//         "Pricing Strategy & Revenue model optimization",
//         "Distribution Channel Development & Partnership strategy",
//         "Sales Force Planning & Training programs",
//         "Marketing & Brand strategy development"
//       ],
//       timeline: "3-6 months",
//       roi: "Accelerate revenue by 60%",
//       processSteps: [
//         "Market research and competitive analysis",
//         "Customer discovery and needs assessment",
//         "Value proposition and positioning development",
//         "Channel strategy and partnership identification",
//         "Sales and marketing plan creation",
//         "Launch execution and performance monitoring"
//       ],
//       expertise: "50+ successful medical device launches, $2B+ revenue generated"
//     },
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Operational Excellence",
//       description: "End-to-end operational optimization from R&D through manufacturing and distribution. We streamline processes, reduce costs, and ensure scalable growth while maintaining quality standards.",
//       features: [
//         "Process Optimization & Lean manufacturing implementation",
//         "Supply Chain Management & Vendor qualification",
//         "Quality Assurance Systems & Risk management",
//         "Cost Reduction & Efficiency improvement programs",
//         "Technology Transfer & Manufacturing scale-up",
//         "Digital Transformation & Automation strategy"
//       ],
//       timeline: "4-8 months",
//       roi: "Reduce operational costs by 35%",
//       processSteps: [
//         "Current state assessment and gap analysis",
//         "Process mapping and optimization design",
//         "Quality system implementation and validation",
//         "Supply chain optimization and cost reduction",
//         "Technology implementation and training",
//         "Continuous improvement and monitoring"
//       ],
//       expertise: "300+ process improvements, $50M+ cost savings delivered"
//     },
//     {
//       icon: <Rocket className="w-8 h-8" />,
//       title: "Funding & Investment Support",
//       description: "Strategic guidance for fundraising, investor relations, and financial planning across all growth stages. We help you tell your story effectively and connect with the right investors.",
//       features: [
//         "Investor Readiness Assessment & Strategy development",
//         "Pitch Deck Development & Financial modeling",
//         "Due Diligence Preparation & Data room setup",
//         "Valuation Analysis & Negotiation support",
//         "Strategic Partnership Development & Alliance structuring",
//         "Grant Application & Non-dilutive funding pursuit"
//       ],
//       timeline: "2-4 months",
//       roi: "Increase funding success by 70%",
//       processSteps: [
//         "Investment readiness assessment and strategy",
//         "Financial model development and scenario planning",
//         "Pitch materials creation and story development",
//         "Investor identification and outreach coordination",
//         "Due diligence management and negotiation support",
//         "Closing coordination and post-investment planning"
//       ],
//       expertise: "$500M+ raised for clients, 200+ investor connections"
//     }
//   ];

//   const caseStudies = [
//     {
//       company: "CardioTech Innovations",
//       sector: "Cardiovascular Devices",
//       challenge: "FDA approval delays for novel cardiac monitoring device and manufacturing scale-up issues. The company faced 18-month delays due to incomplete regulatory documentation and quality system deficiencies.",
//       solution: "Comprehensive regulatory strategy including FDA pre-submission meetings, quality management system implementation, and manufacturing optimization. We developed a clear 510(k) pathway and implemented ISO 13485 compliance.",
//       result: "Achieved FDA 510(k) clearance 8 months faster than original timeline, reduced manufacturing costs by 45%, and secured $12M Series B funding. Device launched successfully in 15 states.",
//       metrics: "8 months faster • 45% cost reduction • $12M funding secured • 15-state launch",
//       icon: <Stethoscope className="w-8 h-8" />,
//       timeline: "18 months",
//       investment: "$3.2M in consulting",
//       roi: "400% ROI on consulting investment",
//       details: {
//         initialState: "Prototype device with regulatory uncertainty",
//         challenges: ["Unclear FDA pathway", "Manufacturing quality issues", "Investor skepticism"],
//         interventions: ["FDA pre-submission strategy", "QMS implementation", "Manufacturing optimization"],
//         outcomes: ["510(k) clearance", "45% cost reduction", "Successful fundraising"]
//       }
//     },
//     {
//       company: "NeuroDiagnostics Pro",
//       sector: "Neurological Diagnostics",
//       challenge: "Complex clinical trial management for breakthrough neurological diagnostic platform and investor readiness for Series A funding. Multiple trial sites with recruitment challenges.",
//       solution: "Clinical operations optimization including protocol refinement, site selection, patient recruitment strategy, and comprehensive investor preparation including financial modeling and pitch development.",
//       result: "Streamlined clinical trials reduced timeline by 60%, enrolled 300% target patients, secured $25M Series A funding, and achieved breakthrough device designation from FDA.",
//       metrics: "60% faster trials • 300% enrollment • $25M Series A • Breakthrough designation",
//       icon: <Brain className="w-8 h-8" />,
//       timeline: "24 months",
//       investment: "$2.8M in consulting",
//       roi: "800% ROI on consulting investment",
//       details: {
//         initialState: "Early-stage diagnostic with promising data",
//         challenges: ["Complex trial design", "Patient recruitment issues", "Funding preparation"],
//         interventions: ["Protocol optimization", "Site network development", "Investor preparation"],
//         outcomes: ["Accelerated trials", "Successful funding", "FDA breakthrough status"]
//       }
//     },
//     {
//       company: "RoboSurgery Systems",
//       sector: "Surgical Robotics",
//       challenge: "Go-to-market strategy for revolutionary surgical robotics platform, establishing key partnerships with hospital systems, and reimbursement strategy development.",
//       solution: "Comprehensive market strategy including competitive analysis, value proposition development, key opinion leader engagement, hospital partnership strategy, and health economics analysis for reimbursement.",
//       result: "Established partnerships with 25 major hospital systems, achieved 300% revenue growth in 12 months, secured favorable reimbursement coverage, and became market leader in robotic surgery segment.",
//       metrics: "25 hospital partnerships • 300% revenue growth • Market leadership • Reimbursement coverage",
//       icon: <HeartHandshake className="w-8 h-8" />,
//       timeline: "15 months",
//       investment: "$4.5M in consulting",
//       roi: "600% ROI on consulting investment",
//       details: {
//         initialState: "Approved device seeking market entry",
//         challenges: ["Market penetration", "Partnership development", "Reimbursement uncertainty"],
//         interventions: ["Market strategy", "Partnership development", "Health economics analysis"],
//         outcomes: ["Major partnerships", "Revenue growth", "Market leadership"]
//       }
//     }
//   ];

//   const specificServices = [
//     {
//       category: "Regulatory & Compliance",
//       icon: <Shield className="w-6 h-6" />,
//       services: [
//         "FDA 510(k) Submission Strategy & Execution",
//         "Premarket Approval (PMA) Development",
//         "Quality Management System (ISO 13485) Implementation",
//         "Clinical Trial Protocol Development & IND Submissions",
//         "Risk Management & ISO 14971 Compliance",
//         "Post-Market Surveillance & Adverse Event Reporting",
//         "EU MDR Compliance & CE Marking Strategy",
//         "Health Canada Medical Device License Applications",
//         "Software as Medical Device (SaMD) Guidance",
//         "Cybersecurity & Digital Health Compliance"
//       ],
//       description: "Navigate complex regulatory requirements with confidence. Our regulatory experts bring 15+ years of experience and 200+ successful submissions."
//     },
//     {
//       category: "Clinical Development",
//       icon: <Beaker className="w-6 h-6" />,
//       services: [
//         "Clinical Trial Design & Protocol Development",
//         "Biostatistics & Data Analysis Planning",
//         "Regulatory Writing & Clinical Documentation",
//         "Site Selection & Principal Investigator Network",
//         "CRO Partnership Strategy & Vendor Management",
//         "Patient Recruitment & Retention Strategies",
//         "Clinical Data Management & Electronic Data Capture",
//         "Good Clinical Practice (GCP) Training & Compliance",
//         "Real-World Evidence Study Design",
//         "Post-Market Clinical Follow-up Studies"
//       ],
//       description: "Design and execute clinical trials that generate compelling evidence for regulatory approval and market access."
//     },
//     {
//       category: "Market Access & Commercialization",
//       icon: <Target className="w-6 h-6" />,
//       services: [
//         "Reimbursement Strategy & Coverage Pathway",
//         "Health Economics & Outcomes Research (HEOR)",
//         "Key Opinion Leader (KOL) Engagement Programs",
//         "Market Access Planning & Payer Strategy",
//         "Value-Based Care Model Development",
//         "Real-World Evidence Generation & Analysis",
//         "Comparative Effectiveness Research Design",
//         "Budget Impact Model Development",
//         "Health Technology Assessment (HTA) Preparation",
//         "Managed Care Contract Negotiation Support"
//       ],
//       description: "Secure market access and reimbursement coverage to maximize commercial potential and patient reach."
//     },
//     {
//       category: "Operations & Manufacturing",
//       icon: <Factory className="w-6 h-6" />,
//       services: [
//         "Manufacturing Strategy & Scale-up Planning",
//         "Supply Chain Optimization & Risk Management",
//         "Quality Assurance Systems & Process Validation",
//         "Lean Manufacturing Implementation",
//         "Cost Management & Reduction Programs",
//         "Technology Transfer & Process Development",
//         "Vendor Qualification & Supply Chain Setup",
//         "Manufacturing Site Selection & Setup",
//         "Automation Strategy & Digital Manufacturing",
//         "Regulatory Manufacturing Compliance"
//       ],
//       description: "Optimize operations from prototype to commercial scale while maintaining quality and reducing costs."
//     },
//     {
//       category: "Strategic Planning & Growth",
//       icon: <TrendingUp className="w-6 h-6" />,
//       services: [
//         "Market Analysis & Competitive Intelligence",
//         "Business Model Development & Validation",
//         "Strategic Partnership Development",
//         "Mergers & Acquisitions Strategy",
//         "International Expansion Planning",
//         "Digital Health Strategy & Implementation",
//         "Innovation Pipeline Development",
//         "Intellectual Property Strategy",
//         "Organizational Development & Scaling",
//         "Performance Management & KPI Development"
//       ],
//       description: "Develop and execute strategic initiatives that drive sustainable growth and competitive advantage."
//     },
//     {
//       category: "Funding & Investment",
//       icon: <DollarSign className="w-6 h-6" />,
//       services: [
//         "Investor Readiness Assessment & Preparation",
//         "Pitch Deck Development & Financial Modeling",
//         "Due Diligence Preparation & Management",
//         "Valuation Analysis & Negotiation Support",
//         "Grant Application & Non-dilutive Funding",
//         "Strategic Partnership & Alliance Development",
//         "Exit Strategy Planning & Preparation",
//         "Board Advisory & Governance Support",
//         "Investment Banking Relationship Management",
//         "Alternative Funding Strategy Development"
//       ],
//       description: "Secure funding and investment to accelerate growth and achieve strategic objectives."
//     }
//   ];

//   const faqs = [
//     {
//       question: "How long does FDA approval typically take with your support?",
//       answer: "With our regulatory strategy and documentation support, we've helped clients reduce FDA approval timelines by 6-12 months on average. For 510(k) submissions, we typically see 3-6 month timelines versus the standard 6-12 months. PMA approvals can be reduced from 18-24 months to 12-18 months. Timeline depends on device classification, predicate devices, and clinical data requirements, but our expertise in FDA processes and pre-submission strategies significantly streamlines the approval process."
//     },
//     {
//       question: "Do you work with early-stage medical device startups?",
//       answer: "Yes, we specialize in helping medical technology companies from prototype stage through commercialization. Our team has deep experience with the unique challenges of medtech startups, including limited resources, regulatory uncertainty, and funding challenges. We offer scalable solutions that grow with your company, from initial regulatory strategy through full commercial launch. We've worked with over 200 early-stage companies and understand the critical decisions that determine long-term success."
//     },
//     {
//       question: "What's your experience with clinical trials for medical devices?",
//       answer: "Our team includes clinical research professionals who have managed over 400 clinical trials across diverse therapeutic areas. We help with protocol design optimization, site selection and management, patient recruitment strategies, regulatory submissions (IDE applications), and trial management. Our expertise includes traditional clinical trials, real-world evidence studies, and post-market surveillance studies. We've helped reduce clinical trial timelines by 40% on average while improving data quality and regulatory acceptance."
//     },
//     {
//       question: "Can you help with investor readiness for medical technology companies?",
//       answer: "Absolutely. We've helped medical technology companies raise over $500M in funding across all stages from seed to Series C. Our investor readiness program includes comprehensive assessment, financial modeling, pitch deck development, due diligence preparation, and strategic investor introductions. We work with you to develop compelling value propositions, address investor concerns proactively, and position your company for maximum valuation. Our clients achieve 70% higher success rates in fundraising."
//     },
//     {
//       question: "Do you work with international medical device regulations?",
//       answer: "Yes, our team has extensive experience with FDA (US), EU MDR (Europe), Health Canada, and other international regulatory frameworks including Japan PMDA, Australia TGA, and Brazil ANVISA. We help companies develop global regulatory strategies that optimize timelines and reduce costs through harmonized approaches. Our international network includes regulatory experts in key markets who provide local expertise while maintaining global consistency."
//     },
//     {
//       question: "What types of medical devices do you work with?",
//       answer: "We work across all medical device classifications and therapeutic areas including cardiovascular devices, neurological diagnostics, surgical instruments, digital health platforms, diagnostic equipment, implantable devices, and combination products. Our expertise spans Class I through Class III devices, software as medical devices (SaMD), and emerging technologies like AI/ML-enabled devices. We adapt our approach based on device complexity, regulatory pathway, and market dynamics."
//     },
//     {
//       question: "How do you help with manufacturing and scale-up challenges?",
//       answer: "Our manufacturing experts help optimize the entire supply chain from component sourcing through final assembly and distribution. We implement lean manufacturing principles, quality management systems, and cost reduction strategies. Our services include supplier qualification, process validation, technology transfer, and automation implementation. We've helped clients reduce manufacturing costs by 35% on average while improving quality and scalability."
//     },
//     {
//       question: "What's your approach to market access and reimbursement?",
//       answer: "Our market access strategy begins early in development with health economics planning and real-world evidence generation. We work with payers, health technology assessment bodies, and key opinion leaders to understand coverage requirements and develop compelling value propositions. Our services include HEOR studies, budget impact modeling, and direct payer engagement. We've helped secure coverage for 90% of our clients' products."
//     }
//   ];

//   const metrics = [
//     {
//       value: "200+",
//       label: "Medical Technology Companies",
//       description: "Successfully brought to market",
//       details: "Across all device classifications and therapeutic areas"
//     },
//     {
//       value: "$500M+",
//       label: "Total Funding Raised",
//       description: "For our medtech clients",
//       details: "From seed stage through IPO"
//     },
//     {
//       value: "40%",
//       label: "Faster FDA Approval",
//       description: "Average timeline reduction",
//       details: "Through optimized regulatory strategy"
//     },
//     {
//       value: "95%",
//       label: "Success Rate",
//       description: "Regulatory submission approval",
//       details: "First-time approval rate for submissions"
//     },
//     {
//       value: "400+",
//       label: "Clinical Trials",
//       description: "Successfully managed",
//       details: "Across diverse therapeutic areas"
//     },
//     {
//       value: "70%",
//       label: "Higher Funding Success",
//       description: "Compared to industry average",
//       details: "With comprehensive investor preparation"
//     },
//     {
//       value: "35%",
//       label: "Cost Reduction",
//       description: "Average manufacturing savings",
//       details: "Through operational optimization"
//     },
//     {
//       value: "90%",
//       label: "Coverage Success",
//       description: "Reimbursement approval rate",
//       details: "With strategic market access planning"
//     }
//   ];

//   const teamExpertise = [
//     {
//       role: "Regulatory Affairs",
//       icon: <Shield className="w-6 h-6" />,
//       experience: "15+ years average",
//       credentials: "RAC certification, FDA experience",
//       specialties: ["510(k) submissions", "PMA development", "Quality systems", "International regulations"]
//     },
//     {
//       role: "Clinical Development",
//       icon: <Beaker className="w-6 h-6" />,
//       experience: "12+ years average",
//       credentials: "PhD/MD, GCP certification",
//       specialties: ["Protocol design", "Biostatistics", "Site management", "Regulatory writing"]
//     },
//     {
//       role: "Market Access",
//       icon: <Target className="w-6 h-6" />,
//       experience: "10+ years average",
//       credentials: "HEOR expertise, Payer experience",
//       specialties: ["Reimbursement strategy", "Health economics", "Real-world evidence", "Payer engagement"]
//     },
//     {
//       role: "Operations",
//       icon: <Cog className="w-6 h-6" />,
//       experience: "20+ years average",
//       credentials: "Lean Six Sigma, Manufacturing",
//       specialties: ["Process optimization", "Quality systems", "Supply chain", "Cost reduction"]
//     }
//   ];

//   // Framer Motion variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { 
//         duration: 0.6,
//         ease: [0.25, 0.1, 0.25, 1]
//       }
//     }
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.1
//       }
//     }
//   };

//   // Enhanced Aceternity-style dot background component
//   const DotBackground = ({ density = 1, opacity = 0.4, color = "#e5e7eb" }) => (
//     <div
//       className="absolute inset-0 opacity-40 pointer-events-none"
//       style={{
//         backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1.5px, transparent 0)`,
//         backgroundSize: `${30 / density}px ${30 / density}px`,
//         backgroundPosition: "0 0, 15px 15px"
//       }}
//     />
//   );

//   return (
//     <div className="min-h-screen bg-white relative overflow-hidden">
//       {/* Global Enhanced Background */}
//       <DotBackground density={1.2} opacity={0.25} color="#d1d5db" />
      
//       {/* Professional Navigation */}
//       <motion.nav
//         className="relative z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 shadow-sm"
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-18">
//             <div className="flex items-center">
//               <motion.div
//                 className="flex items-center space-x-3"
//                 whileHover={{ scale: 1.01 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 20 }}
//               >
//                 <div className="relative">
//                   <img
//                     src="/logo2.png"
//                     alt="STAAJ Solutions"
//                     className="h-9 w-auto object-contain"
//                   />
//                 </div>
//                 <div className="hidden sm:block">
                  
//                   <div className="text-xs text-gray-500 font-medium">Medical Technology Solutions</div>
//                 </div>
//               </motion.div>
//             </div>
            
//             {/* <div className="hidden lg:block">
//               <div className="flex items-center space-x-6">
//                 <motion.button
//                   className="bg-gray-900 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
//                   whileHover={{ scale: 1.02, y: -1 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Get Started
//                 </motion.button>
//               </div>
//             </div> */}

//             <div className="lg:hidden">
//               <motion.button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors"
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               className="lg:hidden bg-white border-t border-gray-100"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="px-4 py-4 space-y-2">
//                 <motion.button
//                   className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Get Started
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Hero Section - Medical Technology Focus */}
//       <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50/50 py-20 lg:py-24 overflow-hidden min-h-[calc(100vh-5rem)]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
//           <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
//             {/* Left Column */}
//             <motion.div
//               className="space-y-6"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={staggerChildren}
//             >
//               {/* Specialty Badge */}
//               <motion.div
//                 className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700"
//                 variants={fadeIn}
//               >
//                 <Hospital className="w-4 h-4 mr-2" />
//                 Medical Technology Solutions
//               </motion.div>

//               {/* Main Headline with Fixed Height for Typewriter */}
//               <motion.div variants={fadeIn} className='h-60'>
//                 <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
//                   Help your medtech startup{' '}
//                   <br className="hidden sm:block" />
//                   <div className="min-h-[1.3em] flex items-start">
//                     <TypewriterText
//                       words={typewriterWords}
//                       className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
//                       typingSpeed={120}
//                       deleteSpeed={80}
//                       pauseDuration={2500}
//                     />
//                   </div>
//                 </h1>
//               </motion.div>

//               {/* Subheadline */}
//               <motion.p
//                 className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
//                 variants={fadeIn}
//               >
//                 Specialized consulting for medical technology companies navigating 
//                 <span className="font-semibold text-gray-800"> FDA approvals, clinical trials, and market entry</span> with proven expertise in medtech commercialization and regulatory success.
//               </motion.p>

//               {/* Key Benefits */}
//               <motion.div
//                 className="grid sm:grid-cols-3 gap-3"
//                 variants={fadeIn}
//               >
//                 {[
//                   { icon: <Shield className="w-5 h-5" />, title: "FDA Expertise", desc: "200+ successful submissions" },
//                   { icon: <Clock className="w-5 h-5" />, title: "40% Faster", desc: "Average approval timeline" },
//                   { icon: <DollarSign className="w-5 h-5" />, title: "$500M+", desc: "Client funding raised" }
//                 ].map((benefit, index) => (
//                   <div key={index} className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-200/60">
//                     <div className="flex items-center mb-2">
//                       <div className="text-blue-600 mr-2">{benefit.icon}</div>
//                       <div className="font-bold text-gray-900 text-sm">{benefit.title}</div>
//                     </div>
//                     <div className="text-xs text-gray-600">{benefit.desc}</div>
//                   </div>
//                 ))}
//               </motion.div>
           
//               {/* CTA Buttons */}
//               <motion.div
//                 className="flex flex-col sm:flex-row gap-3"
//                 variants={fadeIn}
//               >
//                 <motion.button
//                   className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
//                   whileHover={{ scale: 1.05, y: -3 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="flex items-center justify-center">
//                     Schedule FDA Strategy Call
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </span>
//                 </motion.button>
               
//                 <motion.button
//                   className="bg-white/95 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
//                   whileHover={{ scale: 1.05, y: -3 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Download Case Study
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             {/* Right Column - Medical Device Visual */}
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1 }}
//             >
//               <div className="relative max-w-lg mx-auto">
//                 {/* Medical Device Dashboard */}
//                 <motion.div 
//                   className="relative z-10 bg-gradient-to-br from-white via-blue-50 to-purple-50/80 p-8 rounded-2xl shadow-2xl border border-gray-200/60"
//                   whileHover={{ y: -6, scale: 1.02 }}
//                 >
//                   <div className="text-center space-y-6">
//                     <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
//                       <Microscope className="w-10 h-10 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Technology Expertise</h3>
//                       <p className="text-gray-600 leading-relaxed text-sm">Are you a founder or CEO of a medtech startup? We provide comprehensive specialized support for regulatory approval, clinical trials, manufacturing scale-up, and successful market entry.</p>
//                     </div>
//                     <div className="bg-green-50 border border-green-200 rounded-lg p-3">
//                       <div className="text-sm font-semibold text-green-800 mb-1">Why it fits:</div>
//                       <div className="text-sm text-green-700">Medical technology companies face unique challenges requiring specialized expertise in regulatory compliance, clinical development, manufacturing optimization, and market access strategies to successfully bring life-changing innovations to market.</div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Market Statistics Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <span className="inline-block px-3 py-1 mb-4 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
//               Market Landscape
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Medical Technology Market Overview
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Understanding the medical technology landscape is crucial for strategic decision-making and successful market entry. Here are the key statistics driving the industry.
//             </p>
//           </motion.div>
         
//           <motion.div
//             className="grid md:grid-cols-4 gap-6 mb-12"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {marketStatistics.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
//                 variants={fadeIn}
//                 whileHover={{ y: -2 }}
//               >
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
//                   <div className="text-sm font-semibold text-gray-700 mb-2">{stat.title}</div>
//                   <div className="text-xs text-green-600 font-medium mb-2">{stat.growth}</div>
//                   <div className="text-xs text-gray-500">{stat.description}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Industry Trends Section */}
//       <section id="industry" className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <span className="inline-block px-3 py-1 mb-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
//               Industry Trends
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Transformative Trends in Medical Technology
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               The medical technology industry is rapidly evolving with breakthrough innovations that are reshaping healthcare delivery and patient outcomes.
//             </p>
//           </motion.div>
         
//           <motion.div
//             className="grid md:grid-cols-2 gap-8"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {industryTrends.map((trend, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
//                 variants={fadeIn}
//                 whileHover={{ y: -2 }}
//               >
//                 <div className="flex items-start mb-4">
//                   <div className="text-indigo-600 mr-4 mt-1">
//                     {trend.icon}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{trend.title}</h3>
//                     <div className="text-sm text-indigo-600 font-semibold mb-3">{trend.impact}</div>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mb-4 leading-relaxed">{trend.description}</p>
//                 <div>
//                   <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Applications:</h4>
//                   <div className="grid grid-cols-2 gap-1">
//                     {trend.applications.map((app, appIndex) => (
//                       <div key={appIndex} className="flex items-center text-xs text-gray-600">
//                         <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
//                         {app}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Regulatory Landscape Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <span className="inline-block px-3 py-1 mb-4 bg-orange-50 text-orange-700 rounded-full text-sm font-medium border border-orange-200">
//               Regulatory Landscape
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Global Medical Device Regulatory Framework
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Navigate complex global regulatory requirements with confidence. Understanding regulatory pathways is critical for successful market entry and commercial success.
//             </p>
//           </motion.div>
         
//           <motion.div
//             className="space-y-8"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {regulatoryLandscape.map((region, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-50 p-6 rounded-lg border border-gray-200"
//                 variants={fadeIn}
//               >
//                 <div className="flex items-center mb-4">
//                   <span className="text-2xl mr-3">{region.icon}</span>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">{region.region}</h3>
//                     <div className="text-sm text-gray-600">Regulatory Authority: {region.authority}</div>
//                   </div>
//                 </div>
                
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-3">Regulatory Pathways:</h4>
//                     <div className="space-y-2">
//                       {region.pathways.map((pathway, pathwayIndex) => (
//                         <div key={pathwayIndex} className="bg-white p-3 rounded border border-gray-200">
//                           <div className="flex justify-between items-start mb-1">
//                             <div className="text-sm font-medium text-gray-900">{pathway.name}</div>
//                             <div className="text-xs text-gray-500">{pathway.complexity}</div>
//                           </div>
//                           <div className="text-xs text-blue-600 font-medium">{pathway.timeline}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Requirements:</h4>
//                     <div className="text-sm text-gray-600 leading-relaxed">
//                       {region.requirements}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Medical Technology Challenges - Enhanced */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <span className="inline-block px-3 py-1 mb-4 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-200">
//               Medical Technology Challenges
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Complex Hurdles in Medical Technology Development
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Medical technology companies face unique and complex challenges that require specialized expertise, proven methodologies, and deep industry knowledge to overcome successfully.
//             </p>
//           </motion.div>
         
//           <motion.div
//             className="space-y-8"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {challenges.map((challenge, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
//                 variants={fadeIn}
//                 whileHover={{ y: -2 }}
//               >
//                 <div className="grid md:grid-cols-3 gap-6">
//                   <div className="md:col-span-2">
//                     <div className="flex items-start mb-4">
//                       <div className="text-red-500 mr-4 mt-1">
//                         {challenge.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
//                         <div className="flex gap-4 mb-3">
//                           <span className="inline-flex items-center px-2 py-1 bg-red-50 text-red-700 rounded text-xs font-medium">
//                             {challenge.impact}
//                           </span>
//                           <span className="text-xs text-gray-500">{challenge.stats}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-4 leading-relaxed">{challenge.description}</p>
//                     <div className="text-sm text-orange-600 font-semibold">{challenge.costImplications}</div>
//                   </div>
                  
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-700 mb-3">Our Solutions:</h4>
//                     <div className="space-y-2">
//                       {challenge.solutions.map((solution, solutionIndex) => (
//                         <div key={solutionIndex} className="flex items-start text-sm text-gray-600">
//                           <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                           {solution}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Solutions Section - Enhanced */}
//       <section id="solutions" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <span className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
//               Our Medical Technology Solutions
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Comprehensive Solutions for Medical Technology Success
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               End-to-end solutions tailored specifically for medical device and technology companies, from regulatory strategy through commercial success.
//             </p>
//           </motion.div>
         
//           <motion.div
//             className="space-y-8"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {solutions.map((solution, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200/80 hover:shadow-xl transition-all duration-300 group" 
//                 variants={fadeIn}
//                 whileHover={{ y: -4, scale: 1.015 }} 
//               >
//                 <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
//                   {/* Left Column: Icon, Title, ROI, Timeline, Short Description, Expertise */}
//                   <div className="lg:w-2/5 flex-shrink-0">
//                     <div className="flex items-start mb-3">
//                       <div className="text-blue-600 group-hover:text-blue-700 transition-colors mr-3 mt-1 p-3 bg-blue-50 group-hover:bg-blue-100 rounded-lg shadow-sm">
//                         {React.cloneElement(solution.icon, { className: "w-7 h-7" })}
//                       </div>
//                       <div>
//                         <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-1">{solution.title}</h3>
//                         <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mb-3">
//                           <span className="font-semibold text-green-600">{solution.roi}</span>
//                           <span className="text-gray-500">{solution.timeline}</span>
//                         </div>
//                       </div>
//                     </div>
//                     {/* Consider shortening descriptions in your data source or using a Tailwind CSS line-clamp plugin */}
//                     <p className="text-gray-600 text-sm mb-4 leading-relaxed min-h-[4.5rem] overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}> 
//                       {solution.description}
//                     </p>
//                     <div className="text-xs text-blue-700 font-semibold">{solution.expertise}</div>
//                   </div>

//                   {/* Right Column: Key Services & Process Highlights */}
//                   <div className="lg:w-3/5 space-y-4">
//                     <div>
//                       <h4 className="text-base font-semibold text-gray-800 mb-2">Key Services:</h4>
//                       <ul className="space-y-1.5 text-sm text-gray-600">
//                         {solution.features.slice(0, 3).map((feature, featureIndex) => ( 
//                           <li key={featureIndex} className="flex items-start">
//                             <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                             {feature}
//                           </li>
//                         ))}
//                         {solution.features.length > 3 && (
//                           <li className="text-xs text-blue-600 hover:underline cursor-pointer pt-1">
//                             + {solution.features.length - 3} more services...
//                           </li>
//                         )}
//                       </ul>
//                     </div>
                    
//                     <div>
//                       <h4 className="text-base font-semibold text-gray-800 mb-2">Process Highlights:</h4>
//                       <ol className="space-y-1.5 text-sm text-gray-600">
//                         {solution.processSteps.slice(0, 3).map((step, stepIndex) => ( 
//                           <li key={stepIndex} className="flex items-start">
//                             <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mr-2 mt-0.5 flex-shrink-0">
//                               {stepIndex + 1}
//                             </div>
//                             {step}
//                           </li>
//                         ))}
//                         {solution.processSteps.length > 3 && (
//                            <li className="text-xs text-blue-600 hover:underline cursor-pointer pt-1">
//                             + {solution.processSteps.length - 3} more steps...
//                           </li>
//                         )}
//                       </ol>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Case Studies Section - Enhanced with Fixed Height */}
//       <section id="cases" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <span className="inline-block px-3 py-1 mb-4 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
//               Success Stories
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Medical Technology Success Stories
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Real results from medical technology companies we've helped navigate regulatory approval, secure funding, and achieve commercial success.
//             </p>
//           </motion.div>
         
//           <div className="relative h-96 mb-8">
//             <AnimatePresence mode="wait">
//               {caseStudies.map((caseStudy, index) => (
//                 activeCase === index && (
//                   <motion.div
//                     key={index}
//                     className="absolute w-full h-full"
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm h-full overflow-auto">
//                       <div className="grid lg:grid-cols-4 gap-6 h-full">
//                         <div className="lg:col-span-3">
//                           <div className="flex items-start mb-4">
//                             <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
//                               {caseStudy.icon}
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <h3 className="text-2xl font-bold text-gray-900 mb-2">{caseStudy.company}</h3>
//                               <div className="mb-4 space-y-2">
//                                 <div className="text-sm text-gray-600"><strong>Challenge:</strong> {caseStudy.challenge}</div>
//                                 <div className="text-sm text-gray-600"><strong>Solution:</strong> {caseStudy.solution}</div>
//                                 <div className="text-sm text-gray-700 font-medium"><strong>Result:</strong> {caseStudy.result}</div>
//                               </div>
//                               <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
//                                 {caseStudy.metrics}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )
//               ))}
//             </AnimatePresence>
//           </div>
         
//           <div className="flex justify-center gap-2">
//             {caseStudies.map((_, index) => (
//               <motion.button
//                 key={index}
//                 className={`w-2 h-2 rounded-full ${
//                   activeCase === index
//                     ? 'bg-blue-600'
//                     : 'bg-gray-300 hover:bg-gray-400'
//                 }`}
//                 onClick={() => setActiveCase(index)}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Metrics Section */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <h2 className="text-3xl font-bold mb-3">Medical Technology Track Record</h2>
//             <p className="text-gray-300">Proven results in the medical technology industry</p>
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {metrics.map((metric, index) => (
//               <motion.div className="space-y-2" variants={fadeIn} key={index}>
//                 <div className="text-3xl font-bold text-white">{metric.value}</div>
//                 <div className="text-gray-300 text-sm font-medium">{metric.label}</div>
//                 <div className="text-gray-400 text-xs">{metric.description}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Detailed Services Section */}
//       <section id="services" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <span className="inline-block px-3 py-1 mb-4 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
//               Detailed Services
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Comprehensive Medical Technology Support
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               End-to-end support for every stage of your medical technology journey
//             </p>
//           </motion.div>
         
//           <motion.div
//             className="grid md:grid-cols-2 gap-6"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {specificServices.map((category, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-200"
//                 variants={fadeIn}
//                 whileHover={{ y: -2 }}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="text-purple-600 mr-3">
//                     {category.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
//                 </div>
//                 <div className="space-y-2">
//                   {category.services.map((service, serviceIndex) => (
//                     <div key={serviceIndex} className="flex items-center text-sm text-gray-700">
//                       <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
//                       {service}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeIn}
//           >
//             <span className="inline-block px-3 py-1 mb-4 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium border border-yellow-200">
//               Frequently Asked Questions
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 mb-3">
//               Medical Technology Questions Answered
//             </h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Common questions about our medical technology consulting services
//             </p>
//           </motion.div>
         
//           <motion.div
//             className="space-y-3"
//             variants={staggerChildren}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
//                 variants={fadeIn}
//               >
//                 <motion.button
//                   className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
//                   onClick={() => toggleFaq(index)}
//                   whileTap={{ scale: 0.99 }}
//                 >
//                   <span className="font-semibold text-gray-900 pr-4">
//                     {faq.question}
//                   </span>
//                   <motion.div
//                     animate={{ rotate: expandedFaq === index ? 180 : 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="flex-shrink-0"
//                   >
//                     <ChevronDown className="w-4 h-4 text-gray-600" />
//                   </motion.div>
//                 </motion.button>
//                 <AnimatePresence>
//                   {expandedFaq === index && (
//                     <motion.div
//                       className="px-4 pb-4 text-gray-600 border-t border-gray-100"
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className="pt-3 text-sm leading-relaxed">{faq.answer}</div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Final CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerChildren}
//           >
//             <motion.h2
//               className="text-3xl font-bold mb-4 leading-tight"
//               variants={fadeIn}
//             >
//               Ready to Accelerate Your MedTech Success?
//             </motion.h2>
           
//             <motion.p
//               className="text-lg mb-6 text-blue-100 leading-relaxed"
//               variants={fadeIn}
//             >
//               Partner with STAAJ: Streamline FDA approvals, scale operations, and launch faster.
//             </motion.p>

//             <motion.div
//               className="flex flex-wrap justify-center gap-3 mb-8"
//               variants={fadeIn}
//             >
//               {["FDA Expertise", "Proven Results", "MedTech Focus"].map((item, i) => (
//                 <div key={i} className="flex items-center bg-white/20 px-3 py-1 rounded-full">
//                   <CheckCircle className="w-3 h-3 mr-1" />
//                   <span className="text-sm font-medium">{item}</span>
//                 </div>
//               ))}
//             </motion.div>

//             <motion.button
//               className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
//               variants={fadeIn}
//               whileHover={{ scale: 1.02, y: -1 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Book Your Strategy Call
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MedTech;

'use client';


import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, Gavel, Microscope, Factory, Clipboard, Hospital,
  Building, Rocket, Users, DollarSign, Award, CheckCircle, Phone, Mail,
  Linkedin, Twitter, ChevronDown, ChevronUp, Menu, X, ArrowRight,
  Download, ExternalLink, Star, Coffee, Shield, Clock, Target, Zap,
  Monitor, ShoppingBag, Heart, TrendingUp, BarChart3, Lightbulb,
  Briefcase, Users2, Database, Settings, Play,
  Stethoscope, Activity, HeartHandshake, Brain, Tablet, Beaker, Globe,
  MapPin, Calculator, PieChart, BarChart, LineChart, Users as Team,
  Wrench, Cog, FileCheck, AlertCircle, BookOpen, GraduationCap,
  MessageSquare, Video, Search, Filter, Layers, Network, Zap as Lightning,
  Smartphone, Cloud, Lock, Eye, TrendingDown, ArrowUpRight } from 'lucide-react';


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


const MedTech = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Enhanced typewriter words for healthtech
  const typewriterWords = [
    "unlock your full growth potential",
    "drive digital transformation",
    "accelerate innovation",
    "optimize operations",
    "transform patient outcomes",
    "navigate complex regulations",
    "achieve competitive advantage"
  ];


  const toggleFaq = (index: number): void => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };


  // Enhanced Market Statistics with more data points
  const marketStatistics = [
    {
      title: "Healthcare Consulting Market",
      value: "$54B",
      growth: "+12.3% CAGR",
      description: "Projected market size by 2030",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Digital Health Investment",
      value: "$29.1B",
      growth: "+25% YoY",
      description: "Global investment in 2023",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      title: "Medtech Companies Supported",
      value: "200+",
      growth: "Successfully guided",
      description: "Across all growth stages",
      icon: <Users2 className="w-5 h-5" />
    },
    {
      title: "Average ROI Improvement",
      value: "300%",
      growth: "Operational efficiency",
      description: "Client performance boost",
      icon: <Target className="w-5 h-5" />
    }
  ];


  // Enhanced Services with more detailed information
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Strategy & Market Entry",
      description: "Tailored strategies for market expansion, product launches, and geographic diversification with in-depth market analysis to identify high-potential opportunities in the rapidly expanding global medtech sector.",
      features: [
        "Market expansion strategies and product launch planning",
        "Geographic diversification and international market entry",
        "In-depth market analysis and opportunity identification in the rapidly expanding global medtech sector",
        "Competitive intelligence and positioning strategies",
        "Go-to-market strategy development and execution",
        "Revenue optimization and growth acceleration",
        "Market penetration analysis and customer segmentation",
        "Regulatory pathway planning for new markets"
      ],
      timeline: "3-6 months",
      roi: "Accelerate growth by 150%",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Digital Transformation & Analytics",
      description: "Guidance on adopting advanced digital solutions, including AI, big data, and IoT, to enhance operational efficiency and patient outcomes. Implementation of data-driven decision-making tools for better business performance.",
      features: [
        "AI and machine learning implementation strategies",
        "Big data analytics and IoT integration for enhanced patient outcomes",
        "Digital workflow optimization and automation",
        "Data-driven decision-making tool implementation",
        "Cloud migration and infrastructure modernization",
        "Digital health platform development",
        "Predictive analytics for operational efficiency",
        "Real-time monitoring and dashboard creation"
      ],
      timeline: "4-8 months",
      roi: "Improve efficiency by 250%",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Mergers, Acquisitions & Partnerships",
      description: "Support in identifying, evaluating, and executing M&A opportunities to drive inorganic growth and expand capabilities. Advisory on strategic partnerships and collaborations within the medtech ecosystem.",
      features: [
        "M&A opportunity identification and evaluation for inorganic growth",
        "Due diligence and transaction support",
        "Strategic partnership development within medtech ecosystem",
        "Post-merger integration planning and execution",
        "Collaboration framework design and management",
        "Value creation and synergy realization",
        "Cross-border transaction expertise",
        "Technology integration planning"
      ],
      timeline: "6-12 months",
      roi: "Unlock 200% value creation",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Commercial Model Optimization",
      description: "Redesigning sales and marketing models for omnichannel engagement and value-based healthcare. Pricing strategy, contracting, and value communication to maximize revenue and market share.",
      features: [
        "Omnichannel sales and marketing model design",
        "Value-based healthcare strategy development",
        "Pricing strategy optimization to maximize revenue and market share",
        "Contract negotiation and value communication strategies",
        "Revenue model transformation and optimization",
        "Customer engagement and retention strategies",
        "Sales force effectiveness improvement",
        "Market access and reimbursement strategies"
      ],
      timeline: "2-5 months",
      roi: "Increase revenue by 180%",
      color: "from-pink-500 to-pink-600"
    }
  ];


  // Enhanced Healthtech Services with more comprehensive offerings
  const healthtechServices = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Digital Health Strategy & Roadmapping",
      description: "Comprehensive digital transformation planning with strategic roadmaps",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Telemedicine Platform Development",
      description: "End-to-end telehealth solution design and implementation",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Data Analytics Integration",
      description: "Advanced analytics and AI implementation for better outcomes",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "UX/UI Design for Healthcare Apps",
      description: "Patient-centric design and user experience optimization",
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory & Compliance Consulting",
      description: "HIPAA, GDPR, and healthcare compliance expertise",
      color: "from-indigo-400 to-indigo-500"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Custom Healthtech Software Solutions",
      description: "Tailored healthcare technology development and integration",
      color: "from-orange-400 to-orange-500"
    }
  ];


  // Enhanced Why Choose Us with more comprehensive reasons
  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Deep Industry Expertise",
      description: "Our consultants possess extensive hands-on experience in medical technology and healthcare consulting, offering a profound understanding of industry-specific challenges, regulatory intricacies, and market opportunities.",
      stats: "15+ Years Average Consultant Experience",
      details: [
        "Navigating complex FDA, CE, and global regulatory pathways.",
        "Identifying and capitalizing on emerging market trends.",
        "Strategic insights for competitive differentiation and positioning."
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Future-Focus",
      description: "We empower your organization by integrating cutting-edge trends in digital health, AI, data analytics, and operational excellence, ensuring you stay ahead of the curve and achieve sustained competitive advantage.",
      stats: "Pioneering Solutions in AI & Digital Health",
      details: [
        "Implementation of AI-driven diagnostic and treatment solutions.",
        "Development of robust digital health ecosystems.",
        "Leveraging data analytics for predictive insights and personalized care."
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Measurable & Proven Results",
      description: "Our data-driven strategies are designed to deliver tangible outcomes. We have a consistent track record of helping clients accelerate growth, significantly improve operational efficiency, and achieve lasting market leadership.",
      stats: "300%+ Average ROI for Clients",
      details: [
        "Quantifiable improvements in key performance indicators (KPIs).",
        "Case studies demonstrating substantial revenue growth and cost savings.",
        "Enhanced market share and improved patient outcomes."
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centric Design Philosophy",
      description: "Empathy is at the core of our design process. We ensure your technology solutions are intuitive, accessible, and user-friendly, delivering genuine value to patients, clinicians, and all stakeholders.",
      stats: "Consistently High User Adoption & Satisfaction",
      details: [
        "User experience (UX) research and human-centered design.",
        "Accessibility compliance (e.g., WCAG) for inclusive solutions.",
        "Co-creation workshops with patients and healthcare professionals."
      ]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Unwavering Trust & Transparency",
      description: "We build enduring partnerships by prioritizing data security, ensuring full regulatory compliance (HIPAA, GDPR, etc.), and maintaining transparent communication throughout every engagement.",
      stats: "100% Compliance & Data Security Focus",
      details: [
        "Robust data governance and cybersecurity frameworks.",
        "Clear project management and regular progress reporting.",
        "Ethical considerations integrated into all strategies."
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Comprehensive End-to-End Solutions",
      description: "From initial strategy formulation and regulatory navigation to UX/UI design, development, and post-launch optimization, we provide holistic support across your entire digital health journey.",
      stats: "Full Lifecycle Project Management",
      details: [
        "Strategic planning through to technical implementation.",
        "Seamless integration with existing healthcare IT systems.",
        "Ongoing support and continuous improvement strategies."
      ]
    }
  ];


  // Enhanced FAQ with more comprehensive questions
  const faqs = [
    {
      question: "What types of organizations do you work with?",
      answer: "We partner with hospitals, clinics, startups, medtech companies, and healthcare enterprises across all stages of growth. Our expertise spans from early-stage healthtech startups seeking market entry strategies to established healthcare organizations looking to drive digital transformation and operational excellence."
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer: "Our consultants are experts in HIPAA, GDPR, and local health regulations, ensuring every solution is compliant from day one. We maintain up-to-date knowledge of regulatory requirements and build compliance into every aspect of our solutions and strategies, providing ongoing compliance monitoring and updates."
    },
    {
      question: "What is your process?",
      answer: "We start with a comprehensive needs assessment, develop a tailored strategy aligned with your goals, and support you through implementation and beyond. Our approach is collaborative, data-driven, and focused on delivering measurable results that drive sustainable growth and competitive advantage."
    },
    {
      question: "How long does a typical engagement take?",
      answer: "Engagement timelines vary based on scope and complexity, typically ranging from 2-12 months. We work with you to develop realistic timelines that balance speed to market with thorough execution, ensuring sustainable results and long-term success."
    },
    {
      question: "What makes your approach different?",
      answer: "Our unique combination of deep healthcare industry expertise, proven digital transformation experience, and patient-centric design philosophy sets us apart. We focus on delivering practical, implementable solutions that drive real business outcomes and improved patient care."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive post-implementation support including performance monitoring, optimization recommendations, and strategic guidance to ensure continued success and adaptation to evolving market conditions and regulatory requirements."
    },
    {
      question: "How do you measure success?",
      answer: "We establish clear KPIs and metrics at the beginning of each engagement, tracking everything from operational efficiency gains to revenue growth and patient satisfaction scores. Our success is measured by your tangible business outcomes and long-term competitive positioning."
    },
    {
      question: "What industries within healthcare do you specialize in?",
      answer: "We have deep expertise across digital health, medical devices, pharmaceuticals, biotechnology, health insurance, and healthcare services. Our cross-industry experience allows us to bring best practices and innovations from one sector to another."
    }
  ];


  // Enhanced Client Success Stories
  const successStories = [
    {
      title: "Digital Transformation Success",
      description: "Helped a leading medtech company implement AI-driven diagnostic tools, resulting in 40% faster diagnosis times and 25% cost reduction.",
      metric: "40% faster diagnosis",
      category: "AI Implementation"
    },
    {
      title: "Market Entry Achievement",
      description: "Guided a healthtech startup through European market entry, achieving €5M revenue in first year with strategic partnership development.",
      metric: "€5M first-year revenue",
      category: "Market Expansion"
    },
    {
      title: "M&A Success Story",
      description: "Facilitated successful acquisition that expanded client's capabilities by 300% and opened access to new markets worth $50M.",
      metric: "300% capability expansion",
      category: "Strategic M&A"
    }
  ];


  // Framer Motion variants
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
      className="absolute inset-0 pointer-events-none" // Removed z-[-1] and opacity-40
      style={{
        opacity: opacity, // Use the opacity prop for the div's opacity
        backgroundImage: `radial-gradient(circle at 1px 1px, ${color} 1.5px, transparent 0)`,
        backgroundSize: `${30 / density}px ${30 / density}px`,
        backgroundPosition: "0 0, 15px 15px" // This positioning is likely fine
      }}
    />
  );


  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Global Enhanced Background */}
      <DotBackground density={1.2} opacity={0.25} color="#919294" />
     
      {/* Professional Navigation */}
    <motion.nav
      className="relative z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 shadow-sm py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <img
              src="/logo2.png"
              alt="STAAJ Solutions"
              className="h-9 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="text-xs text-gray-500 font-medium">
                Leading Medtech Consulting Firm
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            <motion.a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              whileHover={{ y: -1 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#why-us"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              whileHover={{ y: -1 }}
            >
              Why Choose Us
            </motion.a>
            <motion.a
              href="#faq"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              whileHover={{ y: -1 }}
            >
              FAQ
            </motion.a>
          </div>

          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              <motion.a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </motion.a>
              <motion.a
                href="#why-us"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </motion.a>
              <motion.a
                href="#faq"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </motion.a>
              <motion.button
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50/50 py-20 lg:py-24 overflow-hidden min-h-[calc(100vh-5rem)]">
        <DotBackground density={1} opacity={0.3} color="#919294" /> {/* Changed color */}
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
                <Heart className="w-4 h-4 mr-2" />
                Transform Healthcare with Expert Consulting
              </motion.div>


              {/* Main Headline with Fixed Height for Typewriter */}
              <motion.div variants={fadeIn} className='h-60'>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                  Help your medtech company{' '}
                  <br className="hidden sm:block" />
                  <div className="min-h-[1.3em] flex items-start">
                    <TypewriterText
                      words={typewriterWords}
                      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                      typingSpeed={120}
                      deleteSpeed={80}
                      pauseDuration={2500}
                    />
                  </div>
                </h1>
              </motion.div>


              {/* Subheadline */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
                variants={slideInLeft}
              >
                Empowering healthtech innovation for a healthier tomorrow.
                <span className="font-semibold text-gray-800"> Harness technology to drive better patient outcomes, streamline operations,</span> and stay ahead in the rapidly evolving healthcare landscape.
              </motion.p>


              {/* Key Benefits */}
              <motion.div
                className="grid sm:grid-cols-3 gap-3"
                variants={staggerChildren}
              >
                {[
                  { icon: <Brain className="w-5 h-5" />, title: "Digital Health", desc: "AI & IoT expertise", color: "from-blue-500 to-blue-600" },
                  { icon: <Shield className="w-5 h-5" />, title: "Compliance", desc: "HIPAA & GDPR ready", color: "from-green-500 to-green-600" },
                  { icon: <Heart className="w-5 h-5" />, title: "Patient-Centric", desc: "User-friendly design", color: "from-pink-500 to-pink-600" }
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
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    Book Free Consultation
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
                    Download Capabilities Brochure
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
                  200+ Companies Supported
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  4.9/5 Client Satisfaction
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 text-blue-500 mr-1" />
                  15+ Years Experience
                </div>
              </motion.div>
            </motion.div>


            {/* Right Column - Enhanced Healthtech Visual */}
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="relative max-w-lg mx-auto">
                {/* Floating Icons Animation */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { icon: <Stethoscope className="w-6 h-6" />, position: "top-4 left-4", delay: 0 },
                    { icon: <Brain className="w-5 h-5" />, position: "top-8 right-8", delay: 0.2 },
                    { icon: <Heart className="w-5 h-5" />, position: "bottom-12 left-8", delay: 0.4 },
                    { icon: <Activity className="w-5 h-5" />, position: "bottom-4 right-4", delay: 0.6 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${item.position} text-blue-600 bg-white/80 p-2 rounded-lg shadow-lg backdrop-blur-sm`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0]
                      }}
                      transition={{
                        delay: item.delay,
                        duration: 0.5,
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>


                <motion.div
                  className="relative z-10 bg-gradient-to-br from-white via-blue-50 to-purple-50/80 p-8 rounded-2xl shadow-2xl border border-gray-200/60"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center space-y-6">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Heart className="w-10 h-10 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Leading Medtech Consulting Firm</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">Dedicated to helping medical technology companies unlock their full growth potential with deep industry expertise and forward-thinking approach.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                      <div className="text-sm font-semibold text-green-800 mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Market Opportunity:
                      </div>
                      <div className="text-sm text-green-700">Healthcare consulting market projected to reach <span className="font-bold">$54B by 2030</span>, driven by digitalization, regulatory changes, and demand for operational efficiency.</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


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
              Market Outlook
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Healthcare Technology Market Growth
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The global healthcare consulting services market is experiencing robust growth, projected to reach over $54 billion by 2030, fueled by rapid digitalization, regulatory changes, and increasing demand for operational efficiency.
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
      <section id="why-us" className="py-16 bg-gray-50 relative"> {/* Added relative */}
        <DotBackground density={1} opacity={0.2} color="#919294" /> {/* Changed color */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Added relative z-10 */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-200">
              Why Choose Staaj Solutions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Your Trusted Growth Partners
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We bring proven expertise, innovation focus, and patient-centric approach to help you achieve sustainable competitive advantage in the healthcare technology landscape.
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
                    src={`/${index + 1}.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>


                {/* Text Column */}
                <div className="md:w-3/5 w-full p-6 md:p-8 flex flex-col justify-center">
                  <div className="text-indigo-600 mb-3 md:mb-4 transition-transform duration-200 inline-block"> {/* Removed group-hover:scale-110 */}
                    {React.cloneElement(item.icon, { className: "w-7 h-7 md:w-8 md:h-8" })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">{item.description}</p>
                  <div className="text-sm md:text-base font-semibold text-indigo-700 mb-4">{item.stats}</div>
                  {/* Added details rendering */}
                  {item.details && item.details.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
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
              Comprehensive Medtech Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions for medical technology companies navigating innovation, regulation, and competition in the rapidly evolving healthcare landscape.
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
                      <ul className="space-y-1.5 text-sm text-gray-600">
                        {service.features.slice(0, 6).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 6 && (
                          <li className="text-xs text-blue-600 hover:underline cursor-pointer pt-1">
                            + {service.features.length - 6} more capabilities...
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Healthtech Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
              Specialized Services
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Digital Health & Technology Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From strategy and compliance to UX/UI design and implementation, we guide you through every stage of your digital health journey.
            </p>
          </motion.div>
         
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {healthtechServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group"
                variants={scaleIn}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${service.color} text-white mr-3 p-2 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Enhanced Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Proven Healthtech Expertise
            </h2>
          </motion.div>


          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Years of Experience", value: "15+", desc: "In medtech consulting" },
              { title: "Client Satisfaction", value: "98%", desc: "Success rate" },
              { title: "Compliance Record", value: "100%", desc: "HIPAA & GDPR" },
              { title: "Innovation Adoption", value: "95%", desc: "Client implementation" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-gray-900 font-semibold mb-1">{stat.title}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block px-3 py-1 mb-4 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium border border-yellow-200">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Common Questions About Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to frequently asked questions about our medtech consulting services and approach.
            </p>
          </motion.div>
         
          <motion.div
            className="space-y-3"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
                variants={scaleIn}
              >
                <motion.button
                  className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      className="px-4 pb-4 text-gray-600 border-t border-gray-200 bg-gray-50"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="pt-3 text-sm leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect with Us
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions? We're here to help you navigate your healthtech journey.
            </p>
          </motion.div>


          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <Phone className="w-6 h-6" />, title: "Call Us", desc: "Schedule a consultation", action: "Book Call" },
              { icon: <Mail className="w-6 h-6" />, title: "Email Us", desc: "Get detailed information", action: "Send Email" },
              { icon: <Download className="w-6 h-6" />, title: "Download Brochure", desc: "Learn about our capabilities", action: "Download Now" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
                variants={scaleIn}
                whileHover={{ y: -2 }}
              >
                <div className="text-blue-600 mb-3 flex justify-center">{contact.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{contact.desc}</p>
                <motion.button
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {contact.action}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 leading-tight"
              variants={fadeIn}
            >
              Ready to Accelerate Your Healthtech Vision?
            </motion.h2>
           
            <motion.p
              className="text-lg mb-6 text-blue-100 leading-relaxed"
              variants={fadeIn}
            >
              Let's discuss your goals and map a path to digital transformation. Your trusted partner in healthtech innovation—delivering results that matter for patients, providers, and the future of healthcare.
            </motion.p>


            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              variants={fadeIn}
            >
              {["End-to-End Solutions", "Patient-Centric", "Proven Results", "Industry Expertise"].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center bg-white/20 px-3 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>


            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeIn}
            >
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Consultation Now
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Capabilities Brochure
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


export default MedTech;
