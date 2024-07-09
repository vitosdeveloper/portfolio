import { DiGithubBadge } from 'react-icons/di';
import NextLink from 'next/link';
import { memo } from 'react';

type Props = {};

const GhubIco = (props: Props) => {
  return (
    <NextLink href='https://github.com/vitosdveloper' target='_blank'>
      <DiGithubBadge className='text-color-white text-2xl' />
    </NextLink>
  );
};

export default memo(GhubIco);
