# Shopify Duck Tape
A quick, messy, set of node scripts for Shopify development in this, the year of our lord two thousand and twenty one. This is really just the simplest wrapper around Themekit I could implement on the job.

Features:
- esbuild for snappy bundling.
- Postcss for styles (especially since Shopify is [deprecating sass](https://www.shopify.com/partners/blog/deprecating-sass)).
- Simple watch scripts to rebuild on changes.

## Before You Get Started
1. Have [Themekit](https://shopify.dev/tools/theme-kit/getting-started) and [Node](https://nodejs.dev/) installed.
2. Setup your Shopify store and generate your [API credentials](https://shopify.dev/tools/theme-kit/getting-started#step-2-generate-api-credentials).

## Getting Started
1. Download the repo.
2. Our friend `npm install`.
3. `cd` into the `src` folder.
4. Using Themekit start a [new theme](https://shopify.dev/tools/theme-kit/getting-started#step-5-create-a-new-theme) or [get an existing one](https://shopify.dev/tools/theme-kit/getting-started#step-3-connect-to-an-existing-theme).
5. `cd ../` back out to the root and run `npm run dev` to start developing your theme.
6. You're good to go ✨

Remember to update your script tag and stylesheet link to look for your built files! Named `/index.css` and `/index.js` by default.

*Bonus step*: move your environment variables into a `variables` to excluded them from git. [See reference](https://shopify.dev/tools/theme-kit/configuration-reference#environment-variables).

## Commands 
```
npm run dev
```
Runs Themekit on watch inside `src`  exactly as described [here](https://shopify.dev/tools/theme-kit/command-reference#watch). It will also watch your scripts and CSS for changes, rebuilding on save and pushing these updates to your theme (not as fast as I'd like tbh).

```
npm run deploy
```
Builds CSS and JS then pushes everything inside `src` to Shopify using the [Themekit deploy command](https://shopify.dev/tools/theme-kit/command-reference#deploy). It runs with a `production` environment variable which you can use to conditionally apply postproccessing (eg. only minify CSS in production), see `postcss.config.js`.

## Structure 
- Configure [Postcss](https://postcss.org/) in `postcss.config.js`
- Configure [esbuild](https://esbuild.github.io/) in `esbuild.config.js`
- Edit your templates in `src`
- Write CSS in `src/styles`, this builds to `src/assets/index.css`
- Write JS in `src/scripts`, this builds to `src/assets/index.js`
