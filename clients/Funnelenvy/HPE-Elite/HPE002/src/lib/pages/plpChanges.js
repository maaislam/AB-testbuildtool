import { pollerLite } from '../../../../../../../globalUtil/util';
import contactCta from '../components/contactCta';
import plpCards from '../components/plpCards';
import { newProductData } from '../data';
import { categoryUrlConfig, getCategoryName, getNewUrl, observeDOM } from '../helpers/utils';
import setup from '../services/setup';

import shared from '../shared/shared';

const { ID } = shared;

const removeAtc = (anchorElm) => {
  const controlCards = anchorElm.children;
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
};

const init = () => {
  //check which plp is loaded
  const anchorElem = document.querySelector('.fe-card-show')
    ? document.querySelector('.fe-card-show').closest('section')
    : document.querySelector('.products section:last-child');
  //remove atc for products without config btn

  removeAtc(anchorElem);

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
  console.log(ID);

  const selecter = document.querySelector('#pageSizeSelector + .selecter');
  selecter.classList.add('open');
  selecter.classList.remove('closed');
  selecter.querySelector('.selecter-options').style.display = 'block';
  document.querySelector('#pageSizeSelector + .selecter [data-value="48"]').click();
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    console.log(target);
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
  const clearFilterBtn = document.querySelector(
    '[data-bind="click:function(){$root.parentId.clearAllFilters()}, css:{\'disabled-text\': !$root.facetCheckFlag() || !$data.isAnyFilterActive()}"]'
  );
  document.body.addEventListener('pointerup', (e) => {
    //setTimeout(init, 4000);
    const { target } = e;
    //console.log('pointerup', target);
    if (
      (target.closest('.leftside ') && !target.closest('header')) ||
      (target.closest('.selecter-item') && target.closest('.selecter-options')) ||
      target.closest('.catalogLPpagination')
    ) {
      setTimeout(() => {
        const isFilterApplied = !clearFilterBtn.classList.contains('disabled-text');
        console.log('isFilterApplied', isFilterApplied);
        if (
          isFilterApplied ||
          document.querySelector('.cat-url') ||
          target.closest('.selecter-item') ||
          target.closest('.catalogLPpagination')
        ) {
          document.documentElement.classList.add('filtered');

          const anchorElem = document.querySelector('.fe-card-show')
            ? document.querySelector('.fe-card-show').closest('section')
            : document.querySelector('.products section:last-child');
          removeAtc(anchorElem);
          const isSynergy = document.querySelector('.plp-phase__synergy');
          isSynergy &&
            document.querySelectorAll('section > .plp-phase__contactcommercial').forEach((elm) => {
              console.log(elm);
              elm.remove();
            });
          //emit custom event for filter

          const event = new CustomEvent('filterApplied');
          target.dispatchEvent(event);
        } else if (!isFilterApplied && !document.querySelector('.cat-url')) {
          window.location.reload();
        }
      }, 3000);
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
        if (!mutation.target.matches('span.selecter-selected')) {
          return;
        }
        console.log('mutationCallback1477');
        const select = document.getElementById('categoryDropdown');
        const selectedValue = select.options[select.selectedIndex].value;
        window.location.href = getNewUrl(selectedValue, categoryUrlConfig);
      };

      observeDOM('#selectedCatalog', mutationCallback);
    }
  );
};
