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

export const setTextCopy = (VARIATION) => {
  const copyText = VARIATION === '1' ? 'EVERYTHING10' : 'ALLRUGS10';
  navigator.clipboard.writeText(copyText);
};

export const trackGAEvent = (eventCategory, eventAction, eventLabel) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'gaCustomEvent',
      eventCategory,
      eventAction,
      eventLabel
    });

    console.log('event tracked', eventCategory, eventAction, eventLabel);
  }
};

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  return null;
};

export const setCookie = (cName, cValue) => {
  const path = 'path=/';
  document.cookie = `${cName}=${cValue}; ${path}`;
};
