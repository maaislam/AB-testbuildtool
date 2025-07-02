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

export const addToCart = (quantity, productId) => {
  const boundary = `----WebKitFormBoundary${Math.random().toString(36).substring(2)}`;
  const body =
    `${boundary}\r\n` +
    'Content-Disposition: form-data; name="quantity"\r\n\r\n' +
    `${quantity}\r\n${boundary}\r\n` +
    'Content-Disposition: form-data; name="add-to-cart"\r\n\r\n' +
    `${productId}\r\n${boundary}--\r\n`;

  return fetch(`${window.location.href}`, {
    method: 'POST',
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': `multipart/form-data; boundary=${boundary.slice(2)}`
    },
    body
  })
    .then((res) => res.text())
    .then((htmlText) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');
      return doc;
    })
    .catch((err) => console.error('Error adding to cart:', err));
};

export const fetchCartDocument = async () => {
  try {
    const response = await fetch('https://www.inogen.com/cart/', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'en-US,en;q=0.9',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin'
      },
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    });

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
  const subtotal =
    doc.querySelector('.cart-subtotal .woocommerce-Price-amount')?.textContent.trim() || '';
  const shipping = doc.querySelector('.cart-totals-free-shipping')?.textContent.trim() || '';
  const salesTax =
    doc
      .querySelector('.tax-rate-us-ca-estimated-sales-tax-1 .woocommerce-Price-amount')
      ?.textContent.trim() || '';
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
