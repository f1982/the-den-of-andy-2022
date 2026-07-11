This project is Andy's personal website, built with Next.js and deployed to Cloudflare Workers through OpenNext.

## Why?

I'd love to have a place that fully autonomous. I can put all my interests there.

## Install

```bash
npm ci
```

## Release

```bash
 npm run release:minor
```

The command will bump the version number, update the `CHANGELOG.md` and `git commit` the changes


## Tech Stack

- React
- Next.js
- OpenNext for Cloudflare

## Development

```bash
npm run dev
```

## Production preview

```bash
npm run build
npm run preview
```

Deploy with `npm run deploy` after authenticating Wrangler and reviewing the generated worker.
