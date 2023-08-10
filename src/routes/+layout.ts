// import { error, redirect } from '@sveltejs/kit';

import { browser } from '$app/environment';

export function load() {
  let jwt: string | null = null;
  if (browser) {
    jwt = localStorage.getItem('jwt');
  }

  return {
    jwt,
  };
}

export const ssr = false;
