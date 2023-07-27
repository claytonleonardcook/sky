import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess()],

  kit: {
    adapter: adapter(),
    alias: {
      '@atoms/*': './src/components/atoms/*',
      '@molecules/*': './src/components/molecules/*',
      '@organisms/*': './src/components/organisms/*',
    },
  },
};
