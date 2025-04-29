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

export const addToSampleCart = (prodId, formKey, itemValue, action) => {
  return new Promise((resolve, reject) => {
    window.require(['jquery'], ($) => {
      $.ajax({
        url: action,
        type: 'POST',
        data: {
          product: prodId,
          is_sample: '',
          item: itemValue,
          form_key: formKey
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

export const fetchProductDetails = async (link) => {
  const linkModify = link.includes('/') ? link.split('/')[1] : link;
  try {
    const response = await fetch(`https://luxuryflooring.co.uk/${linkModify}.html`);
    const data = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    const formElement = doc.querySelector('#sample_addtocart_form');

    const formAction = formElement.action;
    const productElem = formElement.querySelector('input[name="product"]');
    const productValue = productElem ? productElem.value : '';
    const itemElement = formElement.querySelector('input[name="item"]');
    const itemValue = itemElement ? itemElement.value : '';
    const formKey = formElement.querySelector('input[name="form_key"]');
    const formKeyValue = formKey ? formKey.value : '';

    return {
      url: link,
      productValue,
      itemValue,
      formAction,
      formKeyValue
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return [];
  }
};

export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(^|;\\s?)${name}=([^;]*)`));
  return match && match[2] ? unescape(match[2]) : undefined;
};
