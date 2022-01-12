import React from 'react';

import Meta from '../meta';
import Footer from '../SiteFooter';
import Header from '../SiteHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
