"use client";

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  SparklesIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline';

const SafetySection = () => {
  const safetyFeatures = [
    {
      icon: ShieldCheckIcon,
      title: 'Admin-Approved Verification',
      description: 'Every verified badge is manually reviewed by our team to ensure you are talking to real students. Fake accounts don\'t stand a chance.',
      theme: {
        gradient: 'from-blue-600 to-cyan-500',
        glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        bgGlow: 'from-blue-500/10'
      }
    },
    {
      icon: LockClosedIcon,
      title: 'Privacy First',
      description: 'Your data is secure. We never post to your social media or share your personal information without your explicit permission.',
      theme: {
        gradient: 'from-purple-600 to-pink-500',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
        bgGlow: 'from-purple-500/10'
      }
    }
  ];

  return (
    <section id="safety" className="relative py-32 bg-[#030005] overflow-hidden">
      
      {/* --- Deep Ambient Atmosphere (Calming Blue & Purple for Security) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
        {/* 3-Point Ambient Lighting Mesh */}
        <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[70vw] h-[70vw] bg-indigo-600/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-purple-600/15 rounded-full blur-[150px]" />
      </div>

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
            <SparklesIcon className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">
              Ironclad Security
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Safe Dating for <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-blue-400 drop-shadow-sm">
              Students.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Your safety and privacy are our top priorities. We've built Athagili with 
            multiple layers of protection to ensure a secure, stress-free dating experience.
          </p>
        </motion.div>

        {/* --- Ethereal Glass Safety Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0f] border border-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl p-10"
            >
              {/* Internal Hover Sweep Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.theme.bgGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              {/* GIANT ICON WATERMARK */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-white select-none pointer-events-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                <feature.icon className="w-64 h-64" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                {/* Glowing Orb Icon */}
                <div className="mb-10 relative inline-flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.theme.gradient} rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.theme.gradient} p-[1px] ${feature.theme.glow}`}>
                    <div className="w-full h-full bg-[#0a0a0f] rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
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
        </div>

        {/* --- Glass Support CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6">
            <LifebuoyIcon className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-8 font-light">
            Have safety concerns? Our support team is here 24/7 to help.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group overflow-hidden rounded-2xl p-[1px] inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            <div className="relative bg-blue-600 text-white font-bold text-lg px-12 py-5 rounded-2xl flex items-center justify-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
              Contact Support
            </div>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default SafetySection;