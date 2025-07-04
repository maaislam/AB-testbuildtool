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
  const url = `https://theayurvedaexperience.com/cart.js?_=${timestamp}`;

  return fetch(url, {
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      priority: 'u=1, i',
      'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?1',
      'sec-ch-ua-platform': '"Android"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin'
    },
    referrer: 'https://theayurvedaexperience.com/cart',
    referrerPolicy: 'strict-origin-when-cross-origin',
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  }).then((response) => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  });
};

export const getCompareAtPrices = async (cartItems) => {
  const fetchProductData = async ({ id, url, quantity, final_line_price }) => {
    const fullUrl = `https://theayurvedaexperience.com${url}`;

    try {
      const response = await fetch(fullUrl);
      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const compareAtPriceEl = doc.querySelector('.compare-at-price');

      return {
        id,
        url: fullUrl,
        compareAtPrice: compareAtPriceEl?.textContent.trim() || null,
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

export const formatPriceUSD = (priceStr, quantity = 1) => {
  const numeric = parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  const total = numeric * quantity;
  return `$${total.toFixed(2)}`;
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
