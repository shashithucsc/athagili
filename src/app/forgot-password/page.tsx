'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  EnvelopeIcon, 
  HeartIcon,
  ArrowLeftIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import AuthAnimatedBackground from '../../components/AuthAnimatedBackground';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Forgot password submitted:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <AuthAnimatedBackground />
      </div>

      {/* Single Centered Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10"
      >
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/login" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Sign In
          </Link>
        </motion.div>

        {/* Glass Morphism Card */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          {/* Gradient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl opacity-20 blur-lg" />
          
          {/* Card Content */}
          <div className="relative">
            {/* Logo and Title */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mb-8"
            >
              <Link href="/" className="inline-flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -360 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <HeartIcon className="w-8 h-8 text-pink-500" />
                  <SparklesIcon className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
                </motion.div>
                <span className="text-2xl font-bold gradient-text">අතැගිලි</span>
              </Link>
              
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold text-white mb-3">Forgot Password?</h2>
                  <p className="text-gray-300">Enter your email and we'll send you a reset link</p>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full border border-green-500/30 mb-4"
                    >
                      <CheckCircleIcon className="w-8 h-8 text-green-400" />
                    </motion.div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">Check Your Email</h2>
                  <p className="text-gray-300">We've sent a password reset link to <span className="text-purple-400">{email}</span></p>
                </>
              )}
            </motion.div>

            {!isSubmitted ? (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                {/* Email Input */}
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-3 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="relative w-full py-4 px-6 rounded-xl font-semibold text-white overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 transition-all duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Send Reset Link</span>
                </motion.button>

                {/* Back to Login Link */}
                <div className="text-center pt-4">
                  <span className="text-gray-400">Remember your password? </span>
                  <Link 
                    href="/login" 
                    className="font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Sign in here
                  </Link>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6 text-center"
              >
                <div className="text-gray-300 space-y-3">
                  <p>Didn't receive the email? Check your spam folder or</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    try again
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/login'}
                  className="w-full py-4 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
                >
                  Back to Sign In
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;
