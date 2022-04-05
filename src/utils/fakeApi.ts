import { wrapPromise } from './wrapPromise';

export function fetchProfileData() {
  let userPromise = fetchUser();
  return wrapPromise(userPromise);
}

function fetchUser(): Promise<{ name: string }> {
  console.log('fetch user...');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fetched user');
      resolve({
        name: 'im zaraky97',
      });
    }, 1000);
  });
}
