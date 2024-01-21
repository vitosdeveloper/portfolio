'use client';
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';

const Reveal = ({
  children,
  x = 0,
  y = 0,
}: PropsWithChildren & { x?: number; y?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('show');
    } else {
      mainControls.start('hidden');
    }
  }, [inView, mainControls]);

  return (
    <div style={{ position: 'relative', width: 'initial', overflow: 'hidden' }}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y, x },
          show: { opacity: 1, y: 0, x: 0 },
        }}
        transition={{ duration: 0.5, delay: 0 }}
        initial='hidden'
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
