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

export const VariantOptionsAddToCart = (
  prodId,
  formKey,
  action,
  quantity,
  attributeId,
  attributeId2,
  attributeValue,
  attributeValue2,
  selected_configurable_option
) => {
  return new Promise((resolve, reject) => {
    window.require(['jquery'], ($) => {
      const data = {
        product: prodId,
        item: prodId,
        form_key: formKey,
        qty: quantity,
        [`super_attribute[${attributeId}]`]: attributeValue,
        selected_configurable_option
      };
      if (attributeId2 && attributeValue2) {
        data[`super_attribute[${attributeId2}]`] = attributeValue2;
      }
      $.ajax({
        url: action,
        type: 'POST',
        data,
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

        return {
          doc,
          url
        };
      })
      .catch((error) => ({
        url,
        error: error.message
      }))
  );

  return Promise.all(fetchPromises); //Return the promise
};

export const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

export const calculateTotalPrice = (unitPriceStr, quantity) => {
  const unitPrice =
    typeof unitPriceStr === 'string'
      ? parseFloat(unitPriceStr.replace(/[^\d.]/g, ''))
      : parseFloat(unitPriceStr);

  const qty = parseInt(quantity, 10);

  if (isNaN(unitPrice) || isNaN(qty) || qty <= 0) return '£0.00';

  const total = unitPrice * qty;

  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format(total);
};

export const getCommonElements = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp(`(^|;\\s?)${name}=([^;]*)`));
  return match && match[2] ? unescape(match[2]) : undefined;
};

export const getSelectedProductIds = (mainWrapper) => {
  const getProductsFromSelect = (select) => {
    const selectedOption = select.options[select.selectedIndex];
    const dataProducts = selectedOption.getAttribute('data-products');
    if (!dataProducts) return [];

    try {
      const parsed = JSON.parse(dataProducts);
      return parsed.products || [];
    } catch (e) {
      console.warn('Invalid JSON in data-products:', e);
      return [];
    }
  };
  const selects = mainWrapper.querySelectorAll('select');

  if (selects.length === 2) {
    const [firstSelect, secondSelect] = selects;
    const firstData = getProductsFromSelect(firstSelect);
    const secondData = getProductsFromSelect(secondSelect);
    return [firstData, secondData];
  }
  if (selects.length === 1) {
    return getProductsFromSelect(selects[0]);
  }
  return [];
};

export const formatPriceGBP = (price) => {
  const numericPrice =
    typeof price === 'string' ? parseFloat(price.replace(/[^\d.]/g, '')) : parseFloat(price);

  if (isNaN(numericPrice)) return '£0.00';

  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format(numericPrice);
};

export const checkCartData = (ID) => {
  pollerLite(
    [
      () => window.localStorage.getItem('mage-cache-storage'),
      () => JSON.parse(window.localStorage.getItem('mage-cache-storage')),
      () => JSON.parse(window.localStorage.getItem('mage-cache-storage')).cart
    ],
    () => {
      const storageData = window.localStorage.getItem('mage-cache-storage');
      const { cart } = JSON.parse(storageData);
      const cartItems = cart.items
        .filter((item) => item.product_id && item.product_type !== 'configurable')
        .map((item) => item.product_id);

      if (cartItems.length > 0) {
        const productCards = document.querySelectorAll(`.${ID}__productCard`);
        productCards.forEach((card) => {
          const { sku } = card.dataset;
          const isExistingProduct = cartItems.find((item) => sku === item);
          if (isExistingProduct) {
            const actionWrapper = card.querySelector(`.${ID}__actionWrapper`);
            const addingBasket = card.querySelector(`.${ID}__addingToBasket`);
            const addedBasket = card.querySelector(`.${ID}__addedToBasket`);

            if (actionWrapper) {
              actionWrapper.removeAttribute('disabled');
              actionWrapper.classList.add(`${ID}__hide`);
            }

            if (addingBasket) {
              addingBasket.classList.add(`${ID}__hide`);
            }

            if (addedBasket) {
              addedBasket.classList.remove(`${ID}__hide`);
            }
          }
        });
      }
    }
  );
};
