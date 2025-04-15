/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 100000000) => {
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

export const clickUntilModalAppears = (
  buttonElement,
  modalSelector,
  interval = 500,
  timeout = 10000
) => {
  const start = Date.now();

  const loop = () => {
    const modalElem = document.querySelector(modalSelector);

    if (modalElem) {
      return;
    }

    const button = buttonElement;
    if (button) {
      button.click();
    } else {
      console.warn(`Button not found: ${button}`);
    }

    if (Date.now() - start < timeout) {
      setTimeout(loop, interval);
    } else {
      console.warn(`Timeout: Modal "${modalSelector}" not found within ${timeout}ms`);
    }
  };

  loop();
};

export const addToCart = (prodId, formKey, action, quantity) => {
  return new Promise((resolve, reject) => {
    window.require(['jquery'], ($) => {
      $.ajax({
        url: action,
        type: 'POST',
        data: {
          product: prodId,
          selected_configurable_option: '',
          related_product: '',
          item: prodId,
          form_key: formKey,
          qty: quantity
        },
        success(response) {
          resolve(response); //Resolve the promise with response
        },
        error(err) {
          console.error('Error adding product to cart', err);
          reject(err); //Reject the promise with error
        }
      });
    });
  });
};

export const fetchProductDetails = (urls) => {
  const fetchPromises = urls.map((url) =>
    fetch(url, {
      headers: {
        Accept: 'text/html'
      }
    })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.text();
      })
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        return doc;
      })
      .catch((error) => ({
        url,
        error: error.message
      })));

  return Promise.all(fetchPromises); //Return the promise
};

export const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
