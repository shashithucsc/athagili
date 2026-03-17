"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon, SparklesIcon } from '@heroicons/react/24/solid';

// ----------------------------------------------------------------------
// Subtle Floating Background Hearts (Maintains emotional theme)
// ----------------------------------------------------------------------
const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 25,
    delay: Math.random() * -20,
    size: Math.random() * 20 + 10,
    opacity: Math.random() * 0.1 + 0.05,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", x: 0, rotate: 0 }}
          animate={{ y: "-10vh", x: Math.random() > 0.5 ? 40 : -40, rotate: 360 }}
          transition={{ duration: heart.duration, delay: heart.delay, repeat: Infinity, ease: "linear" }}
          className="absolute text-pink-500 blur-[2px]"
          style={{ left: heart.left, width: heart.size, height: heart.size, opacity: heart.opacity }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
// ----------------------------------------------------------------------

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya & Kasun',
      location: 'Colombo, Sri Lanka',
      rating: 5,
      story: 'We met on Athagili 8 months ago and got engaged last month! The app helped us connect over our shared love for Sri Lankan music and traditional values. Thank you for bringing us together!',
      relationship: 'Engaged',
      theme: 'from-purple-500 to-indigo-500'
    },
    {
      id: 2,
      name: 'Nishani & Ruwan',
      location: 'Kandy, Sri Lanka',
      rating: 5,
      story: 'After years of unsuccessful dating, Athagili helped me find someone who truly understands my culture and family background. We\'re planning our wedding for next year!',
      relationship: 'Getting Married',
      theme: 'from-purple-500 to-indigo-500'
    },
    {
      id: 3,
      name: 'Amara & Sachith',
      location: 'London, UK',
      rating: 5,
      story: 'Living abroad, it was hard to find someone who shared my Sri Lankan heritage. Athagili connected us despite being in different countries. Now we\'re happily married!',
      relationship: 'Married',
      theme: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Dilini & Chathura',
      location: 'Galle, Sri Lanka',
      rating: 5,
      story: 'The compatibility matching is incredible! We discovered we both love the same books, movies, and even went to the same university. It felt like destiny when we matched.',
      relationship: 'In a Relationship',
      theme: 'from-emerald-400 to-teal-500'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeTheme = testimonials[currentIndex].theme;

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-32 bg-[#030005] overflow-hidden transition-colors duration-700">
      
      {/* --- Deep Ambient Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Extended 3-Point Dynamic Background Glow linked to the current testimonial */}
        <div className={`absolute top-0 right-1/4 w-[80vw] h-[80vw] bg-gradient-to-br ${activeTheme} rounded-full blur-[200px] opacity-25 transition-all duration-1000`} />
        <div className={`absolute bottom-0 -left-1/4 w-[90vw] h-[90vw] bg-gradient-to-br ${activeTheme} rounded-full blur-[200px] opacity-20 transition-all duration-1000`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vw] bg-gradient-to-br ${activeTheme} rounded-full blur-[200px] opacity-20 transition-all duration-1000`} />
      </div>

      <FloatingHearts />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-inner">
            <SparklesIcon className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Love Stories from <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-purple-400 drop-shadow-sm">
              Our Campus.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Real students, real connections, real love stories. See how Athagili has brought 
            together thousands of Sri Lankan university hearts across the island.
          </p>
        </motion.div>

        {/* --- Ethereal Testimonial Carousel --- */}
        <div className="relative max-w-5xl mx-auto mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden bg-[#0a0a0f] border border-white/5 rounded-[3rem] p-10 md:p-16 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              {/* Internal Glass Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

              {/* GIANT QUOTE WATERMARK */}
              <div className="absolute -top-10 -left-6 text-[250px] font-serif font-black leading-none text-white opacity-[0.02] select-none pointer-events-none">
                "
              </div>

              <div className="relative z-10 flex flex-col items-center">
                {/* Glowing Stars */}
                <div className="flex justify-center gap-1.5 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <StarIcon className="w-6 h-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                    </motion.div>
                  ))}
                </div>

                {/* The Story */}
                <blockquote className="text-2xl md:text-3xl font-serif text-white text-center mb-12 leading-relaxed tracking-wide font-light">
                  "{testimonials[currentIndex].story}"
                </blockquote>

                {/* Author Info & Premium Avatar */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  {/* Glowing Orbital Avatar */}
                  <div className="relative inline-flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeTheme} rounded-full blur-xl opacity-40`} />
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${activeTheme} p-[2px] shadow-lg`}>
                      <div className="w-full h-full bg-[#0a0a0f] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl tracking-wider">
                          {testimonials[currentIndex].name.split(' ')[0][0]}
                          {testimonials[currentIndex].name.split(' ')[2] && testimonials[currentIndex].name.split(' ')[2][0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center sm:text-left">
                    <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 font-light mb-3">
                      {testimonials[currentIndex].location}
                    </p>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-pink-400">
                      {testimonials[currentIndex].relationship}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* --- Navigation Buttons --- */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 lg:-left-12 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 lg:-right-12 z-20">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* --- Indicators --- */}
        <div className="flex justify-center items-center space-x-3 mb-24">
          {testimonials.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  isActive
                    ? `bg-gradient-to-r ${activeTheme} w-10 shadow-[0_0_10px_rgba(236,72,153,0.5)]`
                    : 'bg-white/20 w-2 hover:bg-white/40'
                }`}
              />
            );
          })}
        </div>

        {/* --- Ethereal Stats Grid --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {[
            { value: '2,500+', label: 'Happy Couples', color: 'from-pink-400 to-rose-500' },
            { value: '500+', label: 'Marriages', color: 'from-purple-400 to-indigo-500' },
            { value: '95%', label: 'Success Rate', color: 'from-cyan-400 to-blue-500' },
            { value: '4.9★', label: 'App Rating', color: 'from-amber-400 to-orange-500' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#0a0a0f] border border-white/5 rounded-[2rem] p-8 text-center shadow-lg transition-all duration-300 hover:bg-white/[0.02] hover:border-white/10"
            >
              <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-3 drop-shadow-sm`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold tracking-widest uppercase text-gray-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Immersive CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Your Love Story <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Starts Here.</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Join the thousands of Sri Lankan university students who have found their perfect match on Athagili.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden rounded-2xl p-[1px] inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            <div className="relative bg-purple-600 text-white font-bold text-lg px-14 py-5 rounded-2xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              Write Your Story
            </div>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;