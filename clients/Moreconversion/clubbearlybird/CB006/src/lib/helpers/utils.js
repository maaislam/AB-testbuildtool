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

export const fetchCartItems = async () => {
  try {
    const response = await fetch('https://clubearlybird.com/cart.js', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        priority: 'u=1, i',
        'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin'
      },
      referrer: 'https://clubearlybird.com/cart',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }

    const cartData = await response.json();
    return cartData; //returns the cart data object
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return null;
  }
};

export const fetchProductDetails = async (cartItems) => {
  //Map each cart item to a promise that fetches its product details
  const productDetailsPromises = cartItems.items.map(async (item) => {
    const { url, variant_id, quantity, original_price } = item;
    const baseUrl = `${url.split('?')[0]}.js`;

    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch product data for variant: ${variant_id}`);
      }
      const productData = await response.json();
      //Rename the inner variable to avoid shadowing
      const matchedVariant = productData.variants.find((v) => v.id === variant_id);
      if (matchedVariant) {
        return {
          variant_id: matchedVariant.id,
          compare_at_price: matchedVariant.compare_at_price || null,
          quantity,
          sellPrice: original_price
        };
      }
    } catch (error) {
      console.error(`Error fetching product data for variant ${variant_id}:`, error);
    }
    return null;
  });

  //Wait for all promises to resolve and filter out any null results
  const productDetails = (await Promise.all(productDetailsPromises)).filter(Boolean);
  return productDetails;
};

export const formatPrice = (price, quantity = 1) => {
  const total = (price / 100) * quantity;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(total);
};

export const calculateSubtotal = (items) => {
  const subtotal = items.reduce((total, item) => {
    //Use compare_at_price if it exists, otherwise use sellPrice
    const priceToConsider = item.compare_at_price || item.sellPrice;
    return total + priceToConsider * item.quantity; //Accumulate the total price
  }, 0);

  return formatPrice(subtotal); //Return the formatted subtotal
};
