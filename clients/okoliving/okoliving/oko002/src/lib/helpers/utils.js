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

/**
 * poller() checks for specified conditions until they are true or the timeout limit is reached.
 *
 * @param {Array} conditions - An array of conditions that need to be checked.
 * Each condition can be either a CSS selector or a function that returns a Boolean value.
 *
 * @param {Function} callback - A function to be executed when all conditions are true.
 *
 * @param {number} [timeout=10000] - An optional timeout value (in milliseconds)
 * after which the function will throw an error.
 * Default value is 10000ms (10 seconds).
 *
 * @throws {TypeError} If the first parameter is not an array,
 * the second parameter is not a function,
 * or the third parameter is not a number or is less than 1000ms.
 *
 */

export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true
  };
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
        observer.disconnect();
        callbackFunction(mutation, urlChanged);
        observer.observe(target, config);
      }, 1000);
    });
  });

  observer.observe(target, config);
};
