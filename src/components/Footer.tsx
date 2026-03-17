import { motion } from 'framer-motion';
import { 
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerLinks = {
    'Platform': [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Safety', href: '#safety' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Community Guidelines', href: '#' }
    ],
    'Support': [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Report Issues', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ],
    'Legal': [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Refund Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', href: '#', icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM12 16.624c-2.563 0-4.625-2.062-4.625-4.624S9.437 7.376 12 7.376s4.625 2.062 4.625 4.624S14.563 16.624 12 16.624zm4.875-8.362c-.6 0-1.088-.488-1.088-1.087s.488-1.087 1.088-1.087 1.087.488 1.087 1.087-.487 1.087-1.087 1.087z' }
  ];

  return (
    <footer className="relative bg-[#030005] text-white pt-24 overflow-hidden">
      
      {/* --- Deep Ambient Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
        
        {/* 3-Point Ambient Lighting Mesh */}
        <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[150px]" />
        <div className="absolute border-0 border-white/10 bottom-1/4 -right-1/4 w-[70vw] h-[70vw] bg-pink-600/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-blue-600/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* --- Main CTA Section --- */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-[#0a0a0f]/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_0_100px_rgba(168,85,247,0.15)]"
          >
            {/* Inner Glass Glow */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-inner">
               <SparklesIcon className="w-4 h-4 text-pink-400" />
               <span className="text-xs font-bold text-white tracking-widest uppercase">
                  Join the Network
               </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Find Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-purple-400 drop-shadow-sm">Campus Match?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Join thousands of Sri Lankan university students who trust Athagili to find meaningful relationships. 
              Your perfect match is just one click away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto relative group overflow-hidden rounded-2xl p-[1px] inline-block"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative bg-purple-600 text-white font-bold text-lg px-12 py-4 rounded-2xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  Start Your Journey
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto relative group overflow-hidden rounded-2xl p-[1px] inline-block"
              >
                 <span className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold text-lg px-12 py-4 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                    Download App
                 </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* --- Links Section --- */}
        <div className="border-t border-white/10 bg-[#0a0a0f]/50 backdrop-blur-lg pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
              
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
                    <div className="relative inline-flex items-center justify-center">
                       <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-md opacity-50" />
                       <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full p-[1px]">
                          <div className="w-full h-full bg-[#0a0a0f] rounded-full flex items-center justify-center">
                             <HeartIcon className="w-6 h-6 text-white" />
                          </div>
                       </div>
                    </div>
                    <span className="text-2xl font-extrabold tracking-tight">Athagili <span className="text-purple-400 font-normal">| අතැගිලි</span></span>
                  </div>
                  <p className="text-gray-400 leading-relaxed max-w-md font-light">
                    Connecting Sri Lankan university hearts across the island. Find genuine relationships 
                    built on shared values, campus culture, and authentic connections.
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                         <MapPinIcon className="w-5 h-5 text-gray-300" />
                      </div>
                      <span className="font-light">Colombo, Sri Lanka</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                         <PhoneIcon className="w-5 h-5 text-gray-300" />
                      </div>
                      <span className="font-light">+94 11 234 5678</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                         <EnvelopeIcon className="w-5 h-5 text-gray-300" />
                      </div>
                      <span className="font-light">hello@athagili.lk</span>
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
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
                     {category}
                  </h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-light"
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

        {/* --- Bottom Section --- */}
        <div className="border-t border-white/10 bg-[#06040a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-gray-500 text-center md:text-left text-sm font-light"
              >
                <p>&copy; {new Date().getFullYear()} Athagili. All rights reserved.</p>
                <p className="mt-1">Made for Sri Lankan University Students</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, translateY: -2 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-purple-400 text-gray-400 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
