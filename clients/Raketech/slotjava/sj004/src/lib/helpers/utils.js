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
<<<<<<< HEAD


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

export const poller = (conditions, callback, timeout = 10000) => {
  //Validation of input parameters
  if (!Array.isArray(conditions)) {
    throw new TypeError('The first parameter must be an array');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('The second parameter must be a function');
  }

  if (typeof timeout !== 'number' && timeout >= 1000) {
    throw new TypeError('The third parameter must be a number an greater than 1000');
  }
  /**
   * getElement() function gets the element based on the condition.
   *
   * @param {string} condition - The condition to be checked.
   * It is a CSS selector that returns promise.
   *
   * @returns {Promise} - A Promise that resolves to the element
   *  if the condition is true or rejects with an error if the timeout is reached.
   */
  const getElement = (condition) => {
    const el = document.querySelector(condition);
    if (el) {
      return Promise.resolve(el);
    }
    return new Promise((resolve, reject) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          if (document.querySelector(condition)) {
            observer.disconnect();
            resolve(document.querySelector(condition));
          }
        });
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Timeout while waiting for ${condition}`));
      }, timeout);
    });
  };
  //Loop through the conditions and create an array of Promises
  const promises = conditions.map((condition) => {
    if (typeof condition === 'function') {
      /**
       * For function conditions, use setInterval() to poll until
       * the condition is true or timeout is reached
       */
      return new Promise((resolve, reject) => {
        let intervalId;
        let timeoutId;
        const CHECK_INTERVAL = 100;
        const clearIds = () => {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        };
        intervalId = setInterval(() => {
          if (condition()) {
            clearIds();
            resolve();
          }
        }, CHECK_INTERVAL);
        timeoutId = setTimeout(() => {
          clearIds();
          reject(new Error(`Timeout while waiting for ${condition}`));
        }, timeout);
      });
    }
    //For CSS selector conditions, use getElement() function to get the element
    return getElement(condition).catch((error) => {
      throw new Error(error);
    });
  });
  //Use Promise.all() to wait for all conditions to be true before executing the callback
  try {
    Promise.all(promises).then(() => {
      //eslint-disable-next-line no-console
      console.log('All conditions are true');
      callback();
    });
  } catch (error) {
    //eslint-disable-next-line no-console
    console.error(error);
  }
};
=======
export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  if (!target) return;
  //configuration of the observer:

  const config = configObject || {
    childList: false,
    subtree: false,
    attributes: true
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      //console.log(mutation);
      observer.disconnect();
      setTimeout(() => {
        callbackFunction(mutation);
        observer.observe(target, config);
      }, 1500);
    });
  });

  observer.observe(target, config);
};
export const getOperatorFromUrl = (url) => {
  let cleanString;
  cleanString = url;
  if (cleanString.charAt(cleanString.length - 1) === '/') {
    cleanString = cleanString.slice(0, -1);
  }
  //Get the text after the last slash
  const text = cleanString.split('/').pop();

  //If the text contains a question mark, remove any characters after it
  const questionMarkIndex = text.indexOf('?');
  if (questionMarkIndex !== -1) {
    return text.substring(0, questionMarkIndex);
  }

  return text;
};

export const extractNumberFromString = (str) => {
  const matches = str.match(/\d+/);
  return matches ? parseInt(matches[0]) : null;
};
>>>>>>> upstream/main
