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

export const getMenuData = () => {
  const menuItems = document.querySelectorAll('.menu__panel > .menu__item');
  //console.log(menuItems);
  const menuData = [];
  menuItems.forEach((item) => {
    const itemElem = item.querySelector('a');
    const itemName = itemElem.innerText.trim().toLowerCase();
    const itemLink = itemElem.href;
    return menuData.push({
      name: itemName,
      link: itemLink
    });
  });
  return menuData;
};

export const getSizeOptions = () => {
  const sizes = [];
  const sizeList = document.querySelectorAll('label[for^="Filter-Size-"]');
  //console.log('🚀 ~ file: experiment.js:50 ~ getSizeOptions ~ sizes', sizes);
  sizeList.forEach((size) => {
    const sizeVal = size.querySelector('input').value;
    sizes.push(sizeVal);
  });
  return sizes;
};

export const resetSizeSelection = (ID) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const selectedSizes = urlParams.getAll('filter.v.option.size');
  document.querySelectorAll(`.${ID}__size`).forEach((item) => {
    item.querySelector('input').checked = false;
  });
  selectedSizes.forEach((size) => {
    const sizeElm = document.querySelector(`.${ID}__size > [value="${size}"]`);
    sizeElm.checked = true;
  });
};

export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
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
        callbackFunction(mutation, urlChanged);
      }, 1000);
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
