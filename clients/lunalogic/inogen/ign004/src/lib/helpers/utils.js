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

export const addToCart = async (quantity, productId) => {
  const formData = new FormData();
  formData.append('product_id', productId);
  formData.append('quantity', quantity);

  try {
    const response = await fetch('/?wc-ajax=add_to_cart', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    //Extract and parse the HTML fragment
    const html = result.fragments?.['div.widget_shopping_cart_content'];
    if (!html) throw new Error('Cart fragment not found');

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc;
  } catch (err) {
    console.error('Error adding to cart:', err);
  }
};

export const fetchCartDocument = async () => {
  try {
    const response = await fetch('/cart');

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    return doc;
  } catch (error) {
    console.error('Failed to fetch cart page:', error);
    return null;
  }
};

export const extractCartTotals = (doc) => {
  console.log('🚀 ~ extractCartTotals ~ doc:', doc);
  const subtotal =
    doc
      .querySelector('.woocommerce-mini-cart__total .woocommerce-Price-amount')
      ?.textContent.trim() || null;
  const shipping = doc.querySelector('.cart-totals-free-shipping')?.textContent.trim() || null;
  const salesTax =
    doc
      .querySelector('.tax-rate-us-ca-estimated-sales-tax-1 .woocommerce-Price-amount')
      ?.textContent.trim() || null;
  const orderTotal =
    doc.querySelector('.order-total .woocommerce-Price-amount')?.textContent.trim() || null;

  return {
    subtotal,
    shipping,
    estimatedSalesTax: salesTax,
    orderTotal
  };
};

export const getVariationSelections = (formSelector = '.variations_form') => {
  const form = document.querySelector(formSelector);
  if (!form) return [];

  return Array.from(form.querySelectorAll('.variation')).map((variation) => {
    const label = variation.querySelector('label')?.textContent.trim();
    const select = variation.querySelector('select');
    const selectedOption = select?.selectedOptions[0]?.textContent.trim();

    return {
      label,
      value: selectedOption
    };
  });
};
