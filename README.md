# Nuxt 3 Minimal Starter
# GitHub Pages
```bash
pnpm i gh-pages -D
# 1. Set .env variable to repo name. i.e. replace /nuxt3-generate/ with your repo name
NUXT_APP_BASE_URL=/nuxt3-generate/
# 2. .nojekyll in public. or config gh-pages to generate the file before pushing
# 3. SSR
  ssr:false,
```


Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

https://github.com/hychan48/nuxt3-generate
.nojekyll
works with .nojekyll
github pages ignores _files?


## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
