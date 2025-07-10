import React from 'react';
import { Factory, Users, Code, ArrowRight, Star, TrendingUp, Shield, Zap } from 'lucide-react';
import { notFound } from 'next/navigation';
import AnimatedCard from '@/components/AnimatedCard';

// Define the PageProps type



// Landing Page Components
const ManufacturingLanding = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-6 py-12">
      <AnimatedCard className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-600 rounded-full mb-6">
          <Factory className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Manufacturing Excellence</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your manufacturing operations with our specialized consulting services designed for production optimization and operational efficiency.
        </p>
      </AnimatedCard>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <AnimatedCard delay={200} className="bg-white rounded-xl p-6 shadow-lg">
          <TrendingUp className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Production Optimization</h3>
          <p className="text-gray-600">Streamline your production processes and maximize efficiency with data-driven insights.</p>
        </AnimatedCard>
        
        <AnimatedCard delay={400} className="bg-white rounded-xl p-6 shadow-lg">
          <Shield className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
          <p className="text-gray-600">Implement robust quality control systems to ensure consistent product excellence.</p>
        </AnimatedCard>
        
        <AnimatedCard delay={600} className="bg-white rounded-xl p-6 shadow-lg">
          <Zap className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Lean Manufacturing</h3>
          <p className="text-gray-600">Eliminate waste and improve productivity through lean manufacturing principles.</p>
        </AnimatedCard>
      </div>

      <AnimatedCard delay={800} className="text-center">
        <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300 inline-flex items-center">
          Get Started <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </AnimatedCard>
    </div>
  </div>
);

const BusinessManagementLanding = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-6 py-12">
      <AnimatedCard className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-600 rounded-full mb-6">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Business Management Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Elevate your business operations with strategic management consulting tailored to drive growth and organizational excellence.
        </p>
      </AnimatedCard>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <AnimatedCard delay={200} className="bg-white rounded-xl p-6 shadow-lg">
          <Star className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
          <p className="text-gray-600">Develop comprehensive strategies to achieve your long-term business objectives.</p>
        </AnimatedCard>
        
        <AnimatedCard delay={400} className="bg-white rounded-xl p-6 shadow-lg">
          <Users className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Team Leadership</h3>
          <p className="text-gray-600">Build high-performing teams and develop leadership capabilities across your organization.</p>
        </AnimatedCard>
        
        <AnimatedCard delay={600} className="bg-white rounded-xl p-6 shadow-lg">
          <TrendingUp className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Process Improvement</h3>
          <p className="text-gray-600">Optimize business processes to increase efficiency and reduce operational costs.</p>
        </AnimatedCard>
      </div>

      <AnimatedCard delay={800} className="text-center">
        <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300 inline-flex items-center">
          Get Started <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </AnimatedCard>
    </div>
  </div>
);

const SoftwareDevelopmentLanding = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <div className="container mx-auto px-6 py-12">
      <AnimatedCard className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-600 rounded-full mb-6">
          <Code className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Software Development Consulting</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Accelerate your digital transformation with expert software development consulting and cutting-edge technology solutions.
        </p>
      </AnimatedCard>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <AnimatedCard delay={200} className="bg-white rounded-xl p-6 shadow-lg">
          <Code className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Custom Development</h3>
          <p className="text-gray-600">Build tailored software solutions that perfectly fit your business requirements.</p>
        </AnimatedCard>
        
        <AnimatedCard delay={400} className="bg-white rounded-xl p-6 shadow-lg">
          <Zap className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
          <p className="text-gray-600">Modernize your business processes with innovative digital solutions and automation.</p>
        </AnimatedCard>
        
        <AnimatedCard delay={600} className="bg-white rounded-xl p-6 shadow-lg">
          <Shield className="w-12 h-12 text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Technology Strategy</h3>
          <p className="text-gray-600">Develop comprehensive technology roadmaps aligned with your business goals.</p>
        </AnimatedCard>
      </div>

      <AnimatedCard delay={800} className="text-center">
        <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300 inline-flex items-center">
          Get Started <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </AnimatedCard>
    </div>
  </div>
);

// Main Category Page Component
const CategoryPage = ({ params }) => {
  const { slug } = params;

  const renderLandingPage = () => {
    switch(slug) {
      case 'manufacturing':
        return <ManufacturingLanding />;
      case 'business':
        return <BusinessManagementLanding />;
      case 'software':
        return <SoftwareDevelopmentLanding />;
      default:
        notFound();
        return <div></div>;
    }
  };

  return renderLandingPage();
};

export default CategoryPage;

export async function generateStaticParams() {
  return [
    { slug: 'manufacturing' },
    { slug: 'business' },
    { slug: 'software' },
  ];
}