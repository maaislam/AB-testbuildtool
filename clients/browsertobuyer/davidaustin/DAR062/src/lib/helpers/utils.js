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

export const loadSwiperCDN = (swiperJs, swiperCss, callback) => {
  //Create a link element for the Swiper CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = swiperCss;

  //Append the CSS link to the head
  document.head.appendChild(link);

  //Create a script element for the Swiper JS
  const script = document.createElement('script');
  script.src = swiperJs;
  script.async = true;

  //Run the callback function once the script is loaded
  script.onload = function () {
    console.log('Swiper.js loaded');
    if (callback) {
      callback();
    }
  };

  //Append the script to the head
  document.head.appendChild(script);
};

export const trackGA4Event = (category, action, label) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'gaCustomEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
  console.log('event tracked', category, action, label);
};
