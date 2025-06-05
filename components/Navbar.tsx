'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          {/* Logo */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/logo.png" // Update this path to match your logo file location
              alt="STAAJ Solutions Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          {/* Company Name */}
          <span className="text-2xl font-bold">
            <span className="text-[#d51657]">STAAJ</span> Solutions
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#services" className="font-medium text-gray-700 hover:text-[#d51657] transition-colors">
            Services
          </Link>
          <Link href="/#about" className="font-medium text-gray-700 hover:text-[#d51657] transition-colors">
            About
          </Link>
          <Link href="/#clients" className="font-medium text-gray-700 hover:text-[#d51657] transition-colors">
            Clients
          </Link>
          <Link href="/#contact" className="font-medium text-gray-700 hover:text-[#d51657] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth">
            <Button variant="outline" className="border-[#d51657] text-[#d51657] hover:bg-[#d51657] hover:text-white">
              Login
            </Button>
          </Link>
          <Link href="/auth?tab=register">
            <Button className="bg-[#d51657] hover:bg-[#c01450] text-white">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-16">
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              href="/#services" 
              className="font-medium text-gray-700 hover:text-[#d51657] py-2 border-b"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#about" 
              className="font-medium text-gray-700 hover:text-[#d51657] py-2 border-b"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/#clients" 
              className="font-medium text-gray-700 hover:text-[#d51657] py-2 border-b"
              onClick={() => setIsOpen(false)}
            >
              Clients
            </Link>
            <Link 
              href="/#contact" 
              className="font-medium text-gray-700 hover:text-[#d51657] py-2 border-b"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/auth" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-[#d51657] text-[#d51657]">
                  Login
                </Button>
              </Link>
              <Link href="/auth?tab=register" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#d51657] hover:bg-[#c01450] text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}