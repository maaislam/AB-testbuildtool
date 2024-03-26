/*eslint-disable max-len */
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const DOM_RENDER_DELAY = 2000;

const triggerEvent = (eventName) => {
  window.DY.API('event', {
    name: eventName
  });
};

const onUrlChange = (callback, onError = null) => {
  if (typeof callback !== 'function') {
    throw new Error('Callback function must be provided');
  }
  const mutationConfig = {
    childList: true,
    subtree: true
  };
  //Create a new MutationObserver instance to observe changes to the document body
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      //Store the current URL in a separate variable to make the code more concise
      const currentUrl = window.location.href;
      //Check if the URL has changed since the last observation
      if (observer.previousUrl !== currentUrl) {
        const oldHref = observer.previousUrl;
        //Update the previous URL and execute the callback function
        observer.previousUrl = currentUrl;
        //console.log('URL changed!');
        observer.disconnect();
        try {
          setTimeout(() => {
            callback(oldHref, mutation);
          }, 1000);
        } catch (error) {
          console.log(`Error in callback function: ${error}`);
        }
        observer.observe(document.documentElement, mutationConfig);
      }
    });
  });

  //Initialize the previous URL to the current URL

  try {
    observer.previousUrl = window.location.href;
    //Start observing changes to the document documentElement to detect URL changes
    observer.observe(document.documentElement, mutationConfig);
  } catch (error) {
    if (onError && typeof onError === 'function') {
      onError(error);
    } else {
      console.log(`Error starting onUrlChange observer: ${error}`);
    }
  }
};

const observerCallback = (entries, observer) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      const starRating = target.getAttribute('data-rating');
      triggerEvent('User sees a product that is in the 10% most reviewed');
      console.log(`🚀 User sees a top 10% most reviewed product - ${starRating} star`);
      observer.unobserve(target);
    }
  });
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
};

const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

const getPageSkusAndRatingCount = () => {
  const EACH_PRODUCT_SELECTOR = '.ProductListCell';

  const data = [];
  const productElems = document.querySelectorAll(EACH_PRODUCT_SELECTOR);

  productElems.forEach((productElem) => {
    const scope = window.angular.element(productElem).scope();
    const productData = scope.product;
    const sku = productData.Id;
    const rating = productData.Rating;
    const ratingCount = productData.RatingCount;
    const obj = {
      sku: sku.toString(),
      ratingCount,
      rating
    };

    data.push(obj);
  });
  data.sort((a, b) => b.ratingCount - a.ratingCount);
  return data;
};

const renderMessage = (message) => {
  const messageElem = document.createElement('div');
  const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
  <path d="M7 10.4479L11.326 13L10.178 8.19L14 4.95368L8.967 4.53632L7 0L5.033 4.53632L0 4.95368L3.822 8.19L2.674 13L7 10.4479Z" fill="#E5004B"/>
  </svg>`;
  messageElem.classList.add(`${ID}-message`);
  messageElem.classList.add(`${ID}-message-${VARIATION}`);
  messageElem.innerHTML = `${starSvg} ${message}`;
  return messageElem;
};

const init = () => {
  const productsData = getPageSkusAndRatingCount();
  const top10PercentCount = Math.ceil(productsData.length * (10 / 100));

  //Get the top 10% of the array
  const top10Percent = productsData.slice(0, top10PercentCount);

  top10Percent.forEach((product) => {
    const { sku, rating } = product;

    const productElemAnchor = document.querySelector(`.ProductList [href *= "/${sku}/"]`);
    const productElem = productElemAnchor.closest('.ProductListCell');

    const messageAttachPoint = productElem.querySelector('.Rating ');
    //set data attribute
    messageAttachPoint.setAttribute('data-rating', rating);

    if (!messageAttachPoint) return;

    if (messageAttachPoint.parentElement.querySelector(`.${ID}-message`)) {
      //remove existing message
      messageAttachPoint.parentElement.querySelector(`.${ID}-message`).remove();
    }

    intersectionObserver.observe(messageAttachPoint);

    if (VARIATION === 'control') return;

    const message = renderMessage('Most reviewed');

    messageAttachPoint.insertAdjacentElement('afterend', message);
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (
      target.classList.contains('.' + ID + '-message') &&
      (target.closest('.ProductName') || target.closest('.ProductImage'))
    ) {
      triggerEvent('User interacts with a view details cta');
    } else if (target.closest('[ng-click="addProductToCart(product, Qty)"]')) {
      triggerEvent('User interacts with a ATC button');
    }
  });

  setTimeout(init, DOM_RENDER_DELAY);

  onUrlChange(() => {
    intersectionObserver.disconnect();
    setTimeout(init, DOM_RENDER_DELAY);
  });
};
