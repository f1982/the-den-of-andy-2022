import { t } from 'i18next';
import Head from 'next/head';

export default function TabTitle({ i18nTitle }:{i18nTitle:string}) {
  return (
    <Head>
      <title>
        {t(i18nTitle)}
        {' - '}
        {t('siteName')}
      </title>
    </Head>
  );
}
