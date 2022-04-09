import { SNSPlatforms } from '../types/links';
import Facebook from '../components/atoms/Icons/Facebook';
import Twitter from '../components/atoms/Icons/Twitter';
import Ins from '../components/atoms/Icons/Ins';
import LinkedIn from '../components/atoms/Icons/LinkedIn';
import YouTube from '../components/atoms/Icons/YouTube';

const SNS = [
  {
    id: 1,
    // name: 'Instagram',
    name: SNSPlatforms.Instagram,
    type: 'outside',
    icon: <Ins />,
    link: 'https://www.instagram.com/iandycao/',
    alt: "Andy's Instagram",
    tag: null,
    hidden: 0,
  },
  {
    id: 2,
    name: SNSPlatforms.FaceBook,
    type: 'outside',
    icon: <Facebook />,
    link: 'https://www.facebook.com/andycao1982',
    alt: "Andy's Facebook Homepage",
    tag: null,
    hidden: 0,
  },
  {
    id: 3,
    name: SNSPlatforms.YouTube,
    type: 'outside',
    icon: <YouTube />,
    link: 'https://www.youtube.com/c/AndyCaoisme',
    alt: "Andy's Youtube Channel",
    tag: null,
    hidden: 0,
  },
  {
    id: 4,
    name: SNSPlatforms.LinkedIn,
    type: 'both',
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/in/andyisme/',
    alt: "Andy's LinkedIn Page",
    tag: null,
    hidden: 0,
  },
  {
    id: 5,
    name: SNSPlatforms.Twitter,
    type: 'outside',
    icon: <Twitter />,
    link: 'https://twitter.com/iandycao',
    alt: "Andy's Twitter",
    tag: null,
    hidden: 0,
  },
  {
    id: 6,
    name: 'Flickr',
    type: 'outside',
    icon: 'flickr',
    link: 'https://www.flickr.com/photos/ad1982/',
    alt: null,
    tag: null,
    hidden: 1,
  },
  {
    id: 7,
    name: SNSPlatforms.Weibo,
    type: 'inside',
    icon: 'weibo',
    link: 'http://www.weibo.com/enjoywound',
    alt: null,
    tag: null,
    hidden: 1,
  },
  {
    id: 8,
    name: 'SoundCloud',
    type: 'outside',
    icon: 'soundcloud',
    link: 'https://soundcloud.com/andy-cao-925715105',
    alt: null,
    tag: null,
    hidden: 1,
  },
  {
    id: 9,
    name: '豆瓣',
    type: 'inside',
    icon: 'douban',
    link: 'https://www.douban.com/people/f1982/',
    alt: null,
    tag: null,
    hidden: 1,
  },
];

const friends = [
  {
    id: 1,
    name: 'TigerWang',
    type: 'outside',
    icon: '',
    link: 'https://tigerwang.us/',
    alt: 'Tiger Wang',
    tag: null,
    hidden: 0,
  },
  {
    id: 1,
    name: 'Feng',
    type: 'outside',
    icon: 'facebook',
    link: 'http://fenglee.com/',
    alt: 'Indie game developer Feng Lee',
    tag: null,
    hidden: 0,
  },
];

export { SNSPlatforms, SNS, friends };
