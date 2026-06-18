import React, { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { useToast } from './Toast';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { addToast } = useToast();

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Chronology', href: '#chronology' },
    { name: 'Build Your Own', href: '#builder' },
    { name: 'Experience', href: '#experience' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerOrderNow = () => {
    addToast("Redirecting you to our late-night WhatsApp ordering kitchen...", "fire");
    setTimeout(() => {
      window.open("https://wa.me/919999999999?text=Hi%20Chrunchizz!%20I'd%20like%20to%20order%20some%20gourmet%20s'mores%20right%20now!", "_blank");
    }, 800);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/90 border-b border-stone-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className="flex items-center gap-1.5" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Flame className="w-5.5 h-5.5 text-amber-700 fill-amber-600" />
              <span className="font-sans font-black tracking-tighter text-2xl text-amber-800">
                CHRUNCHIZZ
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono font-bold tracking-widest px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">
                Gourmet S'mores
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-stone-600 hover:text-amber-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={triggerOrderNow}
              className="bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition-all shadow-sm font-semibold uppercase tracking-wider text-xs cursor-pointer"
            >
              Order Now
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-amber-700 hover:bg-stone-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-stone-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-xs font-semibold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 rounded-md text-stone-700 hover:text-amber-700 hover:bg-stone-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <button
                onClick={triggerOrderNow}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full shadow-sm text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition uppercase tracking-widest cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
