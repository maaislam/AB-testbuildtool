export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);
  let oldHref = window.location.href;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      setTimeout(() => {
        let urlChanged = false;
        if (oldHref !== window.location.href) {
          oldHref = window.location.href;
          urlChanged = true;
        }
        callbackFunction(mutation, urlChanged);
      }, 500);
    });
  });

  //configuration of the observer:

  const config = configObject || {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true,
    childList: true,
    subtree: true
  };

  observer.observe(target, config);
};
