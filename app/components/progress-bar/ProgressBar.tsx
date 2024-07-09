'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const ProgressBar = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scaleX,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '10px',
        background: 'var(--color-button-hover)',
        transformOrigin: '0%',
        zIndex: 2,
      }}
    />
  );
};

export default ProgressBar;
