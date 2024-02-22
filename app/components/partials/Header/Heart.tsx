import React, { RefObject, memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import heart from '@/public/heart.gif';

type Props = { heartRef: RefObject<HTMLDivElement> };

const Heart = ({ heartRef }: Props) => {
  return (
    <div
      ref={heartRef}
      style={{
        opacity: 0,
        position: 'fixed',
        bottom: 0,
        right: 15,
        color: 'white',
        cursor: 'pointer',
      }}
    >
      <motion.div
        drag
        dragConstraints={{
          top: -300,
          left: -230,
          right: 30,
          bottom: 30,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          style={{ userSelect: 'none', pointerEvents: 'none' }}
          src={heart}
          alt='heart-gif'
          width={70}
        />
      </motion.div>
    </div>
  );
};

export default memo(Heart);
