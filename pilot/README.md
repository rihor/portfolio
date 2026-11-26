# Presentation pilot

A quick throwaway pilot of a slide-style redesign: plain HTML, CSS and JS with no build step. It lives beside the 2020 Gatsby site and doesn't touch it.

    python3 -m http.server 4321 -d pilot   # then open http://localhost:4321

- Six slides, no page scroll. Arrows, PageUp/PageDown, Space, wheel or trackpad (one gesture moves one slide), swipe, the ← → buttons, or the screen edges move between them.
- `#n` in the URL is the current slide, so you can link straight to one.
- Black, white and greys only. Inter Tight for display type, JetBrains Mono for labels.
- `screens/` holds desktop (1511×848) and phone (390×844) screenshots.
