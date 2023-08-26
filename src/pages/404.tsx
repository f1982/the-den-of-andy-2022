import { t } from 'i18next';
import Link from 'next/link';
import MyButton from '../components/atoms/buttons/Button';
import GlitchText from '../components/atoms/typography/GlitchText/GlitchText';
import TabTitle from '../components/molecules/seo/SiteSEO';

const PageNotFound = () => (
  <>
    <TabTitle pageTitle={t('pageNotFound.pageTitle')} />
    <div className="flex flex-col justify-center items-center">
      <GlitchText text={t<string>('pageNotFound.errorCode')} />
      <h2 className="text-primary-dark mb-8 tracking-[1rem]">
        {t<string>('pageNotFound.subtitle')}
      </h2>
      <Link href="/" legacyBehavior>
        <MyButton type="primary">
          {t<string>('pageNotFound.backButtonLabel')}
        </MyButton>
      </Link>
    </div>
  </>
);

PageNotFound.getLayout = function getLayout(page) {
  return (
    <div className="grid place-items-center h-screen bg-black">
      {page}
    </div>
  );
};

export default PageNotFound;
