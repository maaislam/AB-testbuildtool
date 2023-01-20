import plpCards from './components/plpCards';
import { newProductData } from './data';
import { getCategoryName, observeDOM } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  //check which plp is loaded
  const pageProducts = newProductData[getCategoryName()];

  const anchorElem = document.querySelector('.fe-card-show').closest('section');
  console.log(pageProducts, getCategoryName(), newProductData);

  document.querySelectorAll(`.${ID}__plpCard`).forEach((elm) => {
    elm?.remove();
    elm.querySelector('.compairElementBox')?.remove();
  });

  anchorElem.insertAdjacentHTML('afterbegin', plpCards(ID, pageProducts));
};

export default () => {
  setup(); //use if needed

  console.log(ID);
  init();

  observeDOM('#selectedCatalog .selecter-selected', init, ID);
};
