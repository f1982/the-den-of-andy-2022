import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Metadata from '../Metadata';
import Footer from '../SiteFooter';
import Header from '../SiteHeader';
import { logPageView } from '../../utils/SiteAnalystic';

const WELCOME_PATHNAME = '/';

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  when: 'afterChildren',
};

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
      <div className="text-primary-dark">
        {pathname !== WELCOME_PATHNAME && <Header />}
        {/* <motion.main
        transition={spring}
        key={pathname}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        id="page-transition-container"
      > */}
        {children}
        {/* </motion.main> */}
        {pathname !== WELCOME_PATHNAME && <Footer />}
      </div>
    </>
  );
}
