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

## Manga → Real Life images
1. Put the image file in `drawings/` (JPG/PNG/WebP, portrait works best).
2. Add an entry to `data/drawings.json` (newest first):
```json
[
  {
    "character": "Character name",
    "series": "Manga title",
    "credit": "Optional: artist or tool that made it",
    "date": "2026-11-26",
    "image": "drawings/my-image.jpg",
    "note": "Optional short note about the image."
  }
]
```
While the list is empty, the section shows "coming soon" frames.
