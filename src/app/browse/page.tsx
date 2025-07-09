"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartIcon,
  XMarkIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";

interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  location: string;
  interests: string[];
  photo: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Nimali",
    age: 23,
    bio: "Lover of sunsets and coffee. Looking for someone to explore Sri Lanka with!",
    location: "Colombo, Sri Lanka",
    interests: ["Travel", "Music", "Books"],
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Kavindu",
    age: 25,
    bio: "Tech enthusiast and foodie. Swipe right if you love kotthu!",
    location: "Kandy, Sri Lanka",
    interests: ["Cooking", "Hiking", "Gaming"],
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Rashmi",
    age: 22,
    bio: "Artist by passion, teacher by profession. Let's paint the town together!",
    location: "Galle, Sri Lanka",
    interests: ["Art", "Beach", "Dancing"],
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
  },
];

const UserCard: React.FC<{ 
  user: User; 
  onAction: (action: 'like' | 'pass') => void;
  isActive: boolean;
}> = ({ user, onAction, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.7, 
        y: 0, 
        scale: isActive ? 1 : 0.95,
        zIndex: isActive ? 10 : 1
      }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      transition={{ 
        duration: 0.5, 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
      className="w-full max-w-[600px] mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden">
          {/* Profile Image */}
          <motion.div 
            className="relative flex justify-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-80 rounded-2xl overflow-hidden border-3 border-white/20 shadow-xl relative">
              <img
                src={user.photo}
                alt={user.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
              {/* Floating sparkle */}
              <motion.div
                className="absolute top-4 right-4 text-pink-400"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <SparklesIcon className="w-6 h-6" />
              </motion.div>
            
              {/* Name overlay */}
              <motion.div
                className="absolute bottom-4 left-4 right-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-bold text-white mb-1">
                  {user.name}, {user.age}
                </h2>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content */}
          <div className="p-4 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-200 leading-relaxed mb-3">
                {user.bio}
              </p>
              
              <div className="flex items-center text-gray-300 mb-3">
                <MapPinIcon className="w-4 h-4 mr-2 text-pink-400" />
                <span>{user.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 rounded-full border border-pink-500/30 text-sm"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden md:grid md:grid-cols-2 min-h-[350px]">
          {/* Left Column - Image and Name */}
          <motion.div 
            className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex flex-col items-center justify-center p-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-48 h-64 lg:w-56 lg:h-72 rounded-xl overflow-hidden border-3 border-white/20 shadow-xl">
                <img
                  src={user.photo}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating sparkle */}
              <motion.div
                className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2 shadow-lg"
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
                <SparklesIcon className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.div
              className="text-center mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-1">
                {user.name}
              </h2>
              <p className="text-lg text-gray-300">
                {user.age} years old
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Bio, Location, Interests */}
          <motion.div 
            className="p-6 flex flex-col justify-between"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="space-y-4">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-base font-semibold text-white mb-2">About</h3>
                <p className="text-gray-200 leading-relaxed text-sm">
                  {user.bio}
                </p>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-base font-semibold text-white mb-2">Location</h3>
                <div className="flex items-center text-gray-200 text-sm">
                  <MapPinIcon className="w-4 h-4 mr-2 text-pink-400" />
                  <span>{user.location}</span>
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-base font-semibold text-white mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {user.interests.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="px-2 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 rounded-full border border-pink-500/30 text-xs font-medium hover:bg-pink-500/30 transition-colors cursor-default"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="flex justify-center space-x-6 p-4 bg-black/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => onAction('pass')}
            className="w-12 h-12 bg-gray-600/80 hover:bg-red-500/80 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
          >
            <XMarkIcon className="w-6 h-6 text-white group-hover:text-red-100" />
          </motion.button>
          
          <motion.button
            onClick={() => onAction('like')}
            className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.0, type: "spring" }}
          >
            <HeartIcon className="w-7 h-7 text-white group-hover:text-pink-100" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function BrowsePage() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentUser = users[currentUserIndex];

  const handleAction = (action: 'like' | 'pass') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(action === 'like' ? 'right' : 'left');
    
    setTimeout(() => {
      setCurrentUserIndex(prev => prev + 1);
      setDirection(null);
      setIsAnimating(false);
    }, 600);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!currentUser || isAnimating) return;
      
      switch (e.key) {
        case "ArrowLeft":
          handleAction('pass');
          break;
        case "ArrowRight":
          handleAction('like');
          break;
      }
    };
    
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentUser, isAnimating]);

  // No more users state
  if (currentUserIndex >= users.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <Navbar />
        
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1], 
              rotate: 360,
              x: [0, 100, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2], 
              rotate: -360,
              x: [0, -100, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen pt-64 pb-8 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md mx-4 border border-white/20"
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <HeartIcon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              That's everyone for now! 🌟
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              You've seen all available profiles. Check back later for new connections!
            </p>
            
            <motion.button
              onClick={() => setCurrentUserIndex(0)}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Over
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <Navbar />
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Main content */}
      <div className="relative z-10 pt-64 pb-8 px-4 min-h-screen flex flex-col justify-center">
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {currentUser && (
              <motion.div
                key={currentUser.id}
                initial={{ 
                  opacity: 0, 
                  x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
                  scale: 0.8,
                  transition: { duration: 0.4 }
                }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-full max-w-3xl"
              >
                <UserCard 
                  user={currentUser} 
                  onAction={handleAction} 
                  isActive={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress indicator */}
        <motion.div 
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {users.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index < currentUserIndex 
                  ? 'bg-pink-500 w-4' 
                  : index === currentUserIndex 
                    ? 'bg-white w-6' 
                    : 'bg-gray-600'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1 }}
            />
          ))}
        </motion.div>

        {/* Keyboard hint */}
        <motion.div 
          className="text-center mt-4 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p>Use ← → arrow keys or buttons to navigate</p>
        </motion.div>
      </div>
    </div>
  );
}
