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

const collectProductInfo = (allItemsArray, doc, item) => {
  const productSectionDetails = doc.querySelector('.product-section.details');
  const productFinishElement = doc.querySelector('#attr_finish_select');
  console.log(productSectionDetails);
  const productFinishText = productFinishElement ? productFinishElement.textContent : '';

  const productSurfaceElement = doc.querySelector('#attr_solid_wood_surface');
  const productSurfaceText = productSurfaceElement ? productSurfaceElement.textContent : '';

  allItemsArray.push({
    url: item.url,
    element: item.element,
    plankThikness: item.plankThikness,
    plankWidth: item.plankWidth,
    productFinishText,
    productSurfaceText
  });
};

export const parseHTML = async (urls) => {
  const allItemsArray = [];

  const promises = urls.map(({ url }) =>
    fetch(url).catch((error) => {
      console.error(`Error fetching ${url}: ${error.message}`);
      return Promise.resolve(null);
    })
  );

  const responses = await Promise.all(promises);
  //eslint-disable-next-line no-restricted-syntax
  for (const [index, response] of responses.entries()) {
    if (response) {
      //eslint-disable-next-line no-await-in-loop
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      console.log('doc', doc);
      collectProductInfo(allItemsArray, doc, urls[index]);
    }
  }

  return allItemsArray;
};
