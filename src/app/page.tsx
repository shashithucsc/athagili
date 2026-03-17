'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SafetySection from '../components/SafetySection';
import EnhancedAppGallery from '../components/EnhancedAppGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import AnimatedBackground from '../components/AnimatedBackground';
import MouseGlow from '../components/MouseGlow';

// Hooks
import { useSmoothScroll, useParallax } from '../utils/hooks';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll and parallax
  useSmoothScroll();
  useParallax();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingSpinner key="loading" />
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <MouseGlow />
          <AnimatedBackground />
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <SafetySection />
          <EnhancedAppGallery />
          <TestimonialsSection />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
