import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-gray-900/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img 
              src="/images/logo.png" 
              alt="Athagili Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/images/logo-placeholder.svg";
              }}
            />
            <span className="text-3xl font-bold text-white transition-colors duration-300">
             අතැගිලි
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-lg font-medium transition-colors duration-300 hover:text-primary-400 text-white/90"
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
                className="text-lg font-medium transition-colors duration-300 text-white/90 hover:text-white"
              >
                Sign In
              </motion.button>
            </Link>
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Join Now
              </motion.button>
            </Link>
            <Link href="/complete-profile">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 text-sm"
              >
                Complete Profile
              </motion.button>
            </Link>
            <Link href="/browse">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300 text-sm"
              >
                Browse Users
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors duration-300 text-white"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/90 text-lg font-medium hover:text-primary-400 transition-colors duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 space-y-3">
                <Link href="/login" className="block">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left text-white/90 text-lg font-medium hover:text-white transition-colors duration-300"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href="/register" className="block">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full btn-primary text-center"
                  >
                    Join Now
                  </button>
                </Link>
                <Link href="/complete-profile" className="block">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left text-purple-400 text-lg font-medium hover:text-purple-300 transition-colors duration-300"
                  >
                    Complete Profile
                  </button>
                </Link>
                <Link href="/browse" className="block">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left text-pink-400 text-lg font-medium hover:text-pink-300 transition-colors duration-300"
                  >
                    Browse Users
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
