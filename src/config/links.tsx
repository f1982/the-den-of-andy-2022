import Facebook from '../../src-backup/components/atoms/Icons/Facebook'
import Ins from '../../src-backup/components/atoms/Icons/Ins'
import LinkedIn from '../../src-backup/components/atoms/Icons/LinkedIn'
import Twitter from '../../src-backup/components/atoms/Icons/Twitter'
import YouTube from '../../src-backup/components/atoms/Icons/YouTubeIcon'
import { SNSPlatforms } from '../types/links'

export const RCPlanesAlbumURL = 'https://photos.app.goo.gl/huWtqV1XxnSan39P7'
export const RCDevicesAlbumURL = 'https://photos.app.goo.gl/TjSPdHm2zfGfzeA2A'
export const DrawingAlbumURL = 'https://photos.app.goo.gl/9GZrmEyXhCBReKGP6'
export const ThingiverseURL = 'https://www.thingiverse.com/iandycao/'
export const YouTubeURL = 'https://www.youtube.com/c/AndyCaoisme'
export const BilibiliURL = 'https://space.bilibili.com/30429048'

const SNS = [
  {
    id: 1,
    // name: 'Instagram',
    name: SNSPlatforms.Instagram,
    type: 'outside',
    icon: <Ins />,
    link: 'https://www.instagram.com/iandycao/',
    alt: "Andy's Instagram",
    tag: '',
    hidden: 0
  },
  {
    id: 2,
    name: SNSPlatforms.FaceBook,
    type: 'outside',
    icon: <Facebook />,
    link: 'https://www.facebook.com/andycao1982',
    alt: "Andy's Facebook Homepage",
    tag: '',
    hidden: 0
  },
  {
    id: 3,
    name: SNSPlatforms.YouTube,
    type: 'outside',
    icon: <YouTube />,
    link: YouTubeURL,
    alt: "Andy's Youtube Channel",
    tag: '',
    hidden: 0
  },
  {
    id: 4,
    name: SNSPlatforms.LinkedIn,
    type: 'both',
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/andyisme/',
    alt: "Andy's LinkedIn Page",
    tag: '',
    hidden: 0
  },
  {
    id: 5,
    name: SNSPlatforms.Twitter,
    type: 'outside',
    icon: <Twitter />,
    link: 'https://twitter.com/iandycao',
    alt: "Andy's Twitter",
    tag: '',
    hidden: 0
  },
  {
    id: 6,
    name: 'Flickr',
    type: 'outside',
    icon: 'flickr',
    link: 'https://www.flickr.com/photos/ad1982/',
    alt: '',
    tag: '',
    hidden: 1
  },
  {
    id: 7,
    name: SNSPlatforms.Weibo,
    type: 'inside',
    icon: 'weibo',
    link: 'http://www.weibo.com/enjoywound',
    alt: '',
    tag: '',
    hidden: 1
  },
  {
    id: 8,
    name: 'SoundCloud',
    type: 'outside',
    icon: 'soundcloud',
    link: 'https://soundcloud.com/andy-cao-925715105',
    alt: '',
    tag: '',
    hidden: 1
  },
  {
    id: 9,
    name: '豆瓣',
    type: 'inside',
    icon: 'douban',
    link: 'https://www.douban.com/people/f1982/',
    alt: '',
    tag: '',
    hidden: 1
  },
  {
    id: 10,
    name: 'BiliBili',
    type: 'inside',
    icon: 'BiliBili',
    link: BilibiliURL,
    alt: 'Bili Bili',
    tag: '',
    hidden: 1
  }
]

const friends = [
  {
    id: 1,
    name: 'TigerWang',
    type: 'outside',
    icon: '',
    link: 'https://tigerwang.us/',
    alt: 'Tiger Wang',
    tag: '',
    hidden: 0
  },
  {
    id: 1,
    name: 'Feng',
    type: 'outside',
    icon: 'facebook',
    link: 'http://fenglee.com/',
    alt: 'Indie game developer Feng Lee',
    tag: '',
    hidden: 0
  }
]

export { SNSPlatforms, SNS, friends }
