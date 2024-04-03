import setup from './services/setup';
import shared from './shared/shared';
import { observeIntersection, pollerLite } from './helpers/utils';
import { stickyElement } from './components/stickyElement';
import { upArrow } from './components/upArrow';

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

const attributeFn = (intersectionAnchor, stickyButton) => {
  if (intersectionAnchor.getAttribute('disabled') === 'disabled') {
    stickyButton.setAttribute('disabled', 'disabled');
  } else {
    stickyButton.removeAttribute('disabled', 'disabled');
  }
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

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      //console.log('🚀 ~ entries.forEach ~ entry:', entry);
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

        attributeFn(intersectionAnchor, stickyButton);
        setTimeout(prodInfoFn, 1200);
        prodInfoFn();
      } else if (entry.boundingClientRect.top < 0 || !entry.isIntersecting) {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
        attributeFn(intersectionAnchor, stickyButton);
        setTimeout(prodInfoFn, 1200);
      }
    });
  };

  observeIntersection(intersectionAnchor, 0, handleIntersection);
};

export default () => {
  setup();

  if (VARIATION === '1') {
    init();
    const inputFields = document.querySelectorAll('.custom-input');
    const values = {};

    inputFields.length > 0 &&
      inputFields.forEach((inputField, index) => {
        inputField.addEventListener('input', (e) => {
          values[index] = e.target.value.trim();

          if (values[0] && values[1]) {
            //active CTA button
            document
              .querySelector(`.${ID}__stickyATCContainer button`)
              .removeAttribute('disabled', 'disabled');
          } else {
            //inactive CTA button
            document
              .querySelector(`.${ID}__stickyATCContainer button`)
              .setAttribute('disabled', 'disabled');
          }
        });
      });
  }

  if (VARIATION === '2') {
    pollerLite(['footer.footer', () => document.readyState === 'complete'], () => {
      const intersectionAnchor = document.querySelector(
        '.product-header1_layout form[action="/cart/add"] button[type="submit"]'
      );

      if (document.querySelector(`.${ID}__upArrow`)) {
        document.querySelector(`.${ID}__upArrow`).remove();
      }
      document.body.insertAdjacentHTML('beforeend', upArrow(ID));

      window.addEventListener('scroll', () => {
        if (
          intersectionAnchor.getBoundingClientRect().top +
            intersectionAnchor.getBoundingClientRect().height <
          86
        ) {
          document.querySelector(`.${ID}__upArrow`).classList.add(`${ID}__show`);
        } else {
          document.querySelector(`.${ID}__upArrow`).classList.remove(`${ID}__show`);
        }
      });
    });
  }

  document.body.addEventListener('pointerup', (e) => {
    const { target } = e;

    if (target.closest('button') && target.closest(`.${ID}__stickyATCContainer-atc-button`)) {
      document
        .querySelector('.product-header1_layout form[action="/cart/add"] button[type="submit"]')
        .click();
    } else if (
      target.closest('form[action="/cart/add"]') &&
      document.querySelector(`.${ID}__stickyATCContainer`).classList.contains(`${ID}__show`)
    ) {
      attributeFn(
        document.querySelector(
          '.product-header1_layout form[action="/cart/add"] button[type="submit"]'
        ),
        document.querySelector(`.${ID}__stickyATCContainer button`)
      );
      setTimeout(prodInfoFn, 1200);
    } else if (target.closest(`.${ID}__upArrow`)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
};
