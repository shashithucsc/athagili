"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  PencilSquareIcon,
  MapPinIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";

// Types for our user profile data
interface Interest {
  name: string;
  emoji: string;
}

interface UserProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  gender: string;
  photo: string;
  interests: Interest[];
  status: string;
  matchStats: {
    matches: number;
    likesReceived: number;
    messages: number;
  };
}

// Dummy profile data for development
const DUMMY_PROFILE: UserProfile = {
  id: "user123",
  name: "Nimali",
  age: 23,
  location: "Colombo",
  bio: "Life is a journey best enjoyed with good coffee and better company. Always seeking new adventures and meaningful connections.",
  gender: "Female",
  photo: "/images/couple-2.svg", // Using a better placeholder image
  interests: [
    { name: "Travel", emoji: "🌴" },
    { name: "Art", emoji: "🎨" },
    { name: "Music", emoji: "🎵" },
    { name: "Yoga", emoji: "🧘‍♀️" },
    { name: "Coffee", emoji: "☕" },
    { name: "Photography", emoji: "📸" },
    { name: "Reading", emoji: "📚" },
    { name: "Hiking", emoji: "🥾" },
  ],
  status: "Looking for something meaningful",
  matchStats: {
    matches: 8,
    likesReceived: 21,
    messages: 3,
  },
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>(DUMMY_PROFILE);
  const router = useRouter();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900/20 to-neutral-900/30">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/50 to-neutral-900 opacity-80"></div>
      </div>
      
      <Navbar />

      {/* Main content with proper navbar spacing */}
      <div className="relative z-10">
        {/* Navbar spacer - creates space for the fixed navbar */}
        <div className="h-32 lg:h-36"></div>
        
        {/* Profile container */}
        <div className="max-w-4xl mx-auto pb-24 px-4 sm:px-6 pt-12">
          {/* Header - Profile photo and name */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced Profile Image with interactive elements */}
            <motion.div 
              className="relative mx-auto mb-10"
              whileHover="hover"
            >
              {/* Decorative backdrop for profile image */}
              <motion.div 
                className="absolute -inset-8 rounded-[50%] bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-fuchsia-600/30 opacity-0"
                variants={{
                  hover: { opacity: 0.5, scale: 1.05 }
                }}
                transition={{ duration: 0.4 }}
              ></motion.div>

              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52">
                {/* Outer animated ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 opacity-75"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                
                {/* Secondary rotating ring (opposite direction) */}
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 opacity-50"
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                
                {/* Dark border spacer */}
                <div className="absolute inset-0 -m-1 rounded-full bg-neutral-900"></div>
                
                {/* Main image container with double border */}
                <motion.div 
                  className="absolute inset-0 rounded-full overflow-hidden border-[4px] border-white/15 shadow-[0_0_25px_rgba(79,70,229,0.4)]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hover: { scale: 1.03, borderColor: "rgba(255,255,255,0.25)" }
                  }}
                >
                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/20 to-purple-400/20 z-10 mix-blend-overlay"></div>
                  
                  {/* Profile image */}
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    fill
                    className="rounded-full object-cover z-0 transition-transform duration-500"
                    priority
                    sizes="(max-width: 640px) 176px, 208px"
                  />
                  
                  {/* Subtle overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Hover overlay effect */}
                  <motion.div 
                    className="absolute inset-0 bg-indigo-600/10 z-20 backdrop-blur-sm"
                    variants={{
                      hover: { opacity: 1 },
                      initial: { opacity: 0 }
                    }}
                    initial="initial"
                  ></motion.div>
                  
                  {/* Placeholder for empty profile image */}
                  {!profile.photo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-800/40 to-purple-900/40">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </motion.div>
                
                {/* Inner glow effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-[3px] border-white/10 shadow-[inset_0_0_20px_rgba(138,92,246,0.5)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  variants={{
                    hover: { opacity: 0.8, shadow: "inset_0_0_30px_rgba(168,122,255,0.7)" }
                  }}
                ></motion.div>
                
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute inset-0 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.7, 0] }}
                  transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatDelay: 6 }}
                >
                  <div className="w-[200%] h-32 bg-gradient-to-r from-transparent via-white/25 to-transparent absolute -top-10 -left-full skew-y-[25deg] transform-gpu"></div>
                </motion.div>
                
                {/* Edit profile photo button - improved positioning and styling */}
                <div className="absolute -bottom-3 -right-3 z-20">
                  <Link href="/edit-profile">
                    <motion.button 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full text-white shadow-xl hover:from-indigo-600 hover:to-purple-700 border-2 border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(138,92,246,0.5)" }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Edit Profile Picture"
                    >
                      <PencilSquareIcon className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
                
                {/* Status indicator - Online */}
                <motion.div 
                  className="absolute bottom-4 right-4 w-5 h-5 rounded-full bg-emerald-400 border-2 border-neutral-900 z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <motion.div 
                    className="w-full h-full rounded-full bg-emerald-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Pulsing effect */}
                  <motion.div 
                    className="absolute -inset-1 rounded-full bg-emerald-400 z-[-1]"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 mb-2"
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              {profile.name}, {profile.age}
            </motion.h1>
            
            <motion.div 
              className="flex items-center justify-center gap-1.5 text-white/80 mb-4"
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <MapPinIcon className="w-4 h-4 text-indigo-400" />
              <span>{profile.location}</span>
            </motion.div>
            
            <motion.div 
              className="inline-block bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm px-5 py-1.5 rounded-full text-white/90 text-sm border border-indigo-500/20 shadow-lg shadow-indigo-800/10"
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03, y: -1 }}
            >
              {profile.status}
            </motion.div>
          </motion.div>
          
          {/* Profile Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Bio and Basic Info */}
            <motion.div 
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-xl hover:border-indigo-500/20 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-500/20 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white">About Me</h2>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <p className="text-white/80 leading-relaxed">
                  {profile.bio}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-indigo-300 text-sm mb-1 font-medium">Gender</h3>
                  <p className="text-white font-medium">{profile.gender}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h3 className="text-indigo-300 text-sm mb-1 font-medium">Age</h3>
                  <p className="text-white font-medium">{profile.age}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Interests */}
            <motion.div 
              className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-xl hover:border-indigo-500/20 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-indigo-500/20 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white">Interests</h2>
              </div>
              
              <div className="bg-white/5 rounded-xl p-5">
                <div className="flex flex-wrap gap-3">
                  {profile.interests.map((interest, index) => (
                    <motion.div 
                      key={interest.name}
                      className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="text-lg mr-1">{interest.emoji}</span>
                      <span>{interest.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Match Stats Section */}
          <motion.div 
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-xl mb-16 hover:border-indigo-500/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 bg-indigo-500/20 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Your Activity</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div 
                className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-5 flex items-center gap-5 border border-white/10"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 bg-indigo-500/20 rounded-full shadow-inner">
                  <HeartIcon className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm font-medium">Matches</p>
                  <p className="text-white text-2xl font-bold">{profile.matchStats.matches}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-5 flex items-center gap-5 border border-white/10"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 bg-indigo-500/20 rounded-full shadow-inner">
                  <HandThumbUpIcon className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm font-medium">Likes Received</p>
                  <p className="text-white text-2xl font-bold">{profile.matchStats.likesReceived}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-5 flex items-center gap-5 border border-white/10"
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 bg-indigo-500/20 rounded-full shadow-inner">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-indigo-300" />
                </div>
                <div>
                  <p className="text-indigo-200 text-sm font-medium">Messages</p>
                  <p className="text-white text-2xl font-bold">{profile.matchStats.messages}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Edit Profile Button - Centered and prominent */}
          <div className="flex justify-center">
            <Link href="/edit-profile">
              <motion.button 
                className="bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl shadow-2xl transition-all duration-300 flex items-center gap-3 border border-white/20"
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 25px -5px rgb(76 29 149 / 0.2), 0 8px 10px -6px rgb(76 29 149 / 0.2)"
                }}
                whileTap={{ scale: 0.97 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <PencilSquareIcon className="w-5 h-5" />
                <span className="text-base">Edit My Profile</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}