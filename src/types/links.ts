const enum SNSPlatforms {
  Instagram = 'Instagram',
  FaceBook = 'Facebook',
  YouTube = 'YouTube',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  Weibo = 'Weibo'
}

interface LinkData {
    id: number,
    name: string,
    type: 'outside'|'inside',
    icon: string,
    link: string,
    alt?: string,
    tag?: string,
    hidden:number,
}
export { SNSPlatforms, LinkData };
