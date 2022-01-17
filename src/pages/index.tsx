import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { DefaultSeo } from 'next-seo';
import DefaultWelcome from '../features/Welcome/DefaultWelcome';
import useRenderCount from '../hooks/useRenderCount';
import SEO from '../../next-seo';
import SiteSEO from '../components/SiteSEO';

function DebugInfo() {
  const renderCount = useRenderCount();

  return (
    <div>
      <div>
        App Version:
        {' '}
        {process.env.NEXT_PUBLIC_APP_VERSION}
      </div>
      <div>
        Site URL:
        {' '}
        {process.env.NEXT_PUBLIC_APP_SITE_URL}
      </div>
      <div>
        Render times:
        {' '}
        {renderCount}
      </div>
    </div>
  );
}

function Index() {
  const { t } = useTranslation();

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
          {DebugInfo()}
        </div>
      </div>
    </>
  );
}

// export default withTransition(Index);
export default Index;
