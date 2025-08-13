import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gray-900">
      {/* Navbar spacer - creates space for the fixed navbar */}
      <div className="h-24 lg:h-28"></div>
      
      {/* Hero content with min-height to fill remaining space */}
      <div className="relative min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-7rem)] flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-gray-900/70 z-10"></div>
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40 backdrop-blur-[2px] z-15"></div>
        
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          {/* Fallback gradient */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        </video>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full opacity-20 blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Find Your
              <span className="block gradient-text">
                Perfect Match
              </span>
              in Sri Lanka
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Connect with genuine people who share your values, culture, and dreams. 
              Start your journey to meaningful relationships today.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-4"
            >
              Start Dating Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-12 py-4 flex items-center gap-2"
              onClick={() => setIsVideoOpen(true)}
            >
              <PlayIcon className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50K+</div>
              <div className="text-white/80 text-sm md:text-base">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">2.5K+</div>
              <div className="text-white/80 text-sm md:text-base">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">95%</div>
              <div className="text-white/80 text-sm md:text-base">Match Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 opacity-30"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 opacity-30"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden max-w-4xl w-full aspect-video relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
            >
              ×
            </button>
            <video
              controls
              autoPlay
              className="w-full h-full object-cover"
            >
              <source src="/videos/background.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
