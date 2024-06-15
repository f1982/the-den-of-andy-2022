import PageRows from '@/components/atoms/page-rows'
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

import { getDictionary } from '../../dictionaries'

export default async function Page({ params: { locale } }) {
  const dict = await getDictionary(locale)
  return (
    <>
      <PageRows withMargin>
        <PageHero image="/static/images/Space_discovery_--5ec7b87401d0360014d4e3c7.png" />
        <div className="container">
          <PageTitle
            title={dict.hobbies.headline}
            description={dict.hobbies.intro}
          />
        </div>
        <div className="container">
          <ColumnHero
            className="mb-16 md:mb-20"
            image="/static/images/3d-printing-ender-3-v2.png"
            title={dict.hobbies.print3d.title}
            subtitle="Using 3D printing to make my own 3D models."
            description={dict.hobbies.print3d.description}
            direction="r2l"
            buttons={
              <div className="flex">
                <a
                  href={ThingiverseURL}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button variant={'default'}>
                    {dict.hobbies.print3d.button1}
                  </Button>
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
            title={dict.hobbies.rc.title}
            subtitle="Using RC planes and devices to build my own robots."
            description={dict.hobbies.rc.description}
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
            image="/static/images/hobby-drawing-cover.png"
            title={dict.hobbies.drawing.title}
            subtitle="Using digital drawing software to make my own drawings."
            description={dict.hobbies.drawing.description}
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
            image="/static/images/hobby-cover-video.png"
            title={dict.hobbies.video.title}
            subtitle="Using video editing software to make my own videos."
            description={dict.hobbies.video.description}
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
