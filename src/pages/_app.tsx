import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/index';
import Layout from '../components/Layout/Layout';
import '../styles/index.css';

// function MyApp({ Component, pageProps }) {
function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </I18nextProvider>
  );
}

export default MyApp;
