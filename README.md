# CV Template

A clean, minimal, single-page CV website built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step — just open `index.html` in a browser.

## Features

- **Content/presentation separation** — all your data lives in one file (`content.js`), the HTML and CSS are untouched
- **Light and dark mode** — theme toggle with preference saved to `localStorage`
- **Responsive** — mobile-first layout, hamburger nav on small screens, back-to-top button on mobile
- **Sections** — Summary, Experience, Earlier Career, Skills, Certifications, Publications, Other Contributions, Education
- **Downloadable CV** — link to a PDF in the `files/` folder

## Getting started

### 1. Edit `content.js`

This is the only file you need to change. Replace the placeholder values with your own information. Each field is documented inline with comments.

### 2. Add your images

Place your images in the `img/` folder:
- **Certification badges** — referenced in `certifications[].badge`
- **University/institution logos** — referenced in `education[].logo`

Recommended sizes:
- Badge images: 120 × 120 px (PNG with transparent background works best in dark mode)
- Institution logos: any width, ~64 px tall

### 3. Add your CV PDF

Drop your CV PDF into the `files/` folder and name it `cv.pdf` (or update the `href` in `index.html`).

### 4. Run locally

Open `index.html` directly in your browser, or serve it with any static file server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

### 5. Deploy

This is a fully static site — deploy it anywhere:
- **GitHub Pages** — push to a public repo and enable Pages in Settings
- **Netlify / Vercel** — drag and drop the folder or connect a GitHub repo
- **Any web host** — upload the files via FTP or your host's file manager

## Customising sections

Each section is opt-in by its data. If you have no publications, simply set `publications: []` in `content.js` — the section will render empty. You may also remove the corresponding `<section>` block from `index.html` and its nav link if you prefer to hide it entirely.

## Theming

Colours are defined as CSS custom properties in `css/theme.css`. The default palette uses a warm off-white background with a gold accent. Change `--gold` and `--navy` to match your preferred brand colours.

## License

MIT © 2026 [Lionel Lam Song Poh](https://github.com/lionellam)
