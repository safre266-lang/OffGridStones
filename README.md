# OffGridStones

Quiet personal research blog: natural stones, cultural notes, slow travel. Static site (HTML/CSS/JS), no build step.

- `index.html`, `styles.css`, `app.js` — page, theme, language switcher (EN, ES, ZH, AR with RTL, FR, DE, TR), topic filter, question box
- `data/posts.json` — posts (write in English; optionally add `translations`)
- Shop: https://www.etsy.com/shop/AuraNaturalStones

## Preview locally
Fetching `data/posts.json` needs a server: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Publish (GitHub Pages)
Repo Settings → Pages → Deploy from branch → `main` / root.

## Question box
Set `FORM_ENDPOINT` at the top of `app.js` (e.g. a Formspree URL). Empty = questions are not sent anywhere.
