import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/index';
import Layout from '../components/Layout/PageLayout';
import '../styles/global.css';
import { initGA } from '../components/Services/SiteAnalystic';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
  }, []);

  // if the page has its specific layout, use it, if not, use default layout
  const getLayout = Component.getLayout || ((page) => (<Layout>{page}</Layout>));

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        {getLayout(<Component {...pageProps} />)}
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
