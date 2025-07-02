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

export const fetchCartTotals = async () => {
  try {
    const res = await fetch('/cart/');
    const htmlText = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');

    const cartTotals = {
      subtotal: doc.querySelector('.cart-subtotal .amount')?.textContent.trim(),
      shipping: doc.querySelector('.cart-totals-free-shipping')?.textContent.trim(),
      estimatedSalesTax: doc.querySelector('.tax-rate .amount')?.textContent.trim(),
      orderTotal: doc.querySelector('.order-total .amount')?.textContent.trim()
    };
    console.log(cartTotals);
    return cartTotals;
  } catch (err) {
    console.error('Error fetching cart totals:', err);
    return null;
  }
};

export const extractCartTotals = (doc) => {
  const subtotal =
    doc
      .querySelector('.woocommerce-mini-cart__total .woocommerce-Price-amount')
      ?.textContent.trim() || null;
  const shipping =
    doc.querySelector('.cart-totals-free-shipping')?.textContent.trim() || 'Free Shipping';
  const salesTax = doc
    .querySelector('.tax-rate-us-ca-estimated-sales-tax-1 .woocommerce-Price-amount')
    ?.textContent.trim();
  const orderTotal =
    doc.querySelector('.order-total .woocommerce-Price-amount')?.textContent.trim() || '';

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

export const parseHTML = async (urls) => {
  const promises = urls.map((url) =>
    fetch(url.link).catch((error) => {
      console.error(`Error fetching ${url}: ${error.message}`);
      return Promise.resolve(null);
    })
  );
  const responses = await Promise.all(promises);
  const data = [];
  //eslint-disable-next-line no-restricted-syntax
  for (const [index, response] of responses.entries()) {
    if (response) {
      //eslint-disable-next-line no-await-in-loop
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      console.log(doc, 'doc');
      const productIdElement = doc.querySelector('input[name="add-to-cart"]');
      console.log(productIdElement, 'productIdElement');
      const productId = productIdElement ? productIdElement.value : '';
      data.push({
        link: urls[index].link,
        id: productId
      });
    }
  }

  return data;
};
