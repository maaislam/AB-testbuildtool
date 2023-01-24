import contactCta from './components/contactCta';
import plpCards from './components/plpCards';
import { newProductData } from './data';
import { getCategoryName, observeDOM } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  //check which plp is loaded
  const anchorElem =
    document.querySelector('.fe-card-show').closest('section') ||
    document.querySelector('.products section:last-child');

  const controlCards = anchorElem.children;
  [...controlCards].forEach((elm) => {
    //if no configure button delete placce new button
    const configureButton = elm.querySelector('.configButton');
    if (configureButton) return;

    //place new button to pdf here
    const atcCta = elm.querySelector('.add-to-cart-icon').closest('div');
    atcCta.insertAdjacentHTML('beforebegin', contactCta(ID));
    elm.querySelector(`.${ID}__contactcommercial`).classList.add(`${ID}__slide-left`);
    atcCta.classList.add(`${ID}__hide`);
  });
  //console.log(controlCards);

  const pageProducts = newProductData[getCategoryName()];

  console.log(pageProducts, getCategoryName(), newProductData);

  document.querySelectorAll(`.${ID}__plpCard`).forEach((elm) => {
    elm?.remove();
    elm.querySelector('.compairElementBox')?.remove();
  });

  anchorElem.insertAdjacentHTML('afterbegin', plpCards(ID, pageProducts));

  //add new buttons
};

export default () => {
  setup(); //use if needed

  console.log(ID);
  init();

  observeDOM('#selectedCatalog .selecter-selected', init, ID);
};
