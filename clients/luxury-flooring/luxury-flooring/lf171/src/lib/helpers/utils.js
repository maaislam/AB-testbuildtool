/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
/*eslint-disable no-restricted-syntax */
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
    subtree: false,
    attributes: false,
    characterData: false,
    characterDataOldValue: false
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      observer.disconnect();

      callbackFunction(mutation);
      observer.observe(target, config);
    });
  });

  observer.observe(target, config);
};

export const formatPrice = (amount, code = 'en-GB', currency = 'GBP') =>
  new Intl.NumberFormat(code, {
    style: 'currency',
    currency
  }).format(amount);
