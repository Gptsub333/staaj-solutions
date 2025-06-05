import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">About STAAJ Solutions</h1>
              
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-[#d51657] mt-8 mb-4">Our Story</h2>
                <p className="mb-6">
                  We saw the power of innovation in real-time by growing the revenue of large businesses. 
                  Given the workforce and budget, progress was easy. But what about small and midsize businesses, 
                  the lifeblood of our economy? We wanted to do meaningful work for this market segment and deliver 
                  more value to them than had been given to us. That's why we founded STAAJ Solutions.
                </p>
                
                <h2 className="text-2xl font-bold text-[#d51657] mt-8 mb-4">Our Purpose</h2>
                <p className="mb-6">
                  Scale small and midsize businesses with enterprise-level expertise.
                </p>
                
                <h2 className="text-2xl font-bold text-[#d51657] mt-8 mb-4">Our Mission</h2>
                <p className="mb-6">
                  To empower small and midsize businesses to scale with confidence.
                </p>
                
                <h2 className="text-2xl font-bold text-[#d51657] mt-8 mb-4">Our Vision</h2>
                <p className="mb-6">
                  A world where ambitious people can build successful companies that make a difference in the world.
                </p>
                
                <h2 className="text-2xl font-bold text-[#d51657] mt-8 mb-4">Our Values</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>We are obsessed with the success of our clients, and their clients.</li>
                  <li>We make a positive impact with the products and services we put into the world.</li>
                  <li>We elevate our partners with the best tools at the right time.</li>
                  <li>We teach businesses to connect with their product markets.</li>
                  <li>We ensure visibility and transparency with data-informed solutions.</li>
                </ul>
              </div>
              
              <div className="mt-12 text-center">
                <Link href="/#contact">
                  <Button className="bg-[#d51657] hover:bg-[#c01450] text-white px-6 py-3 text-lg">
                    Work With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}