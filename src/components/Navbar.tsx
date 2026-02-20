import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 h-20 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-accent-gold group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-3xl">dentistry</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-black text-xl leading-tight uppercase tracking-tight">Dental Parlor</span>
            <span className="text-accent-gold text-[10px] font-bold tracking-[0.2em] uppercase">Implant Clinic</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-accent-gold ${
                location.pathname === link.path ? 'text-primary border-b-2 border-primary' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent-gold hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-accent-gold/20 flex items-center gap-2"
          >
            <Calendar size={16} />
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white shadow-2xl lg:hidden p-6 space-y-4 border-t border-slate-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-slate-700 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
