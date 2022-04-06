import { wrapPromise } from './wrapPromise';

export function fetchProfileData() {
  let userPromise = fetchUser();
  let textPromise = fetchText();
  return { user: wrapPromise(userPromise), text: wrapPromise(textPromise) };
}

function fetchUser(): Promise<{ name: string }> {
  console.log('fetch user...');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fetched user');
      resolve({
        name: 'im zaraky97',
      });
    }, 100000);
  });
}

function fetchText(): Promise<any> {
  const res = fetch(
    'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'
  );
  return res;
}
