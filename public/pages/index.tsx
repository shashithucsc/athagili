import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import EnhancedAppGallery from '../components/EnhancedAppGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import AnimatedBackground from '../components/AnimatedBackground';

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
    <>
      <Head>
        <title>Athagili - Find Your Perfect Match in Sri Lanka | Dating App</title>
        <meta 
          name="description" 
          content="Connect with genuine Sri Lankans worldwide. Find meaningful relationships built on shared values and culture. Join thousands who found love on Athagili." 
        />
        <meta name="keywords" content="Sri Lankan dating, dating app Sri Lanka, matrimonial Sri Lanka, Lankan singles, online dating" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Athagili - Find Your Perfect Match in Sri Lanka" />
        <meta property="og:description" content="Connect with genuine Sri Lankans worldwide. Find meaningful relationships built on shared values and culture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://athagili.lk" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

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
            <AnimatedBackground />
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <EnhancedAppGallery />
            <TestimonialsSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
} 