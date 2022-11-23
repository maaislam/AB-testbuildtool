const observeDOM = (targetSelectorString, callbackFunction, expId, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);
  let oldHref = window.location.href;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      let urlChanged = false;
      if (oldHref !== window.location.href) {
        oldHref = window.location.href;
        urlChanged = true;
      }
      const { addedNodes, removedNodes } = mutation;
      const modifiedNodes = [...addedNodes, ...removedNodes];
      if (!modifiedNodes.some((node) => node.nodeType === 1 && node.matches(`[class^=${expId}]`))) {
        setTimeout(callbackFunction(mutation, urlChanged), 1000);
      }
    });
  });

  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true
  };

  observer.observe(target, config);
};

export default observeDOM;
