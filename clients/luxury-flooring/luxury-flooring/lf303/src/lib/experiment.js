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
import { observeIntersection, pollerLite, wrapInner } from './helpers/utils';

const { ID } = shared;

const init = () => {
  const productInfo = document.querySelector('.product-info-main');

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
  pollerLite(
    [
      '.pdp-reviews#reviews .pdp-reviews-list-container .pdp-review',
      () =>
        document.querySelectorAll('.pdp-reviews#reviews .pdp-reviews-list-container .pdp-review')
          .length >= 3
    ],
    () => {
      const reviewContainer = document.querySelector('.pdp-reviews#reviews');

      //cards section
      if (!document.querySelector(`.${ID}__cardSection`)) {
        reviewContainer.insertAdjacentHTML('afterend', cards(ID, cardData));
      }

      //about the floor section
      if (!document.querySelector(`.${ID}__floorDetailsSection`)) {
        const cardSection = document.querySelector(`.${ID}__cardSection`);
        cardSection.insertAdjacentHTML('afterend', floorDetails(ID));
      }

      reviews(ID, reviewContainer);

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

      const intersectionAnchor = document.querySelector(`.${ID}__roomPreview video`);
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target;
          let scrollTimer;
          clearTimeout(scrollTimer);
          if (entry.isIntersecting) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      };

      observeIntersection(intersectionAnchor, 0, handleIntersection);
    }
  );
  //pollerLite(['.fp-calculator .fp-controls input'], () => {
  //const areaInput = document.querySelector('.fp-calculator .fp-controls input');
  //setTimeout(() => {
  //areaInput.value = 1;
  //areaInput.dispatchEvent(new Event('change'));
  //}, 2000);
  //});
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
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
      setTimeout(() => {
        if (listContainer.querySelector('button').getAttribute('style') === 'display: none;') {
          target.closest(`.${ID}__readMoreReviews`).style.display = 'none';
        }
      }, 1000);
    } else if (target.closest(`.${ID}__benifitDetailsCta`)) {
      const floorSection = document.querySelector(`.${ID}__floorDetailsSection`);
      floorSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
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
        //eslint-disable-next-line no-param-reassign
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
      e.preventDefault();

      const element = document.querySelector('.product-info-price .flooring-price');
      element.scrollIntoView({
        behavior: 'smooth'
      });

      const areaInput = document.querySelector('.fp-calculator .fp-controls input');
      setTimeout(() => {
        if (areaInput.value === '') {
          areaInput.value = 1;
        }
        areaInput.dispatchEvent(new Event('change'));
        //areaInput.value = '';
        areaInput.focus();
      }, 500);
    } else if (
      (target.closest('.product-reviews-summary .rating-summary') ||
        target.closest('.product-reviews-summary .reviews-actions')) &&
      target.closest(`.${ID}__wrapper-class`)
    ) {
      e.preventDefault();
      const reviewSection = document.querySelector(`.pdp-reviews:not(.${ID}__mobileReviewSection)`);
      reviewSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else if (
      (target.closest('.product-reviews-summary .rating-summary') ||
        target.closest('.product-reviews-summary .reviews-actions')) &&
      target.closest(`.${ID}__mobileHeader`)
    ) {
      e.preventDefault();
      const reviewSectionForMobile = document.querySelector(`.${ID}__mobileReviewSection`);
      reviewSectionForMobile.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } else if (target.closest(`.${ID}__roomPreview video`)) {
      document.querySelector(`.${ID}__roomPreviewBtn`).click();
    } else if (target.closest(`.${ID}__reviewsForMobile`)) {
      document
        .querySelector(`.pdp-reviews:not(.${ID}__mobileReviewSection) .pdp-reviews-list button`)
        .click();

      pollerLite([() => window.reviewsArrayForMobile.length > 0], () => {
        const reviewsForMobileWrapper = document.querySelector(`.${ID}__reviewModal-wrapper`);
        window.reviewsArrayForMobile.forEach((item) => {
          reviewsForMobileWrapper.appendChild(item);
        });

        //class add in body
        document.body.classList.add(`${ID}__modalOpen`);
        reviewsForMobileWrapper.firstElementChild.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
      });
    } else if (
      target.closest(`.${ID}__reviewModal-overlay`) ||
      target.closest(`.${ID}__reviewCloseWrapper svg`)
    ) {
      document.body.classList.remove(`${ID}__modalOpen`);
    } else if (target.closest(`.${ID}__reviewsForModal`)) {
      const moreReviewButton = document.querySelector(
        `.pdp-reviews:not(.${ID}__mobileReviewSection) .pdp-reviews-list button`
      );

      moreReviewButton.click();

      setTimeout(() => {
        pollerLite([() => window.reviewsArrayForMobile.length > 0], () => {
          const reviewsForMobileWrapper = document.querySelector(`.${ID}__reviewModal-wrapper`);
          window.reviewsArrayForMobile.forEach((item) => {
            const lists = Array.from(reviewsForMobileWrapper.querySelectorAll('.pdp-review'));
            const isItem = lists?.find((list) => list === item);
            if (!isItem) {
              reviewsForMobileWrapper.appendChild(item);
            }
          });

          reviewsForMobileWrapper.lastElementChild.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
        });

        if (moreReviewButton.getAttribute('style') === 'display: none;') {
          target.closest(`.${ID}__reviewsForModal`).classList.add(`${ID}__hide`);
        }
      }, 1500);
    }
  });

  init();
  const edistoModalCloseBtn = document.querySelector('.edisto-ClosePosition--top-right');
  if (edistoModalCloseBtn) {
    edistoModalCloseBtn.click();
  }
};
