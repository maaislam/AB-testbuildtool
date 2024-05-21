import setup from './services/setup';
import shared from './shared/shared';
import { discountIcon } from './assets/svgs';
import modal from './components/modal';
import { hoodiesData, zipupData } from './data/data';
import addToCart from './helpers/addToCart';
import swatchHandler from './handlers/swatchHandler';
import card from './components/card';

const { ID } = shared;

const isHoodies = () => window.location.pathname.includes('hoodie');
const isZipup = () => window.location.pathname.includes('zipup');
const productData = isHoodies() ? hoodiesData : isZipup() ? zipupData : null;

const init = () => {
  const attachPoint = document.querySelector('.product-form__submit');
  const offerBtn = `<button class="${ID}__offerBtn" type="button">
  ${discountIcon} Buy 3 & Get 1 FREE
  </button>`;

  if (!document.querySelector(`.${ID}__offerBtn`)) {
    attachPoint.insertAdjacentHTML('afterend', offerBtn);
  }

  document.body.insertAdjacentHTML('afterbegin', modal(ID, productData));
};

export default () => {
  setup();

  document.addEventListener('click', async (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__offerBtn`)) {
      document.querySelector(`.${ID}__modal`).classList.add('active');
    } else if (target.closest(`.${ID}__swatch`)) {
      swatchHandler(ID, target, productData);
    } else if (target.closest(`.${ID}__size`)) {
      const sizeParent = target.closest(`.${ID}__sizes`);
      const allSizes = sizeParent.querySelectorAll(`.${ID}__size`);
      const size = target.closest(`.${ID}__size`);

      allSizes.forEach((s) => s.classList.remove('active'));
      size.classList.add('active');
      sizeParent.setAttribute('data-size', size.textContent);
    } else if (target.closest(`.${ID}__modalClose`) || target.closest(`.${ID}__modal-overlay`)) {
      document.querySelector(`.${ID}__modal`).classList.remove('active');
    } else if (target.closest(`.${ID}__addToCart`)) {
      const cards = document.querySelectorAll(`.${ID}__productCard`);

      const products = [...cards].map((cardElem) => {
        const size = cardElem.querySelector(`.${ID}__size.active`);
        const { variantid } = size.dataset;

        return {
          id: variantid,
          quantity: 1
        };
      });

      try {
        await products.reduce((promise, product) => {
          return promise.then(() => addToCart(product));
        }, Promise.resolve());
      } catch (error) {
        console.error('Failed to add products:', error);
      }
    } else if (target.closest(`.${ID}__hoodies`)) {
      const productCardWrapper = target.closest(`.${ID}__productCardWrapper`);
      const { index } = productCardWrapper.dataset;

      const cardHtml = card(ID, hoodiesData[index], +index);
      productCardWrapper.innerHTML = cardHtml;
    } else if (target.closest(`.${ID}__zipup`)) {
      const productCardWrapper = target.closest(`.${ID}__productCardWrapper`);
      const { index } = productCardWrapper.dataset;

      const cardHtml = card(ID, zipupData[index], +index);
      productCardWrapper.innerHTML = cardHtml;
    }
  });

  init();
};
