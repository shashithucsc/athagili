import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  PlayIcon,
  PauseIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  VideoCameraIcon,
  XMarkIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

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
      videoSrc: 'data:video/mp4;base64,', // Placeholder
      thumbnail: '/images/app-mockup-1.svg',
      icon: HeartIcon,
      color: 'from-pink-500 to-rose-600',
      features: ['Personality Analysis', 'Cultural Matching', 'Lifestyle Compatibility', 'Real-time Updates']
    },
    {
      id: 2,
      type: 'interactive',
      title: 'Secure Video Dating',
      description: 'Connect safely with built-in video calls, virtual dates, and real-time translation for international connections.',
      thumbnail: '/images/app-mockup-2.svg',
      icon: VideoCameraIcon,
      color: 'from-teal-500 to-cyan-600',
      features: ['HD Video Calls', 'Virtual Date Ideas', 'Screen Recording Protection', 'Language Translation']
    },
    {
      id: 3,
      type: 'showcase',
      title: 'Advanced Messaging',
      description: 'Rich messaging experience with voice notes, photo sharing, disappearing messages, and smart conversation starters.',
      thumbnail: '/images/app-mockup-3.svg',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-indigo-500 to-purple-600',
      features: ['Smart Icebreakers', 'Voice Messages', 'Photo Sharing', 'Disappearing Messages']
    },
    {
      id: 4,
      type: 'security',
      title: 'Safety & Verification',
      description: 'Multiple verification layers including photo verification, phone verification, and background checks for premium members.',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="568" viewBox="0 0 320 568"%3E%3Cdefs%3E%3ClinearGradient id="security" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2310b981"/%3E%3Cstop offset="100%25" style="stop-color:%2306d6a0"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="320" height="568" rx="30" fill="url(%23security)"/%3E%3Cpath d="M160 120 L200 150 L200 220 L160 250 L120 220 L120 150 Z" fill="white" opacity="0.9"/%3E%3Cpath d="M145 185 L155 195 L175 175" stroke="%2310b981" stroke-width="4" fill="none"/%3E%3Ctext x="160" y="320" font-family="Arial" font-size="18" fill="white" text-anchor="middle"%3EVerified Profiles%3C/text%3E%3Ctext x="160" y="350" font-family="Arial" font-size="14" fill="white" text-anchor="middle" opacity="0.8"%3E100%25 Authentic%3C/text%3E%3C/svg%3E',
      icon: ShieldCheckIcon,
      color: 'from-emerald-500 to-green-600',
      features: ['Photo Verification', 'Phone Verification', 'Background Checks', 'Report & Block System']
    },
    {
      id: 5,
      type: 'premium',
      title: 'Premium Experience',
      description: 'Unlock exclusive features like unlimited likes, super boosts, read receipts, and priority customer support.',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="568" viewBox="0 0 320 568"%3E%3Cdefs%3E%3ClinearGradient id="premium" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23f59e0b"/%3E%3Cstop offset="100%25" style="stop-color:%23d97706"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="320" height="568" rx="30" fill="url(%23premium)"/%3E%3Cpath d="M160 130 L175 160 L205 165 L185 185 L190 215 L160 200 L130 215 L135 185 L115 165 L145 160 Z" fill="white" opacity="0.9"/%3E%3Ctext x="160" y="280" font-family="Arial" font-size="18" fill="white" text-anchor="middle"%3EPremium Features%3C/text%3E%3Ctext x="160" y="310" font-family="Arial" font-size="14" fill="white" text-anchor="middle" opacity="0.8"%3EUnlimited Everything%3C/text%3E%3C/svg%3E',
      icon: SparklesIcon,
      color: 'from-amber-500 to-orange-600',
      features: ['Unlimited Likes', 'Super Boosts', 'Read Receipts', 'Priority Support']
    },
    {
      id: 6,
      type: 'community',
      title: 'Sri Lankan Community',
      description: 'Connect with Sri Lankans worldwide, join cultural events, and participate in community discussions and meetups.',
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="568" viewBox="0 0 320 568"%3E%3Cdefs%3E%3ClinearGradient id="community" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23ec4899"/%3E%3Cstop offset="100%25" style="stop-color:%23be185d"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="320" height="568" rx="30" fill="url(%23community)"/%3E%3Ccircle cx="140" cy="180" r="20" fill="white" opacity="0.8"/%3E%3Ccircle cx="180" cy="180" r="20" fill="white" opacity="0.9"/%3E%3Ccircle cx="160" cy="220" r="20" fill="white" opacity="0.7"/%3E%3Ctext x="160" y="300" font-family="Arial" font-size="18" fill="white" text-anchor="middle"%3ECommunity%3C/text%3E%3Ctext x="160" y="330" font-family="Arial" font-size="14" fill="white" text-anchor="middle" opacity="0.8"%3EGlobal Sri Lankan Network%3C/text%3E%3C/svg%3E',
      icon: UserGroupIcon,
      color: 'from-pink-500 to-rose-700',
      features: ['Cultural Events', 'Community Groups', 'Global Network', 'Local Meetups']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appFeatures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appFeatures.length) % appFeatures.length);
  };

  const toggleVideo = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      if (isVideoPlaying[id]) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(prev => ({ ...prev, [id]: !prev[id] }));
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience the <span className="gradient-text">Future</span> of Dating
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover powerful features designed specifically for the Sri Lankan community. 
            From AI-powered matching to secure video dating, everything you need is here.
          </p>
        </motion.div>

        {/* Main Feature Showcase */}
        <div className="relative mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Phone Mockup */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Screen Content */}
                    <img
                      src={appFeatures[currentSlide].thumbnail}
                      alt={appFeatures[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play Button for Videos */}
                    {appFeatures[currentSlide].type === 'video' && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedModal(appFeatures[currentSlide].id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20"
                      >
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <PlayIcon className="w-8 h-8 text-gray-800 ml-1" />
                        </div>
                      </motion.button>
                    )}
                  </div>
                  
                  {/* Phone Details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                </div>

                {/* Floating Feature Icons */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  {(() => {
                    const IconComponent = appFeatures[currentSlide].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </motion.div>
              </div>
            </motion.div>

            {/* Feature Details */}
            <motion.div
              key={`details-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${appFeatures[currentSlide].color} rounded-full text-white font-medium`}>
                {(() => {
                  const IconComponent = appFeatures[currentSlide].icon;
                  return <IconComponent className="w-5 h-5" />;
                })()}
                {appFeatures[currentSlide].type.charAt(0).toUpperCase() + appFeatures[currentSlide].type.slice(1)}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {appFeatures[currentSlide].title}
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                {appFeatures[currentSlide].description}
              </p>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-3">
                {appFeatures[currentSlide].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedModal(appFeatures[currentSlide].id)}
                className="btn-primary inline-flex items-center gap-2"
              >
                <PlayIcon className="w-5 h-5" />
                See in Action
              </motion.button>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-300 hover:text-primary-400"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-300 hover:text-primary-400"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {appFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-gradient-to-br from-gray-700 to-gray-600 border-2 border-primary-400 shadow-lg' 
                  : 'bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                {(() => {
                  const IconComponent = feature.icon;
                  return <IconComponent className="w-6 h-6 text-white" />;
                })()}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {appFeatures.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {appFeatures.find(f => f.id === selectedModal)?.title}
                </h3>
                <button
                  onClick={() => setSelectedModal(null)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-4">
                <img
                  src={appFeatures.find(f => f.id === selectedModal)?.thumbnail}
                  alt="Feature demo"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-gray-600">
                  {appFeatures.find(f => f.id === selectedModal)?.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {appFeatures.find(f => f.id === selectedModal)?.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
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
