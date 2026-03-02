'use client';

import { ReactNode } from 'react';
import PageLoader from './PageLoader';
import CookieConsent from './CookieConsent';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageLoader />
      {children}
      <CookieConsent />
    </>
  );
}
