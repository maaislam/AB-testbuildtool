const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);
  let oldHref = window.location.href;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      let urlChanged = false;
      if (oldHref !== window.location.href) {
        oldHref = window.location.href;
        urlChanged = true;
      }
      setTimeout(() => {
        callbackFunction(mutation, urlChanged);
      }, 1500);
    });
  });

  //configuration of the observer:

  const config = configObject || {
    childList: true,
    characterData: true,
    characterDataOldValue: true,
    attributes: true,
    subtree: true
  };

  observer.observe(target, config);
};

export default observeDOM;
