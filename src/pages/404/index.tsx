import { t } from 'i18next';
import Link from 'next/link';
import MyButton from '../../components/atoms/buttons/Button';
import Typography from '../../components/atoms/typography/Typography';
import TabTitle from '../../components/molecules/seo/SiteSEO';
import styles from './404.module.css';

const Custom404 = () => (
  <>
    <TabTitle pageTitle={t('pageNotFound.pageTitle')} />
    <div className="flex flex-col justify-center items-center">
      <div className={styles.wrapper}>
        <h1 className={styles.glitch} data-text="404">404</h1>
        <h2 className={styles.sub}>Opps, page not found</h2>
      </div>
      <Link href="/">
        <MyButton type="primary">{t<string>('pageNotFound.backButtonLabel')}</MyButton>
      </Link>
    </div>
  </>
);

Custom404.getLayout = function getLayout(page) {
  return (
    <div className="grid place-items-center h-screen bg-black">
      {page}
    </div>
  );
};

export default Custom404;
