import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

interface VideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

const FloatingVideoPlayer = ({ isOpen, onClose, videoUrl, title = "Athagili Demo" }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Video Container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center relative">
                {/* Demo Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-secondary-900/50" />
                
                {/* Video Content */}
                <div className="relative z-10 text-center text-white">
                  <motion.div
                    animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                    className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm"
                  >
                    <div className="text-4xl">🎥</div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{title}</h3>
                  <p className="text-lg text-white/90 mb-8">
                    See how easy it is to find your perfect match
                  </p>
                  
                  {/* Demo Features */}
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-sm">
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-2xl mb-2">📱</div>
                      <div>Easy Registration</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-2xl mb-2">🎯</div>
                      <div>Smart Matching</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-2xl mb-2">💬</div>
                      <div>Secure Chat</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                      <div className="text-2xl mb-2">💕</div>
                      <div>Find Love</div>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm"
                    >
                      {isPlaying ? (
                        <PauseIcon className="w-6 h-6" />
                      ) : (
                        <PlayIcon className="w-6 h-6 ml-1" />
                      )}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm"
                    >
                      {isMuted ? (
                        <SpeakerXMarkIcon className="w-5 h-5" />
                      ) : (
                        <SpeakerWaveIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <div className="text-sm text-white/80">
                    Demo Video • 2:30
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-white/20 rounded-full h-1">
                    <motion.div
                      className="bg-white rounded-full h-1"
                      initial={{ width: "0%" }}
                      animate={{ width: isPlaying ? "100%" : "0%" }}
                      transition={{ duration: isPlaying ? 150 : 0, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-8"
            >
              <p className="text-white/90 mb-4">
                Ready to start your own love story?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                  onClick={onClose}
                >
                  Join Athagili Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary bg-white"
                  onClick={onClose}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingVideoPlayer;
