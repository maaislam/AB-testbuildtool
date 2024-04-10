/*eslint-disable max-len */
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const TIME_FRAMES = ['twoDays'];
const INTERACTION_TYPE = 'purchase';
const INCLUDE_PRODUCT_DATA = true;
const MIN_PURCHASE_THRESHOLD = 1;

const DOM_RENDER_DELAY = 2000;

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

const getPageSkus = () => {
  const EACH_PRODUCT_SELECTOR = '.ProductListCell';

  const skus = [];
  const productElems = document.querySelectorAll(EACH_PRODUCT_SELECTOR);

  productElems.forEach((productElem) => {
    const scope = window.angular.element(productElem).scope();
    const productData = scope.product;
    const sku = productData.Id;
    skus.push(sku.toString());
  });

  return skus;
};

const getPerformanceData = (prodSkusArr, timeFrames, interactionType, includeProductData) => {
  return new Promise((resolve, reject) => {
    window.DY.ServerUtil.getProductsData(
      prodSkusArr,
      timeFrames,
      interactionType,
      includeProductData,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

const triggerEvent = (eventName) => {
  window.DY.API('event', {
    name: eventName
  });
};

const renderMessage = (message) => {
  const messageElem = document.createElement('div');
  messageElem.classList.add(`${ID}-message`);
  messageElem.innerHTML = message;
  return messageElem;
};

const init = async () => {
  const skusArr = getPageSkus();
  //console.log('skusArr:', skusArr);
  //getperformannce data

  const performanceData = await getPerformanceData(
    skusArr,
    TIME_FRAMES,
    INTERACTION_TYPE,
    INCLUDE_PRODUCT_DATA
  );

  const performedSkus = Object.keys(performanceData);

  performedSkus.forEach((performedSku) => {
    const performedElemsAnchor = document.querySelector(
      `.ProductList [href *= "/${performedSku}/"]`
    );
    const performedElems = performedElemsAnchor.closest('.ProductListCell');

    const interestVals =
      performanceData[performedSku].productInterest[INTERACTION_TYPE][TIME_FRAMES[0]];

    const attachPoint = performedElems.querySelector('.ProductImage .ImageWrapper');

    if (!attachPoint || interestVals <= MIN_PURCHASE_THRESHOLD) return;

    const socialMessage = `${interestVals} bought in 48h`;

    if (attachPoint.parentElement.querySelector(`.${ID}-message`)) {
      //remove existing message
      attachPoint.parentElement.querySelector(`.${ID}-message`).remove();
    }

    attachPoint.insertAdjacentElement('beforeend', renderMessage(socialMessage));
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains(`.${ID}-message`)) {
      triggerEvent('product with social Proof Message Clicked');
    }
  });

  setTimeout(init, DOM_RENDER_DELAY);

  onUrlChange(() => {
    setTimeout(init, DOM_RENDER_DELAY);
  });
};
