# dragoncopilot.com.au — project status

Last updated: 25 August 2026

## Phase 1 — Repo setup

- [x] Repo scaffolded (Astro 4, static, zero client JS on content pages)
- [x] `src/site.config.json` created — reference site type
- [x] `src/data/link-network.json` copied from master, `dragoncopilot.com.au` registered
- [x] `src/data/link-usage.json` — `thisSite` set, all counts reset to 0
- [x] `.claude/` network standards copied verbatim from `astro-gateway-master`
- [x] `ACForm.astro` created from the frozen template
- [ ] **BLOCKED — ActiveCampaign form ID and `or` UUID** (`site.config.json` → `form`, currently `CHANGE_ME`)
- [ ] **DEFERRED — GA4 measurement ID.** Russ cannot create the property until approval comes through. Agreed 25 Aug 2026 to leave `googleAnalyticsId` empty and do it at the end, before deploy. The GA snippet does not fire while the field is empty, so this is safe to defer.
- [ ] `public/logo.jpg` — not yet supplied
- [ ] Register the new site in `link-network.json` across **all other network repos**

## Phase 2 — Content

- [x] Content collections: `docs`, `emr`, `institution`, `news`
- [x] 155 citation IDs mapped into `src/data/sources.json` from the source research report
- [x] 9 Australian EMR records seeded
- [x] 15 government / hospital network records seeded
- [x] Sample reference page: What is Dragon Flex
- [ ] Australian EMR integration status — all except Epic are `[VERIFY]`, pending primary sources
- [ ] Government and hospital cluster
- [x] Dragon Medical One search-capture cluster — 3 pages
- [ ] Remaining reference pages across the four hubs

## Phase 3 — Images

- [ ] Not started. Image slots to be listed against `.claude/IMAGE-STANDARDS.md`.

## Phase 4 — Deploy

- [ ] Cloudflare Pages project
- [ ] Custom domains — apex **and** www added inside the Pages project
- [ ] `PUBLIC_R2_BASE` env var
- [ ] Full checklist in `.claude/INFRASTRUCTURE.md`

## Editorial decisions on the record

- **No pricing figures anywhere on this site.** Licensing mechanics are covered in full; dollar
  amounts are not. Decided by Russ, 25 August 2026.
- **`[VERIFY]` is publishable; guessing is not.** Where no primary source confirms an integration,
  the site says so.
- Dragon Copilot has no confirmed Australian general availability as at 25 August 2026. The site is
  being built ahead of that, deliberately.
