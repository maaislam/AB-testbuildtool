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

export const addHashToUrl = (hash) => {
  //Get the current URL
  const currentUrl = window.location.href;

  //Remove any existing hash and append the new one
  const baseUrl = currentUrl.split('#')[0];
  const newUrl = `${baseUrl}#${hash}`;

  //Update the URL in the address bar
  window.history.pushState(
    {
      path: newUrl
    },
    '',
    newUrl
  );
};
