const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
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
      }, 1000);
    });
  });

  // configuration of the observer:

  const config = configObject || {
    attributes: true,
    childList: true,
    subtree: true
  };

  observer.observe(target, config);
};

export default observeDOM;
