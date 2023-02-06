import { pollerLite } from '../../../../../../globalUtil/util';
import contactCta from './components/contactCta';
import plpCards from './components/plpCards';
import { newProductData } from './data';
import { categoryUrlConfig, getCategoryName, getNewUrl, observeDOM } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  //check which plp is loaded
  const anchorElem = document.querySelector('.fe-card-show')
    ? document.querySelector('.fe-card-show').closest('section')
    : document.querySelector('.products section:last-child');

  const controlCards = anchorElem.children;
  [...controlCards].forEach((elm) => {
    //if no configure button delete & place new button
    elm.classList.add('fe-card-show');
    const configureButton = elm.querySelector('.configButton');
    if (configureButton) return;

    //place new button to pdf here
    elm.classList.add(`${ID}__plpCard--sortlast`);
    const atcCta = elm.querySelector('.add-to-cart-icon')?.closest('div');
    if (atcCta) {
      atcCta.insertAdjacentHTML('beforebegin', contactCta(ID));
      elm.classList.add(`${ID}__block-default-links`);
      elm.querySelector(`.${ID}__contactcommercial`).classList.add(`${ID}__slide-left`);
      atcCta.classList.add(`${ID}__hide`);
    }
  });
  //console.log(controlCards);

  const pageProducts = newProductData[getCategoryName()];
  document.body.classList.add(`${ID}__${getCategoryName()}`);

  console.log(pageProducts, getCategoryName(), newProductData);

  document.querySelectorAll(`.${ID}__plpCard`).forEach((elm) => {
    elm?.remove();
    elm.querySelector('.compairElementBox')?.remove();
  });

  anchorElem.insertAdjacentHTML('beforeend', plpCards(ID, pageProducts));

  //add new buttons
};

export default () => {
  setup(); //use if needed

  //pre select 48 items per page
  //console.log(ID);

  const selecter = document.querySelector('#pageSizeSelector + .selecter');
  selecter.classList.add('open');
  selecter.classList.remove('closed');
  selecter.querySelector('.selecter-options').style.display = 'block';
  document.querySelector('#pageSizeSelector + .selecter [data-value="48"]').click();
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    //console.log(target);
    if (target.closest(`.${ID}__plpCard`) && !target.closest(`.${ID}__contactcommercial`)) {
      e.preventDefault();
      target.closest(`.${ID}__plpCard`).querySelector(`.${ID}__contactcommercial a`).click();
    } else if (
      target.closest(`.${ID}__block-default-links`) &&
      !target.closest(`.${ID}__contactcommercial`)
    ) {
      e.preventDefault();
      target
        .closest(`.${ID}__block-default-links`)
        .querySelector(`.${ID}__contactcommercial a`)
        .click();
    }
  });

  pollerLite(
    [
      '#selectedCatalog .selecter-selected',
      () =>
        document
          .querySelector('#pageSizeSelector + .selecter .selecter-selected')
          .textContent.includes('48')
    ],
    () => {
      setTimeout(init, 2000);

      const mutationCallback = (mutation) => {
        //document.querySelectorAll(`.${ID}__contactcommercial`).forEach((item) => {
        //item.remove();
        //});
        if (!mutation.target.matches('span.selecter-selected')) return;
        console.log('mutationCallback1477');
        const select = document.getElementById('categoryDropdown');
        const selectedValue = select.options[select.selectedIndex].value;
        window.location.href = getNewUrl(selectedValue, categoryUrlConfig);
      };

      observeDOM('#selectedCatalog', mutationCallback);
    }
  );
};
