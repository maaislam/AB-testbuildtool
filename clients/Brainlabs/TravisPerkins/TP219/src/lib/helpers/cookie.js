export const setCookie = (cName, cValue, expDays) => {
  var date = new Date();

  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

  var expires = 'expires=' + date.toUTCString();

  document.cookie = cName + '=' + cValue + '; ' + expires;
};

export const getCookie = (name) => {
  var value = '; ' + document.cookie;

  var parts = value.split(`; ${name}=`);

  if (parts.length == 2) {
    return parts.pop().split(';').shift();
  }
};
