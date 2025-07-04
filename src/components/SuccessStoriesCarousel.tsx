import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';

const SuccessStoriesCarousel = () => {
  const stories = [
    {
      id: 1,
      image: '/api/placeholder/400/600',
      names: 'Priya & Kasun',
      location: 'Colombo',
      story: 'Met through Athagili in January 2024',
      quote: '"We instantly connected over our love for Sri Lankan cuisine and traditional values. Best decision ever!"',
      status: 'Engaged',
      bgGradient: 'from-pink-400 to-rose-500'
    },
    {
      id: 2,
      image: '/api/placeholder/400/600',
      names: 'Nishani & Ruwan',
      location: 'Kandy',
      story: 'Found love after 6 months of searching',
      quote: '"Athagili helped us find each other despite our busy schedules. The compatibility matching is amazing!"',
      status: 'Married',
      bgGradient: 'from-purple-400 to-indigo-500'
    },
    {
      id: 3,
      image: '/api/placeholder/400/600',
      names: 'Amara & Sachith',
      location: 'London',
      story: 'Long-distance love story',
      quote: '"Living abroad, finding someone who shares our heritage was challenging. Athagili made it possible!"',
      status: 'Married with a baby',
      bgGradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 4,
      image: '/api/placeholder/400/600',
      names: 'Dilini & Chathura',
      location: 'Galle',
      story: 'Childhood sweethearts reunited',
      quote: '"We went to the same school but never met. Athagili brought us together after 15 years!"',
      status: 'In Love',
      bgGradient: 'from-green-400 to-emerald-500'
    },
    {
      id: 5,
      image: '/api/placeholder/400/600',
      names: 'Sanduni & Thilan',
      location: 'Melbourne',
      story: 'Found love during pandemic',
      quote: '"Started with video calls during lockdown. Now we\'re planning our dream wedding in Sri Lanka!"',
      status: 'Engaged',
      bgGradient: 'from-orange-400 to-red-500'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, stories.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getVisibleStories = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % stories.length;
      visible.push({ ...stories[index], position: i });
    }
    return visible;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Love Stories from <span className="gradient-text">Athagili</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how thousands of Sri Lankans found their perfect match and built 
            meaningful relationships that last a lifetime.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-center items-center min-h-[600px]">
            <AnimatePresence mode="wait">
              <div className="flex items-center justify-center space-x-8 w-full">
                {getVisibleStories().map((story, index) => (
                  <motion.div
                    key={`${story.id}-${currentIndex}`}
                    initial={{ 
                      opacity: 0, 
                      scale: index === 1 ? 0.8 : 0.6,
                      x: index === 0 ? -200 : index === 2 ? 200 : 0
                    }}
                    animate={{ 
                      opacity: index === 1 ? 1 : 0.6,
                      scale: index === 1 ? 1 : 0.8,
                      x: 0,
                      zIndex: index === 1 ? 10 : 5
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.6,
                      x: index === 0 ? -200 : index === 2 ? 200 : 0
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`relative ${index === 1 ? 'block' : 'hidden lg:block'}`}
                  >
                    <div className={`w-80 h-96 bg-gradient-to-br ${story.bgGradient} rounded-3xl p-1 shadow-2xl transform ${
                      index === 1 ? 'hover:scale-105' : ''
                    } transition-all duration-300`}>
                      <div className="w-full h-full bg-white rounded-3xl p-8 flex flex-col justify-between">
                        {/* Story Content */}
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <HeartIcon className="w-10 h-10 text-primary-500" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {story.names}
                          </h3>
                          <p className="text-gray-600 mb-1">{story.location}</p>
                          <p className="text-sm text-gray-500 mb-4">{story.story}</p>
                          <blockquote className="text-gray-700 italic leading-relaxed">
                            {story.quote}
                          </blockquote>
                        </div>

                        {/* Status Badge */}
                        <div className="text-center">
                          <span className={`inline-block bg-gradient-to-r ${story.bgGradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                            {story.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 z-20"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 z-20"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-white rounded-3xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                2,847
              </motion.div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                1,230
              </motion.div>
              <div className="text-gray-600">Marriages</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                87%
              </motion.div>
              <div className="text-gray-600">Find Love in 6 Months</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                98%
              </motion.div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Write Your Own Love Story?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of Sri Lankans who found their soulmate on Athagili. 
            Your perfect match is waiting for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-12 py-4"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;
