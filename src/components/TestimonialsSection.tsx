import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya & Kasun',
      location: 'Colombo, Sri Lanka',
      image: '/api/placeholder/80/80',
      rating: 5,
      story: 'We met on Athagili 8 months ago and got engaged last month! The app helped us connect over our shared love for Sri Lankan music and traditional values. Thank you for bringing us together!',
      relationship: 'Engaged'
    },
    {
      id: 2,
      name: 'Nishani & Ruwan',
      location: 'Kandy, Sri Lanka',
      image: '/api/placeholder/80/80',
      rating: 5,
      story: 'After years of unsuccessful dating, Athagili helped me find someone who truly understands my culture and family background. We\'re planning our wedding for next year!',
      relationship: 'Getting Married'
    },
    {
      id: 3,
      name: 'Amara & Sachith',
      location: 'London, UK',
      image: '/api/placeholder/80/80',
      rating: 5,
      story: 'Living abroad, it was hard to find someone who shared my Sri Lankan heritage. Athagili connected us despite being in different countries. Now we\'re happily married with a beautiful daughter!',
      relationship: 'Married'
    },
    {
      id: 4,
      name: 'Dilini & Chathura',
      location: 'Galle, Sri Lanka',
      image: '/api/placeholder/80/80',
      rating: 5,
      story: 'The compatibility matching is incredible! We discovered we both love the same books, movies, and even went to the same university. It felt like destiny when we matched.',
      relationship: 'In a Relationship'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Love Stories from <span className="gradient-text">Our Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real people, real connections, real love stories. See how Athagili has brought 
            together thousands of Sri Lankan hearts across the globe.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 border border-gray-700 rounded-3xl shadow-2xl p-8 md:p-12"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>

              {/* Story */}
              <blockquote className="text-lg md:text-xl text-gray-300 text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].story}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentIndex].name.split(' ')[0][0]}
                    {testimonials[currentIndex].name.split(' ')[2] && testimonials[currentIndex].name.split(' ')[2][0]}
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].location}
                  </p>
                  <span className="inline-block bg-gradient-to-r from-gray-700 to-gray-600 text-primary-300 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {testimonials[currentIndex].relationship}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-gray-800 border border-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-gray-800 border border-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">2,500+</div>
            <div className="text-gray-600">Happy Couples</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-600">Marriages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4.9★</div>
            <div className="text-gray-600">App Rating</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Love Story Starts Here
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the thousands of Sri Lankans who have found their perfect match on Athagili.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-12 py-4"
          >
            Write Your Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
