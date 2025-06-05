'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Meet!</h2>
          <p className="text-lg text-gray-700">
            Ready to scale your business? Book a consultation with our team of experts.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-[#d51657] mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">Contact us through the form</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-[#d51657] mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">
                        Los Angeles Metropolitan Area, CA
                      </p>
                      <p className="text-gray-600">
                        We work remotely with clients nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose STAAJ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#d51657] font-bold mr-2">✓</span>
                    <span>Full-service executive team at your disposal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d51657] font-bold mr-2">✓</span>
                    <span>Proven framework that delivers results in one quarter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d51657] font-bold mr-2">✓</span>
                    <span>Personalized approach tailored to your business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d51657] font-bold mr-2">✓</span>
                    <span>Data-informed decision making</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Book Some Time Below</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input id="email" type="email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>What Kind of Founder Are You?*</Label>
                    <RadioGroup defaultValue="new">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="new" id="new" />
                        <Label htmlFor="new">New Founder</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="early" id="early" />
                        <Label htmlFor="early">Early Stage Founder</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="advanced" id="advanced" />
                        <Label htmlFor="advanced">Advanced/Custom/Diversified Founder</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="painPoint">What Is Your Biggest Pain Point?*</Label>
                    <Textarea 
                      id="painPoint" 
                      placeholder="Tell us about the challenges your business is facing"
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#d51657] hover:bg-[#c01450] text-white">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}