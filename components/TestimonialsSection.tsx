'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials');
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      quote: "STAAJ Solutions helped us refine our marketing strategy, and we've seen a 45% increase in qualified leads in just two months.",
      name: "Sarah Thompson",
      title: "CEO, FitTech Solutions",
      industry: "Tech Industry"
    },
    {
      quote: "The team at STAAJ transformed our online presence while preserving the personal touch that makes our store special. Our online sales have tripled.",
      name: "David Chen",
      title: "Owner, Novel Ideas Bookstore",
      industry: "Retail Industry"
    },
    {
      quote: "Their guidance helped us navigate regulatory challenges and secure funding. We couldn't have launched without their expertise.",
      name: "Dr. Anita Patel",
      title: "Founder, MedInnovate",
      industry: "Medical Technology"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-700">
            Hear from businesses that have scaled successfully with STAAJ Solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-[#d51657]/20 mb-4" />
                  <p className="italic text-gray-700 mb-6">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-[#d51657]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                    <div className="mt-2 inline-block bg-[#f9e9ee] px-3 py-1 rounded-full text-xs font-medium text-[#d51657]">
                      {testimonial.industry}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}