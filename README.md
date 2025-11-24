# MusicGPT

This repository contains the frontend for MusicGPT — a Next.js app using Tailwind CSS, `motion` (Motion.dev) animations, `socket.io` for realtime features, and `zustand` for lightweight state management.

**Quick start**

- Install dependencies: `pnpm install`
- Run the app locally (development server): `pnpm run dev`
- Open `http://localhost:3000` in your browser.

**Note:** The `dev` script runs `node server.ts` to start a custom server (used to attach `socket.io`).

**Chosen Tech Stack**

- **Framework:** `Next.js` (App Router) — folders under `app/` use the newest Next features.
- **UI / Styling:** `Tailwind CSS` for utility-first styling (`tailwindcss` v4 in devDependencies).
- **Animations:** `motion` (Motion.dev) for JS-based animations; Tailwind's built-in transition utilities for simple hover/interaction transitions.
- **Realtime:** `socket.io` + `socket.io-client` for realtime communication between client and server (`server.ts`).
- **State management:** `zustand` for global/local state in `store.ts`.

**Architecture Rationale**

- **Next.js App Router:** The application uses the App Router (`app/`) to take advantage of server components, layouts, and nested routing which simplifies data fetching and page composition.
- **Custom server (`server.ts`):** A small Node entrypoint is used to attach `socket.io` to the Next server.
- **Component-driven UI:** UI is split into small components under `app/components/` (e.g., `profile`, `generationList`, `sidebar`) so animations and layout are local to components.
- **Motion.dev + Tailwind:** Motion.dev handles complex timeline and keyframe-like animations (used for gradient backgrounds and notification pulses), while Tailwind covers standard hover/transition states. This hybrid keeps the code simple while enabling rich interactions.
- **Zustand store:** Chosen for lightweight, hook-friendly state without the overhead of larger libraries.

**How to Build & Run**

- Install dependencies:

```bash
pnpm install
```

- Run in development (custom server with sockets):

```bash
pnpm run dev
```

- Build for production:

```bash
pnpm run build
pnpm run start
```

**Project Structure (high level)**

- `app/` — Next.js app routes, pages and UI components.
  - `components/` — UI components (e.g., `sidebar`, `profile`, `search`, `generationList`).
  - `sockets/` — client socket helpers.
  - `api/` — server route handlers (e.g., `profile/route.ts`, `search/route.ts`).
- `server.ts` — Custom Node server used to attach `socket.io`.
- `store.ts` — `zustand` store for application state.
