# Music Naarm — Landing Page (Tailwind + Flowbite)

This repo is a zero-backend static site that compiles Tailwind (with the Flowbite plugin) in CI and deploys the built `/dist` folder to GitHub Pages.

## Quick start

1. **Use this as a template:** Create a new repo from this folder.
2. **Enable Pages:** Settings → Pages → Source: GitHub Actions.
3. **Commit to** **`main`:** CI builds Tailwind and deploys to Pages automatically.
4. **Edit content:** `src/index.html` and `tailwind.config.cjs`.
5. **Email capture:** Replace the form `action` with your Buttondown/MailerLite endpoint.

## Local dev

```Shell
npm i
npm run dev
# open another terminal and run a static server or just open dist/index.html
```
