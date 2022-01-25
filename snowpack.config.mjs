/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? {tsc: 'yarn pnpify tsc'} : {}),
      },
    ],
  ],
  alias: {
    '@': './src'
  },
  optimize: {
    // bundle: true,
    treeshake: true,
    minify: true,
    sourcemap: 'external'
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseURL: 'https://www.sprkweb.dev/IKnowALotAboutYou/'
  },
};
