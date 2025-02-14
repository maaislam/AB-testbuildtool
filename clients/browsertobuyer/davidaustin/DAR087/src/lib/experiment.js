import setup from './services/setup';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import fakeLoadMore from './components/fakeLoadMore';

const { ID, VARIATION } = shared;
let isClickedButton = false;

const init = () => {
  const products = document.querySelectorAll('.shopify-section-product-grid product-card');

  console.log(products.length, 'gdsagdhjsagdhj');

  if (products.length < 24) {
    return;
  }

  setup();

  window.dataLayer.push({
    event: 'gaCustomEvent',
    eventCategory: 'test_run_dar_087'
  });

  if (VARIATION === 'control') return;

  const productContainer = products[0].closest('ul'); //Adjust selector
  const actualLoadMore = document.querySelector('[data-pagination]'); //Adjust selector
  const textElement = actualLoadMore.querySelector('load-more div');
  const text = textElement ? textElement.textContent : ''; //Get the text content of the "Load More" button
  const totalProds = textElement ? text.split('of')[1].trim() : `${products.length} items`; //Extracts all numbers as an array

  //Initially hide products beyond 24
  products.forEach((product, index) => {
    if (index >= 24) product.closest('li').style.display = 'none';
  });

  if (!document.querySelector(`.${ID}__loadMoreWrapper`)) {
    //eslint-disable-next-line radix
    productContainer.insertAdjacentHTML('afterend', fakeLoadMore(ID, totalProds));
  }

  //Insert button after the product list
  const fakeButton = document.querySelector(`.${ID}__loadMoreWrapper button`);
  fakeButton.addEventListener('click', () => {
    //Show remaining hidden products
    products.forEach((product, index) => {
      if (index >= 24) product.closest('li').style.display = 'block';
    });

    //Remove fake button
    fakeButton.closest(`.${ID}__loadMoreWrapper`).remove();

    //Show the actual load more button if it exists
    if (actualLoadMore) {
      actualLoadMore.style.display = 'flex';
    }
  });

  //Hide the real "Load More" button until the fake one is clicked
  if (actualLoadMore) {
    actualLoadMore.style.display = 'none';
  }
};

export default () => {
  if (
    window.location.pathname === '/collections/pink-roses' ||
    window.location.pathname === '/collections/climbing-roses'
  ) {
    return;
  }

  const trackGAEvent = (categoryLabel, actionLabel, eventLabel) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gaCustomEvent',
        eventCategory: categoryLabel,
        eventAction: actionLabel,
        eventLabel
      });
    }

    console.log('event tracked', categoryLabel, actionLabel, eventLabel);
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      (target.closest(`.${ID}__loadMoreWrapper button`) || target.closest('load-more')) &&
      !isClickedButton
    ) {
      trackGAEvent('Load More Button', 'Button Click', 'Load More clicks');
      isClickedButton = true;
    }
  });

  init();

  onUrlChange(() => {
    console.log('start gaian');
    pollerLite(['body', '[data-pagination]'], () => {
      //console.log('start gaian');
      const loadMoreButton = document.querySelector(`.${ID}__loadMoreWrapper`);
      if (loadMoreButton) {
        document.querySelector(`.${ID}__loadMoreWrapper`).remove();
      }
      init();
    });
  });
};
