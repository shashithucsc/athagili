"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import Navbar from "../../components/Navbar";

interface MatchedUser {
  id: string;
  name: string;
  age: number;
  tagline: string;
  photo: string;
  matchedAt: string;
  isNewMatch?: boolean;
}

const matchedUsers: MatchedUser[] = [
  {
    id: "1",
    name: "Nimali",
    age: 23,
    tagline: "Coffee lover & sunset chaser ☕",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
    matchedAt: "2024-01-15",
    isNewMatch: true,
  },
  {
    id: "2",
    name: "Kavindu",
    age: 25,
    tagline: "Tech enthusiast who loves kotthu 🍛",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    matchedAt: "2024-01-14",
    isNewMatch: true,
  },
  {
    id: "3",
    name: "Rashmi",
    age: 22,
    tagline: "Artist painting life with colors 🎨",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    matchedAt: "2024-01-13",
  },
  {
    id: "4",
    name: "Thilanka",
    age: 26,
    tagline: "Beach walks & good vibes 🌊",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face",
    matchedAt: "2024-01-12",
  },
  {
    id: "5",
    name: "Sahan",
    age: 24,
    tagline: "Musician seeking harmony 🎵",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    matchedAt: "2024-01-11",
  },
  {
    id: "6",
    name: "Dulani",
    age: 27,
    tagline: "Yoga teacher & nature lover 🧘‍♀️",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
    matchedAt: "2024-01-10",
  },
];

const MatchCard: React.FC<{ 
  match: MatchedUser; 
  index: number;
}> = ({ match, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:border-pink-400/30">
        {/* New Match Badge */}
        {match.isNewMatch && (
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            className="absolute -top-2 -right-2 z-10 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
          >
            NEW!
          </motion.div>
        )}

        {/* Profile Photo */}
        <div className="relative p-4 pb-2">
          <motion.div
            className="relative mx-auto"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-xl mx-auto relative">
              <img
                src={match.photo}
                alt={match.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating sparkle */}
            <motion.div
              className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1.5 shadow-lg"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <SparklesIcon className="w-3 h-3 text-white" />
            </motion.div>

            {/* Hearts animation */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <HeartIconSolid className="w-8 h-8 text-pink-400 drop-shadow-lg" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* User Info */}
        <div className="px-4 pb-4 text-center">
          <motion.h3
            className="text-lg font-bold text-white mb-1"
            animate={{ color: isHovered ? "#f472b6" : "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            {match.name}, {match.age}
          </motion.h3>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
            {match.tagline}
          </p>

          {/* Message Button */}
          <Link href={`/chat/${match.id}`}>
            <motion.button
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" />
              <span>Message</span>
            </motion.button>
          </Link>
        </div>

        {/* Match indicator */}
        <motion.div
          className="absolute top-4 left-4 flex items-center space-x-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <HeartIconSolid className="w-4 h-4 text-pink-400" />
          <HeartIconSolid className="w-4 h-4 text-purple-400" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const EmptyState: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md mx-auto border border-white/20"
    >
      <motion.div
        className="w-24 h-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeartIcon className="w-12 h-12 text-gray-400" />
      </motion.div>
      
      <h2 className="text-2xl font-bold text-white mb-4">
        No matches yet 😅
      </h2>
      
      <p className="text-gray-300 mb-6 leading-relaxed">
        You haven't matched with anyone yet. Keep swiping to find your perfect connection!
      </p>
      
      <Link href="/browse">
        <motion.button
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Go back to Browse</span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default function MatchesPage() {
  const hasMatches = matchedUsers.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <Navbar />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Main content with proper navbar spacing */}
      <div className="relative z-10">
        {/* Navbar spacer - creates space for the fixed navbar */}
        <div className="h-32 lg:h-36"></div>
        
        {/* Content container */}
        <div className="pt-16 pb-8 px-4 min-h-screen">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Your Matches
              </h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                These are the people who liked you back! Start a conversation and see where it leads.
              </p>
            </motion.div>

            {/* Matches Count */}
            {hasMatches && (
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-4 py-2 rounded-full border border-pink-500/30">
                  <HeartIconSolid className="w-5 h-5" />
                  <span className="font-semibold">
                    {matchedUsers.length} {matchedUsers.length === 1 ? 'Match' : 'Matches'}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Matches Grid or Empty State */}
            {hasMatches ? (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {matchedUsers.map((match, index) => (
                  <MatchCard 
                    key={match.id} 
                    match={match} 
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="flex items-center justify-center min-h-[60vh]">
                <EmptyState />
              </div>
            )}

            {/* New matches notification */}
            {hasMatches && matchedUsers.some(match => match.isNewMatch) && (
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-300 px-4 py-2 rounded-full border border-pink-500/20">
                  <SparklesIcon className="w-4 h-4" />
                  <span className="text-sm">
                    You have new matches! Don't keep them waiting 💕
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
