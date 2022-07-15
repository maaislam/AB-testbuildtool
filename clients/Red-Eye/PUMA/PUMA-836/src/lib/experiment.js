//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { ShippingDeFn, ShippingFrFn } from './component/shipping';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
  const init = () => {
    document.querySelector(`#product-section-shipping`)?.click();
    document.querySelector(`${ID}__shippingTextOne`)?.remove();
    document.querySelector(`${ID}__shippingTextTwo`)?.remove();
  };
  document.body.classList.add(`${ID}`);
  // document
  //   .querySelector(`#product-section-description`)
  //   .closest(`.product-accordion-item`)
  //   .classList.add(`${ID}__productDescription`);

  if (location.href.includes('/de/de/')) {
    document
      .querySelector(`#collapse-shipping .product-accordion-content-inner`)
      .insertAdjacentHTML('beforeend', ShippingDeFn(ID));
    setTimeout(() => {
      init();
    }, 1000);
  }

  if (location.href.includes('/fr/fr/')) {
    document
      .querySelector(`#collapse-shipping .product-accordion-content-inner`)
      .insertAdjacentHTML('beforeend', ShippingFrFn(ID));
    setTimeout(() => {
      init();
    }, 1000);
  }
};
