import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  ChatBubbleLeftRightIcon, 
  UserGroupIcon,
  SparklesIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const FeaturesSection = () => {
  const features = [
    {
      icon: HeartIcon,
      title: 'Smart Matching',
      description: 'Our AI-powered algorithm finds your perfect match based on compatibility, interests, and values.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Verified Profiles',
      description: 'All profiles are manually verified to ensure authentic connections and a safe dating environment.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Video Chat',
      description: 'Connect face-to-face with secure video calls before meeting in person. Build trust naturally.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Cultural Compatibility',
      description: 'Find someone who shares your Sri Lankan heritage, traditions, and family values.',
      color: 'from-purple-400 to-violet-500'
    },
    {
      icon: SparklesIcon,
      title: 'Premium Experience',
      description: 'Enjoy an ad-free experience with unlimited likes, super likes, and advanced filters.',
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Community',
      description: 'Connect with Sri Lankans worldwide, whether you\'re in Colombo or living abroad.',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="features" className="section-padding bg-gray-900">
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
            Why Choose <span className="gradient-text">Athagili</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience dating reimagined with features designed specifically for the Sri Lankan community.
            Find meaningful connections with people who truly understand you.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="card-hover bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:bg-gray-750 transition-colors duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className={`h-1 bg-gradient-to-r ${feature.color} mt-6 rounded-full origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to experience the future of dating?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-4"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
