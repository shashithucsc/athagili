import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  HeartIcon, 
  CalendarDaysIcon,
  MapPinIcon,
  PlayIcon,
  StarIcon
} from '@heroicons/react/24/solid';

const EnhancedSuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories = [
    {
      id: 1,
      names: 'Priya & Kasun',
      ages: '26 & 29',
      location: 'Colombo, Sri Lanka',
      meetDate: 'January 2023',
      relationshipStatus: 'Engaged',
      story: 'We matched on Athagili and discovered we both loved traditional Kandyan dancing and had studied at the same university! Our first date was at Galle Face Green, and we instantly connected over our shared dreams of starting a family business.',
      image: '/images/couple-1.svg',
      videoThumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23000"/%3E%3Ccircle cx="200" cy="150" r="40" fill="%23fff" opacity="0.8"/%3E%3Cpolygon points="185,135 185,165 215,150" fill="%23000"/%3E%3Ctext x="200" y="220" font-family="Arial" font-size="14" fill="%23fff" text-anchor="middle"%3EWatch Their Story%3C/text%3E%3C/svg%3E',
      rating: 5,
      highlights: ['Same University', 'Traditional Values', 'Family Business Dreams'],
      timeline: [
        { event: 'Matched on Athagili', date: 'Jan 2023' },
        { event: 'First Date at Galle Face', date: 'Feb 2023' },
        { event: 'Met Families', date: 'May 2023' },
        { event: 'Got Engaged', date: 'Nov 2023' }
      ]
    },
    {
      id: 2,
      names: 'Nishani & Ruwan',
      ages: '24 & 27',
      location: 'Kandy, Sri Lanka',
      meetDate: 'March 2023',
      relationshipStatus: 'Married',
      story: 'Living in different cities made dating challenging until we found each other on Athagili. Our video calls every evening for 6 months built an incredible foundation. Now we run a sustainable tea plantation together in the hill country!',
      image: '/images/couple-2.svg',
      videoThumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23000"/%3E%3Ccircle cx="200" cy="150" r="40" fill="%23fff" opacity="0.8"/%3E%3Cpolygon points="185,135 185,165 215,150" fill="%23000"/%3E%3Ctext x="200" y="220" font-family="Arial" font-size="14" fill="%23fff" text-anchor="middle"%3EWatch Wedding Video%3C/text%3E%3C/svg%3E',
      rating: 5,
      highlights: ['Long Distance', 'Tea Plantation', 'Sustainable Living'],
      timeline: [
        { event: 'Connected on Athagili', date: 'Mar 2023' },
        { event: 'Daily Video Calls', date: 'Apr 2023' },
        { event: 'First Meeting in Person', date: 'Jun 2023' },
        { event: 'Beautiful Wedding', date: 'Dec 2023' }
      ]
    },
    {
      id: 3,
      names: 'Amara & Sachith',
      ages: '28 & 31',
      location: 'London, UK',
      meetDate: 'August 2022',
      relationshipStatus: 'Married with Baby',
      story: 'As Sri Lankans living abroad, finding someone who understood our culture was difficult. Athagili connected us across continents! We bonded over homesickness and love for kottu. Now we have a beautiful daughter and visit Sri Lanka every year.',
      image: '/images/couple-3.svg',
      videoThumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23000"/%3E%3Ccircle cx="200" cy="150" r="40" fill="%23fff" opacity="0.8"/%3E%3Cpolygon points="185,135 185,165 215,150" fill="%23000"/%3E%3Ctext x="200" y="220" font-family="Arial" font-size="14" fill="%23fff" text-anchor="middle"%3EFamily Journey%3C/text%3E%3C/svg%3E',
      rating: 5,
      highlights: ['International Connection', 'Cultural Bond', 'New Parents'],
      timeline: [
        { event: 'Matched Internationally', date: 'Aug 2022' },
        { event: 'Virtual Sri Lankan Dates', date: 'Sep 2022' },
        { event: 'Met in Sri Lanka', date: 'Dec 2022' },
        { event: 'Married & Baby Born', date: '2023-2024' }
      ]
    },
    {
      id: 4,
      names: 'Dilini & Chathura',
      ages: '25 & 26',
      location: 'Galle, Sri Lanka',
      meetDate: 'June 2023',
      relationshipStatus: 'In Love',
      story: 'We discovered we were both marine biology students who loved ocean conservation! Our first date was snorkeling in Hikkaduwa, and we\'ve been exploring Sri Lanka\'s coral reefs together ever since. Planning to get engaged on World Ocean Day!',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Cdefs%3E%3ClinearGradient id="couple4" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23e0f2fe"/%3E%3Cstop offset="100%25" style="stop-color:%2306b6d4"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="600" height="400" fill="url(%23couple4)"/%3E%3Ccircle cx="220" cy="180" r="60" fill="%23fff" opacity="0.9"/%3E%3Ccircle cx="380" cy="180" r="60" fill="%23fff" opacity="0.9"/%3E%3Cpath d="M 250 250 Q 300 230 350 250 Q 350 280 300 300 Q 250 280 250 250" fill="%2306b6d4"/%3E%3Cpath d="M 300 120 Q 300 100 320 120 Q 340 100 340 120 Q 340 140 320 160 Q 300 140 300 120" fill="%23ef4444"/%3E%3Ctext x="300" y="320" font-family="Arial" font-size="24" fill="%23fff" text-anchor="middle" font-weight="bold"%3EDilini %26 Chathura%3C/text%3E%3Ctext x="300" y="350" font-family="Arial" font-size="16" fill="%23fff" text-anchor="middle"%3EIn Love - Galle%3C/text%3E%3C/svg%3E',
      videoThumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23000"/%3E%3Ccircle cx="200" cy="150" r="40" fill="%23fff" opacity="0.8"/%3E%3Cpolygon points="185,135 185,165 215,150" fill="%23000"/%3E%3Ctext x="200" y="220" font-family="Arial" font-size="14" fill="%23fff" text-anchor="middle"%3EOcean Adventures%3C/text%3E%3C/svg%3E',
      rating: 5,
      highlights: ['Marine Biology', 'Ocean Conservation', 'Adventure Together'],
      timeline: [
        { event: 'Swiped Right', date: 'Jun 2023' },
        { event: 'Snorkeling Date', date: 'Jul 2023' },
        { event: 'Conservation Projects', date: 'Aug 2023' },
        { event: 'Planning Engagement', date: 'Ongoing' }
      ]
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextStory();
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentStory]);

  const currentData = successStories[currentStory];

  return (
    <section className="section-padding bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
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
            Real Love Stories from <span className="gradient-text">Sri Lanka</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are just a few of the thousands of beautiful love stories that began on Athagili. 
            Your story could be next!
          </p>
        </motion.div>

        {/* Main Story Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Story Content */}
              <div className="space-y-6">
                {/* Header with Hearts */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(currentData.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm font-medium">
                    {currentData.relationshipStatus}
                  </span>
                </div>

                {/* Names and Info */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {currentData.names}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Ages:</span> {currentData.ages}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="w-4 h-4" />
                      {currentData.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDaysIcon className="w-4 h-4" />
                      Since {currentData.meetDate}
                    </div>
                  </div>
                </div>

                {/* Story Text */}
                <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-pink-300 pl-4">
                  "{currentData.story}"
                </blockquote>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What Made Them Perfect:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Their Journey:</h4>
                  <div className="space-y-2">
                    {currentData.timeline.map((event, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          <span className="font-medium">{event.event}</span> - {event.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className="space-y-6">
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={currentData.image}
                    alt={currentData.names}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h4 className="font-bold text-lg">{currentData.names}</h4>
                        <p className="text-sm opacity-90">{currentData.location}</p>
                      </div>
                      <HeartIcon className="w-8 h-8 text-red-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Video Thumbnail */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={currentData.videoThumbnail}
                    alt="Video story"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                    >
                      <PlayIcon className="w-8 h-8 text-gray-800 ml-1" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevStory}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextStory}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Story Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStory(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className={`transition-all duration-300 ${
                index === currentStory
                  ? 'w-8 h-3 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
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
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">3,500+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">850+</div>
            <div className="text-gray-600">Marriages</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">45</div>
            <div className="text-gray-600">Countries Connected</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-600">Happiness Rate</div>
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
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Write Your Love Story?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of Sri Lankans who found their perfect match on Athagili. 
              Your happily ever after is waiting.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-4"
            >
              Start Your Story Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedSuccessStories;
