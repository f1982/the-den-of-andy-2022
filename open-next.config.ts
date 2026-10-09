import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache'

// Every route is prerendered at build time and nothing revalidates, so the
// read-only static-assets cache is enough: pages are served from the build
// output instead of being re-rendered by the Worker on every request. Cache
// interception answers those hits before the Next.js server is even loaded.
// See https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
})
