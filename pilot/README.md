# Portfolio pilot: tabs over a particle field

A quick throwaway pilot: plain HTML, CSS and JS with no build step. It lives beside the 2020 Gatsby site and doesn't touch it.

    python3 -m http.server 4321 -d pilot   # then open http://localhost:4321

- One fixed page that never scrolls, with four tabs: About, Work, Lab and Contact. A tab swaps its content in place, and `#work` etc. in the URL opens that tab. The ← → keys also switch tabs.
- `field.js` is the only three.js scene, loaded from a pinned CDN (`three@0.170.0`). It is created once and keeps running behind every tab. With `prefers-reduced-motion` it draws one still frame.
- Black, white and greys only. Inter Tight for display type, JetBrains Mono for labels.
- `screens/` holds desktop (1511×848) and phone (390×844) screenshots of each tab.
