import { PageSetting, SiteSetting } from '@/types/page'
import {
  Article,
  BreadcrumbList,
  Person,
  WebPage,
  WebSite,
  WithContext,
} from 'schema-dts'

import { siteUrl, socialProfiles } from '@/config/site-config'

export const getJsonLdWebsite = (
  siteSettings: SiteSetting,
  locale = 'en',
): WithContext<WebSite> => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteSettings.url,
  name: siteSettings.name,
  description: siteSettings.description,
  inLanguage: locale,
  publisher: {
    '@type': 'Person',
    name: siteSettings.author,
    url: siteUrl,
  },
})

export const getJsonLdPerson = (
  siteSettings: SiteSetting,
): WithContext<Person> => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteSettings.author,
  url: siteSettings.url,
  jobTitle: 'Software Developer',
  homeLocation: {
    '@type': 'City',
    name: 'Auckland',
  },
  sameAs: socialProfiles,
})

export const getJsonLdArticle = (
  siteSettings: SiteSetting,
  article: {
    url: string
    title: string
    description: string
    image: string
    datePublished: string
    dateModified?: string
    author: string
    locale?: string
  },
): WithContext<Article> => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  url: article.url,
  mainEntityOfPage: article.url,
  image: [article.image],
  inLanguage: article.locale,
  author: [
    {
      '@type': 'Person',
      name: article.author,
      url: siteSettings.url,
    },
  ],
  publisher: {
    '@type': 'Person',
    name: siteSettings.author,
    url: siteSettings.url,
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified ?? article.datePublished,
})

export const getJsonLdPageBase = (
  siteSettings: SiteSetting,
): WithContext<WebPage> => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  author: [
    {
      '@type': 'Person',
      name: siteSettings.author,
    },
  ],
})

export const getJsonLdPage = (
  siteSettings: SiteSetting,
  pageSettings: PageSetting,
): WithContext<WebPage> => ({
  ...getJsonLdPageBase(siteSettings),
  name: pageSettings.name,
  headline: pageSettings.title,
  description: pageSettings.description,
  url: pageSettings.url,
  image: pageSettings.image,
})

export const jsonLdBreadcrumbBase: WithContext<BreadcrumbList> = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
}

export const getJsonLdBreadcrumb = (
  items: Array<{ name: string; url: string }>,
): WithContext<BreadcrumbList> => ({
  ...jsonLdBreadcrumbBase,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
