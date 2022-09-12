const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);
  let oldHref = window.location.href;
  const observer = new MutationObserver((mutations) => {
    setTimeout(() => {
      mutations.forEach((mutation) => {
        let urlChanged = false;
        if (oldHref !== window.location.href) {
          oldHref = window.location.href;
          urlChanged = true;
        }
        callbackFunction(mutation, urlChanged);
      }, 300);
    });
  });

  //configuration of the observer:

  const config = configObject || {
    attributes: true,
    childList: true,
    subtree: true
  };

  observer.observe(target, config);
};

export default observeDOM;
