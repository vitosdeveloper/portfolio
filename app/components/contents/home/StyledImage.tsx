import Image, { StaticImageData } from 'next/image';
import React, { memo } from 'react';

type Props = {};

const StyledImage = ({
  $left = false,
  src,
  alt,
}: {
  $left?: boolean;
  src: StaticImageData;
  alt: string;
}) => {
  return (
    <Image
      style={{
        borderRadius: '8px',
        maxWidth: '744px',
        width: '100%',
        height: 'auto',
        flex: 1,
        float: $left ? 'inline-start' : 'inline-end',
      }}
      src={src}
      alt={alt}
      loading='eager'
      priority
    />
  );
};

export default memo(StyledImage);
