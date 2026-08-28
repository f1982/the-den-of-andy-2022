import { Metadata } from 'next'

import { PageLocaleProp } from '@/types/page'
import Link from 'next/link'

import { getDictionary } from '@/utils/dictionaries'

import PageHero from '@/components/sections/hero-image'
import ColumnHero from '@/components/sections/hero-image-text'
import SandwichHero from '@/components/sections/hero-sandwich'
import PageTitle from '@/components/sections/page-title'
import PageRows from '@/components/shared/page-rows'
import { Button } from '@/components/ui/button'

import {
  DrawingAlbumURL,
  PrintableURL,
  RCDevicesAlbumURL,
  RCPlanesAlbumURL,
  ThingiverseURL,
  YouTubeURL,
} from '@/config/links'
import { getPageMetadata, truncateMetaDescription } from '@/utils/metadata-utils'
import { siteSettings } from '@/config/site-config'

import Hobbies3DPrintingImage from '@/assets/images/hobbies-3d-printing.png'
import HobbiesDrawingImage from '@/assets/images/hobbies-drawing.png'
import HobbiesHeroImage from '@/assets/images/hobbies-hero-spaceman.png'
import HobbiesRCImage from '@/assets/images/hobbies-rc.png'
import HobbiesVideoImage from '@/assets/images/hobbies-video.png'

export async function generateMetadata(props: PageLocaleProp): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const dict = await getDictionary(locale)
  return getPageMetadata({
    locale,
    path: '/hobbies',
    title: `${dict.hobbies.headline} — 3D Printing, RC & DIY | ${siteSettings.name}`,
    description: truncateMetaDescription(
      `${dict.hobbies.intro} ${dict.hobbies.print3d.description}`,
    ),
  })
}

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.locale)

  return (
    <>
      <PageRows withMargin>
        <PageHero image={HobbiesHeroImage} alt="Spaceman hobby illustration" />
        <div className="container">
          <PageTitle
            title={dict.hobbies.headline}
            description={dict.hobbies.intro}
          />
        </div>
        <div className="container">
          <ColumnHero
            className="mb-16 md:mb-20"
            image={Hobbies3DPrintingImage}
            title={dict.hobbies.print3d.title}
            description={dict.hobbies.print3d.description}
            imageAlt="3D printer and printed object"
            direction="r2l"
            buttons={
              <div className="flex gap-3">
                <Link
                  href={ThingiverseURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button variant={'default'}>
                    {dict.hobbies.print3d.button1}
                  </Button>
                </Link>
                <Link
                  href={PrintableURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button variant={'default'}>
                    {dict.hobbies.print3d.button2}
                  </Button>
                </Link>
              </div>
            }
          />
        </div>
        {/* rc hobby */}
        <div className="container">
          <SandwichHero
            id="rc-hobby-id"
            className="mb-16 md:mb-20"
            image={HobbiesRCImage}
            title={dict.hobbies.rc.title}
            subtitle="Using RC planes and devices to build my own robots."
            description={dict.hobbies.rc.description}
            imageAlt="Remote-controlled aircraft"
            buttons={
              <div className="flex gap-x-3">
                <a
                  target="_blank"
                  href={RCPlanesAlbumURL}
                  rel="noopener noreferrer">
                  <Button variant={'default'}>{dict.hobbies.rc.button1}</Button>
                </a>
                <a
                  target="_blank"
                  href={RCDevicesAlbumURL}
                  rel="noopener noreferrer">
                  <Button variant={'default'}>{dict.hobbies.rc.button2}</Button>
                </a>
              </div>
            }
          />
        </div>
        {/* drawing */}
        <div className="container">
          <ColumnHero
            className="mb-16 md:mb-20"
            image={HobbiesDrawingImage}
            title={dict.hobbies.drawing.title}
            description={dict.hobbies.drawing.description}
            imageAlt="Drawing tools and artwork"
            buttons={
              <div className="flex gap-x-3">
                <a
                  target="_blank"
                  href={DrawingAlbumURL}
                  rel="noopener noreferrer">
                  <Button variant={'default'}>
                    {dict.hobbies.drawing.button1}
                  </Button>
                </a>
              </div>
            }
          />
        </div>
        {/* video editing */}
        <div className="container">
          <SandwichHero
            className="mb-16 md:mb-20"
            image={HobbiesVideoImage}
            title={dict.hobbies.video.title}
            description={dict.hobbies.video.description}
            imageAlt="Video editing setup"
            buttons={
              <div className="flex gap-x-3">
                <a target="_blank" href={YouTubeURL} rel="noopener noreferrer">
                  <Button variant={'default'}>
                    {dict.hobbies.video.button1}
                  </Button>
                </a>
              </div>
            }
          />
        </div>
      </PageRows>
    </>
  )
}
