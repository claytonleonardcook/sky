import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import Icons from 'unplugin-icons/vite';
import { qrcode } from 'vite-plugin-qrcode';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    basicSsl(),
    sveltekit(),
    Icons({
      compiler: 'svelte',
    }),
    qrcode(),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
};

export default config;
