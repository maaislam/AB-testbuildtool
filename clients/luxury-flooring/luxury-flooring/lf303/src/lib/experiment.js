import cards from './components/cards';
import keyBenefits from './components/keyBenefits';
import { cardData, keyBenefitsData } from './data/data';
import reviews from './helpers/reviews';
import setup from './services/setup';
import shared from './shared/shared';
import scrollToBottom from './helpers/scrollToBottom';
import atfCustomization from './helpers/atfCustomization';
import floorDetails from './helpers/floorDetails';
import { stickyCombineBtn } from './helpers/stickyCombineBtn';
import { wrapInner } from './helpers/utils';

const { ID } = shared;

const init = () => {
  const productInfo = document.querySelector('.product-info-main');
  const reviewContainer = document.querySelector('.pdp-reviews#reviews');

  //ATF customization
  atfCustomization(ID);

  //keyBenefits section
  const benefitSections = document.querySelectorAll(`.${ID}__benefitSection`);
  benefitSections.forEach((section) => {
    section.remove();
  });

  const atfMediaElem = document.querySelector('.product.media');
  //desktop
  atfMediaElem.insertAdjacentHTML('beforeend', keyBenefits(ID, keyBenefitsData, 'desktop'));
  //mobile
  productInfo.insertAdjacentHTML('afterend', keyBenefits(ID, keyBenefitsData, 'mobile'));

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

  //for mobile aapend you might also like under the reviews section.
  const parentElement = document.createElement('div');
  parentElement.classList.add(`${ID}__parentWrapper`);
  parentElement.appendChild(document.querySelector(`.${ID}__cardSection`));
  parentElement.appendChild(document.querySelector(`.${ID}__floorDetailsSection`));
  parentElement.appendChild(document.querySelector('.column.main > .upsell-title'));
  parentElement.appendChild(document.querySelector('.column.main > .products.wrapper'));

  document
    .querySelector(`.pdp-reviews:not(.${ID}__mobileReviewSection)`)
    .insertAdjacentElement('afterend', parentElement);

  //sticky section in mobile devices
  stickyCombineBtn(ID);

  wrapInner('.product-info-main', {
    class: `${ID}__wrapper-class`
  });
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
    } else if (
      target.closest(`.${ID}__roomVisualizerBtn`) ||
      target.closest(`.${ID}__roomPreviewBtn`)
    ) {
      const roomVisualizer = document.querySelector('.roomvo-stimr');
      roomVisualizer.click();
    } else if (target.closest(`.${ID}__product-accordion-tab:not(.${ID}__open)`)) {
      const targetTab = target.closest(`.${ID}__product-accordion-tab`);
      const allOpenAccordion = document.querySelectorAll(`.product-accordion-tab.${ID}__open`);
      const allAccordionPane = document.querySelectorAll(`.${ID}__product-accordion-pane`);
      allOpenAccordion.forEach((item) => {
        item.classList.remove(`${ID}__open`);
      });
      allAccordionPane.forEach((item) => {
        item.style.display = 'none';
      });

      targetTab.classList.add(`${ID}__open`);
      targetTab.nextElementSibling.style.display = 'block';
    } else if (target.closest(`.${ID}__product-accordion-tab.${ID}__open`)) {
      const targetTab = target.closest(`.${ID}__product-accordion-tab`);
      targetTab.classList.remove(`${ID}__open`);
      targetTab.nextElementSibling.style.display = 'none';
    } else if (target.closest(`.${ID}__orderSampleWrapper`)) {
      document.querySelector('.sample-add-form button[type="submit"]').click();
    } else if (target.closest(`.${ID}__atcBtn`)) {
      document.querySelector('#product-addtocart-button').click();
    }
  });

  init();
};
