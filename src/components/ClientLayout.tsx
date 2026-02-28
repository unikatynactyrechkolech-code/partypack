'use client';

import { ReactNode } from 'react';
import PageLoader from './PageLoader';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoader />
      {children}
    </>
  );
}
