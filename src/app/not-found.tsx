'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HomeIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        {/* 404 Animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-8xl md:text-9xl font-bold gradient-text mb-6"
        >
          404
        </motion.div>

        {/* Broken Heart Icon */}
        <motion.div
          animate={{ 
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8"
        >
          <HeartIcon className="w-16 h-16 text-gray-400 mx-auto" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Looks like this page went on a date and never came back. 
          Let's get you back to finding your perfect match!
        </p>

        <div className="space-y-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <HomeIcon className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>
          
          <p className="text-sm text-gray-500">
            Error 404 - The page you're looking for doesn't exist
          </p>
        </div>
      </motion.div>
    </div>
  );
}
