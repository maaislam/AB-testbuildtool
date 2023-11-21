import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import discountPriceCal from './helpers/discountPriceCal';
import discountBadge from './components/discountBadge';
import reviewRatings from './components/reviewRatings';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  document.querySelectorAll(`.${ID}__saveAmount`).forEach((el) => el?.remove());

  const currentPrice = document.querySelector('.product__price.sale-price');
  const priceContainer = document.querySelector('.product-single__prices');
  const reviews = document.querySelector('.product-single__prices > a');
  const reviewCountElem = document.querySelector('a .loox-rating-label');
  const reviewCount = +document.querySelector('a .loox-rating').getAttribute('data-raters');

  priceContainer.classList.add(`${ID}__priceContainer`);

  if (!document.querySelector(`.${ID}__saveAmount`) && currentPrice) {
    currentPrice.insertAdjacentHTML('afterend', discountBadge(ID));
  }

  if (!reviewCountElem) return;

  if (!document.querySelector(`.${ID}__reviewRating`)) {
    reviewCountElem.textContent = `(${reviewCount} ${reviewCount > 1 ? 'Reviews' : 'Review'})`;
    reviews.classList.add(`${ID}__reviews`);
    priceContainer.insertAdjacentElement('afterend', reviews);
    reviewCountElem.insertAdjacentHTML('beforebegin', reviewRatings(ID));
  }
};

export default () => {
  setup();
  init();

  pollerLite([`.${ID}__priceContainer`], () => {
    const appContainer = document.querySelector(`.${ID}__priceContainer`);
    let oldHref = document.location.href;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        if (oldHref !== document.location.href) {
          oldHref = document.location.href;
          document.body.classList.remove(`${shared.ID}`);

          setTimeout(() => {
            init();
          }, 500);
        }
      });
    });

    const config = {
      childList: true,
      subtree: true
    };

    observer.observe(appContainer, config);
  });
};
