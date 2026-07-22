# Saafir Hale — Portfolio

A single-page personal site: **Cybersecurity Analyst & Infrastructure / Network Engineer**,
with software, quant, data, and creative work as supporting range. Built with React + Vite.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5177
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

**All text, experience, projects, certs, and links live in [`src/content.js`](src/content.js).**
You almost never need to touch the components. Each work item has a `status`:

- `'live'` — has a public link; the "View" button shows.
- `'work'` — real professional work, no public code link; shows a green **Production** tag.
- `'private'` — personal build, no public link; shows a **Personal** tag.

Résumés live in `public/assets/` (`resume-security.pdf`, `resume-network.pdf`) and are
referenced from `contact.resume` / `contact.resumes` in `src/content.js`.

### Optional tweaks
- Remove `contact.phone` if you'd rather not list a number publicly.
- Set the St. Lashun card to `status: 'live'` with its URL once that site is deployed.
- Swap in real project links/screenshots for the security cards if you open-source any.

## Deploy to GitHub Pages (new repo, keeps the old site up)

1. Create a new repo, e.g. `portfolio`, and push this folder to it.
2. `npm run build` (the `base: './'` in `vite.config.js` keeps asset paths relative,
   so it works at either `saafirhale.github.io/portfolio/` or a custom domain).
3. Publish `dist/` — either the `gh-pages` branch, or a GitHub Actions Pages workflow.
4. In the repo's **Settings → Pages**, point at that branch/source.

New URL will be `https://saafirhale.github.io/portfolio/`, leaving the current
`AnalyticsPortfolio` site untouched until you're ready to switch.
