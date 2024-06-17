import { PageSetting, SiteSetting } from '@/types/page'
import {
  Article,
  BreadcrumbList,
  WebPage,
  WebSite,
  WithContext,
} from 'schema-dts'

export const getJsonLdWebsite = (
  siteSettings: SiteSetting,
): WithContext<WebSite> => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: siteSettings.url,
  about: siteSettings.description,
  abstract: siteSettings.title,
})

export const getJsonLdArticle = (
  siteSettings: SiteSetting,
): WithContext<Article> => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  author: [
    {
      '@type': 'Person',
      name: siteSettings.author,
    },
  ],
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
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
