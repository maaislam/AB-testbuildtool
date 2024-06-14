import keyBenefits from './components/keyBenefits';
import reviews from './helpers/reviews';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const reviewContainer = document.querySelector('.pdp-reviews#reviews');
  reviews(ID, reviewContainer);

  //sakib
  keyBenefits(ID);
};

export default () => {
  setup();

  console.log('id', ID);

  document.body.addEventListener('click', ({ target }) => {
    if (
      target.closest(`.${ID}__readMoreReviews`) &&
      target.closest(`.${ID}__readMoreReviews`).dataset.initial === 'true'
    ) {
      const listContainer = target.closest('.pdp-reviews-container');
      const actualHeight = listContainer.querySelector('.pdp-reviews-list-container').dataset
        .height;
      const hiddenReviews = document.querySelectorAll(`.pdp-review.${ID}__hide`);
      hiddenReviews.forEach((item) => {
        item.classList.remove(`${ID}__hide`);
      });

      listContainer.querySelector('.pdp-reviews-list-container').style.height = `${actualHeight}`;
      //eslint-disable-next-line no-param-reassign
      target.closest(`.${ID}__readMoreReviews`).dataset.initial = 'false';
    } else if (
      target.closest(`.${ID}__readMoreReviews`) &&
      target.closest(`.${ID}__readMoreReviews`).dataset.initial === 'false'
    ) {
      const reviewList = target.closest('.pdp-reviews-list');
      reviewList.querySelector('button').click();
    }
  });

  init();
};
