const waitForConditions = (conditions, callback, onError, timeout = 10000, pollFreq = 100) => {
  if (!Array.isArray(conditions)) {
    throw new TypeError('The first parameter must be an array');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('The second parameter must be a function');
  }

  if (typeof timeout !== 'number' || timeout < 1000) {
    throw new TypeError('The third parameter must be a number greater than or equal to 1000');
  }

  const promises = conditions.map((condition) => {
    if (typeof condition === 'function') {
      return new Promise((resolve, reject) => {
        let intervalId;
        let timeoutId;

        const clearIds = () => {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        };
        intervalId = setInterval(() => {
          if (condition()) {
            clearIds();
            resolve();
          }
        }, pollFreq);
        timeoutId = setTimeout(() => {
          clearIds();
          console.log(`Timeout while waiting for ${condition}`);
          reject();
        }, timeout);
      });
    }
    return getElement(condition).catch((error) => {
      console.log(`Failed to find elements matching selector '${condition}': ${error}`);
      return null;
    });
  });

  Promise.all(promises)
    .then((fulfilledPromises) => {
      const elements = fulfilledPromises.reduce((acc, curr) => {
        if (curr && curr !== null) {
          acc[curr.selector] = curr.elements;
        }
        return acc;
      }, {});

      if (Object.keys(elements).length > 0) {
        callback(elements);
      } else {
        console.log('No elements found for any condition');
      }
    })
    .catch((error) => {
      if (onError && typeof onError === 'function') {
        onError(error);
      } else {
        console.log(error);
      }
    });
};
const getElement = (cssSelector, outTimer = 10000, onError = null) => {
  const els = document.querySelectorAll(cssSelector);
  if (els.length > 0) {
    return Promise.resolve({
      selector: cssSelector,
      elements: els
    });
  }
  return new Promise((resolve, reject) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        const elems = document.querySelectorAll(cssSelector);
        if (elems.length > 0) {
          observer.disconnect();
          resolve({
            selector: cssSelector,
            elements: elems
          });
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    setTimeout(() => {
      observer.disconnect();
      const errorMessage = `Timeout while waiting for ${cssSelector}`;
      if (onError && typeof onError === 'function') {
        onError(errorMessage);
      } else {
        console.log(errorMessage);
      }
      console.log(`Timeout while waiting for ${cssSelector}`);
      reject();
    }, outTimer);
  });
};
