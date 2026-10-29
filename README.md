# Eagle Mountain Civic Dashboard (unofficial)

A static, no-build citizen dashboard for Eagle Mountain, Utah: council topics, an interactive project timeline (zoom, topic/status filters, today marker, click-for-details), city goals with progress, amenities with filters, a Leaflet/OpenStreetMap map, and links to official sources.

## Files
- `index.html` – page structure and static content
- `style.css` – styles (light/dark via `prefers-color-scheme`, mobile-friendly)
- `data.js` – all data (projects, milestones, goals, amenities, map pins) with source links
- `app.js` – rendering and interactivity (vanilla JS)

## Run locally
Open `index.html` in a browser, or `python3 -m http.server` and visit http://localhost:8000.

## Deploy on GitHub Pages
Push this folder to a repo, then Settings → Pages → deploy from branch (root). No build step.

## Updating data
Edit `data.js`. Rules: every item needs a source URL; use `expected: true` for dates that are forecasts; write "Unknown"/"TBD" rather than guessing; label third-party or unconfirmed claims. Update `TODAY` and the footer date.

## Caveats
Compiled Oct 29, 2026 from public sources, including independent civic sites (openutah.org, utahledger.com, civicrollcall.com, emv.soudub.com). Map pins were geocoded via OpenStreetMap Nominatim; approximate pins are marked. Not affiliated with Eagle Mountain City.
