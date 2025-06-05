'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Users, Briefcase, Activity } from 'lucide-react';

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('clients');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="clients" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
          <p className="text-lg text-gray-700">
            We work with ambitious leaders who are ready to scale their businesses and make a difference in the world.
          </p>
        </motion.div>

        <Tabs defaultValue="tech" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="tech" className="text-base sm:text-lg py-3">Tech Industry</TabsTrigger>
            <TabsTrigger value="retail" className="text-base sm:text-lg py-3">Retail</TabsTrigger>
            <TabsTrigger value="medical" className="text-base sm:text-lg py-3">Medical Technology</TabsTrigger>
          </TabsList>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsContent value="tech" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-[url('https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center min-h-[200px] md:min-h-full"></div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-[#d51657]">Tech Startups & Scale-ups</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="mb-4 text-gray-700">
                        For tech founders like Sarah, who are looking to break through growth ceilings and scale their 
                        development teams effectively.
                      </p>
                      
                      <div className="mt-6 space-y-4">
                        <h4 className="font-medium text-lg">Common Challenges:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Hitting growth ceilings with unclear paths forward</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Balancing product development with customer acquisition</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Struggling with effective go-to-market strategies</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="retail" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-[url('https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center min-h-[200px] md:min-h-full"></div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-[#d51657]">Retail Businesses</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="mb-4 text-gray-700">
                        For retail entrepreneurs like David, who need to expand their online presence while maintaining 
                        the charm and customer experience of their physical stores.
                      </p>
                      
                      <div className="mt-6 space-y-4">
                        <h4 className="font-medium text-lg">Common Challenges:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Navigating e-commerce platforms and digital marketing</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Balancing online and in-store experiences</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Competing effectively with larger retailers</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="medical" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-[url('https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center min-h-[200px] md:min-h-full"></div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-[#d51657]">Medical Technology</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="mb-4 text-gray-700">
                        For medical device entrepreneurs like Dr. Patel, who need support in bringing innovative solutions 
                        to market while navigating complex regulatory environments.
                      </p>
                      
                      <div className="mt-6 space-y-4">
                        <h4 className="font-medium text-lg">Common Challenges:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Securing funding while developing complex products</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Navigating regulatory approval processes</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#d51657] mr-2">•</span>
                            <span>Creating effective outreach in medical communities</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
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
          <h3 className="text-2xl font-bold mb-8">What Makes Us Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#f9e9ee] p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-[#d51657]" />
                </div>
                <CardTitle className="text-xl">People-First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Our team has deep executive experience and believes in a direct, personable approach with our clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#f9e9ee] p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Briefcase className="h-8 w-8 text-[#d51657]" />
                </div>
                <CardTitle className="text-xl">Full-Service Executive Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Access an entire team with the expertise and drive to move your business to the next level sustainably.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#f9e9ee] p-3 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <Activity className="h-8 w-8 text-[#d51657]" />
                </div>
                <CardTitle className="text-xl">Rapid Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Our ability to discover, strategize, and execute within a single quarter is unmatched in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}