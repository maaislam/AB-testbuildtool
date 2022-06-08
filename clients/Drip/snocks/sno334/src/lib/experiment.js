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
          card.querySelector(`.ProductItem__Info .jdgm-widget `).classList.add(`sno334__hide`);
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
          color: '#F9CA4F',
          linebreak: false,
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
  //   document.querySelector('.prd-Price_VAT').insertAdjacentHTML('beforebegin', ratingsIoWidget);
  document.querySelector(`.jdgm-widget`).classList.add(`sno334__hide`);
  document.querySelector(`.jdgm-rev-widg`).classList.add(`sno334__hide`);

  document.querySelector(`.ProductItem__Info .jdgm-widget `).classList.add(`sno334__hide`);

  const ratingsIoWidgetWrapper = `<div class="sno334__container-rating-wrapper" href="#ReviewsWidget"></div>`;
  document
    .querySelector('.product-price-review-css')
    .insertAdjacentHTML('beforeend', ratingsIoWidgetWrapper);
  document
    .querySelector('.sno334__container-rating-wrapper')
    .insertAdjacentHTML('beforeend', ratingsIoWidget);

    document.querySelector('.ProductMeta').classList.add(`sno334__container-product`);

  initReviews(activeSku);

  setTimeout(() => {
    var reviewNumberText = document.querySelector('.header__group .R-TextBody').innerText.substring(14, document.querySelector('.header__group .R-TextBody').innerText.indexOf('Be') - 1);
    //  CHANGING OLD REVIEW COUNT TEXT TO NEW UPDATED TEXT(ACCORDING TO DESIGN)
    document.querySelector('.header__group .R-TextBody').classList.add('sno334-widget-mutated')
    document.querySelector('.R-RatingStars__stars.u-marginBottom--none > span').setAttribute('data-text', reviewNumberText)
  }, "2000")
  
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
