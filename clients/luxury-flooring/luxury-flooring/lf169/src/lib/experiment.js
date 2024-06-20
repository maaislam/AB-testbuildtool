import cards from './components/cards';
import keyBenefits from './components/keyBenefits';
import { cardData, keyBenefitsData } from './data/data';
import reviews from './helpers/reviews';
import setup from './services/setup';
import shared from './shared/shared';
import scrollToBottom from './helpers/scrollToBottom';
import atfCustomization from './helpers/atfCustomization';
import floorDetails from './helpers/floorDetails';

const { ID } = shared;

const init = () => {
  const reviewContainer = document.querySelector('.pdp-reviews#reviews');

  //ATF customization
  atfCustomization(ID);

  //keyBenefits section
  if (!document.querySelector(`.${ID}__benefits`)) {
    const atfMediaElem = document.querySelector('.product.media');
    atfMediaElem.insertAdjacentHTML('afterend', keyBenefits(ID, keyBenefitsData));
  }

  //reviews section
  reviews(ID, reviewContainer);

  //cards section
  if (!document.querySelector(`.${ID}__cardSection`)) {
    reviewContainer.insertAdjacentHTML('afterend', cards(ID, cardData));
  }

  //about the floor section
  if (!document.querySelector(`.${ID}__floorDetailsSection`)) {
    const cardSection = document.querySelector(`.${ID}__cardSection`);
    cardSection.insertAdjacentHTML('afterend', floorDetails(ID));
  }
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
    } else if (target.closest(`.${ID}__roomVisualizerBtn`) || target.closest(`.${ID}__roomPreviewBtn`)) {
      const roomVisualizer = document.querySelector('.roomvo-stimr');
      roomVisualizer.click();
    }
  });

  init();
};
