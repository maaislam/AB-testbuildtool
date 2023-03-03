export const getNextSibling = (elem, selector) => {
  //Get the next sibling element
  let sibling = elem.nextElementSibling;

  //If there's no selector, return the first sibling
  if (!selector) return sibling;

  //If the sibling matches our selector, use it
  //If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
  return sibling;
};

export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);
  let oldHref = window.location.href;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      let urlChanged = false;
      if (oldHref !== window.location.href) {
        oldHref = window.location.href;
        urlChanged = true;
      }

      callbackFunction(urlChanged, mutation);
    });
  });

  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true
  };

  observer.observe(target, config);
};

export const setCookie = (cName, cValue, expDays = 90) => {
  const date = new Date();

  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;

  document.cookie = `${cName}=${cValue}; ${expires}`;
};
