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
      console.log('Polling exceeded maximum time limit');
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

export const obsIntersection = (target, threshold, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry, observer);
      });
    },
    {
      threshold,
      rootMargin: '0px 0px 0px 0px'
    }
  );
  if (!target) {
    return;
  }

  observer?.observe(target);
};

export const isElementInView = (element) => {
  const rect = element.getBoundingClientRect();
  //is element hidden
  if (rect.top === 0 && rect.left === 0 && rect.bottom === 0 && rect.right === 0) {
    return false;
  }
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const wrapInner = (parentSelector, wrapperAttributes = {}) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;

  const wrapper = document.createElement('div');
  Object.entries(wrapperAttributes).forEach(([key, value]) => wrapper.setAttribute(key, value));

  Array.from(parent.childNodes).forEach((child) => wrapper.appendChild(child));

  parent.appendChild(wrapper);
};
