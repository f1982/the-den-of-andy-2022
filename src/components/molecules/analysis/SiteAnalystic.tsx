// import ReactGA from 'react-ga';

export const initGA = () => {
  // ReactGA.initialize(process.env.NEXT_PUBLIC_APP_GA_ID, {
  //   testMode: process.env.NODE_ENV !== 'production',
  // });
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
