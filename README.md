# OffGridStones

Quiet personal research blog: natural stones, cultural notes, slow travel. Static site (HTML/CSS/JS), no build step.

- `index.html`, `styles.css`, `app.js` — page, theme, live auto-translation switcher (Google Website Translator: EN source → ES, ZH, AR with RTL, FR, DE, TR), topic filter, question box
- `data/posts.json` — posts (write only in English; the page translates them live)
- Shop: https://www.etsy.com/shop/AuraNaturalStones

## Preview locally
Use VS Code → Live Server (or `python3 -m http.server`, then http://localhost:8000). Opening index.html by double-click will not load posts or translation.

## Publish (GitHub Pages)
Repo Settings → Pages → Deploy from branch → `main` / root.

## Question box
Set `FORM_ENDPOINT` at the top of `app.js` (e.g. a Formspree URL). Empty = questions are not sent anywhere.
