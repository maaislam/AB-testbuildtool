/**
 * ID - Description
 *
 * @fileoverview The main experiment logic goes here. Everything should be written inside the
 * activate function which is called if the conditions in triggers.js have passed evaluation
 * @author User Conversion
 */
// import { setup, fireEvent } from '../../../../../core-files/services';
// import shared from '../../../../../core-files/shared';
import { pollerLite } from '../../../../../../globalUtil/util';

import addScript from './addScript';
import getActiveSku from './getActiveSku';
import initReviews from './initReviews';

const init = () => {
  const isPdp = location.pathname.indexOf('/product') !== -1;
  if (!isPdp) return;

  console.log('hello- all');

  const activeSku = getActiveSku();
  console.log(activeSku);
  document.getElementById('ReviewsWidget')?.remove();
  document.querySelector('.ruk_rating_snippet')?.remove();
  const ratingsIoWidget = `<div class="sno334__container-rating ruk_rating_snippet" data-sku="${activeSku}"></div>`;

  const reviewsioWidget = '<div id="ReviewsWidget" class="sno334__container Container"></div>';
  document
    .getElementById('judgeme_product_reviews')
    .insertAdjacentHTML('beforebegin', reviewsioWidget);
  document.querySelector('.prd-Price_VAT').insertAdjacentHTML('beforebegin', ratingsIoWidget);

  initReviews(activeSku);
};

export default () => {
  pollerLite(['#judgeme_product_reviews', '.Product__Info '], () => {
    const appContainer = document.querySelector('.Product__Info');
    const reviewsioJs = 'https://widget.reviews.io/polaris/build.js';
    const ratingsJs = 'https://widget.reviews.io/rating-snippet/dist.js';
    const revStyle = 'https://widget.reviews.io/rating-snippet/dist.css';
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = `${revStyle}`;
    document.querySelector('head').append(link);
    addScript(reviewsioJs);
    addScript(ratingsJs);

    setTimeout(() => {
      init();
    }, 2000);
    let oldHref = location.href;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (oldHref != location.href) {
          oldHref = location.href;

          setTimeout(() => {
            init();
          }, 1000);
        }
      });
    });

    const config = {
      childList: true,
      subtree: true,
    };

    observer.observe(appContainer, config);
  });
};
