import { t } from 'i18next';
import Link from 'next/link';
import MyButton from '../components/atoms/buttons/Button';
import Typography from '../components/atoms/typography/Typography';
import TabTitle from '../components/molecules/seo/SiteSEO';

function Custom404() {
  return (
    <>
      <TabTitle pageTitle={t('pageNotFound.pageTitle')} />
      <div className="flex flex-col justify-center items-center ">
        <Typography variant="h1">404</Typography>
        <Typography variant="h2" className="mb-8">{t<string>('pageNotFound.headline')}</Typography>
        <Link href="/">
          <MyButton type="primary">{t<string>('pageNotFound.backButtonLabel')}</MyButton>
        </Link>
      </div>
    </>
  );
}

Custom404.getLayout = function getLayout(page) {
  return (
    <div className="grid place-items-center h-screen">
      {page}
    </div>
  );
};

export default Custom404;
