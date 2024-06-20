import { pollerLite } from './helpers/utils';
import cards from './components/cards';
import keyBenefits from './components/keyBenefits';
import { cardData, keyBenefitsData } from './data/data';
import reviews from './helpers/reviews';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const scrollToBottom = (listContainer, list) => {
  pollerLite(
    ['body:not(.ajax-loading)', () => !listContainer.classList.contains('_block-content-loading')],
    () => {
      list.scrollTo({
        top: list.scrollHeight,
        behavior: 'smooth'
      });
    }
  );
};

const init = () => {
  const reviewsSummary = document.querySelector('.product-info-main > .product-reviews-summary');
  const reviewContainer = document.querySelector('.pdp-reviews#reviews');

  //best seller imag add on the right side
  reviewsSummary.insertAdjacentHTML(
    'afterbegin',
    `<div class="${ID}__bestsellerImage">
      <img src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/badge_bestseller.png"/>
    </div>`
  );

  if (!document.querySelector(`.${ID}__benefits`)) {
    const atfMediaElem = document.querySelector('.product.media');
    atfMediaElem.insertAdjacentHTML('afterend', keyBenefits(ID, keyBenefitsData));
  }

  reviews(ID, reviewContainer);

  reviewContainer.insertAdjacentHTML('afterend', cards(ID, cardData));
};

export default () => {
  setup();

  document.body.addEventListener('click', ({ target }) => {
    if (
      target.closest(`.${ID}__readMoreReviews`) &&
      target.closest(`.${ID}__readMoreReviews`).dataset.initial === 'true'
    ) {
      const listContainer = target.closest('.pdp-reviews-list');
      const list = listContainer.querySelector('.pdp-reviews-list-container');
      const hiddenReviews = document.querySelectorAll(`.pdp-review.${ID}__hide`);
      hiddenReviews.forEach((item) => {
        item.classList.remove(`${ID}__hide`);
      });

      //eslint-disable-next-line no-param-reassign
      target.closest(`.${ID}__readMoreReviews`).dataset.initial = 'false';
      list.classList.remove(`${ID}__addHeight`);
      scrollToBottom(listContainer, list);
    } else if (
      target.closest(`.${ID}__readMoreReviews`) &&
      target.closest(`.${ID}__readMoreReviews`).dataset.initial === 'false'
    ) {
      const listContainer = target.closest('.pdp-reviews-list');
      const list = listContainer.querySelector('.pdp-reviews-list-container');

      listContainer.querySelector('button').click();
      scrollToBottom(listContainer, list);
    } else if (target.closest(`.${ID}__benifitDetailsCta`)) {
      const benifits = document.querySelectorAll(`.${ID}__benefit.${ID}__hide`);
      benifits.forEach((item) => {
        item.classList.remove(`${ID}__hide`);
      });
    }
  });

  init();
};
