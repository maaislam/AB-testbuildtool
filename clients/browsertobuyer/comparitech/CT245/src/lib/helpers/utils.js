import { imgUrl } from "../data/data";

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

export const getImgSrc = (name) => {
  const nameLower = name.toLowerCase();

  const match = Object.entries(imgUrl).find(([key]) =>
    nameLower.includes(key.toLowerCase()) || key.toLowerCase().includes(nameLower));

  return match ? match[1] : 'https://cdn-3.convertexperiments.com/uf/10021806/1002820/default.png';
};

export const hideParagraphsBeforeList = (id, containerSelector) => {
  const entryContent = document.querySelector(containerSelector);
  if (!entryContent) return;

  const childrenElem = Array.from(entryContent.children);

  for (const el of childrenElem) {
    if (el.tagName === 'OL') break;
    if (el.tagName === 'P') el.classList.add(`${id}__hide`);
  }
};
