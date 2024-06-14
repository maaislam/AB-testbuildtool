import linkButton from '../components/linkButton';
import sliderWrapper from '../components/sliderWrapper';
import { pollerLite } from './utils';
import initSwiper from './initSwiper';

const reviews = (id, element) => {
  const mobileReviewSection = element.cloneNode(true);
  mobileReviewSection.classList.add(`${id}__mobileReviewSection`);

  const listContainer = element.querySelector('.pdp-reviews-list-container');
  const actualHeiight = window.getComputedStyle(listContainer).height;
  listContainer.setAttribute('data-height', actualHeiight);

  const lists = Array.from(element.querySelectorAll('.pdp-review'));
  const firstReviewHeight = lists[0].getBoundingClientRect().height;
  listContainer.style.height = `${firstReviewHeight}px`;

  lists.slice(1).forEach((list) => {
    list.classList.add(`${id}__hide`);
  });

  element
    .querySelector('.pdp-reviews-list-container + button')
    .insertAdjacentHTML(
      'beforebegin',
      linkButton(id, 'Read more reviews', `${id}__readMoreReviews`, 'initial')
    );

  //mobile
  element.insertAdjacentElement('afterend', mobileReviewSection);
  const listsForMobile = mobileReviewSection
    .querySelector('.pdp-reviews-list-container')
    .cloneNode(true);

  //place new html for swiper
  mobileReviewSection
    .querySelector('.pdp-reviews-summary')
    .insertAdjacentHTML('afterend', sliderWrapper(id, listsForMobile));

  pollerLite([() => typeof window.Swiper === 'function'], () => {
    initSwiper('.swiper');
  });
};
export default reviews;
