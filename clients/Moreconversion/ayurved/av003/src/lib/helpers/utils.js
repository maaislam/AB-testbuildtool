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

export const fetchCartData = () => {
  const timestamp = Date.now(); //Dynamic cache-busting value
  const url = `/cart.js?_=${timestamp}`;

  return fetch(url, {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9'
    }
  }).then((response) => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  });
};

export const getCompareAtPrices = async (cartItems) => {
  const fetchProductData = async ({ id, url, quantity, final_line_price }) => {
    const cleanPath = (urlFragment) => urlFragment.split('?')[0].replace('-sca_clone_freegift', '');

    console.log(final_line_price, 'final_line_price');
    const fullUrl = `${cleanPath(url)}.js`;

    console.log('🚀 ~ fetchProductData ~ fullUrl:', fullUrl);
    try {
      const response = await fetch(fullUrl);
      const data = await response.json();
      console.log('🚀 ~ fetchProductData ~ data:', data);

      const { compare_at_price, price } = data;

      const wasPrice =
        compare_at_price > price
          ? compare_at_price
          : !compare_at_price && final_line_price === 0 && price
          ? price
          : compare_at_price;
      //const originalPriceEl = doc.querySelector('.price [data-price]');

      //const originalPrice = originalPriceEl?.textContent.trim() || null;

      //const backupSalePrice =
      console.log('🚀 ~ fetchProductData ~ wasPrice:', wasPrice);

      return {
        id,
        url: fullUrl,
        compareAtPrice: wasPrice,
        quantity,
        salePrice: final_line_price
      };
    } catch (error) {
      console.error(`Failed to fetch ${fullUrl}:`, error);
      return {
        id,
        url: fullUrl,
        compareAtPrice: null,
        quantity,
        salePrice: final_line_price,
        error: true
      };
    }
  };

  const results = await Promise.all(cartItems.map(fetchProductData));
  return results;
};

export const formatPriceUSD = (price, quantity = 1) => {
  const extractCurrencySymbol = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return null;

    const text = el.textContent.trim();
    const match = text.match(/^[^\d.,\s]+/);
    return match ? match[0] : null;
  };
  //const numeric = parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  const total = (price * quantity) / 100; //Assuming price is in cents
  console.log('🚀 ~ formatPriceUSD ~ total:', total);
  return `${extractCurrencySymbol('.cart_subtotal .money')}${total.toFixed(2)}`;
};

export const calculateTotalPrice = (items) => {
  const total = items.reduce((sum, item) => {
    let price = 0;

    if (item.compareAtPrice) {
      const parsed = parseFloat(item.compareAtPrice.replace(/[^0-9.]/g, '')) || 0;
      price = parsed * item.quantity;
    } else {
      price = (item.salePrice / 100) * item.quantity;
    }

    return sum + price;
  }, 0);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return {
    raw: total,
    formatted: formatter.format(total)
  };
};
