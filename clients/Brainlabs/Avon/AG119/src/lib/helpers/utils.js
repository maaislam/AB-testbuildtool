/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 10000) => {
  const POLLING_INTERVAL = 25;
  const startTime = Date.now();
  const interval = setInterval(() => {
    const allConditionsMet = conditions.every((condition) => {
      if (typeof condition === 'function') {
        return condition();
      }
      return !!document.querySelector(condition);
    });
    if (allConditionsMet) {
      clearInterval(interval);
      callback();
    } else if (Date.now() - startTime >= maxTime) {
      clearInterval(interval);
      console.error('Polling exceeded maximum time limit');
    }
  }, POLLING_INTERVAL);
};
export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  if (!target) return;
  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
    characterDataOldValue: true
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      //console.log(mutation);
      observer.disconnect();

      callbackFunction(mutation);
      observer.observe(target, config);
    });
  });

  observer.observe(target, config);
};

export const overlayWithSearch = (elem) => {
  document.querySelector(elem).style.display = 'block';
};

export const overlayOpen = (overlayComOne, overlayComTwo) => {
  //eslint-disable-next-line no-param-reassign
  if (overlayComOne) overlayComOne.style.display = 'block';
  //eslint-disable-next-line no-param-reassign
  if (overlayComTwo) overlayComTwo.style.display = 'block';
};

export const overlayClose = (overlayComOne, overlayComTwo) => {
  //eslint-disable-next-line no-param-reassign
  if (overlayComOne) overlayComOne.style.display = 'none';
  //eslint-disable-next-line no-param-reassign
  if (overlayComTwo) overlayComTwo.style.display = 'none';
};
export const excludeOverlayWithSearch = (ID) => {
  if (document.querySelector(`#LogoBar ~ #SearchBar #SearchInput .${ID}__container`)) {
    document.querySelector(`#LogoBar ~ #SearchBar #SearchInput .${ID}__container`).style.display =
      'none';
  }

  if (document.querySelector(`body #LogoSearchBagBar #SearchBar.${ID}__widthChange`)) {
    document
      .querySelector('body #LogoSearchBagBar #SearchBar')
      .classList.remove(`${ID}__widthChange`);
  }

  if (document.querySelector(`body #LogoSearchBagBar #SearchInput .${ID}__container`)) {
    document.querySelector(`body #LogoSearchBagBar #SearchInput .${ID}__container`).style.display =
      'none';
  }
};
