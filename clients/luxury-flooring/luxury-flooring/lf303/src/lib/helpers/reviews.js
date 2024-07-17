import linkButton from '../components/linkButton';
import reviewModal from '../components/reviewModal';
import sliderWrapper from '../components/sliderWrapper';
import { initSwiper, observeDOM } from './utils';

const reviews = (id, element) => {
  const mobileReviewSection = element.cloneNode(true);
  mobileReviewSection.classList.add(`${id}__mobileReviewSection`);

  const lists = Array.from(element.querySelectorAll('.pdp-review'));

  lists.slice(1).forEach((list) => {
    list.classList.add(`${id}__hide`);
  });

  document.querySelector('.product.media').insertAdjacentElement('afterend', element);
  element.querySelector('.pdp-reviews-list-container').classList.add(`${id}__addHeight`);

  element
    .querySelector('.pdp-reviews-list-container + button')
    .insertAdjacentHTML(
      'beforebegin',
      linkButton(id, 'Read more reviews', `${id}__readMoreReviews`, 'initial')
    );

  //mobile
  if (!document.querySelector(`.${id}__mobileReviewSection`)) {
    element.insertAdjacentElement('beforebegin', mobileReviewSection);
  }

  const listsForMobile = mobileReviewSection
    .querySelector('.pdp-reviews-list-container')
    .cloneNode(true);

  //place new html for swiper
  mobileReviewSection
    .querySelector('.pdp-reviews-summary')
    .insertAdjacentHTML('afterend', sliderWrapper(id, listsForMobile));

  initSwiper(id);

  //insert the modal
  document.body.insertAdjacentHTML('beforeend', reviewModal(id));

  window.reviewsArrayForMobile = [];
  const handlerForReviews = (mutationsList) => {
    const { addedNodes } = mutationsList;
    if (addedNodes.length > 0 && addedNodes[0].classList?.contains('pdp-review')) {
      window.reviewsArrayForMobile.push(addedNodes[0].cloneNode(true));
    }
  };

  observeDOM(
    `.pdp-reviews:not(.${id}__mobileReviewSection) .pdp-reviews-list-container`,
    handlerForReviews
  );
};
export default reviews;
