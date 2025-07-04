import { motion } from 'framer-motion';
import { 
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerLinks = {
    'Platform': [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Safety', href: '#' },
      { name: 'Success Stories', href: '#testimonials' }
    ],
    'Support': [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Community Guidelines', href: '#' },
      { name: 'Report Issues', href: '#' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Refund Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', href: '#', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM12 16.624c-2.563 0-4.625-2.062-4.625-4.624S9.437 7.376 12 7.376s4.625 2.062 4.625 4.624S14.563 16.624 12 16.624zm4.875-8.362c-.6 0-1.088-.488-1.088-1.087s.488-1.087 1.088-1.087 1.087.488 1.087 1.087-.487 1.087-1.087 1.087z' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 border-t border-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your <span className="text-primary-400">Soulmate</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join over 50,000 Sri Lankans who trust Athagili to find meaningful relationships. 
              Your perfect match is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-lg"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-400 text-primary-400 font-bold py-4 px-12 rounded-full hover:bg-primary-400 hover:text-gray-900 transition-all duration-300"
              >
                Download App
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <HeartIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">Athagili</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Connecting Sri Lankan hearts worldwide. Find genuine relationships 
                  built on shared values, culture, and authentic connections.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPinIcon className="w-5 h-5" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <PhoneIcon className="w-5 h-5" />
                    <span>+94 11 234 5678</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>hello@athagili.lk</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-400 text-center md:text-left"
            >
              <p>&copy; 2024 Athagili. All rights reserved.</p>
              <p className="text-sm mt-1">Made with ❤️ for the Sri Lankan community</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
