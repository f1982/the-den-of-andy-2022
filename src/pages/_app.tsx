import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/index';
import Layout from '../components/Layout/PageLayout';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <AnimatePresence exitBeforeEnter>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
