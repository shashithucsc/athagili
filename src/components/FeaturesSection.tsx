import { motion } from 'framer-motion';
import { 
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftRightIcon, 
  ShieldCheckIcon,
  UserCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

// ----------------------------------------------------------------------
// Subtle Floating Background Hearts Component
// ----------------------------------------------------------------------
const FloatingHearts = () => {
  // Generate random positions and animation properties for 15 hearts
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 25, // Very slow: 25-45 seconds
    delay: Math.random() * -20, // Negative delay so they are already on screen
    size: Math.random() * 20 + 10, // Sizes between 10px and 30px
    opacity: Math.random() * 0.1 + 0.05, // Very low opacity (0.05 to 0.15)
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", x: 0, rotate: 0 }}
          animate={{ 
            y: "-10vh", 
            x: Math.random() > 0.5 ? 40 : -40, // Slight horizontal drift
            rotate: 360 
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-pink-500 blur-[2px]"
          style={{
            left: heart.left,
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
          }}
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

const FeaturesSection = () => {
  const features = [
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Smart Filtering',
      description: 'Don\'t waste time. Filter recommendations by age, university, or specific interests to find exactly who you want, instantly.',
      theme: {
        gradient: 'from-blue-600 to-cyan-500',
        glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        bgGlow: 'from-blue-500/10'
      },
      span: 'md:col-span-2 lg:col-span-2'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Real-Time Messaging',
      description: 'No delays. Chat instantly with your matches in a secure, lightning-fast environment.',
      theme: {
        gradient: 'from-emerald-500 to-teal-400',
        glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
        bgGlow: 'from-emerald-500/10'
      },
      span: 'md:col-span-1 lg:col-span-1'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Safety Controls',
      description: 'You are in full control. Block, unblock, and report suspicious behavior instantly.',
      theme: {
        gradient: 'from-rose-500 to-orange-400',
        glow: 'shadow-[0_0_30px_rgba(244,63,94,0.3)]',
        bgGlow: 'from-rose-500/10'
      },
      span: 'md:col-span-1 lg:col-span-1'
    },
    {
      icon: UserCircleIcon,
      title: 'Profile Management',
      description: 'Update your bio, tweak preferences, and edit profile details anytime to keep recommendations fresh.',
      theme: {
        gradient: 'from-purple-600 to-pink-500',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
        bgGlow: 'from-purple-500/10'
      },
      span: 'md:col-span-2 lg:col-span-2'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="features" className="relative py-32 bg-[#030005] overflow-hidden">
      
      {/* --- Deep Ambient Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
        {/* 3-Point Ambient Lighting Mesh */}
        <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[70vw] h-[70vw] bg-blue-600/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-pink-600/15 rounded-full blur-[150px]" />
      </div>

      {/* --- Floating Hearts Layer --- */}
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
            <SparklesIcon className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">
              Exclusive Features
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Built for the <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-purple-400 drop-shadow-sm">
              Campus Generation.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Experience dating reimagined with tools designed specifically for university students. 
            Find meaningful connections with people who truly understand campus life.
          </p>
        </motion.div>

        {/* --- Ethereal Bento Box Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0f] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${feature.span}`}
            >
              {/* Internal Hover Sweep Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.theme.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative p-10 h-full flex flex-col justify-between z-10">
                {/* Glowing Orb Icon */}
                <div className="mb-10">
                  <div className="relative inline-flex items-center justify-center">
                    {/* The Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.theme.gradient} rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                    {/* The Physical Button */}
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.theme.gradient} p-[1px] ${feature.theme.glow}`}>
                      <div className="w-full h-full bg-[#0a0a0f] rounded-2xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Immersive Glass CTA Banner --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-12 relative overflow-hidden rounded-[3rem] bg-[#0a0a0f] border border-white/5 p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_0_100px_rgba(168,85,247,0.1)]"
        >
          {/* Subtle corner light */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              University Life is <br className="hidden md:block"/>
              <span className="text-purple-400">Better Together.</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Stop swiping on random strangers. Athagili is designed exclusively for the university community. 
              We balance privacy with trust, giving you the freedom to date your way.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto relative group overflow-hidden rounded-2xl p-[1px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <div className="relative bg-purple-600 text-white font-bold text-lg px-12 py-5 rounded-2xl flex items-center justify-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                Join the Network
              </div>
            </motion.button>
            <p className="text-[10px] text-gray-500 mt-5 uppercase tracking-[0.2em] font-bold">
              Ready for the future?
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;