export const setCookie = (cName, cValue, expDays) => {
  const date = new Date();

  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;

  document.cookie = `${cName}=${cValue}; ${expires}`;
};

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return null;
};
