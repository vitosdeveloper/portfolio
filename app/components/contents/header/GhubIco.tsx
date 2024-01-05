import { DiGithubBadge } from 'react-icons/di';
import NextLink from 'next/link';
import { memo } from 'react';

type Props = {};

const GhubIco = (props: Props) => {
  return (
    <NextLink href='https://github.com/vitosnatios' target='_blank'>
      <DiGithubBadge style={{ color: 'var(--color-white)' }} size='25px' />
    </NextLink>
  );
};

export default memo(GhubIco);
