# Kilimanjaro — A Shark's Fishbowl

Synthwave portfolio site for **A Shark's Fishbowl** / ASF Studios — businesses, YouTube, music, and a neon **deck.gl** world map. Tagline stays true: *Gotta climb to get to the top*.

## Stack

| Layer | Tech |
| --- | --- |
| Frontend | **Rsbuild** + React + TypeScript (not Vite / not Next.js) |
| Types bridge | **ts-rs** — Rust structs export to `shared/types/` |
| API | **Rust** (Axum) + **Python** (FastAPI) |
| Database | **SQLite** (`data/kilimanjaro.db`) |
| Viz | **deck.gl** hexbins, arcs, pulsing scatter + MapLibre dark basemap |

## Quick start

### Frontend (port 3847)

```bash
cd web
npm install
npm run dev
```

Open `http://127.0.0.1:3847`. The UI ships with sample data, so it runs even if the APIs are offline.

### Rust API (port 3848)

```bash
cd backend-rust
KILI_DB=../data/kilimanjaro.db cargo run
```

Serves `/api/site`, `/api/contact`, and seeds SQLite on first boot. Also regenerates TypeScript bindings via **ts-rs**.

### Python media API (port 3849)

```bash
pip install -r backend-python/requirements.txt
cd backend-python
KILI_DB=../data/kilimanjaro.db python3 main.py
```

Serves `/api/media` (YouTube + music clips).

## Sections

1. **Hero** — retro sun + perspective grid + neon brand
2. **Businesses** — Fishbowl studio, Precious Plastic, courses, Neon Signal Records
3. **Portfolio** — selected climbs and tools
4. **Neon Map** — deck.gl showcase (Colorado Springs → Kilimanjaro circuit)
5. **YouTube** — curated channel drops
6. **Music** — tracklist with EQ-style motion
7. **Contact** — posts to the Rust API (falls back gracefully offline)

## Environment

| Variable | Default | Purpose |
| --- | --- | --- |
| `KILI_DB` | `../data/kilimanjaro.db` | SQLite path |
| `KILI_RUST_PORT` | `3848` | Rust listen port |
| `KILI_PY_PORT` | `3849` | Python listen port |
| `PUBLIC_RUST_API` | `http://127.0.0.1:3848` | Frontend → Rust |
| `PUBLIC_PYTHON_API` | `http://127.0.0.1:3849` | Frontend → Python |

## Deploy (Firebase Hosting → asharksfishbowl.com)

Push to `master` runs **Climbing the Mountain** (`.github/workflows/firebase.yml`):

1. `npm ci` + `npm run build` in `web/` (Rsbuild → `web/dist`)
2. Deploy `web/dist` to Firebase Hosting site `kilimanjaro-4c1b5` (custom domain **asharksfishbowl.com**)
3. Also mirrors to GitHub Pages as a backup

**Required GitHub secret** (Settings → Secrets and variables → Actions):

| Secret | Value |
| --- | --- |
| `FIREBASE_ADMIN` | Full JSON of a Firebase/Google **service account** with Firebase Hosting Admin (Project settings → Service accounts → Generate new private key) |

Do **not** paste the key into chat. Also accepted: `FIREBASE_SERVICE_ACCOUNT`. Optional fallback: `FIREBASE_TOKEN` from `firebase login:ci`. Optional vars: `PUBLIC_RUST_API` / `PUBLIC_PYTHON_API`.
