'use client';
import React, { memo } from 'react';
import Reveal from '../../containers/Reveal';
import Image from 'next/image';
import ImageContainer from '../../containers/ImageContainer';
import { getCookie } from 'cookies-next';

const ImageComponent = () => {
  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }

  return (
    <ImageContainer>
      <Reveal once x={-75}>
        <img
          style={{
            borderRadius: '8px',
            maxWidth: '744px',
            width: '100%',
            height: 'auto',
            flex: 1,
            float: 'inline-start',
          }}
          src={isDark ? '/f2.webp' : '/f1.webp'}
          alt='frog-picture'
          loading='eager'
          className='about-image'
        />
      </Reveal>
    </ImageContainer>
  );
};

export default memo(ImageComponent);
