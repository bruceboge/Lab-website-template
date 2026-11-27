# DICEL Next.js App

The DICEL website is built with Next.js App Router.

## Development

```sh
npm ci
npm run dev
```

The application is available at `http://localhost:3000` by default.

## Production

```sh
npm run build
npm start
```

## File organization

- `app/` — website pages, dynamic routes, layouts, and API endpoints. Folder names match the URL and UI page.
- `src/views/` — page content for the corresponding App Router entry.
- `src/components/` — shared header, footer, navigation, search, and visual components.
- `src/data/` — projects, events, and inventory content.
- `src/styles.css` — shared hand-written website styles.

Use npm as the package manager; `package-lock.json` is the authoritative dependency lockfile.
