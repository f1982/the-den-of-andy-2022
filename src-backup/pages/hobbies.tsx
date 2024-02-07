import Hero from '../../src/components/organisms/blocks/Hero'
import PageTitle from '../../src/components/organisms/blocks/PageTitle'
import ColumnHero from '../../src/components/page/ColumnHero'
import PageHero from '../../src/components/page/PageHero'
import {
  DrawingAlbumURL,
  RCDevicesAlbumURL,
  RCPlanesAlbumURL,
  ThingiverseURL,
  YouTubeURL
} from '../../src/config/links'
import MyButton from '../components/atoms/buttons/Button'
import TabTitle from '../components/molecules/seo/SiteSEO'
import { t } from 'i18next'

const Hobbies = () => (
  <>
    <TabTitle pageTitle={t('hobbies.pageTitle')} />
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
              <MyButton type="primary">{t('hobbies.print3d.button1')}</MyButton>
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
              <MyButton type="primary">{t('hobbies.rc.button1')}</MyButton>
            </a>
            <a
              target="_blank"
              href={RCDevicesAlbumURL}
              rel="noopener noreferrer">
              <MyButton type="secondary">{t('hobbies.rc.button2')}</MyButton>
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
              <MyButton type="primary">{t('hobbies.drawing.button1')}</MyButton>
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
              <MyButton type="primary">{t('hobbies.video.button1')}</MyButton>
            </a>
          </div>
        }
      />
    </div>
  </>
)

export default Hobbies
