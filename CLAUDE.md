@AGENTS.md

## Claude Code

- Preview the production Worker locally with the `cf-preview` config in
  `.claude/launch.json` (port 8787). Run `pnpm exec opennextjs-cloudflare build`
  first, because the preview serves `.open-next/` as built.
- Deploying is outward-facing: only deploy when asked, and run
  `pnpm exec wrangler whoami` first. Deploy only if it shows
  `caojundan@gmail.com`; otherwise ask the user to run
  `pnpm exec wrangler login` (see AGENTS.md → Deploy).
