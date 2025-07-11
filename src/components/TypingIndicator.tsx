import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[80%] md:max-w-[70%]">
        <motion.div 
          className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md text-white/90 rounded-bl-sm flex items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <div className="flex space-x-1">
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="h-2 w-2 bg-indigo-400 rounded-full"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: dot * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
        <div className="text-xs mt-1 text-white/50">
          Typing...
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
