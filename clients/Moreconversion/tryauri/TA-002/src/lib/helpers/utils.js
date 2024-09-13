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

export const findMostExpensiveProduct = (products) => {
  //Check if the array is empty
  if (products.length === 0) {
    return null;
  }

  //Use the reduce function to find the product with the highest price
  const mostExpensive = products.reduce((max, product) => {
    return product.price > max.price ? product : max;
  });

  return mostExpensive;
};

export const extractNumbers = (str) => {
  //Replace any non-numeric characters except '.' or ','.
  let cleaned = str.replace(/[^0-9.,]+/g, '');

  //Handle European style numbers (e.g., "123,45" to "123.45")
  if (cleaned.includes(',')) {
    //Check if it contains both ',' and '.' (e.g., "1,234.56")
    if (cleaned.includes('.') && cleaned.indexOf(',') < cleaned.indexOf('.')) {
      //Remove thousand separators (',')
      cleaned = cleaned.replace(/,/g, '');
    } else {
      //Convert ',' to '.' for decimal numbers (European format)
      cleaned = cleaned.replace(/,/g, '.');
    }
  }

  //Parse the cleaned string to a float number
  return parseFloat(cleaned);
};
