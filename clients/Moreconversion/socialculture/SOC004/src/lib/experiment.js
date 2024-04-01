import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeIntersection } from './helpers/utils';
import { stickyElement } from './components/stickyElement';

const { ID, VARIATION } = shared;

const prodInfoFn = () => {
  const imgURL = document.querySelector(
    '#productGallery .swiper-slide.swiper-slide-active img'
  ).src;
  const price = document.querySelector(
    '.product-header1_layout form[action="/cart/add"] .product-price-box .bestsellers-new-price h6'
  ).innerText;

  document.querySelector(`.${ID}__stickyATCContainer img`).src = imgURL;
  document.querySelector(`.${ID}__stickyATCContainer-info-headline p`).innerText = price;
};

const init = () => {
  const intersectionAnchor = document.querySelector(
    '.product-header1_layout form[action="/cart/add"] button[type="submit"]'
  );

  const prodImg = document.querySelector(
    '#productGallery .swiper-slide.swiper-slide-active img'
  ).src;

  const productTitle = document.querySelector(
    '.product-header1_layout form[action="/cart/add"] .product-headline h4'
  ).innerText;

  const productReviews = document
    .querySelector(
      '.product-header1_layout form[action="/cart/add"] .product-headline .product-header1_reviews-wrapper'
    )
    .cloneNode(true);

  const productPrice = document.querySelector(
    '.product-header1_layout form[action="/cart/add"] .product-price-box .bestsellers-new-price h6'
  ).innerText;

  if (document.querySelector(`.${ID}__stickyATCContainer`)) {
    document.querySelector(`.${ID}__stickyATCContainer`).remove();
  }

  document.body.insertAdjacentHTML(
    'beforeend',
    stickyElement(ID, prodImg, productTitle, productPrice, productReviews)
  );

  const attributeFn = (stickyButton) => {
    if (intersectionAnchor.getAttribute('disabled') === 'disabled') {
      stickyButton.setAttribute('disabled', 'disabled');
    } else {
      stickyButton.removeAttribute('disabled', 'disabled');
    }
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const stickySection = document.querySelector(`.${ID}__stickyATCContainer`);
      const stickyButton = document.querySelector(`.${ID}__stickyATCContainer button`);

      let scrollTimer;
      clearTimeout(scrollTimer);
      if (entry.isIntersecting) {
        stickySection.classList.remove(`${ID}__show`);
        stickySection.classList.add('slide-out-bottom');
        scrollTimer = setTimeout(() => {
          stickySection.classList.add(`${ID}__hide`);
        }, 250);

        attributeFn(stickyButton);
        prodInfoFn();
      } else {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
        attributeFn(stickyButton);
        prodInfoFn();
      }
    });
  };

  observeIntersection(intersectionAnchor, 0, handleIntersection);
};
export default () => {
  setup();
  console.log(ID);

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('button') && target.closest(`.${ID}__stickyATCContainer-atc-button`)) {
      document
        .querySelector('.product-header1_layout form[action="/cart/add"] button[type="submit"]')
        .click();
    } else if (
      target.closest('form[action="/cart/add"]') &&
      document.querySelector(`.${ID}__stickyATCContainer`).classList.contains(`${ID}__show`)
    ) {
      prodInfoFn();
    }
  });
};
