// @ts-check

/** @type {import('astro').AstroUserConfig} */
export default {
  renderers: ['@astrojs/renderer-svelte'],
  buildOptions: {
    site: 'https://components.mykal.codes',
    sitemap: true,
  },
  vite: {
    plugins: [],
  },
};
