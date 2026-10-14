# শুভ শারদীয়া - Durga Puja Wishing Website

A static website (HTML + CSS + JavaScript, no build step) to send Durga Puja wishes and explore Kolkata Pujo: pandals, map, food, style, metro routes, outings and a Pujo Guide chat.

## Folder structure
```
wishing-durga-puja/
├── index.html            page structure (home + one section per tab)
├── css/
│   ├── theme.css         colours, dark/light theme, page background
│   ├── layout.css        header, tab bar, sections, banners
│   ├── components.css    cards, buttons, inputs
│   ├── home.css          hero, lotus, wish window, tiles, gallery, calendar
│   ├── explore.css       map pins and guide chat
│   └── writings.css      Writings tab and image viewer
├── js/                   (loaded in this order)
│   ├── data.js           ALL content: poems, pandals, food, metro, guide answers
│   ├── core.js           helpers, tab navigation, theme switch
│   ├── wish.js           poem, lotus button, wish window, share
│   ├── explore.js        Pandals / Map / Food / Style / Metro / Outings tabs
│   ├── guide.js          Pujo Guide chat (rule-based, offline)
│   ├── home.js           countdown, featured pandals, scroll animation
│   └── writings.js       full-screen viewer for poem posters
├── assets/images/        all photos used by the site
├── serve.py              local test server
├── CREDITS.md            image credits and notes
└── README.md
```

## Run on your computer (one line)
```
python serve.py
```
Then open http://localhost:8000 . Other one-liners: `python -m http.server 8000` or `npx serve .`

## Publish for free (public link)
- **Netlify Drop:** open https://app.netlify.com/drop and drag the `wishing-durga-puja` folder (index.html must be directly inside).
- **GitHub Pages:** `git init && git add . && git commit -m "Durga Puja site" && git branch -M main && git remote add origin YOUR_REPO_URL && git push -u origin main`, then Settings > Pages > Deploy from branch `main`.
- **Cloudflare Pages:** Workers & Pages > Create > Pages > Upload assets.

## Common edits
| I want to... | Edit |
|---|---|
| Add or change a pandal, food, metro stop, outing | `js/data.js` |
| Change Guide answers | `KB` in `js/data.js` |
| Change poems or blessings | `poems`, `bl` in `js/data.js` |
| Update Pujo dates / countdown | calendar card in `index.html` and `js/home.js` |
| Change colours | `css/theme.css` |
| Add another poem poster | add the image to `assets/images/`, then copy a `<figure class="card pf">` block in the `write` section of `index.html` |
| Replace a photo | overwrite the file in `assets/images/` (same name) |

## Notes
- Pandal, metro and timing details are general guidance: verify locally every year.
- Pujo 2026 dates follow the Kolkatar Utsab calendar (Shashthi 16 Oct, Dashami 21 Oct).
