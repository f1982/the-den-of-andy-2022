export const enum SNSPlatforms {
  Instagram = 'Instagram',
  FaceBook = 'Facebook',
  YouTube = 'YouTube',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  Weibo = 'Weibo'
}

export interface LinkData {
    id: number,
    name: string,
    type: 'outside'|'inside',
    icon: string,
    link: string,
    alt?: string,
    tag?: string,
    hidden:number,
}
