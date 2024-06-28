export const setCookie = ({ cookieName, cookieValue }) => {
  const expDate = new Date();
  expDate.setDate(expDate.getDate() + 7);
  document.cookie = `${cookieName}=${cookieValue};expires=${expDate.toUTCString()};path=/`;
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
