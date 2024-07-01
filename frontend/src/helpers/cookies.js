export const setCookie = ({ cookieName, cookieValue }) => {
  document.cookie = `${cookieName}=${cookieValue};expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/`;
};

/**
 *
 * @param {cookieName}
 * @returns
 * null: if cookieName/cookie doesnt exists
 * value: if the cookieName in cookie exists
 */
export const getCookie = ({ cookieName }) => {
  const expCookie = document.cookie;
  if (!expCookie) return null;

  const cookiePairs = expCookie.split(';');

  for (const pair of cookiePairs) {
    const [key, value] = pair.trim().split('=');
    if (key === cookieName) {
      return value;
    }
  }
  return null;
};
