import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import productsWrapper from './components/productsWrapper';
import freeShippingBar from './components/freeShippingBar';

const { ID, VARIATION } = shared;

const getProductList = (listItems) => {
  //const listItems = [...document.querySelectorAll('#system_product-menu li')].slice(1);

  return listItems.map((li) => {
    const { id } = li;
    const div = li.querySelector('div');
    const text = div?.childNodes[0]?.textContent.trim() || '';
    const bgImage = div?.querySelector('span')?.style.backgroundImage || '';
    const image = bgImage.startsWith('url(') ? bgImage.slice(5, -2) : '';

    return {
      id,
      text,
      image
    };
  });
};

const init = () => {
  const targetPoint = document.querySelector('.accessories-banner');
  const accessoriesBtn = targetPoint.querySelector('#system_product-button');
  const freeShippingBarElem = targetPoint.querySelector('.accessories-free-shipping-banner');
  if (accessoriesBtn) {
    accessoriesBtn.click();
  }
  const listItems = [...document.querySelectorAll('#system_product-menu li')].slice(1);
  pollerLite([() => listItems.length > 0], () => {
    const products = getProductList(listItems);
    console.log(products, 'products');
    if (products.length > 0 && !document.querySelector(`.${ID}__productsWrapper`)) {
      targetPoint.insertAdjacentHTML('beforebegin', productsWrapper(ID, products));
    }
    accessoriesBtn.click();

    if (freeShippingBarElem && !document.querySelector(`.${ID}__banner`)) {
      targetPoint.insertAdjacentHTML('beforebegin', freeShippingBar(ID));
    }

    document.querySelector(`.${ID}__banner`)?.click();
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  document.body.addEventListener('click', (e) => {
    const targetPoint = document.querySelector('.accessories-banner');
    const accessoriesBtn = targetPoint.querySelector('#system_product-button span');
    const { target } = e;
    console.log(target, 'target');
    if (target.closest(`.${ID}__item`)) {
      const clickedItem = target.closest(`.${ID}__item`);
      const { id } = clickedItem.dataset;
      accessoriesBtn.click();
      window.clickedId = id;
    } else if (target.closest('#system_product-button') && window.clickedId) {
      console.log('enterrr');
      const controlItem = document.querySelector(`li#${window.clickedId}`);
      if (controlItem) controlItem.click();
      window.clickedId = null;
    }
  });

  init();
};
