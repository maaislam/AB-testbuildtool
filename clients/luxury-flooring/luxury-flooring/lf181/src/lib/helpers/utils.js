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

const collectProductInfo = (allItemsArray, doc, item) => {
  const productSectionDetails = doc.querySelector('.product-section.details');
  const productFinishElement = doc.querySelector('#attr_finish_select');
  console.log(productSectionDetails);
  const productFinishText = productFinishElement ? productFinishElement.textContent : '';

  const productSurfaceElement = doc.querySelector('#attr_solid_wood_surface');
  const productSurfaceText = productSurfaceElement ? productSurfaceElement.textContent : '';

  allItemsArray.push({
    url: item.url,
    element: item.element,
    plankThikness: item.plankThikness,
    plankWidth: item.plankWidth,
    productFinishText,
    productSurfaceText
  });
};

export const parseHTML = async (urls) => {
  const allItemsArray = [];

  const promises = urls.map(({ url }) =>
    fetch(url).catch((error) => {
      console.error(`Error fetching ${url}: ${error.message}`);
      return Promise.resolve(null);
    })
  );

  const responses = await Promise.all(promises);
  //eslint-disable-next-line no-restricted-syntax
  for (const [index, response] of responses.entries()) {
    if (response) {
      //eslint-disable-next-line no-await-in-loop
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      console.log('doc', doc);
      collectProductInfo(allItemsArray, doc, urls[index]);
    }
  }

  return allItemsArray;
};

export const fetchProductDetails = (urls) => {
  const fetchPromises = urls.map((url) =>
    fetch(url.link, {
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

        const details = {};
        const detailRows = doc.querySelectorAll('.product-details .label');

        detailRows.forEach((label) => {
          const valueElement = label.nextElementSibling;
          if (valueElement) {
            const key = label.getAttribute('data-code') || label.innerText;
            const value = valueElement.textContent.trim();
            details[key] = value;
          }
        });

        const productImage = doc.querySelector('.gallery .gallery__item img');
        const reviewsElement = doc.querySelector('.product-reviews-summary');
        const productTitleElement = doc.querySelector('.page-title-wrapper.product');
        const productPriceElement = doc.querySelector('.product-info-price');
        const formElement = doc.querySelector('#product_addtocart_form');
        const formAction = formElement.action;
        const itemElement = formElement.querySelector('input[name="item"]');
        const itemValue = itemElement ? itemElement.value : '';
        const formKey = formElement.querySelector('input[name="form_key"]');
        const formKeyValue = formKey ? formKey.value : '';

        return {
          sku: url.sku,
          url,
          details,
          title: productTitleElement || '',
          productImage: productImage ? productImage.src : '',
          price: productPriceElement || '',
          reviews: reviewsElement || '',
          formAction,
          itemValue,
          formKeyValue
        };
      })
      .catch((error) => ({
        url,
        error: error.message
      }))
  );

  return Promise.all(fetchPromises); //Return the promise
};

export const addToCart = (action, bodyData) => {
  return fetch(`${action}`, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest'
    },
    body: bodyData,
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((data) => data);
};
