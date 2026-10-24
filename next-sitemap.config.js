/** @type {import('next-sitemap').IConfig} */

// Untranslated posts are still built under /zh-CN, but as fallback copies of
// the English text that canonicalise to the English URL. Keep them out of the
// sitemap so it only lists canonical pages. build-content runs before this.
const content = require('./src/generated/content.json')
const fallbackPostPaths = content.posts['zh-CN']
  .filter((post) => post.contentLocale !== 'zh-CN')
  .map((post) => `/zh-CN/blog/${post.slug}`)

module.exports = {
  siteUrl: process.env.SITE_URL ?? 'https://andycao.me', // Can not load siteUrl from config.js
  generateRobotsTxt: true,
  sitemapSize: 7000, // if it's bigger than 7000, will create sitemap-2.xml
  changefreq: 'weekly',
  exclude: ['/manifest.*', '/api', ...fallbackPostPaths],
  // English pages are built under /en but served at the site root (the
  // middleware 301s /en/* to /*), so list the public URL.
  transform: async (config, path) => ({
    loc: path === '/en' ? '/' : path.replace(/^\/en\//, '/'),
    changefreq: config.changefreq,
    priority: config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  }),
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
