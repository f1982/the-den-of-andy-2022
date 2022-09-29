// import ReactGA from 'react-ga';

import Script from 'next/script';

export const GoogleAnalytics = ({ trackingId }: { trackingId: string }) => {
  const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  return (
    <>
      <Script
        src={gtagUrl}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  );
};

export const logPageView = (pathname) => {
  // ReactGA.set({ page: pathname });
  // ReactGA.pageview(pathname);
};
export const logEvent = (category = '', action = '') => {
  // if (category && action) {
  //   ReactGA.event({ category, action });
  // }
};
export const logException = (description = '', fatal = false) => {
  if (description) {
    // ReactGA.exception({ description, fatal });
  }
};
