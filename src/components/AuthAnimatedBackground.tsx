import { motion } from 'framer-motion';

const AuthAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs - Similar to landing page but more subtle */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/8 to-purple-400/8 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
        className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-pink-400/6 to-blue-400/6 rounded-full blur-3xl"
      />

      {/* Floating Hearts - More subtle than landing page */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-2xl opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            rotate: [0, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          💕
        </motion.div>
      ))}

      {/* Geometric Shapes - Romantic theme */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-3 h-3 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Sparkle Elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <div className="w-1 h-1 bg-gradient-to-r from-yellow-300/40 to-white/40 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default AuthAnimatedBackground;
