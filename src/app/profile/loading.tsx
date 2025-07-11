"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900/20 to-neutral-900/30 flex items-center justify-center">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/50 to-neutral-900 opacity-80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 relative">
          <motion.div
            className="w-20 h-20 rounded-full bg-white/10"
            animate={{
              boxShadow: ["0 0 0 0 rgba(129, 140, 248, 0.5)", "0 0 0 15px rgba(129, 140, 248, 0)"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <motion.div 
            className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 absolute inset-0 opacity-30"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            className="w-40 h-4 bg-white/10 rounded mb-2"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="w-24 h-3 bg-white/10 rounded"
            animate={{ opacity: [0.5, 0.7, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2,
            }}
          />
        </motion.div>
        
        <p className="text-white/70 mt-8 text-lg">Loading profile...</p>
      </div>
    </div>
  );
}
