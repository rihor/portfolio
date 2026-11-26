# Pedro Pinho — portfolio

Plain HTML, CSS and JS. No build step, no dependencies to install.

    python3 -m http.server 4321   # then open http://localhost:4321

- One fixed page that never scrolls, with four tabs: About, Work, Lab and Contact. A tab swaps its content in place, and `#work` etc. in the URL opens that tab. The ← → keys also switch tabs.
- `field.js` is the only three.js scene, loaded from a pinned CDN (`three@0.170.0`). It is created once and keeps running behind every tab. With `prefers-reduced-motion` it draws one still frame.
- Light grey paper with dark points, and black, white and greys only. `DESIGN.md` is the design system: the tokens at the top of `style.css` are the single source of truth, and DESIGN.md explains them.

## Deploy

Vercel, through its GitHub integration: every push to `master` deploys to production and every PR gets a preview. `vercel.json` tells Vercel this is a static site with no framework, no install and no build, served from the repo root.

The previous Gatsby site (2020) lives in git history at commit `13b8155`.
