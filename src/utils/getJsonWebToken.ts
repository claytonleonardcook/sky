import { browser } from '$app/environment';
import { goto } from '$app/navigation';

const getJsonWebToken = async (): Promise<string | null> => {
  let jwt: string | null = null;
  if (browser) {
    jwt = localStorage.getItem('jwt');
  }

  if (!jwt) goto('/login');

  return jwt;
};

export default getJsonWebToken;
