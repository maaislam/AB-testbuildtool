import { addCssToPage, addJsToPage, observeDOM, pollerLite } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

const init = () => {
  //console.log('🚀init');
  if (!document.querySelector(`.${ID}__review`)) return;
  //init swiper
  const swiper = new window.Swiper('.swiper', {
    slidesPerView: 1.3,
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  console.log('🚀 ~ init ~ swiper:', swiper);
};

const adjustElements = () => {
  const reviewsContainer = document.querySelector('.oke-w-reviews-list');
  const reviews = document.querySelectorAll('.oke-w-reviews-list li.oke-w-reviews-list-item');

  reviewsContainer.classList.add('swiper-wrapper');
  reviewsContainer.parentElement.classList.add('swiper');
  reviews.forEach((review) => {
    const leftColumn = review.querySelector('.oke-w-review-side');
    const rightColumn = review.querySelector('.oke-w-review-main');
    const reviewerBlock = review.querySelector('.oke-w-review-reviewer');

    const ratingRow = review.querySelector('.oke-reviewContent-top');
    const reviewFooter = review.querySelector('.oke-w-review-footer');

    review.classList.add(`${ID}__review`);
    review.classList.add('swiper-slide');
    if (!leftColumn || !rightColumn) return;

    //console.log('🚀ratingRow', leftColumn, index);
    leftColumn.insertAdjacentElement('beforeend', rightColumn);
    reviewerBlock.insertAdjacentElement('afterend', ratingRow);
    rightColumn.insertAdjacentElement('afterend', reviewFooter);
  });
};

export default () => {
  setup();

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  //adjust positions of elements
  adjustElements();

  observeDOM('#shopify-section-template--14877509681227__1658231130ef15e79f', () => {
    //console.log('🚀observeDOM');
    adjustElements();
  });

  pollerLite([() => window.Swiper !== undefined], () => {
    //init swiper
    init();
  });
};
