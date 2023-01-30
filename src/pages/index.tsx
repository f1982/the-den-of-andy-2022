import { useTranslation } from 'react-i18next';
import SiteSEO from '../components/molecules/seo/SiteSEO';
import DefaultWelcome from '../features/Welcome/DefaultWelcome';
import Welcome3D from '../features/Welcome/Welcome3D';

const Index = () => {
  const { t } = useTranslation();

  return (
    <>
      <SiteSEO pageTitle={t('welcome.pageTitle')} />
      <div className="h-screen flex flex-col justify-center items-center">
        {/* <DefaultWelcome
          title={t('welcome.greeting')}
          subtitle={t('welcome.description')}
          label={t('welcome.buttonLabel')}
          link="/home"
        /> */}
        <Welcome3D
          title={t('welcome.greeting')}
          subtitle={t('welcome.description')}
          label={t('welcome.buttonLabel')}
          link="/home"
        />
      </div>
    </>
  );
};

Index.getLayout = function getLayout(page) {
  return (
    <div>
      {page}
    </div>
  );
};

export default Index;
