export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);
  let oldLineCount = document.querySelector('.basket-item');
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      let removedItem = false;
      if (oldLineCount !== document.querySelector('.basket-item')) {
        oldLineCount = document.querySelector('.basket-item');
        removedItem = true;
      }
      setTimeout(() => {
        callbackFunction(mutation, removedItem);
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

export const obsIntersection = (target, threshold, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    },
    {
      threshold
    }
  );
  if (!target) {
    return;
  }

  observer?.observe(target);
};
