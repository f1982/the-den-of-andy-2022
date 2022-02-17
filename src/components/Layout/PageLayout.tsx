import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { logPageView } from '../../utils/SiteAnalystic';
import Metadata from '../Metadata';
import Footer from '../Header/SiteFooter';
import Header from '../Header/SiteHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  useEffect(() => {
    // analysis the page view every time page changes
    if (pathname !== '/') {
      logPageView(pathname);
    }
  }, [pathname]);

  return (
    <>
      <Metadata />
      <div className="text-on-background">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
