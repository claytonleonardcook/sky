import { sveltekit } from '@sveltejs/kit/vite';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import mkcert from 'vite-plugin-mkcert';
import Icons from 'unplugin-icons/vite';
import { qrcode } from 'vite-plugin-qrcode';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    // basicSsl(),
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
