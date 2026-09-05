# Himanshu — Portfolio

My personal portfolio site. Static HTML/CSS/JS, no framework, no build step,
themed after F1 timing screens because I'm a fan and thought it'd be a fun
excuse to design something that isn't just another centered-hero-with-gradient
template.

**Live:** [portfolio-tau-six-cqtu2stlig.vercel.app](https://portfolio-tau-six-cqtu2stlig.vercel.app/)

---

## What's actually interesting about this repo

The main thing: this is **one portfolio that shows three different versions of me**,
switchable from a tab bar under the hero ("Product & Data" / "Civil Engineering" /
"Software Engineering"). I'm a civil engineering student who also does product
and data science stuff and writes a fair amount of code, and I got tired of
picking one identity for my portfolio and hiding the rest. So instead the About
text, Experience section, Skills, and Projects all swap depending on which tab
is active — same page, three résumés' worth of content, one canonical link to
send people. Defaults to Product & Data since that's mostly what I'm applying
for right now.

Everything else (nav, hero, the season log of hackathons/achievements, contact
form) stays the same across all three tabs since that part of me doesn't change.

## Folder structure

```
.
├── index.html              all the markup, single file, ~800 lines
├── LICENSE                 MIT
├── .gitignore
├── README.md                you're reading it
└── assets/
    ├── css/                 one file per "thing" instead of one giant stylesheet
    │   ├── tokens.css        color variables, nothing else
    │   ├── base.css          reset + global type + the .wrap/.section/.center
    │   │                     helper classes + the track-hidden utility class
    │   ├── buttons.css        .btn / .btn-primary / .btn-ghost, shared by the
    │   │                     hero buttons and the contact form's submit button
    │   ├── nav.css           top bar + the little red "1" logo mark
    │   ├── hero.css          the big landing section with the racing photo
    │   ├── track-switch.css  the "choose a lens" tab buttons
    │   ├── about.css         bio text, the stat numbers, education card
    │   ├── experience.css    the internship / research / events-manager cards
    │   ├── skills.css        the filter buttons + the skill bars grid
    │   ├── season-log.css    hackathons & achievements timeline
    │   ├── projects.css      project cards grid
    │   ├── contact.css       the contact form + sidebar cards
    │   └── footer.css        just the bottom bar
    └── js/
        ├── main.js            entry point, just imports + calls everything below
        ├── trackSwitch.js     the tab-switching logic (see below)
        ├── skillBars.js       makes the skill bars replay their fill animation
        │                     on hover
        ├── skillFilters.js    the "All Skills / Programming / ..." filter
        │                     buttons above the skill grid
        ├── scrollIndicator.js the thin red bar on the right edge that tracks
        │                     scroll position
        └── contactForm.js     turns the contact form into a mailto: link
                              since there's no backend
```

I split the CSS and JS up mostly so I could actually find things again later —
one 300-line stylesheet was getting annoying to navigate. Every CSS file is
linked separately in `index.html`'s `<head>`, in the order layout roughly goes
down the page, and `tokens.css` / `base.css` load first since everything else
depends on them. No Sass, no PostCSS, no build step — it's just plain CSS
files loaded as separate `<link>` tags, which is a bit more requests than a
bundled file but for a page this size it doesn't matter and I'd rather not add
a build tool for something this simple.

The JS is genuine ES modules (`<script type="module" src="assets/js/main.js">`),
so `main.js` can just `import` the other files directly — no bundler needed
for that either, modern browsers handle it natively. The one gotcha: module
scripts get blocked by CORS if you open `index.html` straight from disk
(`file://...`), so you do need to serve it through an actual local server to
test locally (see below).

## How the tab-switching actually works

Every element that changes between tabs has a `data-track-content="pm"` (or
`"civil"` / `"sde"`) attribute on it — About paragraphs, stat numbers,
experience cards, skill rows, filter buttons, project cards, all of it, sitting
right next to each other in the DOM. `trackSwitch.js` just loops over all of
them on tab click and toggles a `.track-hidden { display: none !important; }`
class depending on whether the element's track matches the one that was
clicked. Whatever doesn't have the attribute (nav, hero name, contact section,
footer, the season log) never gets touched, so it just stays visible no matter
which tab is active.

It also remembers your last pick in `localStorage` so it doesn't reset to
Product & Data every time you refresh.

## Running it locally

No `npm install`, no dependencies. Just needs a local server because of the
ES modules thing mentioned above:

```bash
python3 -m http.server 8000
```

then open `http://localhost:8000`. (`npx serve` or the VS Code "Live Server"
extension work too, anything that serves static files over `http://` is fine.)

## Deploying

**Vercel** — import the repo at [vercel.com/new](https://vercel.com/new), no
framework preset, no build command, output directory is the repo root. This
is what I actually used.

**GitHub Pages** — push this repo, then in Settings → Pages set the source to
the `main` branch, root folder.

## Content notes / things to know if you're reading the code

- The percentages on the skill bars are **self-rated**, not from any test or
  certification — I picked numbers based on roughly how much time I've spent
  with each tool. Says so right above the skill grid too.
- The bar colors mean something (borrowed from F1 timing screens): purple is
  the strongest skill *in that specific category*, green is the
  second-strongest, yellow is everything else. Not a "good/bad" scale, more
  like "fastest lap in this sector."
- Content across all three tabs is pulled from three actual tailored versions
  of my résumé, so the bullet points, dates, and numbers should all check out
  against those.
- A couple of project cards (RC Structural Analysis, the limestone concrete
  study) don't have a link attached because I don't have anything public to
  point to yet — didn't want to fake a link just to fill the space.
- OneStop (the campus app project) is under my university's Web Committee org,
  not my personal GitHub, so there's no public repo link for it either.

## Known issues / stuff I might fix later

- Contact form has no real backend — it just opens your email client with
  everything pre-filled (`contactForm.js`). Would be nice to wire it to
  something like Formspree or Web3Forms so it can submit without leaving the
  page, just haven't done it yet.
- The skills section markup is pretty repetitive (every one of the ~60 skill
  rows across all three tabs is hand-written HTML). Could probably be
  generated from a JSON file with a tiny script instead, but that would mean
  adding a build step, and honestly copy-pasting divs was faster for a repo
  this size.
- No automated tests. It's a static portfolio page, so I've mostly just been
  eyeballing it in the browser after every change.

## Credits

- Hero photo by [Clément Delacre](https://unsplash.com/@clemsclems) on
  [Unsplash](https://unsplash.com) (free license, no attribution technically
  required, crediting anyway because it's a great photo).
- Fonts: [Unbounded](https://fonts.google.com/specimen/Unbounded) for
  headings, [Geist](https://fonts.google.com/specimen/Geist) for everything
  else — both via Google Fonts.

## License

MIT — see [LICENSE](LICENSE). Do whatever you want with the code; the résumé
content is obviously just mine though.
