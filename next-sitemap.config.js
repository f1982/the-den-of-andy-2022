/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL ?? 'https://andycao.me', // Can not load siteUrl from config.js
  generateRobotsTxt: true,
  sitemapSize: 7000, // if it's bigger than 7000, will create sitemap-2.xml
  changefreq: 'weekly',
  exclude: ['/manifest.*', '/api'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Keep AI search/citation access available while reserving content from
      // model training crawlers. Cloudflare may add its own managed policy.
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
    ],
  },
}
