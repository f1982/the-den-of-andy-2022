import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/index';
import Layout from '../components/Layout/PageLayout';
import '../styles/global.css';
import { initGA } from '../utils/SiteAnalystic';

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        {/* <AnimatePresence exitBeforeEnter> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </AnimatePresence> */}
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
