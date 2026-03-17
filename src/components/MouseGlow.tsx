'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      animate={{
        x: mousePosition.x - 300, // Offset by half the width to center
        y: mousePosition.y - 300, // Offset by half the height to center
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 40,
        mass: 0.1,
      }}
    />
  );
}
