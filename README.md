# Portfolio

Static one-page portfolio for Himanshu Rajput. Plain HTML/CSS, no build step.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

**GitHub Pages** — push this repo, then in Settings → Pages set the source to the `main` branch, root folder.

**Vercel** — import the repo at [vercel.com/new](https://vercel.com/new). No framework preset or build command needed; output directory is the repo root.

## Files

- `index.html` — page markup and content
- `styles.css` — all styling
- `script.js` — skill-tab filtering, scroll-progress indicator, contact form (mailto fallback)

## Notes

- The contact form has no backend — it opens the visitor's email client pre-filled (see `script.js`). To get a native in-page "sent!" confirmation instead, wire the form to a service like Formspree or Web3Forms.
- Skill percentages are self-rated, not certified — adjust the `--pct` values and numbers in `index.html`/`styles.css` to your own comfort level.
