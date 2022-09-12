const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);
  let oldHref = window.location.href;
  let storeOldHref;
  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        let urlChanged = false;
        if (oldHref !== window.location.href) {
           storeOldHref = oldHref;
          oldHref = window.location.href;
          urlChanged = true;
        }
        callbackFunction(mutation, urlChanged, storeOldHref);
    });
  });

  //configuration of the observer:

  const config = configObject || {
    attributes: false,
    childList: true,
    subtree: true
  };

  observer.observe(target, config);
};

export default observeDOM;
