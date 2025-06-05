'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-[#d51657]">Scaling</span> your business is hard.
              <br />We're here to help.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              STAAJ Solutions empowers small and midsize businesses to scale with confidence, providing enterprise-level expertise for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/#contact">
                <Button className="bg-[#d51657] hover:bg-[#c01450] text-white px-6 py-3 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" className="border-[#d51657] text-[#d51657] hover:bg-[#f9e9ee] px-6 py-3 text-lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <svg viewBox="0 0 200 200" className="absolute -z-10 w-full h-full -top-4 -left-4">
                <path
                  fill="#f9e9ee"
                  d="M40,-51.7C52.9,-42.8,65.1,-31.6,70.2,-17.3C75.4,-3,73.6,14.4,65.8,28.1C58,41.7,44.2,51.6,29.1,58C13.9,64.5,-2.6,67.6,-19.1,64.7C-35.7,61.8,-52.3,52.9,-63.5,38.6C-74.6,24.4,-80.4,4.9,-75.6,-11C-70.8,-27,-55.5,-39.4,-40.6,-48.3C-25.7,-57.2,-11.3,-62.5,1.9,-64.9C15.1,-67.4,27,-60.7,40,-51.7Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
                <div className="text-3xl font-bold mb-4 text-[#d51657]">
                  STAAJ Discovery
                </div>
                <p className="mb-6">
                  Our Growth Accelerator program is designed to be low-cost, easy to use, and maximize results in as little as 30 days!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#d51657] font-bold mr-2">✓</span>
                    <span>Personalized strategic planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d51657] font-bold mr-2">✓</span>
                    <span>Expert-led workshops & training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#d51657] font-bold mr-2">✓</span>
                    <span>Data-informed decision making</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/#contact">
                    <Button className="bg-[#d51657] hover:bg-[#c01450] text-white">
                      Book a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}