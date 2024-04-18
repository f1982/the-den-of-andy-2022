import PageHero from '@/components/page/hero-image'
import ColumnHero from '@/components/page/hero-image-text'
import SandwichHero from '@/components/page/hero-sandwich'
import PageTitle from '@/components/page/page-title'
import { Button } from '@/components/ui/button'
import {
  DrawingAlbumURL,
  RCDevicesAlbumURL,
  RCPlanesAlbumURL,
  ThingiverseURL,
  YouTubeURL,
} from '@/config/links'
import { useTranslations } from 'next-intl'

const Hobbies = () => {
  const t = useTranslations('hobbies')
  return (
    <>
      <PageHero image="/static/images/page-hero-hobby.png" />
      <div className="container">
        <PageTitle title={t('headline')} description={t('intro')} />
        <ColumnHero
          className="mb-16 md:mb-20"
          image="/static/images/3d-printing-ender-3-v2.png"
          title={t('print3d.title')}
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
        {/* rc hobby */}
        <SandwichHero
          id="rc-hobby-id"
          className="mb-16 md:mb-20"
          image="/static/images/hobby-rc-cover.png"
          title={t('rc.title')}
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
        {/* drawing */}
        <ColumnHero
          className="mb-16 md:mb-20"
          image="/static/images/hobby-drawing-cover.png"
          title={t('drawing.title')}
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
        {/* video editing */}
        <SandwichHero
          className="mb-16 md:mb-20"
          image="/static/images/hobby-cover-video.png"
          title={t('video.title')}
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
    </>
  )
}

export default Hobbies
