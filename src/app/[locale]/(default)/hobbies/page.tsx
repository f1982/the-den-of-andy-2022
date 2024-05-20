import { useTranslations } from 'next-intl';

import PageRows from '@/components/atoms/page-rows';
import PageHero from '@/components/page/hero-image';
import ColumnHero from '@/components/page/hero-image-text';
import SandwichHero from '@/components/page/hero-sandwich';
import PageTitle from '@/components/page/page-title';
import { Button } from '@/components/ui/button';

import {
  DrawingAlbumURL,
  RCDevicesAlbumURL,
  RCPlanesAlbumURL,
  ThingiverseURL,
  YouTubeURL,
} from '@/config/links';

const Hobbies = () => {
  const t = useTranslations('hobbies');
  return (
    <>
      <PageRows withMargin>
        <PageHero image="/static/images/Space_discovery_--5ec7b87401d0360014d4e3c7.png" />
        <div className="container">
          <PageTitle title={t('headline')} description={t('intro')} />
        </div>
        <div className="container">
          <ColumnHero
            className="mb-16 md:mb-20"
            image="/static/images/3d-printing-ender-3-v2.png"
            title={t('print3d.title')}
            subtitle="Using 3D printing to make my own 3D models."
            description={t('print3d.description')}
            direction="r2l"
            buttons={
              <div className="flex">
                <a
                  href={ThingiverseURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button variant={'default'}>{t('print3d.button1')}</Button>
                </a>
              </div>
            }
          />
        </div>
        {/* rc hobby */}
        <div className="container">
          <SandwichHero
            id="rc-hobby-id"
            className="mb-16 md:mb-20"
            image="/static/images/hobby-rc-cover.png"
            title={t('rc.title')}
            subtitle="Using RC planes and devices to build my own robots."
            description={t('rc.description')}
            buttons={
              <div className="flex gap-x-3">
                <a
                  target="_blank"
                  href={RCPlanesAlbumURL}
                  rel="noopener noreferrer">
                  <Button variant={'default'}>{t('rc.button1')}</Button>
                </a>
                <a
                  target="_blank"
                  href={RCDevicesAlbumURL}
                  rel="noopener noreferrer">
                  <Button variant={'default'}>{t('rc.button2')}</Button>
                </a>
              </div>
            }
          />
        </div>
        {/* drawing */}
        <div className="container">
          <ColumnHero
            className="mb-16 md:mb-20"
            image="/static/images/hobby-drawing-cover.png"
            title={t('drawing.title')}
            subtitle="Using digital drawing software to make my own drawings."
            description={t('drawing.description')}
            buttons={
              <div className="flex gap-x-3">
                <a
                  target="_blank"
                  href={DrawingAlbumURL}
                  rel="noopener noreferrer">
                  <Button variant={'default'}>{t('drawing.button1')}</Button>
                </a>
              </div>
            }
          />
        </div>
        {/* video editing */}
        <div className="container">
          <SandwichHero
            className="mb-16 md:mb-20"
            image="/static/images/hobby-cover-video.png"
            title={t('video.title')}
            subtitle="Using video editing software to make my own videos."
            description={t('video.description')}
            buttons={
              <div className="flex gap-x-3">
                <a target="_blank" href={YouTubeURL} rel="noopener noreferrer">
                  <Button variant={'default'}>{t('video.button1')}</Button>
                </a>
              </div>
            }
          />
        </div>
      </PageRows>
    </>
  );
};

export default Hobbies;
