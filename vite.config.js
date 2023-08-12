import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';
import Icons from 'unplugin-icons/vite';
import { qrcode } from 'vite-plugin-qrcode';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    mkcert(),
    sveltekit(),
    Icons({
      compiler: 'svelte',
    }),
    qrcode(),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@styles/settings' as *;
        `,
      },
    },
  },
};

export default config;
