import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { memo, PropsWithChildren } from 'react';

const StyledMobileMenuButton = ({
  children,
}: PropsWithChildren<HTMLMotionProps<'div'>>) => {
  return (
    <motion.div
      className='s4:hidden'
      whileHover={{ scale: 1.2, rotate: 180 }}
      whileTap={{
        scale: 0.8,
        rotate: -180,
        borderRadius: '100%',
      }}
    >
      {children}
    </motion.div>
  );
};

export default memo(StyledMobileMenuButton);
