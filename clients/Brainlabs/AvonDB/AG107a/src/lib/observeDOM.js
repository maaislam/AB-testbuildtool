const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  const observer = new MutationObserver((mutations) => {
    setTimeout(() => {
      mutations.forEach((mutation) => {
        callbackFunction(mutation);
      }, 1000);
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
