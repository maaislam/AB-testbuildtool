/*eslint-disable consistent-return */
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};
export const setCookie = (cName, cValue, expDays) => {
  const date = new Date();

  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

  const expires = `expires= ${date.toUTCString()}`;

  //eslint-disable-next-line prefer-template
  document.cookie = cName + '=' + cValue + '; ' + expires;
};

export const deviceType = window.innerWidth > 767 ? 'desktop' : 'mobile';

export const isPLP = () => {
  return (
    (window.location.pathname.indexOf('/search/') !== -1 ||
      window.location.pathname.indexOf('/c/') !== -1) &&
    !!document.querySelector('[data-test-id="plp-wrapper"]')
  );
};

export const isLoggedIn = !!getCookie('access_token');

export const getMobileOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  //Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'android';
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }

  return 'unknown';
};

export const removeAppBanner = (id) =>
  document.querySelectorAll(`.${id}__appbanner-wrapper`).forEach((item) => item?.remove());

export const testRemoveConditions = (ID) =>
  (window.location.pathname !== '/' && !isPLP()) ||
  !isLoggedIn ||
  parseInt(getCookie(`${ID}__viewcount`)) >= 3 ||
  sessionStorage.getItem(`${ID}__uservisitstore`) ||
  sessionStorage.getItem(`${ID}__userclosed`) ||
  deviceType !== 'mobile';
