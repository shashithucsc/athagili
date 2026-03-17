"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  PlayIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  VideoCameraIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// ----------------------------------------------------------------------
// Subtle Floating Background Hearts
// ----------------------------------------------------------------------
const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 25,
    delay: Math.random() * -20,
    size: Math.random() * 20 + 10,
    opacity: Math.random() * 0.1 + 0.05,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", x: 0, rotate: 0 }}
          animate={{ y: "-10vh", x: Math.random() > 0.5 ? 40 : -40, rotate: 360 }}
          transition={{ duration: heart.duration, delay: heart.delay, repeat: Infinity, ease: "linear" }}
          className="absolute text-pink-500 blur-[2px]"
          style={{ left: heart.left, width: heart.size, height: heart.size, opacity: heart.opacity }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
// ----------------------------------------------------------------------

const EnhancedAppGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedModal, setSelectedModal] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const appFeatures = [
    {
      id: 1,
      type: 'video',
      title: 'Smart Matching Algorithm',
      description: 'Our AI analyzes 200+ compatibility factors to find your perfect match based on personality, values, and lifestyle preferences.',
      videoSrc: 'data:video/mp4;base64,', 
      thumbnail: '/images/app-mockup-1.svg',
      icon: HeartIcon,
      theme: {
         gradient: 'from-purple-500 to-indigo-500',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
        bgGlow: 'from-purple-500/10',
        activeBorder: 'border-purple-500/50'
      },
      features: ['Personality Analysis', 'Cultural Matching', 'Lifestyle Compatibility', 'Real-time Updates']
    },
    {
      id: 2,
      type: 'interactive',
      title: 'Secure Video Dating',
      description: 'Connect safely with built-in video calls, virtual dates, and real-time translation for international connections.',
      thumbnail: '/images/app-mockup-2.svg',
      icon: VideoCameraIcon,
      theme: {
        gradient: 'from-cyan-400 to-blue-500',
        glow: 'shadow-[0_0_30px_rgba(34,211,238,0.3)]',
        bgGlow: 'from-cyan-500/10',
        activeBorder: 'border-cyan-500/50'
      },
      features: ['HD Video Calls', 'Virtual Date Ideas', 'Screen Recording Protection', 'Language Translation']
    },
    {
      id: 3,
      type: 'showcase',
      title: 'Advanced Messaging',
      description: 'Rich messaging experience with voice notes, photo sharing, disappearing messages, and smart conversation starters.',
      thumbnail: '/images/app-mockup-3.svg',
      icon: ChatBubbleLeftRightIcon,
      theme: {
        gradient: 'from-purple-500 to-indigo-500',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
        bgGlow: 'from-purple-500/10',
        activeBorder: 'border-purple-500/50'
      },
      features: ['Smart Icebreakers', 'Voice Messages', 'Photo Sharing', 'Disappearing Messages']
    },
    {
      id: 4,
      type: 'security',
      title: 'Safety & Verification',
      description: 'Multiple verification layers including photo verification, phone verification, and background checks for premium members.',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="568" viewBox="0 0 320 568"%3E%3Crect width="320" height="568" rx="30" fill="%230a0a0f"/%3E%3C/svg%3E',
      icon: ShieldCheckIcon,
      theme: {
        gradient: 'from-emerald-400 to-teal-500',
        glow: 'shadow-[0_0_30px_rgba(52,211,153,0.3)]',
        bgGlow: 'from-emerald-500/10',
        activeBorder: 'border-emerald-500/50'
      },
      features: ['Photo Verification', 'Phone Verification', 'Background Checks', 'Report & Block System']
    },
    {
      id: 5,
      type: 'premium',
      title: 'Premium Experience',
      description: 'Unlock exclusive features like unlimited likes, super boosts, read receipts, and priority customer support.',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="568" viewBox="0 0 320 568"%3E%3Crect width="320" height="568" rx="30" fill="%230a0a0f"/%3E%3C/svg%3E',
      icon: SparklesIcon,
      theme: {
        gradient: 'from-amber-400 to-orange-500',
        glow: 'shadow-[0_0_30px_rgba(251,191,36,0.3)]',
        bgGlow: 'from-amber-500/10',
        activeBorder: 'border-amber-500/50'
      },
      features: ['Unlimited Likes', 'Super Boosts', 'Read Receipts', 'Priority Support']
    },
    {
      id: 6,
      type: 'community',
      title: 'Sri Lankan Community',
      description: 'Connect with Sri Lankans worldwide, join cultural events, and participate in community discussions and meetups.',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="568" viewBox="0 0 320 568"%3E%3Crect width="320" height="568" rx="30" fill="%230a0a0f"/%3E%3C/svg%3E',
      icon: UserGroupIcon,
      theme: {
        gradient: 'from-rose-500 to-pink-600',
        glow: 'shadow-[0_0_30px_rgba(244,63,94,0.3)]',
        bgGlow: 'from-rose-500/10',
        activeBorder: 'border-rose-500/50'
      },
      features: ['Cultural Events', 'Community Groups', 'Global Network', 'Local Meetups']
    }
  ];

  const activeTheme = appFeatures[currentSlide].theme;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % appFeatures.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + appFeatures.length) % appFeatures.length);

  return (
    <section className="relative py-32 bg-[#030005] overflow-hidden transition-colors duration-700">
      
      {/* --- Dynamic Ambient Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Extended 3-Point Dynamic Lighting Mesh */}
        <div 
          className="absolute top-0 right-1/4 w-[80vw] h-[80vw] rounded-full blur-[200px] opacity-30 transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
        />
        <div className={`absolute bottom-0 -left-1/4 w-[90vw] h-[90vw] bg-gradient-to-br ${activeTheme.gradient} rounded-full blur-[200px] opacity-25 transition-all duration-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vw] bg-gradient-to-br ${activeTheme.gradient} rounded-full blur-[200px] opacity-20 transition-all duration-1000`} />
      </div>

      <FloatingHearts />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-inner">
            <SparklesIcon className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">
              The App Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Experience the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-purple-400 drop-shadow-sm">
              Future of Dating.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Discover powerful features designed specifically for the Sri Lankan community. 
            From AI-powered matching to secure video dating, everything you need is here.
          </p>
        </motion.div>

        {/* --- Main Feature Showcase --- */}
        <div className="relative mb-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            
            {/* Left: Dynamic Phone Mockup */}
            <motion.div
              key={`phone-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full lg:w-1/2 flex justify-center"
            >
              {/* Dynamic Aura behind the phone */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-gradient-to-br ${activeTheme.gradient} rounded-full blur-[80px] opacity-20 transition-all duration-700`} />

              <div className="relative">
                {/* Premium Phone Frame */}
                <div className="relative w-[300px] h-[600px] bg-[#0a0a0f] rounded-[3rem] p-2.5 shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/10 ring-1 ring-white/5">
                  <div className="w-full h-full bg-zinc-900 rounded-[2.5rem] overflow-hidden relative border border-white/5">
                    
                    {/* Screen Content */}
                    <img
                      src={appFeatures[currentSlide].thumbnail}
                      alt={appFeatures[currentSlide].title}
                      className="w-full h-full object-cover opacity-90"
                    />
                    
                    {/* Play Button Overlay */}
                    {appFeatures[currentSlide].type === 'video' && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedModal(appFeatures[currentSlide].id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] group"
                      >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${activeTheme.gradient} p-[1px]`}>
                          <div className="w-full h-full bg-[#0a0a0f]/80 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                            <PlayIcon className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                      </motion.button>
                    )}
                  </div>
                  
                  {/* Phone Notch/Details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-black rounded-full border border-white/5 shadow-inner"></div>
                </div>

                {/* Floating Feature Icon */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 lg:-right-8 w-16 h-16 p-[1px] rounded-2xl shadow-2xl z-20"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeTheme.gradient} rounded-2xl blur-lg opacity-60`} />
                  <div className={`relative w-full h-full bg-gradient-to-br ${activeTheme.gradient} rounded-2xl flex items-center justify-center`}>
                    {(() => {
                      const IconComponent = appFeatures[currentSlide].icon;
                      return <IconComponent className="w-8 h-8 text-white drop-shadow-md" />;
                    })()}
                  </div>
                </motion.div>
              </div>

              {/* Slider Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 lg:-left-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 lg:-right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Feature Details */}
            <motion.div
              key={`details-${currentSlide}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              {/* Type Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md`}>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${activeTheme.gradient}`} />
                <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">
                  {appFeatures[currentSlide].type}
                </span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {appFeatures[currentSlide].title}
              </h3>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                {appFeatures[currentSlide].description}
              </p>

              {/* Sub-Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {appFeatures[currentSlide].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${activeTheme.gradient} shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
                    <span className="text-sm font-medium text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedModal(appFeatures[currentSlide].id)}
                  className="relative group overflow-hidden rounded-2xl p-[1px] inline-block"
                >
                  <span className={`absolute inset-0 bg-gradient-to-r ${activeTheme.gradient} rounded-2xl opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
                  <div className={`relative bg-gradient-to-br ${activeTheme.gradient} text-white font-bold text-base px-8 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]`}>
                    <PlayIcon className="w-5 h-5 fill-white/20" />
                    See in Action
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- Ethereal Bento Selector Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {appFeatures.map((feature, index) => {
            const isActive = currentSlide === index;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setCurrentSlide(index)}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl bg-[#0a0a0f] transition-all duration-500 p-5 flex flex-col items-center text-center
                  ${isActive ? `border border-white/20 ${feature.theme.glow}` : 'border border-white/5 hover:-translate-y-1 hover:bg-white/5'}
                `}
              >
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-b ${feature.theme.bgGlow} to-transparent opacity-50 pointer-events-none`} />
                )}
                
                <div className="mb-3 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.theme.gradient} rounded-full blur-md transition-opacity duration-300 ${isActive ? 'opacity-60' : 'opacity-0 group-hover:opacity-30'}`} />
                  <feature.icon className={`relative w-7 h-7 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`} />
                </div>
                
                <h4 className={`text-xs font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                  {feature.title.split(' ')[0]} {/* Shortened for the small grid */}
                </h4>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* --- Dark Glass Modal --- */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-[0_0_80px_rgba(0,0,0,0.8)] relative"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 mb-3">
                    <SparklesIcon className="w-3 h-3 text-gray-400" />
                    <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Feature Demo</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">
                    {appFeatures.find(f => f.id === selectedModal)?.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedModal(null)}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group">
                  <img
                    src={appFeatures.find(f => f.id === selectedModal)?.thumbnail}
                    alt="Feature demo"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                        <PlayIcon className="w-6 h-6 text-white ml-1" />
                     </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  {appFeatures.find(f => f.id === selectedModal)?.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  {appFeatures.find(f => f.id === selectedModal)?.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <span className="text-sm text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EnhancedAppGallery;