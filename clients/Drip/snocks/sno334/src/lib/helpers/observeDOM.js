const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
      callbackFunction(mutation);
    });
  });

  // configuration of the observer:

  const config = configObject || {
    attributes: false,
    childList: true,
    characterData: false,
    subtree: true,
  };

  observer.observe(target, config);
};

export default observeDOM;
