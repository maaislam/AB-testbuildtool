/*eslint-disable global-require */
/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 1000000) => {
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

        const productTypeElement = doc.querySelector('.breadcrumbs ul > li:nth-child(2) a');
        const productType = productTypeElement ? productTypeElement.textContent : '';
        const productImage = doc.querySelector('.gallery .gallery__item img');
        const reviewsElement = doc.querySelector('.product-reviews-summary');
        const productTitleElement = doc.querySelector('.page-title-wrapper.product');
        const productPriceElement = doc.querySelector('.product-info-price');
        const formElement =
          doc.querySelector('#product_addtocart_form') ||
          doc.querySelector('#sample_addtocart_form');
        const formAction = formElement.action;
        const itemElement = formElement.querySelector('input[name="item"]');
        const itemValue = itemElement ? itemElement.value : '';
        const formKey = formElement.querySelector('input[name="form_key"]');
        const formKeyValue = formKey ? formKey.value : '';
        const shadeElement = doc.querySelector('#attr_shade');
        const shadeValue = shadeElement ? shadeElement.textContent : '';

        return {
          sku: url.sku,
          url,
          productType,
          details,
          title: productTitleElement || '',
          productImage: productImage ? productImage.src : '',
          price: productPriceElement || '',
          reviews: reviewsElement || '',
          formAction,
          itemValue,
          formKeyValue,
          shadeValue
        };
      })
      .catch((error) => ({
        url,
        error: error.message
      }))
  );

  return Promise.all(fetchPromises); //Return the promise
};

export const addFreeSample = (formAction, { product, is_sample, form_key }) => {
  const formData = new FormData();
  formData.append('product', product);
  formData.append('is_sample', is_sample);
  //formData.append('uenc', uenc);
  formData.append('form_key', form_key);

  return fetch(`${formAction}`, {
    method: 'POST',
    body: formData,
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'x-requested-with': 'XMLHttpRequest'
    },
    credentials: 'include'
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error));
};

export const fetchCartData = async (sections) => {
  const url = new URL('https://luxuryflooring.co.uk/customer/section/load/');
  url.searchParams.append('sections', sections.join(','));
  url.searchParams.append('force_new_section_timestamp', 'true');
  url.searchParams.append('_', Date.now());

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest'
      },
      credentials: 'include',
      mode: 'cors',
      referrer: 'https://luxuryflooring.co.uk/thorpe-canvas-solid-oak-herringbone.html',
      referrerPolicy: 'strict-origin-when-cross-origin'
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching cart data:', error);
    return null;
  }
};

export const addToSampleCart = (prodId, formKey, uencValue, action) => {
  return new Promise((resolve, reject) => {
    window.require(['jquery'], ($) => {
      $.ajax({
        url: action,
        type: 'POST',
        data: {
          product: prodId,
          is_sample: 1,
          uenc: uencValue || '',
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

export const addCssToHead = (hrefUrl) => {
  const link = document.createElement('link');
  link.href = hrefUrl;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
};

export const addScriptToHead = (srcUrl) => {
  const script = document.createElement('script');
  script.src = srcUrl;
  script.type = 'text/javascript';
  script.async = true;
  document.head.appendChild(script);
};
