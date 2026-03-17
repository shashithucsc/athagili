import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gray-950">
      {/* Navbar spacer */}
      <div className="h-20 lg:h-24"></div>
      
      {/* Hero content taking full remaining viewport height */}
      <div className="relative min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex flex-col justify-between">
        
        {/* --- Background Elements --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Base gradient & Glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-950/90 z-10"></div>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-15"></div>
          
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950" />
          </video>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden z-20">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white/50 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Glowing orbs */}
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-[120px]"
          />
        </div>

        {/* --- Top Content: Headline & Social Proof --- */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 text-center flex-grow flex flex-col justify-center">
          <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-6">
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                <SparklesIcon className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white/80 tracking-wide">The #1 Inter-University Platform</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight">
                Find Your <br />
                <span className="text-transparent bg-clip-text bg-purple-500  inline-flex items-center gap-4">
                  Partner <HeartIcon className="w-12 h-12 md:w-16 md:h-16 text-purple-500 hidden sm:block animate-pulse" />
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-light">
                Trusted by thousands of students from UOC, UOM, J'Pura, Kelaniya & more. Start your journey today.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* --- Bottom Content: Glass Dock (CTAs & Stats) --- */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              
              {/* Left: CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-purple-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all w-full sm:w-auto"
                >
                  Start Matching Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <PlayIcon className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>

              {/* Right: Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full lg:w-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">50K+</div>
                  <div className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider mt-1">Active Users</div>
                </div>
                <div className="text-center border-x border-white/10 px-4 sm:px-8">
                  <div className="text-2xl md:text-3xl font-bold text-white">2.5K+</div>
                  <div className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider mt-1">Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">95%</div>
                  <div className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider mt-1">Match Rate</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-white/40">
              <ChevronDownIcon className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>

        {/* --- Video Modal --- */}
        <AnimatePresence>
          {isVideoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setIsVideoOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden max-w-5xl w-full aspect-video relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10"
                >
                  ✕
                </button>
                <video controls autoPlay className="w-full h-full object-cover">
                  <source src="/videos/background.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default HeroSection;