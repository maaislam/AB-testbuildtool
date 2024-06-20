import linkButton from '../components/linkButton';
import sliderWrapper from '../components/sliderWrapper';
import { initSwiper } from './utils';

const reviews = (id, element) => {
  const mobileReviewSection = element.cloneNode(true);
  mobileReviewSection.classList.add(`${id}__mobileReviewSection`);

  const lists = Array.from(element.querySelectorAll('.pdp-review'));

  lists.slice(1).forEach((list) => {
    list.classList.add(`${id}__hide`);
  });

  document.querySelector(`.${id}__benefitSection`).insertAdjacentElement('afterend', element);
  element.querySelector('.pdp-reviews-list-container').classList.add(`${id}__addHeight`);

  element
    .querySelector('.pdp-reviews-list-container + button')
    .insertAdjacentHTML(
      'beforebegin',
      linkButton(id, 'Read more reviews', `${id}__readMoreReviews`, 'initial')
    );

  //mobile
  element.insertAdjacentElement('beforebegin', mobileReviewSection);
  const listsForMobile = mobileReviewSection
    .querySelector('.pdp-reviews-list-container')
    .cloneNode(true);

  //place new html for swiper
  mobileReviewSection
    .querySelector('.pdp-reviews-summary')
    .insertAdjacentHTML('afterend', sliderWrapper(id, listsForMobile));

  initSwiper(id);
};
export default reviews;
