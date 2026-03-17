"use client";

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#030005]">
      
      {/* =========================================
        1. THE LIQUID CORE (Background & Motion)
        ========================================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Subtle starlight/noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay z-10" />

        {/* The Fluid Gradient Orbs */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 0.9, 1],
            borderRadius: ["40%", "30%", "50%", "40%"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] opacity-60 mix-blend-screen blur-[60px]"
          style={{
            background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #ec4899 100%)",
          }}
        />

        <motion.div
          animate={{ 
            rotate: -360,
            scale: [0.9, 1.2, 1, 0.9],
            borderRadius: ["50%", "40%", "60%", "50%"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] opacity-40 mix-blend-screen blur-[80px]"
          style={{
            background: "linear-gradient(225deg, #f43f5e 0%, #6366f1 50%, #f43f5e 100%)",
          }}
        />

        {/* Deep center shadow to make the text pop */}
        <div className="absolute w-[200px] h-[200px] bg-black/40 rounded-full blur-3xl z-0" />
      </div>

      {/* =========================================
        2. ELEGANT FOREGROUND (Brand & Status)
        ========================================= */}
      <div className="relative z-20 flex flex-col items-center">
        
        {/* Breathing Logo Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-serif text-4xl sm:text-5xl font-bold tracking-widest text-white drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
          >
            ATHAGILI
          </motion.h1>
        </motion.div>

        {/* Minimalist Status Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-pink-100/70 text-xs font-medium tracking-[0.3em] uppercase">
              Curating Matches
            </span>
            
            {/* Elegant fluid dots */}
            <span className="flex gap-[3px] ml-1 mt-[2px]">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    opacity: [0.2, 1, 0.2], 
                    scale: [0.8, 1.2, 0.8] 
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1 h-1 rounded-full bg-pink-300 shadow-[0_0_5px_rgba(244,114,182,0.8)]"
                />
              ))}
            </span>
          </div>

          {/* Symmetrical glowing line */}
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mt-2" />
        </motion.div>

      </div>
    </div>
  );
}