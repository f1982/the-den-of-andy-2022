import Button from '../../../../components/atoms/buttons/Button'
import Hero from '../../../../components/organisms/blocks/Hero'
import PageTitle from '../../../../components/organisms/blocks/PageTitle'
import ColumnHero from '../../../../components/page/ColumnHero'
import PageHero from '../../../../components/page/PageHero'
import {
  DrawingAlbumURL,
  RCDevicesAlbumURL,
  RCPlanesAlbumURL,
  ThingiverseURL,
  YouTubeURL
} from '../../../../config/links'
import { useTranslations } from 'next-intl'

const Hobbies = () => {
  const t = useTranslations('hobbies')
  return (
    <>
      <PageHero image="/static/images/page-hero-hobby.png" />
      <div className="container">
        {/* title and intro */}
        <PageTitle title={t('headline')} description={t('intro')} />
        {/* 3d printing */}
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
                <Button type="primary">{t('print3d.button1')}</Button>
              </a>
            </div>
          }
        />
        {/* rc hobby */}
        <Hero
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
                <Button type="primary">{t('rc.button1')}</Button>
              </a>
              <a
                target="_blank"
                href={RCDevicesAlbumURL}
                rel="noopener noreferrer">
                <Button type="secondary">{t('rc.button2')}</Button>
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
                <Button type="primary">{t('drawing.button1')}</Button>
              </a>
            </div>
          }
        />
        {/* video editing */}
        <Hero
          className="mb-16 md:mb-20"
          image="/static/images/hobby-cover-video.png"
          title={t('video.title')}
          description={t('video.description')}
          buttons={
            <div className="flex gap-x-3">
              <a target="_blank" href={YouTubeURL} rel="noopener noreferrer">
                <Button type="primary">{t('video.button1')}</Button>
              </a>
            </div>
          }
        />
      </div>
    </>
  )
}

export default Hobbies
