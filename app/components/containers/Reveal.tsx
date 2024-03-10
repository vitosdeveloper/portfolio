'use client';
import React, { PropsWithChildren, memo, useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';

const Reveal = ({
  children,
  x = 0,
  y = 0,
  once = false,
}: PropsWithChildren & { x?: number; y?: number; once?: boolean }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('show');
    } else {
      mainControls.start('hidden');
    }
  }, [inView, mainControls]);

  return (
    <>
      <motion.div
        style={{ position: 'relative', width: 'initial', overflow: 'hidden' }}
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
    </>
  );
};

export default memo(Reveal);
