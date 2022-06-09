// import { setup, fireEvent } from '../../../../../core-files/services';
import shared from './shared/shared.js';
import { pollerLite } from '../../../../../../globalUtil/util';

import { addScript, addStyles } from './helpers/addJsCss';
import getActiveSku from './helpers/getActiveSku';
import { initReviews, initRatingsScript } from './helpers/initReviews';
import { isPDP, isPLP, skusOnPage, thingsToPollFor } from './helpers/utils';
import getRecommStarData from './helpers/getRecommProdData';
import observeDOM from './helpers/observeDOM.js';

const { ID, VARIATION } = shared;

const init = (dataObj) => {
  if (isPLP || !!document.querySelector('.ProductListWrapper')) {
    const plpList = document.querySelectorAll('.ProductList.ProductList--grid .ProductItem');
    const homePage = location.pathname === '/';
    const carouselList = homePage
      ? document.querySelectorAll('.ProductListWrapper .ProductItem')
      : document.querySelectorAll('.ProductRecommendations .ProductItem');
    //const carouselList = document.querySelectorAll('.ProductRecommendations .ProductItem');
    const productCards = isPLP
      ? plpList
      : document.querySelector('.ProductListWrapper')
      ? carouselList
      : null;
    productCards.forEach((card, index) => {
      const cardProdHref = card
        .querySelectorAll('.ProductItem__ImageWrapper')[1]
        ?.getAttribute('href');
      const cardProdId = cardProdHref?.split('variant=')[1];
      console.log(cardProdId);

      const cardSku =
        cardProdId && isPLP
          ? skusOnPage(dataObj)[cardProdId]
          : Object.values(dataObj)[index]?.variants[0].sku;

      const ratingsIoWidget = `<div class="${ID}__container-rating ruk_rating_snippet ${ID}__container-rating--${index}" data-sku="${cardSku}"></div>`;
      // card.querySelector(`.jdgm-widget`)?.classList.add(`${ID}__hide`);
      card.querySelector(`.${ID}__container-rating`)?.remove();
      const anchorElem = card.querySelector('.ProductItem__PriceList.Heading');

      cardSku && anchorElem.insertAdjacentHTML('afterbegin', ratingsIoWidget);
    });
    pollerLite([() => window.ratingSnippet !== undefined], () => {
      // eslint-disable-next-line no-undef
      initRatingsScript();
    });
  }

  if (!isPDP) return;
  const activeSku = getActiveSku();

  // console.log(activeSku);
  document.getElementById('ReviewsWidget')?.remove();
  document.querySelector('.ruk_rating_snippet')?.remove();
  const ratingsIoWidget = `<div class="${ID}__container-rating ruk_rating_snippet" data-sku="${activeSku}"></div>`;

  const reviewsioWidget = `<div id="ReviewsWidget" class="${ID}__container Container"></div>`;
  document
    .getElementById('judgeme_product_reviews')
    .insertAdjacentHTML('beforebegin', reviewsioWidget);

  //document.querySelector(`.jdgm-widget`)?.classList.add(`${ID}__hide`);
  //document.querySelector(`.jdgm-rev-widg`)?.classList.add(`${ID}__hide`);

  // document.querySelector(`.ProductItem__Info .jdgm-widget `).classList.add(`${ID}__hide`);

  const ratingsIoWidgetWrapper = `<div class="${ID}__container-rating-wrapper ${ID}__review-pdp" href="#ReviewsWidget"></div>`;
  document
    .querySelector('.product-price-review-css')
    .insertAdjacentHTML('beforeend', ratingsIoWidgetWrapper);
  document
    .querySelector(`.${ID}__container-rating-wrapper`)
    .insertAdjacentHTML('beforeend', ratingsIoWidget);

  document.querySelector('.ProductMeta').classList.add(`${ID}__container-product`);

  initReviews(activeSku);

  let timer;
  const TIMER_INTERVAL = 25;

  timer = setInterval(() => {
    const SUB_STRING_LENGTH = 14;
    const reviewNumberText = document
      .querySelector('.header__group .R-TextBody')
      ?.innerText.substring(
        SUB_STRING_LENGTH,
        document.querySelector('.header__group .R-TextBody')?.innerText.indexOf('Be') - 1
      );
    //  CHANGING OLD REVIEW COUNT TEXT TO NEW UPDATED TEXT(ACCORDING TO DESIGN)
    document.querySelector('.header__group .R-TextBody')?.classList.add(`${ID}-widget-mutated`);
    document
      .querySelector('.R-RatingStars__stars.u-marginBottom--none > span')
      ?.setAttribute('data-text', reviewNumberText);
    if (!reviewNumberText || !document.querySelector(`[data-text="${reviewNumberText}"]`)) return;
    clearInterval(timer);
  }, TIMER_INTERVAL);
};

export default () => {
  pollerLite(thingsToPollFor, () => {
    const reviewsioJs = 'https://widget.reviews.io/polaris/build.js';
    const ratingsJs = 'https://widget.reviews.io/rating-snippet/dist.js';
    const revStyle = 'https://widget.reviews.io/rating-snippet/dist.css';
    let oldHref = location.href;

    addStyles(revStyle);
    addScript(reviewsioJs);
    addScript(ratingsJs);

    //re collecting data as recommend carousel prod sometimes has no variant id in url
    !isPLP && getRecommStarData(init);

    setTimeout(() => {
      isPLP && init(window.collectionProducts);
    }, 2000);

    const variantSelectCallback = (mutation) => {
      if (oldHref != location.href) {
        oldHref = location.href;

        const { addedNodes } = mutation;
        addedNodes.forEach((addedNode) => {
          setTimeout(() => {
            init(window.collectionProducts);
          }, 2000);
        });
      }
    };

    isPDP && observeDOM('.Product__Info', variantSelectCallback);
  });
};
