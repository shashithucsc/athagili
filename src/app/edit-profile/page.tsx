"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";

export default function EditProfilePage() {
  const router = useRouter();

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
        <div className="h-20 lg:h-24"></div>
        
        {/* Profile container */}
        <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 pt-8">
          <div className="flex items-center mb-8">
            <motion.button
              onClick={() => router.push("/profile")}
              className="p-2 mr-4 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeftIcon className="w-6 h-6 text-white" />
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white"
            >
              Edit Profile
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-lg"
          >
            <p className="text-white/80 text-center text-lg py-10">
              Profile editor coming soon...
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
