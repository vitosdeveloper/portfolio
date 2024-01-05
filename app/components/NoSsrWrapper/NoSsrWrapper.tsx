import dynamic from 'next/dynamic';
import React, { PropsWithChildren } from 'react';

const NoSsrWrapper = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default dynamic(() => Promise.resolve(NoSsrWrapper), { ssr: true });
