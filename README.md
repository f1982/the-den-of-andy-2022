This project is Andy's personal website, built with Next.js and deployed to Cloudflare Workers through OpenNext.

## Why?

I'd love to have a place that fully autonomous. I can put all my interests there.

## Install

```bash
pnpm install --frozen-lockfile
```

## Release

```bash
 pnpm release:minor
```

The command will bump the version number, update the `CHANGELOG.md` and `git commit` the changes


## Tech Stack

- React
- Next.js
- OpenNext for Cloudflare

## Development

```bash
pnpm dev
```

## Production preview

```bash
pnpm build
pnpm preview
```

Deploy with `pnpm run deploy` (plain `pnpm deploy` is a built-in pnpm command) after authenticating Wrangler and reviewing the generated worker.
