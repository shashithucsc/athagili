import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Trigger slightly earlier for a snappier feel
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Safety', href: '#safety' },
    { name: 'Success Stories', href: '#testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-950/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-gray-950/80 to-transparent pt-6 pb-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="#home">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                <img 
                  src="/images/logo.png" 
                  alt="Athagili Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain relative z-10"
                  onError={(e) => {
                    e.currentTarget.src = "/images/logo-placeholder.svg";
                  }}
                />
              </div>
              
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 border border-white/5 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2"
              >
                Login
              </motion.button>
            </Link>
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(219,39,119,0.3)] hover:shadow-[0_0_25px_rgba(219,39,119,0.5)] transition-all duration-300 border border-pink-500/30"
              >
                Join Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-8 space-y-6 h-full">
              {/* Mobile Links */}
              <div className="flex flex-col space-y-4 border-b border-white/10 pb-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="https://athagili.shashithrashmika.tech/login" className="w-full">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                  >
                    Login to Account
                  </button>
                </Link>
                <Link href="https://athagili.shashithrashmika.tech/register/simple" className="w-full">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-4 rounded-2xl bg-purple-600 text-white font-semibold shadow-lg shadow-pink-900/20"
                  >
                    Create Free Account
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;