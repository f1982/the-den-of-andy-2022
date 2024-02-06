import Button from '../../../../../src-backup/components/atoms/buttons/Button'
import ColumnHero from '../../../../../src-backup/components/organisms/blocks/ColumnHero'
import Hero from '../../../../../src-backup/components/organisms/blocks/Hero'
import PageHero from '../../../../../src-backup/components/organisms/blocks/PageHero'
import PageTitle from '../../../../../src-backup/components/organisms/blocks/PageTitle'
import {
  DrawingAlbumURL,
  RCDevicesAlbumURL,
  RCPlanesAlbumURL,
  ThingiverseURL,
  YouTubeURL
} from '../../../../config/links'
import { t } from 'i18next'

const Hobbies = () => (
  <>
    <PageHero image="/static/images/page-hero-hobby.png" />
    <div className="container mx-auto">
      {/* title and intro */}
      <PageTitle
        title={t('hobbies.headline')}
        description={t('hobbies.intro')}
      />
      {/* 3d printing */}
      <ColumnHero
        className="mb-16 md:mb-20"
        image="/static/images/3d-printing-ender-3-v2.png"
        title={t('hobbies.print3d.title')}
        description={t('hobbies.print3d.description')}
        direction="r2l"
        buttons={
          <div className="flex">
            <a href={ThingiverseURL} target="_blank" rel="noopener noreferrer">
              <Button type="primary">{t('hobbies.print3d.button1')}</Button>
            </a>
          </div>
        }
      />
      {/* rc hobby */}
      <Hero
        id="rc-hobby-id"
        className="mb-16 md:mb-20"
        image="/static/images/hobby-rc-cover.png"
        title={t('hobbies.rc.title')}
        description={t('hobbies.rc.description')}
        buttons={
          <div className="flex gap-x-3">
            <a
              target="_blank"
              href={RCPlanesAlbumURL}
              rel="noopener noreferrer">
              <Button type="primary">{t('hobbies.rc.button1')}</Button>
            </a>
            <a
              target="_blank"
              href={RCDevicesAlbumURL}
              rel="noopener noreferrer">
              <Button type="secondary">{t('hobbies.rc.button2')}</Button>
            </a>
          </div>
        }
      />
      {/* drawing */}
      <ColumnHero
        className="mb-16 md:mb-20"
        image="/static/images/hobby-drawing-cover.png"
        title={t('hobbies.drawing.title')}
        description={t('hobbies.drawing.description')}
        buttons={
          <div className="flex gap-x-3">
            <a target="_blank" href={DrawingAlbumURL} rel="noopener noreferrer">
              <Button type="primary">{t('hobbies.drawing.button1')}</Button>
            </a>
          </div>
        }
      />
      {/* video editing */}
      <Hero
        className="mb-16 md:mb-20"
        image="/static/images/hobby-cover-video.png"
        title={t('hobbies.video.title')}
        description={t('hobbies.video.description')}
        buttons={
          <div className="flex gap-x-3">
            <a target="_blank" href={YouTubeURL} rel="noopener noreferrer">
              <Button type="primary">{t('hobbies.video.button1')}</Button>
            </a>
          </div>
        }
      />
    </div>
  </>
)

export default Hobbies
