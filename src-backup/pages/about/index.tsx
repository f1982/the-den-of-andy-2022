import PageHero from '../../../src/components/page/PageHero'
import { getAge } from '../../../src/lib/date.utils'
import TabTitle from '../../components/molecules/seo/SiteSEO'
import PageTitle from '../../components/organisms/blocks/PageTitle'
import SmallText from '../../components/organisms/blocks/SmallText'
import { t } from 'i18next'
import React from 'react'

const About: React.FC = () => (
  <>
    <TabTitle pageTitle={t('about.pageTitle')} />
    <PageHero image="/static/images/page-hero-memoji.png" />
    {/* <PageHero image="/static/images/about-andy-meditation.png" /> */}
    <div className="container mx-auto">
      <PageTitle
        title={t('about.headline')}
        description={t('about.description')}
      />
      {/* <div className="flex flex-col items-center justify-center">
          <Submenu items={aboutSubmenu} />
        </div> */}
      <SmallText
        image="/static/images/about-andy-back.jpg"
        title={t('about.whoIsAndyTitle')}
        description={t('about.whoIsAndyDescription')}
      />
      <SmallText
        image="/static/images/about-computer.jpg"
        title={t('about.whatAndyDoTitle')}
        description={t('about.whatAndyDoDescription')}
      />
      <SmallText
        image="/static/images/about-andy-family.jpg"
        title={t('about.familyTitle')}
        description={String(t('about.familyDescription')).replace(
          '$AGE_OF_ZOE$',
          getAge('2016-06-01').toString()
        )}
      />
    </div>
  </>
)

export default About
