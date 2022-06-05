const addScript = (jsUrl, cssUrl) => {
  const script = document.createElement('script');
  //const link = document.createElement('link');

  script.type = 'text/javascript';
  script.src = `${jsUrl}`;
  //   link.type = 'text/css';
  //   link.rel = 'stylesheet';
  //   link.href = `${cssUrl}`;

  document.querySelector('head').append(script);
  //document.querySelector('head').append(link);
};

export default addScript;
