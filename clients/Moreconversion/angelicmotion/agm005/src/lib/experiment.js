import setup from './services/setup';
import shared from './shared/shared';
import { discountIcon } from './assets/svgs';
import modal from './components/modal';
import { hoodiesData, zipupData } from './data/data';
import addToCart from './helpers/addToCart';
import swatchHandler from './handlers/swatchHandler';
import cardModules from './components/card';
import applyDiscountCode from './helpers/applyDiscountCode';

const { cardDetails, cardDetails2 } = cardModules;

const { ID, VARIATION } = shared;

const isHoodies = () => window.location.pathname.includes('hoodie');
const isZipup = () => window.location.pathname.includes('zipup');
const productData = isHoodies() ? hoodiesData : isZipup() ? zipupData : null;
const page = isHoodies() ? 'hoodies' : isZipup() ? 'zipup' : null;

const init = () => {
  const attachPoint = document.querySelector('.product-form__submit');
  const offerBtn = `<button class="${ID}__offerBtn" type="button">
  ${discountIcon} Buy 3 & Get 1 FREE
  </button>`;

  if (!document.querySelector(`.${ID}__offerBtn`)) {
    attachPoint.insertAdjacentHTML('afterend', offerBtn);
  }

  document.body.insertAdjacentHTML('afterbegin', modal(ID, productData, page));
};

export default () => {
  setup();

  document.addEventListener('click', async (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__offerBtn`)) {
      document.querySelector(`.${ID}__modal`).classList.add('active');
      document.querySelector(`.${ID}__modal-overlay`).classList.add('active');
    } else if (target.closest(`.${ID}__swatch`)) {
      const productCard = target.closest(`.${ID}__productCard`);
      const { pagename } = productCard.dataset;
      const data = pagename === 'hoodies' ? hoodiesData : zipupData;
      swatchHandler(ID, target, data);
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

      document.querySelector(`.${ID}__modal`).classList.remove('active');

      try {
        await products
          .reduce((promise, product) => {
            return promise.then(() => addToCart(product));
          }, Promise.resolve())
          .then(() => {
            return applyDiscountCode('Buy3Get1Free');
          });
      } catch (error) {
        console.error('Failed to add products:', error);
      }
    } else if (target.closest(`.${ID}__hoodies`)) {
      const productCardWrapper = target.closest(`.${ID}__productCardWrapper`);
      if (!productCardWrapper) return;
      const { index } = productCardWrapper.dataset;

      const cardHtml =
        VARIATION === '1'
          ? cardDetails(ID, hoodiesData[index], +index, 'hoodies')
          : cardDetails2(ID, hoodiesData[index], +index, 'hoodies');
      productCardWrapper.innerHTML = cardHtml;
    } else if (target.closest(`.${ID}__zipup`)) {
      const productCardWrapper = target.closest(`.${ID}__productCardWrapper`);
      const { index } = productCardWrapper.dataset;

      const cardHtml =
        VARIATION === '1'
          ? cardDetails(ID, zipupData[index], +index, 'zipup')
          : cardDetails2(ID, zipupData[index], +index, 'zipup');
      productCardWrapper.innerHTML = cardHtml;
    }
  });

  init();
};
