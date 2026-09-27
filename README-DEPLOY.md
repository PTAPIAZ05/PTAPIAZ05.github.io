# Deploy notes

## Folder structure (this is what makes the clean URLs work)

```
index.html            → pedrotz.eng
styles.css
projects-data.js
favicon.svg
favicon.png
CNAME                  (GitHub Pages custom domain file — set to pedrotz.eng)
projects/index.html    → pedrotz.eng/projects
project/index.html     → pedrotz.eng/project/?id=... (detail page template)
hobbies/index.html     → pedrotz.eng/hobbies
contact/index.html     → pedrotz.eng/contact
images/                 ← keep your existing images folder at the repo root, untouched
PedroTapiaZamora_Resume.pdf   ← keep at the repo root, untouched
```

Drop these files/folders into your existing repo at the same paths (they replace the old
`index.html`, `styles.css`, `projects-data.js`, `projects.html`, `project.html`,
`hobbies.html`, `contact.html`). Your `images/` folder and resume PDF don't need to move —
every page now links to them with a leading `/` (e.g. `/images/portrait.jpg`), so they
resolve correctly no matter how deep the page lives.

GitHub Pages serves a folder's `index.html` automatically for both `/hobbies` and
`/hobbies/`, so no server config or redirects are needed for the clean URLs.

## Two things you need to finish by hand

1. **Contact form** — Open `contact/index.html`, find the `<form ...>` tag, and replace
   `YOUR_FORM_ID` in `action="https://formspree.io/f/YOUR_FORM_ID"` with your real
   Formspree form ID. Sign up free at formspree.io, create a form pointed at
   `tapia.zamora05@gmail.com`, and it'll give you that ID. Until you do this, the form
   shows a friendly "not wired up yet" message instead of silently failing. Your email
   address no longer appears anywhere in the page source.

2. **Custom domain** — The `CNAME` file is set to `pedrotz.eng`. Make sure your domain's
   DNS is pointed at GitHub Pages (GitHub's docs walk through the A/ALIAS records) and
   that "pedrotz.eng" is also entered under Settings → Pages → Custom domain in the repo.

## Design notes / assumptions made

- **Front page vs. home page**: the space scene is now a real gate. It only shows on a
  genuine page load/refresh of `/`; clicking "Enter Portfolio" reveals the actual home
  page underneath and remembers that choice (via `sessionStorage`) for the rest of the
  browser tab, so clicking around the site and back to Home never re-shows it. Refreshing
  the tab clears that memory, so the splash reappears — as requested.
- **"Who I Am" ⇄ Hobbies**: the home page's old "Who I Am" bio section now shows the old
  Hobbies timeline (Bodybuilding, Cooking, Films, Volunteering) under the heading
  "Outside the Lab." The Hobbies page itself now shows a new "Volunteering" section with
  two entries — Nevada Boys State and Critical Care Comics — using the same card style as
  the Projects page. I wrote short placeholder blurbs and tags for both (marked so they're
  easy to find); swap in your own copy and photos (`images/volunteer-01.jpg` /
  `volunteer-02.jpg`) whenever you're ready.
- **Fonts**: swapped Montserrat/Roboto for Space Grotesk (headings) + IBM Plex Sans
  (body) — a technical, geometric pairing that's common in engineering/tech portfolios
  and reads clean against a dark background.
- **Favicon**: `favicon.svg` renders "PTZ" in UnifrakturCook, a real blackletter/Gothic
  Google Font, loaded at render time. This works in most current Chromium-based browsers.
  Browser support for loading external fonts inside an SVG favicon isn't universal, so
  `favicon.png` (a bold-serif approximation, since a true blackletter font wasn't
  available to render locally in the environment this was built in) is included as a
  fallback for browsers that don't. If you want pixel-perfect blackletter everywhere,
  a tool like realfavicongenerator.net with the same font will give you a fully-rendered
  fallback set.
