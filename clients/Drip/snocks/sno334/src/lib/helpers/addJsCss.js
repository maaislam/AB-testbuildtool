export const addScript = (jsUrl) => {
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.src = `${jsUrl}`;

  const scriptExists = document.querySelector(`[src="${jsUrl}]`);
  !scriptExists && document.querySelector('head').append(script);
};

export const addStyles = (CDNLink) => {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = CDNLink;
  document.querySelector('head').append(link);
};
