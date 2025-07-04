import { motion } from 'framer-motion';
import { 
  UserPlusIcon, 
  MagnifyingGlassIcon, 
  ChatBubbleBottomCenterTextIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlusIcon,
      title: 'Create Your Profile',
      description: 'Sign up and build an authentic profile that showcases your personality, interests, and what you\'re looking for.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Discover Matches',
      description: 'Our smart algorithm suggests compatible profiles based on your preferences, location, and compatibility.',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: 'Start Conversations',
      description: 'Connect with your matches through our secure messaging platform and get to know each other better.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: HeartIcon,
      title: 'Find Your Love',
      description: 'Build meaningful relationships and find your perfect partner who shares your values and dreams.',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="how-it-works" className="section-padding bg-gray-900">
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
            How <span className="gradient-text">Athagili</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Finding your perfect match has never been easier. Follow these simple steps 
            to start your journey toward meaningful connections.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 lg:space-y-24"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">                  <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-0.5 bg-gray-700"></div>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {step.title}
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-300"
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>

              {/* Visual */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className={`w-80 h-80 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full bg-repeat" style={{
                        backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="53" cy="7" r="1"/%3E%3Ccircle cx="7" cy="53" r="1"/%3E%3Ccircle cx="53" cy="53" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
                      }}></div>
                    </div>
                    
                    {/* Icon */}
                    <step.icon className="w-24 h-24 text-white relative z-10" />
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute top-8 right-8 w-8 h-8 bg-white/20 rounded-full"
                    />
                    <motion.div
                      animate={{ 
                        y: [0, 15, 0],
                        rotate: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                      className="absolute bottom-8 left-8 w-6 h-6 bg-white/20 rounded-full"
                    />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-800 border-2 border-gray-700 rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of Sri Lankans who have found meaningful relationships through Athagili.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-4"
            >
              Begin Your Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
