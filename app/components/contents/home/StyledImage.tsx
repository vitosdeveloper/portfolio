import React, { memo } from 'react';

const StyledImage = ({
  $left = false,
  src,
  alt,
}: {
  $left?: boolean;
  src: string;
  alt: string;
}) => {
  return (
    <img
      style={{
        borderRadius: '8px',
        maxWidth: '744px',
        width: '100%',
        height: 'auto',
        flex: 1,
        float: $left ? 'inline-start' : 'inline-end',
      }}
      src={'/' + src}
      alt={alt}
      loading='eager'
    />
  );
};

export default memo(StyledImage);
