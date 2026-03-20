# Starshipit demo (Vite + React)

Starshipit-style demo: auth screens, then **Orders** dashboard (collapsible sidebar, status tabs, data table, custom pagination). Ant Design + React Router.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview production build

## Routes

- `/` — Orders dashboard (after sign-in, or open directly in demo)
- `/signin` — login → redirects to `/` on success
- `/signup` — multi-step sign-up

## Structure

`src/components`, `src/helpers`, `src/modules`, `src/layouts`, `src/configuration`, `src/assets/icons`, `src/assets/images`.
