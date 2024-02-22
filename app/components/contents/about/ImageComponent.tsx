'use client';
import React, { memo, useEffect, useState } from 'react';
import { ImageContainer } from '../../pages/Home';
import Reveal from '../../containers/Reveal';
import Image from 'next/image';
import ImageF1 from '@/public/f1.webp';
import ImageF2 from '@/public/f2.webp';
import { getCookie } from 'cookies-next';
import { useFormStatus } from 'react-dom';

type Props = {};

const ImageComponent = (props: Props) => {
  const { pending } = useFormStatus();
  const cookie = getCookie('theme');
  let isDark = true;
  if (cookie) {
    isDark = cookie == 'dark';
  }
  const [dark, setIsDark] = useState<boolean>(isDark);

  useEffect(() => {
    if (pending) setIsDark((p) => !p);
  }, [pending]);

  return (
    <ImageContainer>
      <Reveal once x={-75}>
        <Image
          style={{
            borderRadius: '8px',
            maxWidth: '744px',
            width: '100%',
            height: 'auto',
            flex: 1,
            float: 'inline-start',
          }}
          src={dark ? ImageF1 : ImageF2}
          alt='frog-picture'
          loading='eager'
          priority
        />
      </Reveal>
    </ImageContainer>
  );
};

export default memo(ImageComponent);
