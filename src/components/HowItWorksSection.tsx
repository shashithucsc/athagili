"use client";

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  HandThumbUpIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

// ----------------------------------------------------------------------
// Subtle Floating Background Hearts (Keeps the theme consistent)
// ----------------------------------------------------------------------
const FloatingHearts = () => {
  const hearts = Array.from({ length: 12 }).map((_, i) => ({
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

const HowItWorksSection = () => {
  const loginOptions = [
    {
      icon: CheckBadgeIcon,
      title: 'Get Verified & Trusted',
      subtitle: 'The Verified Student',
      badge: 'Recommended',
      description: 'Want to stand out? Upload your University ID and a screenshot of your Facebook profile. Once our Admins approve you, you get the exclusive Blue Verified Badge.',
      benefit: 'Higher trust, more matches, and premium visibility.',
      theme: {
        gradient: 'from-blue-600 to-cyan-500',
        glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        bgGlow: 'from-blue-500/10',
        text: 'text-blue-400'
      }
    },
    {
      icon: UserIcon,
      title: 'Quick & Private',
      subtitle: 'The Simple Login',
      badge: 'Fastest',
      description: 'Just want to look around? Create a unique username, select your gender, and set a password. No personal photos required upfront.',
      benefit: 'Total privacy while you explore the network.',
      theme: {
        gradient: 'from-purple-600 to-pink-500',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
        bgGlow: 'from-purple-500/10',
        text: 'text-purple-400'
      }
    }
  ];

  const matchingSteps = [
    {
      num: '01',
      icon: AdjustmentsHorizontalIcon,
      title: 'Set Your Type',
      description: 'Fill out our "Partner Preference" form. Tell us exactly who you are looking for.',
      theme: { gradient: 'from-pink-500 to-rose-400', glow: 'shadow-[0_0_30px_rgba(236,72,153,0.3)]', bgGlow: 'from-pink-500/10' }
    },
    {
      num: '02',
      icon: ShieldCheckIcon,
      title: 'Smart Matching',
      description: 'Our system automatically filters profiles that match your specific criteria.',
      theme: { gradient: 'from-teal-500 to-emerald-400', glow: 'shadow-[0_0_30px_rgba(20,184,166,0.3)]', bgGlow: 'from-teal-500/10' }
    },
    {
      num: '03',
      icon: HandThumbUpIcon,
      title: 'Swipe to Decide',
      description: 'Swipe Right to Like. Swipe Left to Skip. Mutual right swipes equal a match!',
      theme: { gradient: 'from-orange-500 to-amber-400', glow: 'shadow-[0_0_30px_rgba(249,115,22,0.3)]', bgGlow: 'from-orange-500/10' }
    },
    {
      num: '04',
      icon: ChatBubbleLeftRightIcon,
      title: 'Real-Time Chat',
      description: 'The messaging window unlocks instantly. Send texts, stickers, and connect.',
      theme: { gradient: 'from-green-500 to-emerald-400', glow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)]', bgGlow: 'from-green-500/10' }
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
    <section id="how-it-works" className="relative py-32 bg-[#030005] overflow-hidden">
      
      {/* --- Deep Ambient Atmosphere --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
        {/* 3-Point Ambient Lighting Mesh */}
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] bg-pink-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-[70vw] h-[70vw] bg-purple-600/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-blue-600/15 rounded-full blur-[150px]" />
      </div>

      <FloatingHearts />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Section Header 1 --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-inner">
            <SparklesIcon className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">
              Two Paths to Join
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Choose Your Path. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-purple-400  drop-shadow-sm">
              Date Your Way.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you want maximum visibility or total privacy, we have a login option designed for you.
          </p>
        </motion.div>

        {/* --- Login Options Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
        >
          {loginOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0f] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Internal Hover Sweep Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.theme.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative p-10 h-full flex flex-col justify-between z-10">
                <div>
                  <div className="flex items-start justify-between mb-10">
                    {/* Glowing Orb Icon */}
                    <div className="relative inline-flex items-center justify-center">
                      <div className={`absolute inset-0 bg-gradient-to-br ${option.theme.gradient} rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${option.theme.gradient} p-[1px] ${option.theme.glow}`}>
                        <div className="w-full h-full bg-[#0a0a0f] rounded-2xl flex items-center justify-center">
                          <option.icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                        </div>
                      </div>
                    </div>
                    {/* Badge */}
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 ${option.theme.text}`}>
                      {option.badge}
                    </span>
                  </div>

                  <h4 className={`text-sm font-bold uppercase tracking-widest mb-2 ${option.theme.text}`}>
                    {option.subtitle}
                  </h4>
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
                    {option.description}
                  </p>
                </div>

                {/* Premium Glass Benefit Box */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md flex items-start gap-4">
                  <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${option.theme.gradient} flex items-center justify-center`}>
                    <CheckCircleIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Why choose this?</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{option.benefit}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Section Header 2 --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            From Preferences to <span className="text-transparent bg-clip-text bg-purple-400">Partners.</span>
          </h2>
        </motion.div>

        {/* --- Matching Steps Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {matchingSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[2rem] bg-[#0a0a0f] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl p-8"
            >
              {/* Internal Hover Sweep Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.theme.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              {/* GIANT TYPOGRAPHIC WATERMARK */}
              <div className="absolute -top-6 -right-4 text-[120px] font-black italic tracking-tighter opacity-[0.03] text-white select-none pointer-events-none">
                {step.num}
              </div>

              <div className="relative z-10">
                {/* Glowing Orb Icon */}
                <div className="mb-8 relative inline-flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.theme.gradient} rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${step.theme.gradient} p-[1px] ${step.theme.glow}`}>
                    <div className="w-full h-full bg-[#0a0a0f] rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden rounded-2xl p-[1px] inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            <div className="relative bg-purple-600 text-white font-bold text-lg px-12 py-5 rounded-2xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              Get Started Now
            </div>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;