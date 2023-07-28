import { BskyAgent } from '@atproto/api';
import { writable, type Writable } from 'svelte/store';

export const blueskyAgentStore = writable(
  new BskyAgent({
    service: 'https://bsky.social/xrpc/',
  })
);

export const blueskyJsonWebTokenStore: Writable<string | null> = writable(
  typeof localStorage !== 'undefined' ? localStorage.getItem('jwt') : null
);

blueskyJsonWebTokenStore.subscribe((jwt) => {
  if (typeof localStorage === 'undefined') return;
  jwt && localStorage.setItem('jwt', jwt);
});
