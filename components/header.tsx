"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PhoneCall, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#benefits' },
    { name: 'Areas', href: '#areas' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-black/90 text-white shadow-lg py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-amber-400">Gold</span>
            <span className={scrolled ? 'text-white' : 'text-black'}>Ride</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                'font-medium transition-colors hover:text-amber-400',
                scrolled ? 'text-white' : 'text-black'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Call Button */}
        <div className="hidden md:flex items-center">
          <Button variant="default" className="bg-amber-400 hover:bg-amber-500 text-black font-semibold">
            <PhoneCall className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? 
            <X className={scrolled ? 'text-white' : 'text-black'} /> : 
            <Menu className={scrolled ? 'text-white' : 'text-black'} />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        'md:hidden absolute left-0 right-0 bg-black/95 transition-all duration-300 overflow-hidden',
        isOpen ? 'max-h-[500px] py-4' : 'max-h-0'
      )}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-white py-2 font-medium hover:text-amber-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="bg-amber-400 hover:bg-amber-500 text-black font-semibold w-full">
            <PhoneCall className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;