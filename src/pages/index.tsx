import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { DefaultSeo } from 'next-seo';
import DefaultWelcome from '../features/Welcome/DefaultWelcome';
import useRenderCount from '../hooks/useRenderCount';
import SEO from '../../next-seo';
import SiteSEO from '../components/SiteSEO';

function getNPMVersion() {
  return process.env.NEXT_PUBLIC_APP_VERSION;
}
function Index() {
  const { t } = useTranslation();
  const renderCount = useRenderCount();

  return (
    <>
      <SiteSEO {...SEO} pageTitle={t('welcome.pageTitle')} />
      <div>

        {/* <section className="text-gray-600 body-font" /> */}

        <DefaultWelcome
          greeting={t('greeting')}
          link={(
            <Link href="/home" passHref>
              <a className="
              inline-flex
              text-white
              bg-blue-500
              border-0 py-2 px-6
              focus:outline-none
              hover:bg-blue-600
              rounded text-lg
              "
              >
                Go
              </a>
            </Link>
          )}
        />
        <div>
          Render times:
          {' '}
          {renderCount}
        </div>
        <div>
          Version:
          {' '}
          {getNPMVersion()}
        </div>
      </div>
    </>
  );
}

// export default withTransition(Index);
export default Index;
