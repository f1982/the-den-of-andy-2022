/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL ?? 'https://andycao.me', // Can not load siteUrl from config.js
  generateRobotsTxt: true, // the robots.text generated with wrong format
  sitemapSize: 7000, // if it's bigger than 7000, will create sitemap-2.xml
  changefreq: 'weekly',
  exclude: ['/manifest.*', '/api'],
}
