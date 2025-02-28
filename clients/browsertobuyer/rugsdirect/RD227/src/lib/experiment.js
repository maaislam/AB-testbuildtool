import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import discountBanner from './components/discountBanner';
import discountProd from './components/discountProd';
import discountModal from './components/discountModal';

const { ID, VARIATION } = shared;

const init = () => {
  const exitingDiscountCodeWrapper = document.querySelector('.discount-code__wrapper');
  if (!document.querySelector(`.${ID}__discount-banner`)) {
    exitingDiscountCodeWrapper.insertAdjacentHTML('beforebegin', discountBanner(ID));
  }

  pollerLite(['.template-collection', '.productgrid--wrapper'], () => {
    const productsWrapper = document.querySelector('.productgrid--wrapper');
    const targetProduct = productsWrapper.querySelector(
      '.productgrid--item.imagestyle--no-image .tag-2'
    );
    if (!document.querySelector(`.${ID}__tag-2`)) {
      targetProduct.insertAdjacentHTML('beforebegin', discountProd(ID));
    }
  });

  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML('beforeend', discountModal(ID));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__discount-banner`) || target.closest(`.${ID}__tag-2`)) {
      const modal = document.querySelector(`.${ID}__modal`);
      if (modal) {
        modal.classList.remove(`${ID}__closing`);
        modal.classList.add(`${ID}__open`);
      }
    } else if (
      target.closest(`.${ID}__modal-close`) ||
      target.closest(`.${ID}__modal-overlay`) ||
      target.closest(`.${ID}__modal-no-thanks`) ||
      target.closest(`.${ID}__modal-no-thanks-mobile`)
    ) {
      const modal = document.querySelector(`.${ID}__modal`);
      if (modal) {
        modal.classList.remove(`${ID}__open`);
        modal.classList.add(`${ID}__closing`);
      }
    }
  });

  init(); //
};
