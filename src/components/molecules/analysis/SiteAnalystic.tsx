// import ReactGA from 'react-ga';

import Script from 'next/script';

export const GoogleAnalytics = ({ trackingId }: { trackingId: string }) => {
  const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  // lazy load ga script
  const strategy = 'lazyOnload';
  return (
    <>
      <Script
        src={gtagUrl}
        strategy={strategy}
      />
      <Script id="google-analytics" strategy={strategy}>
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
