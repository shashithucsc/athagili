import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { 
  EnvelopeIcon, 
  HeartIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Forgot password submitted:', email);
    setIsSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Reset Password - Athagili</title>
        <meta name="description" content="Reset your Athagili password and get back to finding your perfect match." />
      </Head>

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full space-y-8"
        >
          {/* Back Button */}
          <Link href="/login" className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Sign In
          </Link>

          {/* Logo and Title */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 mb-6">
              <HeartIcon className="w-8 h-8 text-pink-500" />
              <span className="text-3xl font-bold text-white">අතැගිලි</span>
            </Link>
            
            {!isSubmitted ? (
              <>
                <h2 className="text-3xl font-bold text-white mb-2">Forgot Password?</h2>
                <p className="text-gray-400">Enter your email and we'll send you a reset link</p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-white mb-2">Check Your Email</h2>
                <p className="text-gray-400">We've sent a password reset link to {email}</p>
              </>
            )}
          </div>

          {!isSubmitted ? (
            /* Reset Form */
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-gray-800/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:z-10 transition-all duration-300"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 hover:from-pink-700 hover:via-rose-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Reset Link
              </motion.button>
            </form>
          ) : (
            /* Success Message */
            <div className="text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              
              <p className="text-gray-400">
                Didn't receive the email? Check your spam folder or{' '}
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-pink-400 hover:text-pink-300 transition-colors underline"
                >
                  try again
                </button>
              </p>
            </div>
          )}

          {/* Additional Links */}
          <div className="text-center space-y-2">
            <p className="text-gray-400">
              Remember your password?{' '}
              <Link href="/login" className="font-medium text-pink-400 hover:text-pink-300 transition-colors">
                Sign in here
              </Link>
            </p>
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link href="/register" className="font-medium text-pink-400 hover:text-pink-300 transition-colors">
                Sign up here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
