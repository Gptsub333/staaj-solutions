'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const [activePhase, setActivePhase] = useState('phase1');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            We help small and midsize businesses scale through our proven quarterly framework, empowering 
            you to reach your goals with confidence.
          </p>
        </motion.div>

        <Tabs defaultValue="phase1" className="max-w-4xl mx-auto" onValueChange={setActivePhase}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="phase1" className="text-base sm:text-lg py-3">Phase 1: Get Organized</TabsTrigger>
            <TabsTrigger value="phase2" className="text-base sm:text-lg py-3">Phase 2: Get Action</TabsTrigger>
            <TabsTrigger value="phase3" className="text-base sm:text-lg py-3">Phase 3: Get Results</TabsTrigger>
          </TabsList>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            <TabsContent value="phase1" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#d51657] to-[#e83e74] text-white rounded-t-lg">
                  <CardTitle className="text-2xl">STAAJ Discovery</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    We perform the foundational work to learn what you know about your business and what you don't.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 pb-2">
                  <motion.ul variants={container} className="space-y-4">
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Collect Your Lists</p>
                        <p className="text-gray-600">Centralize contact lists, enhance databases with 300 new leads.</p>
                      </div>
                    </motion.li>
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Add MQL Targets</p>
                        <p className="text-gray-600">Enhance databases with quality marketing qualified leads.</p>
                      </div>
                    </motion.li>
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Load into CRM</p>
                        <p className="text-gray-600">Import lists for streamlined management of your contacts.</p>
                      </div>
                    </motion.li>
                  </motion.ul>
                </CardContent>
                <CardFooter className="flex justify-center pt-2 pb-6">
                  <Link href="/#contact">
                    <Button className="bg-[#d51657] hover:bg-[#c01450]">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="phase2" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#d51657] to-[#e83e74] text-white rounded-t-lg">
                  <CardTitle className="text-2xl">STAAJ Growth</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    We provide you with the tools and strategies to onboard new customers and grow revenue.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 pb-2">
                  <motion.ul variants={container} className="space-y-4">
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Set Up Onboarding Process</p>
                        <p className="text-gray-600">Implement structured onboarding for new clients.</p>
                      </div>
                    </motion.li>
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Set Up Pipeline Dashboards</p>
                        <p className="text-gray-600">Visualize sales pipeline for better forecasting.</p>
                      </div>
                    </motion.li>
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Weekly RevOps Meetings</p>
                        <p className="text-gray-600">Optimize revenue operations with structured reviews.</p>
                      </div>
                    </motion.li>
                  </motion.ul>
                </CardContent>
                <CardFooter className="flex justify-center pt-2 pb-6">
                  <Link href="/#contact">
                    <Button className="bg-[#d51657] hover:bg-[#c01450]">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="phase3" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-[#d51657] to-[#e83e74] text-white rounded-t-lg">
                  <CardTitle className="text-2xl">STAAJ Efficiency</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    We implement actions to reduce costs and create value opportunities for your business.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 pb-2">
                  <motion.ul variants={container} className="space-y-4">
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Setup Visible Ops in HubSpot</p>
                        <p className="text-gray-600">Integrate operations data for complete visibility.</p>
                      </div>
                    </motion.li>
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Transition to STAAJ LITE</p>
                        <p className="text-gray-600">Shift to advanced operational framework.</p>
                      </div>
                    </motion.li>
                    <motion.li variants={item} className="flex items-start">
                      <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-[#d51657]" />
                      <div>
                        <p className="font-medium">Continuous Improvement</p>
                        <p className="text-gray-600">Ongoing optimization of processes and operations.</p>
                      </div>
                    </motion.li>
                  </motion.ul>
                </CardContent>
                <CardFooter className="flex justify-center pt-2 pb-6">
                  <Link href="/#contact">
                    <Button className="bg-[#d51657] hover:bg-[#c01450]">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6">Program Deliverables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-[#d51657]">Centralized CRM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All relevant contacts and MQL targets loaded into a CRM for streamlined management.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-[#d51657]">Pipeline Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visual tools for monitoring sales opportunities and tracking progress.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-[#d51657]">Weekly RevOps Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular sessions to drive revenue operations and strategic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}