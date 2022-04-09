import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { logPageView } from '../../molecules/services/SiteAnalystic';
import Metadata from '../../molecules/seo/Metadata';
import Footer from '../footer/SiteFooter';
import Header from '../header/SiteHeader';

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
        <div>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
