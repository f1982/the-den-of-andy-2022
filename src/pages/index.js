import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import useRenderCount from '../hooks/useRenderCount';

function Index() {
  const { t } = useTranslation();
  const renderCount = useRenderCount();

  return (
    <div className="flex justify-center items-center">
      <div>{renderCount}</div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{t('greeting')}</h1>
            <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            <div className="flex justify-center">
              <Link href="/home" passHref>
                <button type="button" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Go</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Index;
