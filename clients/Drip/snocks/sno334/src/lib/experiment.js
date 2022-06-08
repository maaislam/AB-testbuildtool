// import { setup, fireEvent } from '../../../../../core-files/services';
// import shared from '../../../../../core-files/shared';
import { pollerLite } from '../../../../../../globalUtil/util';

import addScript from './helpers/addScript';
import getActiveSku from './helpers/getActiveSku';
import { getProductData } from './helpers/getProductData';
import initReviews from './helpers/initReviews';
import { isPDP, isPLP, skusOnPage, thingsToPollFor } from './helpers/utils';

const init = () => {
  if (isPLP) {
    console.log('isPLP', isPLP);

    const productCards = document.querySelectorAll('.ProductList.ProductList--grid .ProductItem');
    pollerLite([() => window.ratingSnippet !== 'undefined'], () => {
      productCards.forEach((card, index) => {
        const productUrl = card
          .querySelector('.ProductItem__Info h2.ProductItem__Title.Heading a')
          .getAttribute('href');
        const productId = productUrl.split('variant=')[1];

        const prodhandle = productUrl.split('?')[0];

        const data = getProductData(prodhandle);
        console.log('data', data);

        //end of search page stuff
        if (location.pathname.indexOf('/search') !== -1) return;
        const cardProdId = card
          .querySelector('.ProductItem__Info h2.ProductItem__Title.Heading a')
          .getAttribute('href')
          .split('variant=')[1];

        const cardSku = skusOnPage[cardProdId];

        const ratingsIoWidget = `<div class="sno334__container-rating ruk_rating_snippet sno334__container-rating--${index}" data-sku="${cardSku}"></div>`;

        card.querySelector('.sno334__container-rating')?.remove();
        card
          .querySelector('.ProductItem__TitleDescription')
          .insertAdjacentHTML('afterend', ratingsIoWidget);
        // eslint-disable-next-line no-undef
        ratingSnippet('ruk_rating_snippet', {
          store: 'snocks',
          mode: 'default',
          color: '#0E1311',
          linebreak: false,
          text: 'Reviews',
          singularText: 'Review',
          lang: 'en',
          usePolaris: true,
          showEmptyStars: true,
        });
      });
    });
  }

  if (!isPDP) return;

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
  console.log('hello- all');
  pollerLite(thingsToPollFor, () => {
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

    isPDP && observer.observe(appContainer, config);
  });
};
