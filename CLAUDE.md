# Project India — Web

A static React website documenting ideas around improving local governance in India through ward-level citizen participation.

## Stack

- **React 19** (via Vite)
- **Tailwind CSS v4** (using `@tailwindcss/vite` plugin, no `tailwind.config.js`)
- **React Router v7** (client-side routing)
- **No backend, no API, no database** — everything is static

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## Project Structure

```
src/
  config.js              # Site-wide constants (site name, URLs, nav links)
  main.jsx               # React entry point
  App.jsx                # Router setup — add new routes here
  index.css              # Tailwind import + custom variants

  components/            # Shared, reusable UI components
    Layout.jsx           # App shell (Header + Outlet + Footer)
    Header.jsx           # Site header with nav (reads from config.js)
    Footer.jsx           # Site footer
    ThemeToggle.jsx      # Dark/light mode toggle (persists to localStorage)
    PageContainer.jsx    # Standard page wrapper (max-width, padding)
    PageHeader.jsx       # Page title + optional subtitle
    CalloutSection.jsx   # Highlighted box for CTAs or announcements
    Button.jsx           # Primary/secondary button and link variants
    MarkdownRenderer.jsx # Renders simple markdown strings as React elements

  pages/                 # One file per route — each page is a top-level view
    Home.jsx
    Blog.jsx
    BlogDetail.jsx
    Join.jsx

  data/                  # Static content (blog posts, etc.)
    posts.js
```

## Conventions

### Adding a new page

1. Create `src/pages/YourPage.jsx`
2. Use `PageContainer` as the outer wrapper — it handles max-width and padding
3. Use `PageHeader` if the page has a title + subtitle pattern
4. Add a route in `src/App.jsx`
5. Add a nav entry in `src/config.js` → `NAV_LINKS` (if it should appear in the header)

### Adding a new shared component

Place it in `src/components/`. A shared component should:
- Accept `children` or clear props — no internal data fetching
- Include both light and `dark:` Tailwind variants
- Be stateless where possible

### Dark mode

- Class-based: toggling the `dark` class on `<html>`
- Configured via `@custom-variant dark` in `index.css`
- Every visible component must include `dark:` variants for colors, borders, and backgrounds
- Flash prevention: inline `<script>` in `index.html` reads localStorage before paint

### Styling rules

- Use Tailwind utility classes only — no custom CSS unless absolutely necessary
- Color palette: **gray scale only** (gray-50 through gray-950, white, black)
- Do not introduce accent colors or gradients
- Typography: use Tailwind defaults, keep it simple
- All pages use `max-w-3xl` centered layout (handled by `PageContainer`)

### Content / Data

- Blog posts live in `src/data/posts.js` as an array of objects
- Each post has: `slug`, `title`, `description`, `image`, `date`, `content`
- `content` is a simple markdown string (supports `##`, `-` lists, numbered lists, paragraphs)
- To add a new post, append to the array — no other changes needed

### External links

- The Reddit community URL is stored in `src/config.js` as `REDDIT_URL` — never hardcode it
- Use the `Button` component for CTA links (handles `target="_blank"` automatically for external hrefs)

### What NOT to do

- Do not add a backend, API calls, or authentication
- Do not add complex state management (no Redux, Zustand, etc.)
- Do not over-abstract — if a pattern appears only once, inline it
- Do not add colors beyond the gray palette without explicit approval
- Do not create wrapper components that only pass through props without adding value
